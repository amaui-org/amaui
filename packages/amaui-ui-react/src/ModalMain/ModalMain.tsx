import React from 'react';

import { classNames, style } from '@amaui/style-react';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflowY: 'auto',
    flex: '1 1 auto'
  }
}), { name: 'AmauiModalMain' });

const ModalMain = React.forwardRef((props: any, ref: any) => {
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

export default ModalMain;
