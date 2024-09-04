import React from 'react';

import { clamp, colorToRgb, is, rgbToHex } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import LineElement from '../Line';
import TextFieldElement from '../TextField';
import FormRowElement from '../FormRow';
import SliderElement from '../Slider';
import TypeElement from '../Type';
import { ITextField } from '../TextField/TextField';
import { staticClassName } from '../utils';

const SliderInput = React.forwardRef((props: any, ref: any) => {
  const theme = useAmauiTheme();

  const FormRow = React.useMemo(() => theme?.elements?.FormRow || FormRowElement, [theme]);

  const Slider = React.useMemo(() => theme?.elements?.Slider || SliderElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    name,

    value,

    onChange,

    min,

    max,

    children,

    className,

    ...other
  } = props;

  return (
    <FormRow
      gap={1}

      description={`${name} ${(value || 100).toFixed(0)}`}

      fullWidth

      className={classNames([
        className
      ])}
    >
      <Slider
        value={value}

        onChange={onChange}

        valueDefault={100}

        min={min}

        max={max}

        size='small'

        tooltip

        marks={[
          {
            label: (
              <Type
                version='b3'
              >
                {min}
              </Type>
            ),
            value: min
          },
          {
            label: (
              <Type
                version='b3'
              >
                {max}
              </Type>
            ),
            value: max
          },
        ]}

        labels

        {...other}

        style={{
          maxWidth: 'unset',
          width: 'calc(100% - 8px)',
          margin: '4px 4px 16px',

          ...other.style
        }}
      />
    </FormRow>
  );
});

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

    borderRadius: theme.methods.shape.radius.value(40, 'px'),
    overflow: 'hidden',
    width: '17px',
    height: '17px',
    cursor: 'pointer',
    boxShadow: theme.methods.shadow(theme.palette.text.default.primary, theme.palette.light ? [7, 4, 11] : [27, 24, 31])[1],

    '&::-webkit-color-swatch-wrapper': {
      padding: '0'
    },

    '&::-webkit-color-swatch': {
      border: 'none'
    }
  }
}), { name: 'amaui-ColorTextField' });

export interface IColorTextField extends ITextField {
  name?: any;

  valueColor?: string;

  valueOpacity?: string | number;

  onChangeColor?: (valueNew: string) => any;

  onChangeOpacity?: (valueNew: string | number) => any;

  opacity?: boolean;
}

const ColorTextField: React.FC<IColorTextField> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiColorTextField?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const TextField = React.useMemo(() => theme?.elements?.TextField || TextFieldElement, [theme]);

  const {
    name,

    version = 'outlined',

    size = 'regular',

    valueDefault,

    value: value_,

    valueColor: valueColor_,

    valueOpacity: valueOpacity_,

    onChange: onChange_,

    onChangeColor: onChangeColor_,

    onChangeOpacity: onChangeOpacity_,

    opacity,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || '');
  const [valueColor, setValueColor] = React.useState(valueColor_ !== undefined ? valueColor_ : '');
  const [valueOpacity, setValueOpacity] = React.useState<any>(valueOpacity_ !== undefined ? valueOpacity_ : 100);

  const refs = {
    value: React.useRef<any>(),
    valueColor: React.useRef(valueColor),
    valueOpacity: React.useRef(valueOpacity)
  };

  refs.value.current = value;

  refs.valueColor.current = valueColor;

  refs.valueOpacity.current = valueOpacity;

  React.useEffect(() => {
    if (opacity) {
      if (!value_ || (is('string', value_) && (value_ as string)?.startsWith('theme'))) return;

      const valuePrevious = colorToRgb(refs.valueColor.current, refs.valueOpacity.current);

      if (value_ && value_ !== valuePrevious) {
        const [r, g, b, a = 1] = colorToRgb(value_ as string, undefined, true) || [] as any;

        setValueOpacity(clamp(+(a * 100).toFixed(2), 0, 100));

        setValueColor(rgbToHex(`rgb(${r}, ${g}, ${b})`) as any);
      }
      else {
        setValueColor('');

        setValueOpacity(100);
      }
    }
    else {
      if (value_ !== refs.value.current) setValue(value_);
    }
  }, [value_]);

  React.useEffect(() => {
    if (valueColor_ !== undefined && valueColor !== valueColor_) setValueColor(valueColor_);
  }, [valueColor_]);

  React.useEffect(() => {
    if (valueOpacity_ !== undefined && valueOpacity !== valueOpacity_) setValueOpacity(valueOpacity_);
  }, [valueOpacity_]);

  const onChange = React.useCallback((valueNew?: any) => {
    if (opacity) {
      const opacity_ = clamp(+refs.valueOpacity.current / 100, 0.0001, 1);

      if (is('function', onChange_)) onChange_(colorToRgb(refs.valueColor.current, +opacity_.toFixed(2)) || '');
    }
    else {
      // Update inner or controlled
      if (!props.hasOwnProperty('value')) setValue(valueNew);

      if (is('function', onChange_)) onChange_(valueNew);
    }
  }, [onChange_]);

  const onChangeColor = React.useCallback((valueNew: string) => {
    if (!props.hasOwnProperty('valueColor')) setValueColor(valueNew);

    if (is('function', onChangeColor_)) onChangeColor_(valueNew);

    setTimeout(() => {
      onChange();
    }, 14);
  }, [onChangeColor_]);

  const onChangeOpacity = React.useCallback((valueNew_: number) => {
    const valueNew = +valueNew_?.toFixed(2);

    if (!props.hasOwnProperty('valueOpacity')) setValueOpacity(valueNew);

    if (is('function', onChangeOpacity_)) onChangeOpacity_(valueNew);

    setTimeout(() => {
      onChange();
    }, 14);
  }, [onChangeOpacity_]);

  const root = (
    <TextField
      name={name}

      value={opacity ? valueColor : value}

      onChange={opacity ? onChangeColor : onChange}

      version={version}

      size={size}

      endVerticalAlign='center'

      end={(
        <input
          type='color'

          value={opacity ? valueColor : value}

          onChange={(event: React.ChangeEvent<any>) => opacity ? onChangeColor((event.target as any).value) : onChange((event.target as any).value)}

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
          'amaui-ColorTextField-root',
          `amaui-ColorTextField-version-${version}`,
          `amaui-ColorTextField-size-${size}`
        ],

        classes.root
      ])}

      fullWidth={opacity}

      {...(!opacity && other)}
    />
  );

  if (opacity) {
    return (
      <Line
        ref={ref}

        gap={1}

        fullWidth

        className={classNames([
          className,
          classes.root
        ])}

        {...other}
      >
        {root}

        <SliderInput
          name='Opacity'

          value={valueOpacity}

          onChange={onChangeOpacity}

          min={0}

          max={100}
        />
      </Line>
    );
  }

  return root;
});

ColorTextField.displayName = 'amaui-ColorTextField';

export default ColorTextField;
