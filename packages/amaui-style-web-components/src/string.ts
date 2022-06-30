import { style } from '.';

export interface IStringMethod {
  value: string;
  remove?: () => void;
  updateProps?: (props: any) => void;
}

type TResponse = (values: Array<string>, ...args: any[]) => IStringMethod;

export default function (Element: HTMLElement, props?: any): TResponse {

  const method = (values: Array<string>, ...args: any[]) => {
    const method_ = () => values.reduce((result, item, index) => result += `${item}${args[index] || ''}`, '');

    const value = {
      a: method_(),
    };

    const useStyle = style(value);

    const useStyleValue = useStyle(Element, props);

    // Add
    const styles = useStyleValue.add();

    return {
      value: styles.class,
      remove: useStyleValue.remove
    };
  };

  return method;
}
