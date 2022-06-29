import { isEnvironment, merge, copy, parse } from '@amaui/utils';

import { AmauiTheme } from '@amaui/style';
import useAmauiTheme from './useAmauiTheme';

const resolveValue = (value: any) => {
  const toFilterOut = ['id', 'element'];

  const valueNew = {};

  Object.keys(value).filter(item => toFilterOut.indexOf(item) === -1).forEach(item => valueNew[item] = value[item]);

  return valueNew;
};

export default class AmauiThemeElement extends HTMLElement {
  private value_: AmauiTheme;
  public amaui_theme: AmauiTheme;
  public props: any = {};

  public get value() {
    return this.value_;
  }

  public set value(value: AmauiTheme) {
    this.value_ = value;
    this.amaui_theme = value;
  }

  public static get observedAttributes() {
    return ['id'];
  }

  public connectedCallback() {
    this.update(undefined, false);
  }

  public update(value_?: any, rerender = true) {
    const valueLocal = value_ || parse(this.getAttribute('value'));

    const valueParent = useAmauiTheme(this);

    // Make a amauiTheme
    const value = merge(copy(resolveValue({ ...valueLocal })), copy(resolveValue({ ...valueParent })), { copy: true });

    this.value.update(value);

    if (rerender) this.rerender();

    return this.value;
  }

  public rerender() {
    this.replaceChildren(...this.children);
  }
}

// Register in window
if (isEnvironment('browser')) {
  if (!window.customElements.get('amaui-style')) window.customElements.define('amaui-theme', AmauiThemeElement);
}
