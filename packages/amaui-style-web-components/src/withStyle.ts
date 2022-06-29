import { TValue } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import { style } from '.';

const withStyle = (Element: any) => (value: TValue, options: IOptions = {}) => {
  // Use styles
  const useStyle = style(value, options);

  // Element
  if (Element?.prototype) Element.prototype.useStyle = useStyle;

  return Element;
};

export default withStyle;
