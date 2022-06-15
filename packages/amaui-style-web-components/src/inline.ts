import { merge } from '@amaui/utils';

import { AmauiStyle, AmauiTheme, inline as amauiInlineMethod, TValue } from '@amaui/style';
import { IOptions } from '@amaui/style/inline';

export default function (Element: Element) {
  const amauiStyle = AmauiStyle.nearest(Element);
  const amauiTheme = AmauiTheme.nearest(Element);

  const useInline = (value_: TValue, options_: IOptions = {}) => {
    const inline = () => {
      const options = merge(options_, { amaui_style: { value: amauiStyle }, amaui_theme: { value: amauiTheme } }, { copy: true });

      return amauiInlineMethod(value_, options);
    };

    return {
      inline
    }
  };

  return useInline;
}
