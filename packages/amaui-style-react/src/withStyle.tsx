import React from 'react';

import { TValue } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import { style } from '.';

const withStyle = (value: TValue, options_: IOptions = {}) => (Element: any) => {
  // Use styles
  const useStyle = style(value, options_);

  // Element
  const element = React.forwardRef((ref, props) => {
    const styles = useStyle(props);

    return (
      <Element ref={ref} style={styles} />
    );
  });

  return element;
};

export default withStyle;
