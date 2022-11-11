import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

import Button from '../Button';
import { IButton } from '../Button/Button';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'AmauiFab' });

export interface IFab extends IButton {

}

const Fab = React.forwardRef((props_: IFab, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiFab?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = 'secondary',
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

        className,
        classes.root
      ])}

      version={version}

      tonal={tonal}

      fab
    />
  );
});

Fab.displayName = 'AmauiFab';

export default Fab;
