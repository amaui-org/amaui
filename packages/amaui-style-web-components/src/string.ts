import { style } from '.';

interface IMethod {
  value: string;
  methods: {
    remove?: () => void;
    updateProps?: (props: any) => void;
  };
}

type TResponse = (values: Array<string>, ...args: any[]) => IMethod;

export default function (Element: Element, props?: any): TResponse {

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
      methods: {
        remove: useStyleValue.remove,
        updateProps: useStyleValue.updateProps,
      }
    };
  };

  return method;
}
