import React from 'react';

import { is, numberWithCommas } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import AdvancedTextField from '../AdvancedTextField';
import Icon from '../Icon';

import { staticClassName } from '../utils';
import IconButton from '../IconButton';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiNumericTextField' });

const IconMaterialKeyboardArrowUpRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowUpRounded'
      short_name='KeyboardArrowUp'

      {...props}
    >
      <path d="M6.7 14.7Q6.425 14.425 6.425 14Q6.425 13.575 6.7 13.3L11.3 8.7Q11.45 8.55 11.625 8.487Q11.8 8.425 12 8.425Q12.2 8.425 12.388 8.5Q12.575 8.575 12.7 8.7L17.3 13.3Q17.575 13.575 17.575 14Q17.575 14.425 17.3 14.7Q17.025 14.975 16.6 14.975Q16.175 14.975 15.9 14.7L12 10.8L8.1 14.7Q7.825 14.975 7.4 14.975Q6.975 14.975 6.7 14.7Z" />
    </Icon>
  );
});

const IconMaterialKeyboardArrowDownRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardArrowDownRounded'
      short_name='KeyboardArrowDown'

      {...props}
    >
      <path d="M12 14.975Q11.8 14.975 11.613 14.9Q11.425 14.825 11.3 14.7L6.7 10.1Q6.425 9.825 6.425 9.4Q6.425 8.975 6.7 8.7Q6.975 8.425 7.4 8.425Q7.825 8.425 8.1 8.7L12 12.6L15.9 8.7Q16.175 8.425 16.6 8.425Q17.025 8.425 17.3 8.7Q17.575 8.975 17.575 9.4Q17.575 9.825 17.3 10.1L12.7 14.7Q12.55 14.85 12.375 14.912Q12.2 14.975 12 14.975Z" />
    </Icon>
  );
});

const NumericTextField = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiNumericTextField?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    valueDefault,
    value: value_,

    onChange: onChange_,

    increment = true,
    decrement = true,

    incrementValue = 1,
    decrementValue = 1,

    IconIncrement = IconMaterialKeyboardArrowUpRounded,
    IconDecrement = IconMaterialKeyboardArrowDownRounded,

    IconButtonProps,

    className,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    if (init) {
      if (value_ !== value) setValue(value_);
    }
  }, [value_]);

  const onChange = (valueNew: any) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange_)) onChange_(valueNew);
  };

  const onIncrement = () => {
    let valueNew: any = value || '0';

    if (props.prefix !== undefined) valueNew = valueNew.replace(props.prefix, '');

    if (props.thousand) valueNew = valueNew.replace(new RegExp(`\\${props.thousandSeparator || ','}`, 'g'), '');

    valueNew = +valueNew + incrementValue;

    if (props.thousand) valueNew = numberWithCommas(valueNew);

    if (props.prefix !== undefined) valueNew = `${props.prefix}${valueNew}`;

    // Update
    setValue(valueNew);
  };

  const onDecrement = () => {
    let valueNew: any = value || '0';

    if (props.prefix !== undefined) valueNew = valueNew.replace(props.prefix, '');

    if (props.thousand) valueNew = valueNew.replace(new RegExp(`\\${props.thousandSeparator || ','}`, 'g'), '');

    valueNew = +valueNew - decrementValue;

    if (props.thousand) valueNew = numberWithCommas(valueNew);

    if (props.prefix !== undefined) valueNew = `${props.prefix}${valueNew}`;

    // Update
    setValue(valueNew);
  };

  const end = [];

  const iconButtonProps = {
    size: 24,
    fontSize: 24
  };

  if (decrement) end.push(
    <IconButton
      onClick={onDecrement}

      {...iconButtonProps}

      {...IconButtonProps}
    >
      <IconDecrement />
    </IconButton>
  );

  if (increment) end.push(
    <IconButton
      onClick={onIncrement}

      {...iconButtonProps}

      {...IconButtonProps}
    >
      <IconIncrement />
    </IconButton>
  );

  return (
    <AdvancedTextField
      ref={ref}

      value={value}

      onChange={onChange}

      validate={(valueNew_: any) => {
        if (valueNew_.startsWith(' ') || valueNew_.endsWith(' ')) return;

        if (valueNew_ === '+' || valueNew_ === '-') return true;

        let valueNew = valueNew_;

        if (props.prefix !== undefined) valueNew = valueNew_.replace(props.prefix, '');

        if (props.thousand) valueNew = valueNew.replace(new RegExp(`\\${props.thousandSeparator || ','}`, 'g'), '');

        valueNew = +valueNew;

        return is('number', valueNew) && valueNew >= Number.MIN_SAFE_INTEGER && valueNew <= Number.MAX_SAFE_INTEGER;
      }}

      end={end}

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
