import { classNames, TValue } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import { style } from '.';
import { IStyleResponse } from './style';

const styled = (tag: string) => (value: TValue, options_: IOptions = {}): CustomElementConstructor => {
  // Use styles
  const useStyle = style(value, options_);

  return class extends HTMLElement {
    private useStyle: IStyleResponse;

    public constructor() {
      super();

      this.attachShadow({ mode: 'open' });

      this.shadowRoot.innerHTML = `<${tag}><slot /></${tag}>`;
    }

    public connectedCallback() {
      if (!this.isConnected) {
        this.useStyle = useStyle(this);

        // Add
        const styles = this.useStyle.add();

        // Update class on root element
        const root = this.shadowRoot.children[0];

        // Update the className
        root.className = classNames([this.className, styles.class]) as string;
      }
    }

    public disconnectCallback() {
      // Remove
      this.useStyle.remove();
    }
  };
};

export default styled;
