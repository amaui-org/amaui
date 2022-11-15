import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import Line from '../Line';

import { staticClassName, TColor, TElement, TPropsAny, TSize, TTonal, TVersion } from '../utils';
import { ILine } from '../Line/Line';

const useStyle = styleMethod(theme => ({
  root: {
    cursor: 'pointer',
    userSelect: 'none'
  },

  text_disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  },

  disabled: {
    cursor: 'default',
    pointerEvents: 'none'
  }
}), { name: 'AmauiLabel' });

export interface ILabel extends ILine {
  tonal?: TTonal;
  color?: TColor;
  colorUnchecked?: TColor;
  version?: TVersion;
  size?: TSize;

  position?: 'start' | 'bottom' | 'end';

  input?: TElement;

  label?: TElement;

  valueDefault?: boolean;
  checked?: boolean;
  onChange?: (value: boolean, event?: React.ChangeEvent<any>) => any;

  disabled?: boolean;

  TypeProps?: TPropsAny;
}

const Label = React.forwardRef((props_: ILabel, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.AmauiLabel?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color,
    colorUnchecked,
    version,

    position: position_,

    size = 'regular',

    input,

    label,

    checked,
    valueDefault,
    onChange,

    disabled,

    TypeProps,

    Component = 'label',

    className,

    children: children_,

    ...other
  } = props;

  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : checked) || false);

  const refs = {
    value: React.useRef<any>()
  };

  refs.value.current = value;

  const onUpdate = (value_: any, event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && event) {
      // Inner controlled checkbox
      if (!props.hasOwnProperty('checked')) setValue(event.target.checked);

      if (is('function', onChange)) onChange(event.target.checked, event);
    }
  };

  React.useEffect(() => {
    if (checked !== undefined && checked !== refs.value.current) setValue(checked);
  }, [checked]);

  let position = position_;

  const children: any[] = React.Children.toArray(children_);

  const Input = input !== undefined ? input : children[0];

  const Text = label !== undefined ? label : children[1];

  const inlineElement = ['AmauiCheckbox', 'AmauiRadio', 'AmauiSwitch'].includes(Input?.type?.displayName);

  const padding = !['AmauiCheckbox', 'AmauiRadio'].includes(Input?.type?.displayName);

  let align = 'center';

  const justify = 'center';

  if (!inlineElement) align = 'flex-start';

  if (position === undefined) position = inlineElement ? 'start' : 'bottom';

  return (
    <Line
      ref={ref}

      gap={!padding ? 0 : 1}

      direction={['top', 'bottom'].includes(position) ? position === 'bottom' ? 'column-reverse' : 'column' : position === 'end' ? 'row-reverse' : 'row'}

      align={align}

      justify={justify}

      Component={Component}

      disabled={disabled}

      className={classNames([
        staticClassName('Label', theme) && [
          'AmauiLabel-root',
          `AmauiLabel-version-${version}`,
          `AmauiLabel-position-${position}`,
          `AmauiLabel-size-${size}`,
          disabled && `AmauiLabel-disabled`
        ],

        className,
        classes.root,
        disabled && classes.disabled
      ])}

      {...other}
    >
      {Input && React.cloneElement(Input, {
        className: classNames([
          staticClassName('Label', theme) && [
            'AmauiLabel-input'
          ],

          classes.input
        ]),

        tonal: Input?.props?.tonal !== undefined ? Input.props.tonal : tonal,

        color: Input?.props?.color !== undefined ? Input.props.color : color,

        colorUnchecked: Input?.props?.colorUnchecked !== undefined ? Input.props.colorUnchecked : colorUnchecked,

        version: Input?.props?.version !== undefined ? Input.props.version : version,

        size: Input?.props?.size !== undefined ? Input.props.size : size,

        onChange: onUpdate,

        checked: value,

        disabled
      })}

      {Text !== undefined && is('simple', Text) ? (
        <Type
          version={size === 'regular' ? 'b2' : size === 'large' ? 'b1' : 'b3'}

          {...TypeProps}

          className={classNames([
            staticClassName('Label', theme) && [
              'AmauiLabel-text'
            ],

            TypeProps?.className,
            classes.text,
            disabled && classes.text_disabled
          ])}
        >
          {Text}
        </Type>
      ) : Text}
    </Line>
  );
});

Label.displayName = 'AmauiLabel';

export default Label;
