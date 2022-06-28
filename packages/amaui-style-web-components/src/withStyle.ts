import { TValue } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import { style } from '.';

const withStyle = (value: TValue, options_: IOptions = {}) => (Element: any) => {
  // Use styles
  const useStyle = style(value, options_);

  // Element
  Element.prototype.useStyle = useStyle;

  return Element;
};

export default withStyle;
