import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import TextField from '../TextField';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  },

  inputColor: {
    border: 'none',
    borderRadius: '50%',
    overflow: 'hidden',
    width: '17px',
    height: '17px',
    cursor: 'pointer',
    boxShadow: theme.methods.shadow(theme.palette.text.default.primary, theme.palette.light ? [7, 4, 11] : [27, 24, 31])[1],

    '&::-webkit-color-swatch-wrapper': {
      padding: '0px'
    },

    '&::-webkit-color-swatch': {
      border: 'none'
    }
  }
}), { name: 'AmauiColorTextField' });

const ColorTextField = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiColorTextField?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    valueDefault,
    value: value_,

    onChange: onChange_,

    className,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || '');

  const refs = {
    value: React.useRef<any>()
  };

  refs.value.current = value;

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    if (init) if (value_ !== refs.value.current) setValue(value_);
  }, [value_]);

  const onChange = (valueNew: any) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange_)) onChange_(valueNew);
  };

  return (
    <TextField
      value={value}

      onChange={onChange}

      endVerticalAlign='center'

      end={(
        <input
          type='color'

          value={value}

          onChange={(event: React.ChangeEvent<any>) => onChange((event.target as any).value)}

          className={classNames([
            staticClassName('ColorTextField', theme) && [
              'AmauiColorTextField-input-color'
            ],

            classes.inputColor
          ])}
        />
      )}

      className={classNames([
        staticClassName('ColorTextField', theme) && [
          'AmauiColorTextField-root'
        ],

        classes.root
      ])}

      {...other}
    />
  );
});

ColorTextField.displayName = 'AmauiColorTextField';

export default ColorTextField;
