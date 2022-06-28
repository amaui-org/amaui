import { isEnvironment } from '@amaui/utils';

import { AmauiStyle, makeClassName, unit, rtl, sort, valueObject, is } from '@amaui/style';

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

  public constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `<div><slot /></div>`;
  }

  public connectedCallback() {
    if (!this.isConnected) {
      this.value = this.props.value || makeAmauiStyle(this);

      if (this.props.value) this.value.element = this;

      // Init
      this.value.init();
    }
  }

  public update(updateValue) {
    if (updateValue !== undefined) {
      const valueNew = new AmauiStyle();

      Object.keys(this.value).forEach(prop => valueNew[prop] = this.value[prop]);

      is('object', updateValue) && Object.keys(updateValue).forEach(prop => valueNew[prop] = updateValue[prop]);

      this.value = valueNew;

      return valueNew;
    }
  }

}

// Register in window
if (isEnvironment('browser')) {
  if (!window.customElements.get('amaui-style')) window.customElements.define('amaui-style', AmauiStyleElement);
}
