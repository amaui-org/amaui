import * as Vue from 'vue';

import { TValue } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import { style } from '.';

const withStyle = (Element: any) => (value: TValue, options: IOptions = {}) => {
  // Use styles
  const useStyle = style(value, options);

  // Element
  const element = Vue.defineComponent({

    setup(props: any, { slots, attrs }) {
      const attrs_ = Vue.ref(attrs);

      const styles = useStyle(attrs_);

      return () => (
        <Element
          styles={styles}

          {...attrs}
        >
          {slots.default && slots.default()}
        </Element>
      );
    }

  });

  return element;
};

export default withStyle;
