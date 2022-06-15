import { isEnvironment } from '@amaui/utils';

import { AmauiStyle, makeClassName, unit, rtl, sort, valueObject } from '@amaui/style';

function makeAmauiStyle(element: Element) {
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

  public constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `<slot />`;
  }

  public connectedCallback() {
    if (!this.isConnected) {
      let value: AmauiStyle = (this as any).value;

      if (value === undefined || !(value instanceof AmauiStyle)) value = makeAmauiStyle(this);

      // Add value to the instance
      (this as any).value = value;
    }
  }

}

// Register in window
if (isEnvironment('browser')) {
  if (!window.customElements.get('amaui-style')) window.customElements.define('amaui-style', AmauiStyleElement);
}
