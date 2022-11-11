import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import { ILine } from '../Line/Line';

import { staticClassName, TColor, TElevation, TTonal, TVersion } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    margin: '24px'
  }
}), { name: 'AmauiCardHeader' });

export interface ICardHeader extends ILine {
  tonal?: TTonal;
  color?: TColor;
  version?: TVersion;
  elevation?: TElevation;
}

const CardHeader = React.forwardRef((props_: ICardHeader, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiCardHeader?.props?.default }), [props_]);

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

      align='center'

      justify='center'

      className={classNames([
        staticClassName('CardHeader', theme) && [
          `AmauiCardHeader-root`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {React.cloneElement(children as any, {
        tonal: (children as any).props.tonal !== undefined ? (children as any).props.tonal : tonal,

        version: (children as any).props.version !== undefined ? (children as any).props.version : version,

        elevation: (children as any).props.elevation !== undefined ? (children as any).props.elevation : elevation,

        color: (children as any).props.color !== undefined ? (children as any).props.color : color
      })}
    </Line>
  );
});

CardHeader.displayName = 'AmauiCardHeader';

export default CardHeader;
