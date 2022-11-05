import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

import Buttons from '../Buttons';
import { IButtons } from '../Buttons/Buttons';

import { staticClassName } from '../utils';

const useStyle = styleMethod((theme: AmauiTheme) => ({
  root: {

  },
}), { name: 'AmauiToggleButtons' });

export interface IToggleButtons extends IButtons {

}

const ToggleButtons = React.forwardRef((props_: IToggleButtons, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiToggleButtons?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,

    ...other
  } = props;

  return (
    <Buttons
      ref={ref}

      className={classNames([
        staticClassName('ToggleButtons', theme) && [
          'AmauiToggleButtons-root'
        ],

        className,
        classes.root
      ])}

      color='default'

      chip

      noCheckIcon

      {...other}
    />
  );
});

ToggleButtons.displayName = 'AmauiToggleButtons';

export default ToggleButtons;
