import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.methods.space.value('rg', 'px'),
    paddingBottom: theme.methods.space.value('rg', 'px')
  }
}), { name: 'AmauiModalHeader' });

const ModalHeader = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiModalHeader?.props?.default }), [props_]);

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
        staticClassName('ModalHeader', theme) && [
          'AmauiModalHeader-root'
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

export default ModalHeader;
