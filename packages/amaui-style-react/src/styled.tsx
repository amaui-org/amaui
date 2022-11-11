import React from 'react';

import { classNames } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import { TValue } from './style';
import { style } from '.';

const styled = (Element: any) => (value: TValue, options: IOptions = {}): React.ElementType => {
  // Name
  options.name = options.name !== undefined ? options.name : `${Element?.displayName || Element?.type?.displayName || ''}Styled`;

  // Use styles
  const useStyle = style(value, options);

  // Element
  const element = React.forwardRef((props: any, ref) => {
    const {
      children,
      className: classNameProp,
      ...other
    } = props;

    const styles = useStyle(props);

    return (
      <Element
        ref={ref}

        className={classNames([classNameProp, styles.class])}

        {...other}
      >
        {children}
      </Element>
    );
  });

  return element;
};

export default styled;
