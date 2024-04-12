import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Buttons from '../Buttons';
import { IButtons } from '../Buttons/Buttons';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },
}), { name: 'amaui-ToggleButtons' });

export interface IToggleButtons extends IButtons {

}

const ToggleButtons: React.FC<IToggleButtons> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiToggleButtons?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle();

  const {
    className,

    ...other
  } = props;

  return (
    <Buttons
      ref={ref}

      className={classNames([
        staticClassName('ToggleButtons', theme) && [
          'amaui-ToggleButtons-root'
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

ToggleButtons.displayName = 'amaui-ToggleButtons';

export default ToggleButtons;
