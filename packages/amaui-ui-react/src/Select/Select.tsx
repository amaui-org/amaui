import React from 'react';

import { is, unique } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import Menu from '../Menu';
import Chip from '../Chip';
import TextField from '../TextField';
import ChipGroup from '../Chips';
import IconButton from '../IconButton';

import { staticClassName } from '../utils';

const overflow = {
  width: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
};

const useStyle = style(theme => ({
  root: {
    width: '100%',
    flex: 'unset',

    '& .AmauiTextField-input': {
      position: 'absolute',
      left: 0,
      bottom: 0,
      pointerEvents: 'none',
      opacity: 0
    }
  },

  inputWrapper: {
    '&.AmauiTextField-inputWrapper': {
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
    margin: 0,
    border: 0,
    color: theme.palette.text.default.primary,
    background: 'transparent',
    '-webkit-tap-highlight-color': 'transparent',
    textAlign: 'start',
    borderRadius: `${theme.shape.radius.unit / 2}px ${theme.shape.radius.unit / 2}px 0 0`,
    ...theme.typography.values.b2,
    ...overflow,
    cursor: 'pointer'
  },

  chip: {
    '&.AmauiTextField-inputWrapper': {
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
    transform: 'rotate(180deg)'
  },

  open: {
    '&.AmauiTextField-root': {
      cursor: 'default'
    }
  },

  readOnly: {
    '&.AmauiTextField-root': {
      cursor: 'default'
    }
  },

  disabled: {
    '&.AmauiTextField-root': {
      cursor: 'default'
    }
  }
}), { name: 'AmauiSelect' });

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

const Select = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiSelect?.props?.default }), [props_]);

  const {
    tonal,
    color = 'primary',
    multiple,
    value: value_,
    valueDefault,
    size = 'regular',
    version = 'filled',
    prefix,
    sufix,
    startIcon,
    endIcon,
    autoWidth,
    getLabel,
    renderValues: renderValues_,
    chip,
    onChange,
    readOnly,
    ChipGroupProps = {},
    ListProps = {},
    MenuProps = {},
    disabled,

    className,
    style,

    children: children_,

    ...other
  } = props;

  const children = React.Children.toArray(children_);

  const [value, setValue] = React.useState(() => {
    const values = valueDefault !== undefined ? valueDefault : value_;

    return multiple ? (is('array', values) ? values : [values]).filter(Boolean) : values;
  });
  const [focus, setFocus] = React.useState(false);
  const [mouseDown, setMouseDown] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const { classes } = useStyle(props);

  const refs = {
    root: React.useRef<any>(),
    input: React.useRef<any>()
  };

  const styles: any = {
    root: {},
    menu: {}
  };

  React.useEffect(() => {
    const method = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', method);

    return () => {
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
    if (!disabled && !readOnly) setOpen(open => {
      if (open) setFocus(false);

      return !open;
    });
  }, []);

  const onClickArrowDown = React.useCallback((event: React.MouseEvent) => {
    if (!disabled && !readOnly) setOpen(open => !open);
  }, []);

  const onEnterKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !disabled && !readOnly) setOpen(open => {
      if (open) refs.input.current.focus();

      return !open;
    });
  }, []);

  const onClose = React.useCallback((refocus = true) => {
    if (!disabled && !readOnly) {
      setOpen(open => {
        if (open && refocus) refs.input.current.focus();

        return false;
      });
    }
  }, []);

  const onSelect = (newValue: any) => {
    let values = multiple ? is('array', value) ? value : [value] : value;

    values = multiple ? unique([...values, newValue]) : newValue;

    if (is('function', onChange)) onChange(values);

    // Inner controlled value
    if (!props.hasOwnProperty('value')) setValue(values);
  };

  const onUnselect = (itemValue: any) => {
    if (multiple) {
      let values = is('array', value) ? value : [value];

      values = values.filter(item => item !== itemValue);

      if (is('function', onChange)) onChange(values);

      // Inner controlled value
      if (!props.hasOwnProperty('value')) setValue(values);
    }
  };

  if (refs.root.current) {
    const rect = refs.root.current.getBoundingClientRect();

    if (!autoWidth) {
      styles.menu.minWidth = rect.width;
    }
  }

  const renderValue = (values: any = value) => {
    const item: any = children.find((item_: any) => item_.props?.value === values);

    const getItemLabel = getLabel || (() => {
      return (item.props?.label || item.props?.primary || item.props?.secondary || item.props?.tertiary || item.props?.children);
    });

    return item ? getItemLabel(item, props) : value;
  };

  const renderValues = renderValues_ || (() => {
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
            {value.map(item => (
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

  const MenuValue = (children && (
    <Menu
      open={open}

      portal={false}

      onClose={() => onClose(false)}

      anchorElement={refs.root.current}

      transformOrigin='center top'

      transformOriginSwitch='center bottom'

      maxWidth='unset'

      ModalProps={{
        focus: !MenuProps.portal
      }}

      style={styles.menu}

      ListProps={{
        menu: true,

        size,

        ...ListProps
      }}

      {...MenuProps}
    >
      {children.map((item: any, index: number) => (
        React.cloneElement(item, {
          key: index,

          selected: multiple ? value.includes(item.props?.value) : value === item.props?.value,

          preselected: !(multiple ? value.includes(item.props?.value) : value === item.props?.value),

          onMouseUp,

          onMouseDown,

          onClick: (event: React.MouseEvent) => {
            if (multiple && value.includes(item.props?.value)) onUnselect(item.props?.value);
            else onSelect(item.props?.value);

            if (is('function', item.props?.onClick)) item.props?.onClick(event);

            if (!multiple) setOpen(false);
          },

          onKeyDown: (event: React.KeyboardEvent) => {
            if (event.key === 'Enter') {
              if (multiple && value.includes(item.props?.value)) onUnselect(item.props?.value);
              else onSelect(item.props?.value);

              if (is('function', item.props?.onClick)) item.props?.onClick(event);

              if (!multiple) setOpen(false);
            }
          }
        })
      ))}
    </Menu>
  ));

  const endIcons = [
    endIcon,

    ...(!readOnly ? [
      <IconButton
        onClick={onClickArrowDown}
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

  if (mouseDown) refs.input.current.focus();

  return (
    <TextField
      ref={refs.input}

      rootRef={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

      onBlur={onBlur}

      onFocus={onFocus}

      enabled={open || focus || mouseDown || !!(is('array', value) ? value.length : value)}

      focus={open || focus || mouseDown}

      className={classNames([
        staticClassName('Select', theme) && [
          'AmauiSelect-root',
          open && `AmauiSelect-open`,
          multiple && `AmauiSelect-multiple`,
          autoWidth && `AmauiSelect-autoWidth`,
          chip && `AmauiSelect-chip`
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

      prefix={prefix}

      sufix={sufix}

      startIcon={startIcon}

      endIcon={endIcons}

      readOnly={readOnly}

      endIconVerticalAlign='center'

      disabled={disabled}

      InputWrapperProps={{
        className: classNames([
          staticClassName('Select', theme) && [
            'AmauiSelect-inputWrapper'
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

      footer={MenuValue}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      <div
        className={classNames([
          staticClassName('Select', theme) && [
            'AmauiSelect-input'
          ],

          classes.input,
          chip && classes.chip,
          open && classes.open,
          readOnly && classes.readOnly
        ])}
      >
        {renderValues()}
      </div>
    </TextField>
  );
});

Select.displayName = 'AmauiSelect';

export default Select;
