import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
}), { name: 'AmauiModalTitle' });

const ModalTitle = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiModalTitle?.props?.default }), [props_]);

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
        staticClassName('ModalTitle', theme) && [
          'AmauiModalTitle-root'
        ],

        className,
        classes.root
      ])}

      version='t1'

      {...other}
    >
      {children}
    </Type>
  );
});

export default ModalTitle;
