import merge from '@amaui/utils/merge';
import { inline as amauiInlineMethod, TValue } from '@amaui/style';

import { IOptions } from '@amaui/style/inline';
import { useAmauiStyle } from './AmauiStyleProvider';
import { useAmauiTheme } from './AmauiThemeProvider';

export default function (Element: HTMLElement) {
  return (value_: TValue, props?: any, options_: IOptions = { response: 'css' }) => {
    const amauiStyle = useAmauiStyle(Element);
    const amauiTheme = useAmauiTheme(Element);

    const options = merge(options_, { amaui_style: { value: amauiStyle }, amaui_theme: { value: amauiTheme } }, { copy: true });

    // Options response value
    options.response = 'css';

    return amauiInlineMethod(value_, props, options);
  };
}
