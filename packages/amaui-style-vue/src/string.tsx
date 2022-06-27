import { style } from '.';

export default function string(values: TemplateStringsArray, ...args: any[]) {
  const method = () => values.reduce((result, item, index) => result += `${item}${args[index] || ''}`, '');

  const value = {
    a: method(),
  };

  // Use styles
  const useStyle = style(value);

  const styles = useStyle();

  return styles.value.class;
}
