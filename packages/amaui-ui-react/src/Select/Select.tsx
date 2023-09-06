import React from 'react';

import { is, unique } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import Menu from '../Menu';
import Chip from '../Chip';
import TextField from '../TextField';
import ChipGroup from '../Chips';
import IconButton from '../IconButton';
import Line from '../Line';

import { staticClassName, TElement, TPropsAny } from '../utils';
import { ITextField } from '../TextField/TextField';

const overflow = {
  width: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
};

const useStyle = styleMethod(theme => ({
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
    paddingTop: '4px'
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
}), { name: 'amaui-Select' });

const IconMaterialArrowDropDownRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownRounded'
      short_name='ArrowDropDown'

      {...props}
    >
      <path d="M11.3 14.3 8.7 11.7Q8.225 11.225 8.488 10.613Q8.75 10 9.425 10H14.575Q15.25 10 15.512 10.613Q15.775 11.225 15.3 11.7L12.7 14.3Q12.55 14.45 12.375 14.525Q12.2 14.6 12 14.6Q11.8 14.6 11.625 14.525Q11.45 14.45 11.3 14.3Z" />
    </Icon>
  );
});

export interface ISelect extends ITextField {
  multiple?: boolean;
  autoWidth?: boolean;
  getLabel?: (item: TElement, props: any) => TElement;
  chip?: boolean;

  renderValues?: (value: string | string[]) => TElement;

  ChipGroupProps?: TPropsAny;
  ListProps?: TPropsAny;
  MenuProps?: TPropsAny;
}

const Select = React.forwardRef((props_: ISelect, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSelect?.props?.default, ...props_ }), [props_]);

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
    chip,
    readOnly,
    disabled,

    renderValues: renderValues_,

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

  const { classes } = useStyle(props);

  const refs = {
    root: React.useRef<any>(),
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

    window.addEventListener('keydown', method);

    return () => {
      // Clean up
      window.removeEventListener('keydown', method);
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
      return (item.props?.label || item.props?.primary || item.props?.secondary || item.props?.tertiary || item.props?.children);
    });

    return item ? getItemLabel(item, props) : value;
  };

  const renderValues = renderValues_ || ((value__ = value) => {
    if (multiple) {
      if (chip) {
        return (
          <ChipGroup
            wrap

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

      return value.map(item => renderValue(item)).join(', ');
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

      className={classNames([
        staticClassName('Select', theme) && [
          'amaui-Select-wrapper',
          classes.wrapper
        ]
      ])}
    >
      <TextField
        ref={refs.input}

        rootRef={item => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.root.current = item;
        }}

        onBlur={onBlur}

        onFocus={onFocus}

        enabled={open || focus || mouseDown || !!(is('array', value) ? value.length : value)}

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
        >
          {children.map((item: any, index: number) => (
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
        </Menu>
      )}
    </Line>
  );
});

Select.displayName = 'amaui-Select';

export default Select;
