import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiWindowSplit' });

const WindowSplit = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiWindowSplit?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    orientation = 'horizontal',

    className,

    children,

    ...other
  } = props;

  const direction = orientation === 'horizontal' ? 'row' : 'column';

  return (
    <Line
      ref={ref}

      direction={direction}

      className={classNames([
        staticClassName('WindowSplit', theme) && [
          'AmauiWindowSplit-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >

    </Line>
  );
});

WindowSplit.displayName = 'AmauiWindowSplit';

export default WindowSplit;
