import { TValue, classNames } from '@amaui/style';
import { IOptions } from '@amaui/style/style';
import { is } from '@amaui/utils';

import { style } from '.';

interface IMethod {
  value: string;
  methods: {
    remove?: () => void;
    updateProps?: (props: any) => void;
  };
}

type TResponse = (value_: string | TValue, className_: string, props: any, options_: IOptions) => IMethod;

export default function (Element: Element, props?: any): TResponse {

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
