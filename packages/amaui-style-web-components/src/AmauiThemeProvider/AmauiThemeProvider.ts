import { isEnvironment, merge, hash, copy } from '@amaui/utils';

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

  public constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `<slot />`;
  }

  public connectedCallback() {
    if (!this.isConnected) {
      this.init();
    }
  }

  public attributeChangedCallback(name: string, previous: any, value: any) {
    if (hash(previous) !== hash(value)) {
      switch (name) {
        case 'id':
          this.init();

          break;

        default:
          break;
      }
    }
  }

  public update(updateValue: any) {
    if (updateValue !== undefined) {
      // Update
      this.value.update(updateValue);

      return this.value;
    }
  }

  private init() {
    const { value: valueLocal } = this.props;

    const valueParent = useAmauiTheme(this);

    // Make a amauiTheme
    const value = merge(copy(resolveValue({ ...valueLocal })), copy(resolveValue({ ...valueParent })), { copy: true });

    this.value = new AmauiTheme(value);
  }

}

// Register in window
if (isEnvironment('browser')) {
  if (!window.customElements.get('amaui-style')) window.customElements.define('amaui-theme', AmauiThemeElement);
}
