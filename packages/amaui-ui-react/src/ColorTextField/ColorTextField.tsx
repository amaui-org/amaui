import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import TextField from '../TextField';
import { ITextField } from '../TextField/TextField';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    margin: '0',
    padding: '0',
    border: '0',
    outline: 'none',
    fontSize: '100%',
    background: 'transparent',
    boxSizing: 'border-box',
    touchAction: 'manipulation',
  },

  inputColor: {
    // Reset
    margin: '0',
    padding: '0',
    border: '0',
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: '1.15',

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
}), { name: 'amaui-ColorTextField' });

export interface IColorTextField extends ITextField {

}

const ColorTextField: React.FC<IColorTextField> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiColorTextField?.props?.default, ...props_ }), [props_]);

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
              'amaui-ColorTextField-input-color'
            ],

            classes.inputColor
          ])}
        />
      )}

      className={classNames([
        staticClassName('ColorTextField', theme) && [
          'amaui-ColorTextField-root'
        ],

        classes.root
      ])}

      {...other}
    />
  );
});

ColorTextField.displayName = 'amaui-ColorTextField';

export default ColorTextField;
