import React from 'react';

import { classNames, useAmauiTheme } from '@amaui/style-react';

import Button from '../Button';

import { staticClassName } from '../utils';

const Fab = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiFab?.props?.default }), [props_]);

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

        className
      ])}

      version={version}

      tonal={tonal}

      fab
    />
  );
});

export default Fab;
