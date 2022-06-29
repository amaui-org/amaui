import { TValue, classNames } from '@amaui/style';
import { IOptions } from '@amaui/style/style';
import { is } from '@amaui/utils';

import { style } from '.';
import { IStringMethod } from './string';

type TResponse = (value_: string | TValue, className_: string, options_: IOptions) => IStringMethod;

export default function (Element: HTMLElement, props?: any): TResponse {

  const className = (value_: string | TValue, className_: string = '', options: IOptions = {}) => {
    let value = value_;

    if (is('string', value_)) value = { a: value_ };

    const useStyle = style(value as TValue, options);

    const useStyleValue = useStyle(Element, props);

    // Add
    const styles = useStyleValue.add();

    return {
      value: classNames([className_, styles.class]) as string,
      methods: {
        remove: useStyleValue.remove,
        updateProps: useStyleValue.updateProps,
      }
    };
  };

  return className;
}
