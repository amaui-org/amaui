import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import Line from '../Line';
import { ILine, TLineAlign } from '../Line/Line';
import { staticClassName } from '../utils';
import { ITonal, IColor, IVersion, ISize, IElement, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    cursor: 'pointer',
    userSelect: 'none'
  },

  text_disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  },

  error_color: {
    color: [theme.palette.light ? theme.palette.color.error[40] : theme.palette.color.error[80], '!important']
  },

  footer: {
    marginTop: '4px',
    paddingInline: theme.methods.space.value(2, 'px')
  },

  footer_version_text: {
    paddingInline: '0'
  },

  helperText: {
    display: 'inline-flex',
    color: theme.palette.text.default.secondary,
    userSelect: 'none'
  },

  disabled: {
    cursor: 'default',
    pointerEvents: 'none'
  }
}), { name: 'amaui-Label' });

export interface ILabel extends ILine {
  tonal?: ITonal;
  color?: IColor;
  colorUnchecked?: IColor;
  version?: IVersion;
  size?: ISize;

  position?: 'start' | 'top' | 'bottom' | 'end';

  input?: IElement;

  label?: IElement;
  name?: IElement;

  checkedDefault?: boolean;

  value?: any;
  checked?: any;

  onChange?: (value: boolean, event?: React.ChangeEvent<any>) => any;

  error?: boolean;
  helperText?: string;
  footer?: IElement;

  disabled?: boolean;

  LabelProps?: IPropsAny;
  TypeProps?: IPropsAny;
}

const Label: React.FC<ILabel> = React.forwardRef((props_, ref: any) => {
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

    name,
    label: label_,

    checkedDefault: checkedDefault_,

    value: value_,
    checked: checked_,

    onChange,

    error,
    helperText,
    footer: footer_,

    disabled,

    LabelProps,
    TypeProps,
    TextProps,

    Component = 'label',

    className,

    children: children_,

    ...other
  } = props;

  const checkedDefault = checkedDefault_;
  const checked = checked_;

  const [value, setValue] = React.useState((checkedDefault !== undefined ? checkedDefault : checked) || false);

  const refs = {
    value: React.useRef<any>(),
    ids: {
      label: React.useId()
    }
  };

  refs.value.current = value;

  const label = name !== undefined ? name : label_;

  const onUpdate = (value__: any, event: React.ChangeEvent<HTMLInputElement>) => {
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

  const Text = label !== undefined ? label : name !== undefined ? name : children.slice(1);

  const inlineElement = ['checkbox', 'radio', 'switch'].some(item => Input?.type?.displayName?.toLowerCase().includes(item));

  const padding = !['amaui-Checkbox', 'amaui-Radio'].includes(Input?.type?.displayName);

  let align: TLineAlign = 'center';

  const justify = 'center';

  if (!inlineElement) align = 'flex-start';

  if (position === undefined) position = inlineElement ? 'start' : 'bottom';

  const footer = footer_ || helperText;

  return (
    <Line
      gap={0}

      direction='column'

      {...other}
    >
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

        {...LabelProps}

        className={classNames([
          staticClassName('Label', theme) && [
            'amaui-Label-root',
            disabled && `amaui-Label-disabled`
          ],

          LabelProps?.className,
          className,
          classes.root,
          disabled && classes.disabled
        ])}
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
            {(Text as any)?.map((item: any, index: number) => is('simple', item) ?
              <React.Fragment key={index}>{item}</React.Fragment> :

              React.cloneElement(item as any, { key: index })
            )}
          </Line>
        )}
      </Line>

      {footer && <>
        {(helperText !== undefined) && (
          <Line
            gap={2}

            direction='row'

            justify='space-between'

            className={classNames([
              staticClassName('Label', theme) && [
                'amaui-Label-footer'
              ],

              classes.footer
            ])}
          >
            {helperText && (
              <Type
                version='b3'

                className={classNames([
                  staticClassName('Label', theme) && [
                    'amaui-Label-helper-text',
                    error && 'amaui-Label-error'
                  ],

                  classes.helperText,
                  error && classes.error_color
                ])}
              >
                {helperText}
              </Type>
            )}
          </Line>
        )}

        {footer_}
      </>}
    </Line>
  );
});

Label.displayName = 'amaui-Label';

export default Label;
