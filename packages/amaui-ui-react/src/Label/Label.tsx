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
}), { name: 'amaui-Label' });

export interface ILabel extends ILine {
  tonal?: TTonal;
  color?: TColor;
  colorUnchecked?: TColor;
  version?: TVersion;
  size?: TSize;

  position?: 'start' | 'top' | 'bottom' | 'end';

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

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiLabel?.props?.default, ...props_ }), [props_]);

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
    TextProps,

    Component = 'label',

    className,

    children: children_,

    ...other
  } = props;

  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : checked) || false);

  const refs = {
    value: React.useRef<any>(),
    ids: {
      label: React.useId()
    }
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

  const Text = label !== undefined ? label : children.slice(1);

  const inlineElement = ['checkbox', 'radio', 'switch'].some(item => Input?.type?.displayName?.toLowerCase().includes(item));

  const padding = !['amaui-Checkbox', 'amaui-Radio'].includes(Input?.type?.displayName);

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

      role='group'

      aria-labelledby={refs.ids.label}

      aria-disabled={disabled}

      disabled={disabled}

      Component={Component}

      className={classNames([
        staticClassName('Label', theme) && [
          'amaui-Label-root',
          disabled && `amaui-Label-disabled`
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
            'amaui-Label-input'
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

      {(Text as any[])?.length === 1 && is('simple', (Text as any[])[0]) ? (
        <Type
          version={size === 'regular' ? 'b2' : size === 'large' ? 'b1' : 'b3'}

          id={refs.ids.label}

          {...TypeProps}

          {...TextProps}

          className={classNames([
            staticClassName('Label', theme) && [
              'amaui-Label-text'
            ],

            TypeProps?.className,
            classes.text,
            disabled && classes.text_disabled
          ])}
        >
          {Text[0]}
        </Type>
      ) : (
        <Line
          direction='row'

          id={refs.ids.label}

          {...TextProps}
        >
          {(Text as any).map((item: any, index: number) => is('simple', item) ?
            <React.Fragment key={index}>{item}</React.Fragment> :

            React.cloneElement(item as any, { key: index })
          )}
        </Line>
      )}
    </Line>
  );
});

Label.displayName = 'amaui-Label';

export default Label;
