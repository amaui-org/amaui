import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: theme.methods.space.value('md', 'px')
  }
}), { name: 'AmauiModalFooter' });

const ModalFooter = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiModalFooter?.props?.default }), [props_]);

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

export default ModalFooter;
