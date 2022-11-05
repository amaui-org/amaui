import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import { ILine } from '../Line/Line';

import { staticClassName, TColor, TElevation, TTonal, TVersion } from '../utils';

const useStyle = styleMethod((theme: AmauiTheme) => ({
  root: {
    margin: '24px'
  }
}), { name: 'AmauiCardMain' });

export interface ICardMain extends ILine {
  tonal?: TTonal;
  color?: TColor;
  version?: TVersion;
  elevation?: TElevation;
}

const CardMain = React.forwardRef((props_: ICardMain, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiCardMain?.props?.default }), [props_]);

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

      className={classNames([
        staticClassName('CardMain', theme) && [
          `AmauiCardMain-root`
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

CardMain.displayName = 'AmauiCardMain';

export default CardMain;
