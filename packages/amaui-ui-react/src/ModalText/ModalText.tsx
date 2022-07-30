import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
}), { name: 'AmauiModalText' });

const ModalText = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiModalText?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,

    children,

    ...other
  } = props;

  return (
    <Type
      ref={ref}

      className={classNames([
        className,
        classes.root
      ])}

      version='b2'

      {...other}
    >
      {children}
    </Type>
  );
});

export default ModalText;
