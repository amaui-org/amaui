import React from 'react';

import { is, clamp, numberWithCommas, isEnvironment } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import AdvancedTextFieldElement from '../AdvancedTextField';
import IconButtonElement from '../IconButton';
import IconElement from '../Icon';
import { IAdvancedTextField } from '../AdvancedTextField/AdvancedTextField';
import { staticClassName } from '../utils';
import { IElementReference, IPropsAny } from '../types';

const IconMaterialKeyboardArrowUpRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='KeyboardArrowUpRounded'
      short_name='KeyboardArrowUp'

      {...props}
    >
      <path d="M6.7 14.7Q6.425 14.425 6.425 14Q6.425 13.575 6.7 13.3L11.3 8.7Q11.45 8.55 11.625 8.487Q11.8 8.425 12 8.425Q12.2 8.425 12.388 8.5Q12.575 8.575 12.7 8.7L17.3 13.3Q17.575 13.575 17.575 14Q17.575 14.425 17.3 14.7Q17.025 14.975 16.6 14.975Q16.175 14.975 15.9 14.7L12 10.8L8.1 14.7Q7.825 14.975 7.4 14.975Q6.975 14.975 6.7 14.7Z" />
    </IconElement>
  );
});

const IconMaterialKeyboardArrowDownRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='KeyboardArrowDownRounded'
      short_name='KeyboardArrowDown'

      {...props}
    >
      <path d="M12 14.975Q11.8 14.975 11.613 14.9Q11.425 14.825 11.3 14.7L6.7 10.1Q6.425 9.825 6.425 9.4Q6.425 8.975 6.7 8.7Q6.975 8.425 7.4 8.425Q7.825 8.425 8.1 8.7L12 12.6L15.9 8.7Q16.175 8.425 16.6 8.425Q17.025 8.425 17.3 8.7Q17.575 8.975 17.575 9.4Q17.575 9.825 17.3 10.1L12.7 14.7Q12.55 14.85 12.375 14.912Q12.2 14.975 12 14.975Z" />
    </IconElement>
  );
});

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-NumericTextField' });

export interface INumericTextField extends IAdvancedTextField {
  min?: number;
  max?: number;

  increment?: boolean;
  decrement?: boolean;

  incrementValue?: number;
  decrementValue?: number;

  IconIncrement?: IElementReference;
  IconDecrement?: IElementReference;

  IconButtonProps?: IPropsAny;
}

