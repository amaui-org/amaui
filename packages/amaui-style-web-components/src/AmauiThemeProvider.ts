import { isEnvironment, merge, hash } from '@amaui/utils';

import { AmauiTheme } from '@amaui/style';

export default class AmauiThemeElement extends HTMLElement {
  public props: any = {};

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
      // Update props
      this.props.value = (this as any).value;

      // Update
      this.update();
    }
  }

  public attributeChangedCallback(name: string, previous: any, value: any) {
    if (hash(previous) !== hash(value)) {
      switch (name) {
        case 'id':
          this.update();

          break;

        default:
          break;
      }
    }
  }

  private update() {
    const { value: valueLocal } = this.props;

    const valueParent = AmauiTheme.nearest(this) || new AmauiTheme(undefined, this);

    // Make a amauiTheme
    let value = merge(valueLocal, valueParent);

    value = new AmauiTheme(value);

    // Add value to the instance
    (this as any).value = value;
  }

}

// Register in window
if (isEnvironment('browser')) {
  if (!window.customElements.get('amaui-style')) window.customElements.define('amaui-theme', AmauiThemeElement);
}
