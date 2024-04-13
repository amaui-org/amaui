import React from 'react';

import { is, isEnvironment, unique } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import IconElement from '../Icon';
import MenuElement from '../Menu';
import ChipElement from '../Chip';
import ChipGroupElement from '../Chips';
import TextFieldElement from '../TextField';
import IconButtonElement from '../IconButton';
import LineElement from '../Line';
import { ITextField } from '../TextField/TextField';
import { staticClassName } from '../utils';
import { IElement, IPropsAny } from '../types';

const IconMaterialArrowDropDownRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='ArrowDropDownRounded'
      short_name='ArrowDropDown'

      {...props}
    >
      <path d="M11.3 14.3 8.7 11.7Q8.225 11.225 8.488 10.613Q8.75 10 9.425 10H14.575Q15.25 10 15.512 10.613Q15.775 11.225 15.3 11.7L12.7 14.3Q12.55 14.45 12.375 14.525Q12.2 14.6 12 14.6Q11.8 14.6 11.625 14.525Q11.45 14.45 11.3 14.3Z" />
    </IconElement>
  );
});

const useStyle = styleMethod(theme => {
  const overflow = {
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  };

  return {
    root: {
      flex: 'unset',
      minWidth: '140px',

      '& .amaui-TextField-input': {
        position: 'absolute',
        left: '0',
        bottom: '0',
        pointerEvents: 'none',
        opacity: '0'
      },

      '& .amaui-TextField-input-wrapper': {
        cursor: 'pointer'
      }
    },

    wrapper: {
      position: 'relative'
    },

    inputWrapper: {
      cursor: 'pointer',

      '&.amaui-TextField-input-wrapper': {
        cursor: 'pointer'
      }
    },

    inputWrapper_chip_size_small: {
      minHeight: '48px'
    },

    inputWrapper_chip_size_regular: {
      minHeight: '56px'
    },

    inputWrapper_chip_size_large: {
      minHeight: '64px'
    },

    input: {
      width: '100%',
      margin: '0',
      border: '0',
      color: theme.palette.text.default.primary,
      background: 'transparent',
      '-webkit-tap-highlight-color': 'transparent',
      textAlign: 'start',
      borderRadius: `${theme.shape.radius.unit / 2}px ${theme.shape.radius.unit / 2}px 0 0`,
      ...theme.typography.values.b2,
      ...overflow,
      cursor: 'pointer',
      pointerEvents: 'none'
    },

    chip: {
      '&.amaui-TextField-input-wrapper': {
        height: 'unset'
      }
    },

    chipGroup: {
      pointerEvents: 'none'
    },

    chipGroup_padding: {
      paddingTop: theme.methods.space.value(0.5, 'px')
    },

    arrow: {
      transition: theme.methods.transitions.make('transform')
    },

    arrow_open: {
      transform: 'rotate(-180deg)'
    },

    menu_autoWidth: {
      width: '100%'
    },

    open: {
      '&.amaui-TextField-root': {
        cursor: 'default'
      }
    },

    fullWidth: {
      width: '100%'
    },

    readOnly: {
      '&.amaui-TextField-root': {
        cursor: 'default'
      }
    },

    disabled: {
      '&.amaui-TextField-root': {
        cursor: 'default'
      }
    }
  };
}, { name: 'amaui-Select' });

export interface ISelect extends ITextField {
  multiple?: boolean;
  autoWidth?: boolean;
  getLabel?: (item: IElement, props: any) => IElement;
  chip?: boolean;

  renderValues?: (value: string | string[]) => IElement;

  WrapperProps?: IPropsAny;
  ChipGroupProps?: IPropsAny;
  ListProps?: IPropsAny;
  MenuProps?: IPropsAny;
}

