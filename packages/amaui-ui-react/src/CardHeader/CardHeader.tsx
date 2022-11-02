import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    margin: '24px'
  }
}), { name: 'AmauiCardHeader' });

const CardHeader = React.forwardRef((props_: any, ref: any) => {
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
      {React.cloneElement(children, {
        tonal: children.props.tonal !== undefined ? children.props.tonal : tonal,

        version: children.props.version !== undefined ? children.props.version : version,

        elevation: children.props.elevation !== undefined ? children.props.elevation : elevation,

        color: children.props.color !== undefined ? children.props.color : color
      })}
    </Line>
  );
});

CardHeader.displayName = 'AmauiCardHeader';

export default CardHeader;
