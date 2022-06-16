import { classNames, TValue } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import { style } from '.';

const DefaultElement = {
  props: ['element', 'value', 'options', 'class'],
  setup(props: any) {
    const { element = 'span', value, options: options_, class: classProp } = props;

    // Use styles
    const useStyle = style(value, options_);

    const values = useStyle(props);

    return {
      element,
      className: classNames([classProp, values.class]),
    };
  },
  render() {
    return (
      <component
        is={this.element}

        class={this.className}
      >
        <slot />
      </component>
    );
  }
};

const styled = (element: any) => (value: TValue, options: IOptions = {}) => ({
  extends: DefaultElement,
  props: {
    element: {
      default: element,
    },
    value: {
      default: value,
    },
    options: {
      default: options,
    }
  }
});

export default styled;
