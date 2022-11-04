import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import { ILine } from '../Line/Line';

import { staticClassName, TColor, TElevation, TTonal, TVersion } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    margin: '24px'
  }
}), { name: 'AmauiCardFooter' });

export interface ICardFooter extends ILine {
  tonal?: TTonal;
  color?: TColor;
  version?: TVersion;
  elevation?: TElevation;
}

const CardFooter = React.forwardRef((props_: ICardFooter, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiCardFooter?.props?.default }), [props_]);

  const {
    tonal,
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
