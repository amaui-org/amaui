import React from 'react';

import { classNames, style } from '@amaui/style-react';

import Interaction from '../Interaction';

const useStyle = style(theme => ({
  root: {
    position: 'relative'
  },
  text: {

  }
}));

// To do
// In focus Interaction focus

const Button = React.forwardRef((props: any, ref) => {
  const { classes } = useStyle(props);

  const {
    className,
    Component = 'button',
    children
  } = props;

  return (
    <Component
      ref={ref}

      className={classNames([classes.root, className])}
    >
      <Interaction />

      <span
        className={classes.text}
      >
        {children}
      </span>
    </Component>
  );
});

export default Button;
