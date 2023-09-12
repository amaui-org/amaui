import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import { ILine } from '../Line/Line';

import { staticClassName, TColor, TElevation, TTonal, TVersion } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    padding: '24px'
  }
}), { name: 'amaui-CardFooter' });

export interface ICardFooter extends ILine {
  tonal?: TTonal;
  color?: TColor;
  version?: TVersion;
  elevation?: TElevation;
}

const CardFooter = React.forwardRef((props_: ICardFooter, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiCardFooter?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color,
    version,
    elevation,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  return (
    <Line
      ref={ref}

      gap={1}

      direction='row'

      wrap='wrap'

      align='center'

      justify='flex-end'

      fullWidth

      Component={Component}

      className={classNames([
        staticClassName('CardFooter', theme) && [
          `amaui-CardFooter-root`
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

CardFooter.displayName = 'amaui-CardFooter';

export default CardFooter;
