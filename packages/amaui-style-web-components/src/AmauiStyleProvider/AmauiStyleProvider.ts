import { isEnvironment } from '@amaui/utils';

import { AmauiStyle, makeClassName, unit, rtl, sort, valueObject } from '@amaui/style';

// Fix for testing ssr
if (isEnvironment('nodejs')) (global as any).HTMLElement = class HTMLElement { };

function makeAmauiStyle(element?: Element) {
  const amauiStyle = new AmauiStyle(element);

  // Add all the plugins
  amauiStyle.plugins.add = [
    makeClassName,
    unit,
    rtl,
    sort,
    valueObject
  ];

  return amauiStyle;
}

export default class AmauiStyleElement extends HTMLElement {
  private value_: AmauiStyle;
  public amaui_style: AmauiStyle;
  public props: any = {};

  public get value() {
    return this.value_;
  }

  public set value(value: AmauiStyle) {
    this.value_ = value;
    this.amaui_style = value;
  }

  public connectedCallback() {
    // protoValue is for testing mostly
    this.value = (this as any).protoValue || this.props.value || makeAmauiStyle(this);

    if ((this as any).protoValue || this.props.value) this.value.element = this;

    // Init
    this.value.init();
  }

  public update(updateValue) {
    if (updateValue !== undefined) {
      const valueNew = new AmauiStyle();

      Object.keys(this.value).forEach(prop => valueNew[prop] = this.value[prop]);

      Object.keys(updateValue).forEach(prop => valueNew[prop] = updateValue[prop]);

      this.value = valueNew;

      this.value.element = this;

      this.value.init();

      // Update method
      if ((this.value as any).update === undefined) (this.value as any).update = this.update.bind(this);

      this.rerender();

      return valueNew;
    }
  }

  public rerender() {
    this.replaceChildren(...this.children);
  }
}

// Register in window
if (isEnvironment('browser')) {
  if (!window.customElements.get('amaui-style')) window.customElements.define('amaui-style', AmauiStyleElement);
}
