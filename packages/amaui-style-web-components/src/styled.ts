import { classNames, IResponse, TValue } from '@amaui/style';
import { IOptions } from '@amaui/style/style';
import { isEnvironment } from '@amaui/utils';

import { style } from '.';
import { IStyleResponse } from './style';
import { getAttributeValues } from './utils';

const styled = (tag: string, name: string, attributes: Array<string> = []) => (value: TValue, options: IOptions = {}): CustomElementConstructor => {
  // Use styles
  const useStyle = style(value, options);

  class StyledElement extends HTMLElement {
    public props: any;
    private useStyle: IStyleResponse;
    private styles: IResponse;

    static get observedAttributes() { return attributes; }

    public constructor() {
      super();

      this.attachShadow({ mode: 'open' });

      this.shadowRoot.innerHTML = `<${tag}><slot /></${tag}>`;
    }

    public connectedCallback() {
      // On mount as useStyle needs element in the DOM
      // to use useAmauiTheme and useAmauiStyle
      this.useStyle = useStyle(this, this.props || getAttributeValues(this));

      // Add
      this.styles = this.useStyle.add();

      // Update the root className
      this.className = classNames([this.className, this.styles.class]);
    }

    public attributeChangedCallback() {
      // Update props
      this.useStyle?.updateProps(this.props || getAttributeValues(this));
    }

    public disconnectedCallback() {
      // Remove
      this.useStyle.remove();
    }
  }

  // Register in window
  if (isEnvironment('browser')) {
    if (!window.customElements.get(name)) window.customElements.define(name, StyledElement);
  }

  return StyledElement;
};

export default styled;
