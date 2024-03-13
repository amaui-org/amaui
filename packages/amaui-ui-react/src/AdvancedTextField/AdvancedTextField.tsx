import React from 'react';

import { is, numberWithCommas, Try } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import TextField from '../TextField';
import { ITextField } from '../TextField/TextField';
import { staticClassName } from '../utils';
import { IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-AdvancedTextField' });

export interface IAdvancedTextField extends ITextField {
  validate?: (value: string) => boolean;

  mask?: Array<any>;

  maskProactive?: boolean;

  thousand?: boolean;

  thousandSeparator?: ',' | '.';

  TextFieldProps?: IPropsAny;
}

const AdvancedTextField: React.FC<IAdvancedTextField> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiAdvancedTextField?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    valueDefault,
    value: value_,

    validate,

    prefix,

    mask,

    maskProactive = true,

    thousand,
    thousandSeparator = ',',

    onChange: onChange_,

    TextFieldProps,

    className,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  const refs = {
    root: React.useRef<any>()
  };

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    if (init) {
      if (value_ !== value) setValue(value_);
    }
  }, [value_]);

  const maskConstsFromIndex = (index: number) => {
    const values = [];

    for (const item of mask.slice(index)) {
      if (!is('simple', item)) break;

      values.push(item);
    }

    return values;
  };

  const onChange = (value__: any) => {
    let valueNew = value__;

    // validate
    if (!(mask || thousand) && is('function', validate)) {
      try {
        if (!validate(valueNew)) return;
      }
      catch (error) { return; }
    }

    // thousand
    // clean value from prefix and thousand separator
    // make value into value with thousand separators
    // make valueNew with prefix + valueNew
    if (!['', ' ', '+', '-', prefix, `${prefix} `, `${prefix} `, `${prefix}+`, `${prefix}-`, undefined].includes(valueNew)) {
      if (thousand) {
        let previousValue = valueNew.replace(prefix, '').replace(new RegExp(`\\${thousandSeparator}`, 'g'), '');
        let addition = '';

        if (!is('number', +previousValue) || +previousValue >= Number.MAX_SAFE_INTEGER) return;

        if (is('function', validate)) {
          try {
            if (!validate(valueNew)) return;
          }
          catch (error) { return; }
        }

        const decimal = previousValue.includes('.');

        [previousValue, addition] = previousValue.split('.');

        valueNew = numberWithCommas(previousValue, thousandSeparator);

        valueNew = `${prefix !== undefined ? prefix : ''}${valueNew}${decimal ? '.' : ''}${addition !== undefined ? addition : ''}`;
      }
      // mask
      else if (is('array', mask)) {
        let previousValue = valueNew.replace(prefix, '');

        previousValue = (valueNew || '').split('').filter(Boolean);

        valueNew = '';

        // Update value based on mask value
        for (let i = 0; i < mask.length; i++) {
          if (!previousValue.length) break;

          // Constant
          if (is('string', mask[i])) {
            if (valueNew[i] !== mask[i]) valueNew += mask[i];

            if (previousValue[0] === mask[i]) previousValue.shift();
          }
          else {
            let added = false;

            if (is('function', mask[i])) {
              if (Try(() => mask[i](previousValue[0], valueNew, value__))) {
                valueNew += previousValue[0];

                added = true;
              }
            }
            else if (is('object', mask[i])) {
              const { pattern } = mask[i];

              if (new RegExp(pattern).test(previousValue[0])) {
                valueNew += previousValue[0];

                added = true;
              }
            }

            // Only if new values are added
            // do not use on removing values
            if (added && String(value__)?.length >= String(value)?.length && maskProactive) {
              const items: any[] = maskConstsFromIndex(i + 1);

              items.forEach((item: any) => valueNew += item);
            }

            previousValue.shift();
          }
        }
      }
    }

    // prefix
    if (prefix !== undefined) {
      if (['', ' ', prefix, `${prefix} `, undefined].includes(valueNew)) valueNew = '';
      else if (!valueNew.startsWith(prefix)) valueNew = `${prefix}${valueNew}`;
    }

    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange_)) onChange_(valueNew);
  };

  return (
    <TextField
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      value={value}

      onChange={onChange}

      controlled

      className={classNames([
        staticClassName('AdvancedTextField', theme) && [
          'amaui-AdvancedTextField-root'
        ],

        className,
        classes.root
      ])}

      {...other}

      {...TextFieldProps}
    />
  );
});

AdvancedTextField.displayName = 'amaui-AdvancedTextField';

export default AdvancedTextField;
