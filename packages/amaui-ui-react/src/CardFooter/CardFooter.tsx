import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    margin: '16px'
  }
}), { name: 'AmauiCardFooter' });

const CardFooter = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiCardFooter?.props?.default }), [props_]);

  const {
    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  return (
    <Line
      ref={ref}

      Component={Component}

      direction='row'

      wrap='wrap'

      align='center'

      justify='flex-end'

      gap={1}

      className={classNames([
        staticClassName('CardFooter', theme) && [
          `AmauiCardFooter-root`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {children}
    </Line>
  );
});

CardFooter.displayName = 'AmauiCardFooter';

export default CardFooter;
