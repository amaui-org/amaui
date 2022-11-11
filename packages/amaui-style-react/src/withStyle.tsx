import React from 'react';

import { IOptions } from '@amaui/style/style';

import { TValue } from './style';
import { style } from '.';

const withStyle = (Element: any) => (value: TValue, options: IOptions = {}): React.ElementType => {
  // Name
  options.name = options.name !== undefined ? options.name : `${Element?.displayName || Element?.type?.displayName || ''}WithStyle`;

  // Use styles
  const useStyle = style(value, options);

  // Element
  const element = React.forwardRef((props: any, ref) => {
    const styles = useStyle(props);

    return (
      <Element ref={ref} styles={styles} {...props} />
    );
  });

  return element;
};

export default withStyle;
