import * as Vue from 'vue';

import { classNames, TValue } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import { style } from '.';

const styled = (Element: any) => (value: TValue, options: IOptions = {}) => {
  // Use styles
  const useStyle = style(value, options);

  // Element
  const element = Vue.defineComponent({
    props: ['ref', 'class'],

    setup(props: any, { slots, attrs }) {
      const attrs_ = Vue.ref(attrs);

      const { ref, class: classProp } = props;

      const styles = useStyle(attrs_);

      return () => (
        <Element
          ref={ref}

          class={classNames([classProp, styles.value.class])}
        >
          {slots.default && slots.default()}
        </Element>
      );
    }
  });

  return element;
};

export default styled;
