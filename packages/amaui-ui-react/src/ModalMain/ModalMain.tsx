import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflowY: 'auto',
    flex: '1 1 auto'
  }
}), { name: 'AmauiModalMain' });

const ModalMain = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiModalMain?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,
    style = {},

    children,

    ...other
  } = props;

  const styles: any = {
    root: {}
  };

  if (React.Children.toArray(children).length > 1) styles.root.alignItems = 'center';

  return (
    <div
      ref={ref}

      className={classNames([
        staticClassName('ModalMain', theme) && [
          'AmauiModalMain-root'
        ],

        className,
        classes.root
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      {children}
    </div>
  );
});

export default ModalMain;
