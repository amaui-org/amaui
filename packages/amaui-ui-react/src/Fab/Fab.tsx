import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {},
}), { name: 'AmauiFab' });

const Fab = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiFab?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    version = 'filled',

    className
  } = props;

  return (
    <Button
      ref={ref}

      {...props}

      className={classNames([
        staticClassName('Fab', theme) && [
          'AmauiFab-root'
        ],

        classes.root,
        className
      ])}

      version={version}

      tonal={tonal}

      fab
    />
  );
});

Fab.displayName = 'AmauiFab';

export default Fab;
