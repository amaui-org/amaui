import React from 'react';

import { classNames, TValue } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import { style } from '.';

const styled = (Element: any) => (value: TValue, options_: IOptions = {}) => {
  // Use styles
  const useStyle = style(value, options_);

  // Element
  const element = React.forwardRef((ref, props: any) => {
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