const Select: React.FC<ISelect> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSelect?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Menu = React.useMemo(() => theme?.elements?.Menu || MenuElement, [theme]);

  const Chip = React.useMemo(() => theme?.elements?.Chip || ChipElement, [theme]);

  const ChipGroup = React.useMemo(() => theme?.elements?.ChipGroup || ChipGroupElement, [theme]);

  const TextField = React.useMemo(() => theme?.elements?.TextField || TextFieldElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const {
    tonal = true,
    color = 'primary',
    size = 'regular',
    version = 'filled',

    value: value_,
    valueDefault,
    onChange,

    label,
    multiple,
    prefix,
    sufix,
    start,
    end,
    autoWidth = true,
    getLabel,
    fullWidth,
    chip,
    readOnly,
    disabled,

    renderValues: renderValues_,

    WrapperProps,
    ChipGroupProps,
    ListProps,
    MenuProps,

    className,
    style,

    children: children_,

    ...other
  } = props;

  const children = React.Children.toArray(children_);

  const [value, setValue] = React.useState(() => {
    const values = valueDefault !== undefined ? valueDefault : value_;

    return multiple ? ((is('array', values) ? values : [values]) as any).filter(Boolean) : values;
  });
  const [open, setOpen] = React.useState(false);
  const [mouseDown, setMouseDown] = React.useState(false);
  const [focus, setFocus] = React.useState(false);

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(),
    wrapper: React.useRef<any>(),
    menu: React.useRef<any>(),
    input: React.useRef<any>(),
    ids: {
      list: React.useId()
    }
  };

  const styles: any = {
    root: {

    }
  };

  React.useEffect(() => {
    const method = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    rootDocument.addEventListener('keydown', method);

    return () => {
      // Clean up
      rootDocument.removeEventListener('keydown', method);
    };
  }, []);

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== value) setValue(value_);
  }, [value_]);

  const onMouseDown = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled && !readOnly) setMouseDown(true);
  }, []);

  const onMouseUp = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled && !readOnly) setMouseDown(false);
  }, []);

  const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled && !readOnly) setFocus(true);
  }, []);

  const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled && !readOnly) setFocus(false);
  }, []);

  const onClick = React.useCallback((event: React.MouseEvent) => {
    if (!disabled && !readOnly) setOpen(open_ => {
      if (open_) setFocus(false);

      return !open_;
    });
  }, []);

  const onClickArrowDown = React.useCallback((event: React.MouseEvent) => {
    if (!disabled && !readOnly) setOpen(open_ => !open_);
  }, []);

  const onEnterKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !disabled && !readOnly) setOpen(open_ => {
      if (open_) refs.input.current.focus();

      return !open_;
    });
  }, []);

  const onClose = React.useCallback((refocus = true) => {
    if (!disabled && !readOnly) {
      setOpen(open_ => {
        if (open_ && refocus) refs.input.current.focus();

        return false;
      });
    }
  }, []);

  const onSelect = (newValue: any) => {
    let values = multiple ? is('array', value) ? value : [value] : value;

    values = multiple ? unique([...values, newValue]) : newValue;

    // Inner controlled value
    if (!props.hasOwnProperty('value')) setValue(values);

    if (is('function', onChange)) onChange(values);
  };

  const onUnselect = (itemValue: any) => {
    if (multiple) {
      let values = is('array', value) ? value : [value];

      values = values.filter(item => item !== itemValue);

      // Inner controlled value
      if (!props.hasOwnProperty('value')) setValue(values);

      if (is('function', onChange)) onChange(values);
    }
  };

  const renderValue = (values: any = value) => {
    const item: any = children.find((item_: any) => item_.props?.value === values);

    const getItemLabel = getLabel || (() => {
      return (item.props?.name || item.props?.label || item.props?.primary || item.props?.secondary || item.props?.tertiary || (item.props?.value !== undefined ? item.props?.value : item.props?.children));
    });

    return item ? getItemLabel(item, props) : value;
  };

  const renderValues = renderValues_ || ((value__ = value) => {
    if (multiple) {
      if (chip) {
        return (
          <ChipGroup
            wrap='wrap'

            size={size}

            className={classNames([
              classes.chipGroup,
              version !== 'outlined' && classes.chipGroup_padding
            ])}

            {...ChipGroupProps}
          >
            {(value__ as any).map(item => (
              <Chip
                key={item}

                focus={false}
              >
                {renderValue(item)}
              </Chip>
            ))}
          </ChipGroup>
        );
      }

      return value.flatMap((item, index) => [renderValue(item), ...(index < value.length - 1 ? [', '] : [])]);
    }

    return renderValue(value);
  });

  const endIcons = [
    end,

    ...(!readOnly ? [
      <IconButton
        key={1}

        size='small'

        fontSize={24}

        onClick={onClickArrowDown}

        aria-expanded={open}

        aria-controls={refs.ids.list}
      >
        <IconMaterialArrowDropDownRounded
          className={classNames([
            classes.arrow,
            open && classes.arrow_open
          ])}
        />
      </IconButton>
    ] : [])
  ];

  return (
    <Line
      gap={0}

      direction='column'

      fullWidth={fullWidth}

      {...WrapperProps}

      ref={item => {
        if (WrapperProps?.ref) {
          if (is('function', WrapperProps.ref)) WrapperProps.ref(item);
          else WrapperProps.ref.current = item;
        }

        refs.wrapper.current = item;
      }}

      className={classNames([
        staticClassName('Select', theme) && [
          'amaui-Select-wrapper',
          WrapperProps?.className,
          classes.wrapper
        ]
      ])}
    >
      <TextField
        ref={refs.input}

        rootRef={(item => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.root.current = item;
        }) as any}

        onBlur={onBlur}

        onFocus={onFocus}

        enabled={open || focus || mouseDown || !!(is('array', value) ? value.length : value !== undefined)}

        focus={open || focus || mouseDown}

        className={classNames([
          staticClassName('Select', theme) && [
            'amaui-Select-root',
            open && `amaui-Select-open`,
            mouseDown && `amaui-Select-mouse-down`,
            focus && `amaui-Select-focus`
          ],

          className,
          classes.root,
          open && classes.open,
          fullWidth && classes.fullWidth,
          disabled && classes.disabled
        ])}

        tonal={tonal}

        color={color}

        size={size}

        version={version}

        label={label}

        prefix={prefix}

        sufix={sufix}

        start={start}

        end={endIcons}

        readOnly={readOnly}

        endVerticalAlign='center'

        role='combobox'

        aria-multiselectable={multiple}

        aria-controls={refs.ids.list}

        aria-expanded={open}

        aria-haspopup='listbox'

        aria-labelledby={label}

        aria-disabled={disabled}

        disabled={disabled}

        InputWrapperProps={{
          className: classNames([
            staticClassName('Select', theme) && [
              'amaui-Select-input-wrapper'
            ],

            classes.inputWrapper,
            chip && [
              classes.chip,
              classes[`inputWrapper_chip_size_${size}`]
            ],
            open && classes.open,
            readOnly && classes.readOnly
          ]),

          onMouseDown,
          onMouseUp,

          onClick,
          onKeyDown: onEnterKeyDown
        }}

        inputProps={{
          disabled: true,

          readOnly: true
        }}

        style={{
          ...style,

          ...styles.root
        }}

        {...other}
      >
        <div
          className={classNames([
            staticClassName('Select', theme) && [
              'amaui-Select-input'
            ],

            classes.input,
            chip && classes.chip,
            open && classes.open,
            readOnly && classes.readOnly
          ])}
        >
          {renderValues(value)}
        </div>
      </TextField>

      {children && (
        <Menu
          ref={refs.menu}

          open={open}

          portal={false}

          onClose={() => onClose(false)}

          anchorElement={refs.root.current}

          transformOrigin='center top'

          transformOriginSwitch='center bottom'

          maxWidth='unset'

          menuItems={children.map((item: any, index: number) => (
            React.cloneElement(item, {
              key: index,

              role: 'option',

              selected: multiple ? value.includes(item.props?.value) : value === item.props?.value,

              preselected: !(multiple ? value.includes(item.props?.value) : value === item.props?.value),

              onMouseUp,

              onMouseDown,

              onClick: (event: React.MouseEvent) => {
                if (multiple && value.includes(item.props?.value)) onUnselect(item.props?.value);
                else onSelect(item.props?.value);

                if (is('function', item.props?.onClick)) item.props?.onClick(event);

                if (!multiple) setOpen(false);
              }
            })
          ))}

          AppendProps={{
            ...(!autoWidth && {
              alignment: 'start'
            })
          }}

          ModalProps={{
            // focus: !MenuProps.portal
          }}

          style={styles.menu}

          ListProps={{
            menu: true,

            size,

            role: 'listbox',

            id: refs.ids.list,

            'aria-label': label,

            ...ListProps
          }}

          {...MenuProps}

          className={classNames([
            MenuProps?.className,
            autoWidth && classes.menu_autoWidth
          ])}
        />
      )}
    </Line>
  );
});

Select.displayName = 'amaui-Select';

export default Select;
