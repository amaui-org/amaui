import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import TypeElement from '../Type';
import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { ITonal, IColor, IVersion, ISize, IElement, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  label_disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  },

  disabled: {
    cursor: 'default',
    userSelect: 'none'
  }
}), { name: 'amaui-Labels' });

export interface ILabels extends ILine {
  tonal?: ITonal;
  color?: IColor;
  colorUnchecked?: IColor;
  version?: IVersion;
  size?: ISize;

  name?: IElement;
  label?: IElement;

  valueDefault?: any[];
  checkedDefault?: any[];

  value?: any[];
  checked?: any[];

  onChange?: (value: any) => any;

  disabled?: boolean;

  WrapperProps?: IPropsAny;
  LabelProps?: IPropsAny;
}

const Labels: React.FC<ILabels> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiLabels?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    tonal = true,
    color = 'primary',
    colorUnchecked,
    version = 'text',
    size = 'regular',

    name,
    label: label_,

    direction = 'column',
    align = 'center',
    justify = 'center',

    valueDefault: valueDefault_,
    checkedDefault: checkedDefault_,

    value: value_,
    checked: checked_,

    onChange,

    disabled,

    WrapperProps,
    LabelProps,

    Component = 'div',

    className,

    children: children_,

    ...other
  } = props;

  const { classes } = useStyle();

  const checkedDefault = valueDefault_ !== undefined ? valueDefault_ : checkedDefault_;
  const checked = value_ !== undefined ? value_ : checked_;

  const valueDefault__ = (checkedDefault !== undefined ? checkedDefault : value_) || [];

  const [value, setValue] = React.useState(is('array', valueDefault__) ? valueDefault__ : [valueDefault__]);

  const refs = {
    value: React.useRef<any>(),
    ids: {
      label: React.useId()
    }
  };

  refs.value.current = value;

  const label = name !== undefined ? name : label_;

  React.useEffect(() => {
    if (checked !== undefined && checked !== refs.value.current) setValue(checked);
  }, [checked]);

  const children: any[] = React.Children.toArray(children_);

  const onUpdate = React.useCallback((valueNew_: any) => {
    const valueNew = valueNew_;

    const value__ = [...refs.value.current];

    const index = value__.findIndex(item => item === valueNew);

    if (index > -1) value__.splice(index, 1);
    else value__.push(valueNew);

    if (!props.hasOwnProperty('value')) setValue(value__);

    if (is('function', onChange)) onChange(value__);
  }, []);

  return (
    <Line
      ref={ref}

      gap={1}

      direction={direction}

      align={props.align !== undefined ? props.align : props.direction === 'row' ? 'center' : 'flex-start'}

      justify={justify}

      role='radiogroup'

      aria-labelledby={refs.ids.label}

      Component={Component}

      className={classNames([
        staticClassName('Labels', theme) && [
          'amaui-Labels-root',
          `amaui-Labels-version-${version}`,
          disabled && `amaui-Labels-disabled`
        ],

        className,
        classes.root,
        disabled && classes.disabled
      ])}

      {...other}
    >
      <Type
        version={size === 'regular' ? 'l2' : size === 'large' ? 'l1' : 'l3'}

        id={refs.ids.label}

        {...LabelProps}

        className={classNames([
          staticClassName('Labels', theme) && [
            'amaui-Labels-label'
          ],

          LabelProps?.className,
          classes.label,
          disabled && classes.label_disabled
        ])}
      >
        {label}
      </Type>

      <Line
        gap={1}

        direction={direction}

        align={props.align !== undefined ? props.align : props.direction === 'row' ? 'center' : 'flex-start'}

        justify={justify}

        {...WrapperProps}
      >
        {children.map((item: any, index: number) => (
          React.cloneElement(item, {
            key: index,

            checked: value.includes(item.props.value),

            onChange: () => onUpdate(item.props.value),

            tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

            color: item.props.color !== undefined ? item.props.color : color,

            colorUnchecked: item.props.colorUnchecked !== undefined ? item.props.colorUnchecked : colorUnchecked,

            version: item.props.version !== undefined ? item.props.version : version,

            size: item.props.size !== undefined ? item.props.size : size,

            disabled: item.props.disabled !== undefined ? item.props.disabled : disabled
          })
        ))}
      </Line>
    </Line>
  );
});

Labels.displayName = 'amaui-Labels';

export default Labels;
