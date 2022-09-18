import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import AdvancedTextField from '../AdvancedTextField';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiNumericTextField' });

// To do

// min
// max

// arrow up, and down increment and decrement, by default the value 1 y
// arrow up, arrow down optional both, by default true (validate both)
// arrows disabled if up >= max, and down <= min if (max, min aren't undefined)

// thousand

const NumericTextField = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiNumericTextField?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    className,

    ...other
  } = props;

  return (
    <AdvancedTextField
      ref={ref}

      className={classNames([
        staticClassName('NumericTextField', theme) && [
          'AmauiNumericTextField-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

NumericTextField.displayName = 'AmauiNumericTextField';

export default NumericTextField;
