import { forwardRef } from 'react';

import { TValue } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import { style } from '.';

const withStyle = (value: TValue, options_: IOptions = {}) => (Element: any) => {
  // Use styles
  const useStyle = style(value, options_);

  // Element
  const element = forwardRef((ref, props) => {
    const value = useStyle(props);

    return (
      <Element ref={ref} style={value} />
    );
  });

  return element;
}

export default withStyle;
