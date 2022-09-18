import React from 'react';

import { is, numberWithCommas } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import TextField from '../TextField';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiAdvancedTextField' });

const AdvancedTextField = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiAdvancedTextField?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    valueDefault,
    value: value_,

    validate,

    prefix,

    mask,

    thousand,
    thousandSeparator = ',',

    onChange: onChange_,

    className,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  const refs = {
    root: React.useRef<any>(),
    carret: React.useRef<any>()
  };

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    if (init) {
      if (value_ !== value) setValue(value_);
    }
  }, [value_]);

  React.useEffect(() => {
    setTimeout(() => {
      if (refs.carret.current) {
        // Carret restore previous value
        refs.root.current.selectionStart = refs.carret.current.start;
        refs.root.current.selectionEnd = refs.carret.current.end;
      }
    });
  }, [value]);

  const onChange = (value__: any) => {
    let valueNew = value__;

    // Carret save previous value
    refs.carret.current = { start: refs.root.current.selectionStart, end: refs.root.current.selectionEnd };

    // Only restore if it's not regular carret value
    if (refs.carret.current.start === valueNew.length) refs.carret.current = undefined;

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
      const previousValue = (valueNew || '').split('').filter(Boolean);

      valueNew = '';

      // Update value based on mask value
      for (let i = 0; i < mask.length; i++) {
        if (!previousValue.length) break;

        // Constant
        if (is('string', mask[i])) {
          valueNew += mask[i];

          if (previousValue[0] === mask[i]) previousValue.shift();
        }
        else {
          const { pattern } = mask[i];

          if (new RegExp(pattern).test(previousValue[0])) valueNew += previousValue[0];

          previousValue.shift();
        }
      }
    }

    // prefix
    if (prefix !== undefined) {
      if (!valueNew || prefix === valueNew) valueNew = '';
      else if (!valueNew.startsWith(prefix)) valueNew = `${prefix}${valueNew}`;
    }

    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange_)) onChange_(valueNew);
  };

  return (
    <TextField
      ref={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

      value={value}

      onChange={onChange}

      className={classNames([
        staticClassName('AdvancedTextField', theme) && [
          'AmauiAdvancedTextField-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

AdvancedTextField.displayName = 'AmauiAdvancedTextField';

export default AdvancedTextField;
