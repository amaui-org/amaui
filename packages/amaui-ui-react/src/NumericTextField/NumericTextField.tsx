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

// arrow up, and down increment and decrement, by default the value 1 y
// arrow up, arrow down optional both, by default true (validate both)

const NumericTextField = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiNumericTextField?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    increment = true,
    decrement = true,

    incrementValue = 1,
    decrementValue = 1,

    IconIncrement,
    IconDecrement,

    IconButtonProps,

    className,

    ...other
  } = props;

  return (
    <AdvancedTextField
      ref={ref}

      validate={(valueNew_: any) => {
        if (valueNew_.startsWith(' ') || valueNew_.endsWith(' ')) return;

        if (valueNew_ === '+' || valueNew_ === '-') return true;

        let valueNew = valueNew_;

        if (props.prefix !== undefined) valueNew = valueNew_.replace(props.prefix, '');

        if (props.thousand) valueNew = valueNew.replace(new RegExp(`\\${props.thousandSeparator || ','}`, 'g'), '');

        valueNew = +valueNew;

        return is('number', valueNew) && valueNew >= Number.MIN_SAFE_INTEGER && valueNew <= Number.MAX_SAFE_INTEGER;
      }}

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