const NumericTextField: React.FC<INumericTextField> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiNumericTextField?.props?.default, ...props_ }), [props_]);

  const AdvancedTextField = React.useMemo(() => theme?.elements?.AdvancedTextField || AdvancedTextFieldElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const {
    valueDefault,
    value: value_,

    onChange: onChange_,

    version = 'outlined',
    size = 'regular',

    min,
    max,

    increment = true,
    decrement = true,

    incrementValue = 1,
    decrementValue = 1,

    onFocus: onFocus_,
    onBlur: onBlur_,

    IconIncrement = IconMaterialKeyboardArrowUpRounded,
    IconDecrement = IconMaterialKeyboardArrowDownRounded,

    IconButtonProps,
    IconProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [init, setInit] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  const refs = {
    root: React.useRef<any>(),
    value: React.useRef<any>(),
    focus: React.useRef<any>(),
    min: React.useRef<any>(),
    max: React.useRef<any>()
  };

  refs.value.current = value;

  refs.focus.current = focus;

  refs.min.current = min;

  refs.max.current = max;

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    const method = (event: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'End', 'Home'].includes(event.key)) {
        event.preventDefault();
      }

      switch (event.key) {
        case 'End':
          if (refs.focus.current && refs.min.current !== undefined) {
            let valueNew = refs.min.current;

            if (props.thousand) valueNew = numberWithCommas(valueNew);

            if (props.prefix !== undefined) valueNew = `${props.prefix}${valueNew}`;

            onChange(valueNew);
          }

          return;

        case 'Home':
          if (refs.focus.current && refs.max.current !== undefined) {
            let valueNew = refs.max.current;

            if (props.thousand) valueNew = numberWithCommas(valueNew);

            if (props.prefix !== undefined) valueNew = `${props.prefix}${valueNew}`;

            onChange(valueNew);
          }

          return;

        case 'ArrowUp':
          if (refs.focus.current) onIncrement();

          return;

        case 'ArrowDown':
          if (refs.focus.current) onDecrement();

          return;

        default:
          break;
      }
    };

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('keydown', method);

    return () => {
      // Clean up
      rootDocument.removeEventListener('keydown', method);
    };
  }, []);

  React.useEffect(() => {
    if (init) {
      if (value_ !== value) setValue(value_);
    }
  }, [value_]);

  const onFocus = React.useCallback((event: React.FocusEvent<any>) => {
    setFocus(true);

    if (is('function', onFocus_)) onFocus_(event);
  }, []);

  const onBlur = React.useCallback((event: React.FocusEvent<any>) => {
    setFocus(false);

    if (is('function', onBlur_)) onBlur_(event);
  }, []);

  const onChange = (valueNew_: any) => {
    let valueNew: any = valueNew_;

    const min_ = min !== undefined ? min : Number.MIN_SAFE_INTEGER;

    const max_ = max !== undefined ? max : Number.MAX_SAFE_INTEGER;

    if (['', ' ', props.prefix, `${props.prefix} `, undefined].includes(valueNew)) valueNew = '';

    if (!['', ' ', '+', '-', 'e', 'e+', 'e-', `${props.prefix}+`, `${props.prefix}-`, undefined].includes(valueNew)) {
      if (props.prefix !== undefined) valueNew = valueNew.replace(props.prefix, '');

      if (props.thousand) valueNew = valueNew.replace(new RegExp(`\\${props.thousandSeparator || ','}`, 'g'), '');

      valueNew = clamp(+valueNew, min_, max_);

      if (props.thousand) valueNew = numberWithCommas(valueNew);

      if (props.prefix !== undefined) valueNew = `${props.prefix}${valueNew}`;
    }

    if (
      ['+', '-', 'e', 'e+', 'e-'].includes(valueNew_) ||
      ((String(valueNew_).startsWith('-0') || String(valueNew_).includes('.')) && clamp(+valueNew_, min_, max_) === +valueNew_)
    ) valueNew = valueNew_;

    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange_)) onChange_(valueNew);
  };

  const onIncrement = () => {
    let valueNew: any = refs.value.current || '0';

    if (props.prefix !== undefined) valueNew = valueNew.replace(props.prefix, '');

    if (props.thousand) valueNew = valueNew.replace(new RegExp(`\\${props.thousandSeparator || ','}`, 'g'), '');

    const min_ = min !== undefined ? min : Number.MIN_SAFE_INTEGER;

    const max_ = max !== undefined ? max : Number.MAX_SAFE_INTEGER;

    valueNew = clamp(+valueNew + incrementValue, min_, max_);

    if (props.thousand) valueNew = numberWithCommas(valueNew);

    if (props.prefix !== undefined) valueNew = `${props.prefix}${valueNew}`;

    // Update
    onChange(valueNew);
  };

  const onDecrement = () => {
    let valueNew: any = refs.value.current || '0';

    if (props.prefix !== undefined) valueNew = valueNew.replace(props.prefix, '');

    if (props.thousand) valueNew = valueNew.replace(new RegExp(`\\${props.thousandSeparator || ','}`, 'g'), '');

    const min_ = min !== undefined ? min : Number.MIN_SAFE_INTEGER;

    const max_ = max !== undefined ? max : Number.MAX_SAFE_INTEGER;

    valueNew = clamp(+valueNew - decrementValue, min_, max_);

    if (props.thousand) valueNew = numberWithCommas(valueNew);

    if (props.prefix !== undefined) valueNew = `${props.prefix}${valueNew}`;

    // Update
    onChange(valueNew);
  };

  const end = [];

  const iconButtonProps = {
    size: 24,
    fontSize: '1.5rem'
  };

  if (decrement) end.push(
    <IconButton
      onClick={onDecrement}

      {...iconButtonProps}

      {...IconButtonProps}
    >
      <IconDecrement {...IconProps} />
    </IconButton>
  );

  if (increment) end.push(
    <IconButton
      onClick={onIncrement}

      {...iconButtonProps}

      {...IconButtonProps}
    >
      <IconIncrement {...IconProps} />
    </IconButton>
  );

  return (
    <AdvancedTextField
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      value={value}

      onFocus={onFocus}

      onBlur={onBlur}

      onChange={onChange}

      version={version}

      size={size}

      validate={(valueNew_: any) => {
        if (valueNew_.startsWith(' ') || valueNew_.endsWith(' ')) return;

        if (['', ' ', '+', '-', 'e', 'e+', 'e-', '-0', '-0.', props.prefix, `${props.prefix} `, `${props.prefix}+`, `${props.prefix}-`, undefined].includes(valueNew_)) return true;

        let valueNew = valueNew_;

        if (props.prefix !== undefined) valueNew = valueNew_.replace(props.prefix, '');

        if (props.thousand) valueNew = valueNew.replace(new RegExp(`\\${props.thousandSeparator || ','}`, 'g'), '');

        valueNew = +valueNew;

        return is('number', valueNew);
      }}

      end={end}

      endVerticalAlign='center'

      className={classNames([
        staticClassName('NumericTextField', theme) && [
          'amaui-NumericTextField-root',
          `amaui-NumericTextField-version-${version}`,
          `amaui-NumericTextField-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

NumericTextField.displayName = 'amaui-NumericTextField';

export default NumericTextField;
