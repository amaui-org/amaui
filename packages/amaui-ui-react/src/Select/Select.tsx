import React from 'react';

import { getObjectValue, is, isEnvironment, unique } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import ListItemElement from '../ListItem';
import TypeElement from '../Type';
import IconElement from '../Icon';
import MenuElement from '../Menu';
import ChipElement from '../Chip';
import ChipsElement from '../Chips';
import TextFieldElement from '../TextField';
import IconButtonElement from '../IconButton';
import LineElement from '../Line';
import { ITextField } from '../TextField/TextField';
import { iconFontSize, staticClassName } from '../utils';
import { IElement, IPropsAny } from '../types';

const IconMaterialCloseRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='CloseRounded'
      short_name='Close'

      {...props}
    >
      <path d="M12 13.4 7.1 18.3Q6.825 18.575 6.4 18.575Q5.975 18.575 5.7 18.3Q5.425 18.025 5.425 17.6Q5.425 17.175 5.7 16.9L10.6 12L5.7 7.1Q5.425 6.825 5.425 6.4Q5.425 5.975 5.7 5.7Q5.975 5.425 6.4 5.425Q6.825 5.425 7.1 5.7L12 10.6L16.9 5.7Q17.175 5.425 17.6 5.425Q18.025 5.425 18.3 5.7Q18.575 5.975 18.575 6.4Q18.575 6.825 18.3 7.1L13.4 12L18.3 16.9Q18.575 17.175 18.575 17.6Q18.575 18.025 18.3 18.3Q18.025 18.575 17.6 18.575Q17.175 18.575 16.9 18.3Z" />
    </IconElement>
  );
});

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
      minWidth: '184px',

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
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      minHeight: 20,
      margin: '0',
      border: '0',
      color: theme.palette.text.default.primary,
      background: 'transparent',
      '-webkit-tap-highlight-color': 'transparent',
      textAlign: 'start',
      borderRadius: `${theme.shape.radius.unit / 2}px ${theme.shape.radius.unit / 2}px 0 0`,
      cursor: 'pointer',
      pointerEvents: 'none',

      ...theme.typography.values.b2,
      ...overflow
    },

    chip: {
      '&.amaui-TextField-input-wrapper': {
        height: 'unset'
      }
    },

    chipGroup: {
      pointerEvents: 'auto'
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
  options?: Array<{
    name: any;
    value: any;
    props?: any;
  }>;

  multiple?: boolean;
  autoWidth?: boolean;
  getLabel?: (item: any, props: any) => any;
  chip?: boolean;
  clear?: boolean;
  noSelectText?: any;

  renderValues?: (value: string | string[]) => IElement;
  renderChip?: (item: any, value: any, props: IPropsAny) => IElement;

  WrapperProps?: IPropsAny;
  ChipProps?: IPropsAny;
  ChiProps?: IPropsAny;
  ListProps?: IPropsAny;
  MenuProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
}

const getValue = (value: any) => value?.value !== undefined ? value.value : value;

const Select: React.FC<ISelect> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSelect?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const ListItem = React.useMemo(() => theme?.elements?.ListItem || ListItemElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Menu = React.useMemo(() => theme?.elements?.Menu || MenuElement, [theme]);

  const Chip = React.useMemo(() => theme?.elements?.Chip || ChipElement, [theme]);

  const Chips = React.useMemo(() => theme?.elements?.Chips || ChipsElement, [theme]);

  const TextField = React.useMemo(() => theme?.elements?.TextField || TextFieldElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const {
    tonal = true,
    color = 'primary',
    size = 'regular',
    version = 'filled',

    value: value_,
    valueDefault,
    onChange: onChange_,

    options,

    label,
    multiple,
    prefix,
    sufix,
    start,
    end,
    autoWidth = false,
    getLabel: getLabel_,
    fullWidth,
    chip,
    clear,
    readOnly,
    noSelectText = 'Select an option',
    disabled,

    renderValues: renderValues_,
    renderChip,

    IconClear = IconMaterialCloseRounded,

    WrapperProps,
    ChipProps,
    ChiProps,
    ListProps = {
      style: {
        maxHeight: 240,
        overflowY: 'auto',
        overflowX: 'hidden'
      }
    },
    MenuProps = {
      portal: true
    },
    IconButtonProps,

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

  const onChange = (valueNew: any) => {
    // Inner controlled value
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange_)) onChange_(valueNew);
  };

  const onSelect = (newValue: any) => {
    let values = multiple ? is('array', value) ? value : [value] : value;

    values = multiple ? unique([...values, newValue]) : newValue;

    onChange(values);
  };

  const onUnselect = (itemValue: any) => {
    if (multiple) {
      let values = is('array', value) ? value : [value];

      values = values.filter(item => item !== itemValue);

      onChange(values);
    }
  };

  const onClear = React.useCallback((refocus = false) => {
    if (!disabled && !readOnly) {
      onChange(multiple ? [] : null);

      if (refocus) refs.input.current.focus();
    }
  }, [multiple, readOnly, disabled]);

  const items = React.useMemo(() => {
    return (options || []).map((item: any) => ({
      ...item,

      name: String(item?.name !== undefined ? item?.name : item?.value !== undefined ? item.value : item),
      value: item?.value !== undefined ? item?.value : item
    }));
  }, [options]);

  const getLabel = (item: any, propsOther?: any) => {
    if (is('function', getLabel_)) return getLabel_(item, propsOther);

    const properties = ['name', 'label', 'primary', 'secondary', 'tertiary', 'value', 'children'];

    const objects = [item, item?.props].filter(Boolean);

    for (const itemObject of objects) {
      if (is('simple', itemObject)) return itemObject;

      const valueItem = getObjectValue(itemObject, ...properties);

      if (valueItem !== undefined) return valueItem;
    }

    return noSelectText || 'Select an option';
  };

  const renderValue = (itemValue: any = value) => {
    const item: any = !!items?.length ? items.find((item_) => getValue(item_) === getValue(itemValue)) : children.find((item_: any) => getValue(item_.props?.value) === getValue(itemValue));

    return item ? getLabel(item, props) : getLabel(itemValue, props) || '';
  };

  const renderValues = renderValues_ || ((value__ = value) => {
    if (multiple) {
      if (chip) {
        return (
          <Chips
            wrap='wrap'

            size={size}

            className={classNames([
              classes.chipGroup,
              version !== 'outlined' && classes.chipGroup_padding
            ])}

            {...ChiProps}
          >
            {(value__ as any).map(item => {
              const other_ = {
                onClick: (event: MouseEvent) => {
                  event.preventDefault();
                  event.stopPropagation();
                },

                onRemove: (event: MouseEvent) => {
                  event.preventDefault();
                  event.stopPropagation();

                  onUnselect(item);
                },

                input: true
              };

              if (is('function', renderChip)) return renderChip(item, renderValue(item), other_);

              return (
                <Chip
                  key={item}

                  size='small'

                  {...other_}

                  {...ChipProps}
                >
                  {renderValue(item)}
                </Chip>
              );
            })}
          </Chips>
        );
      }

      return value.flatMap((item, index) => [renderValue(item), ...(index < value.length - 1 ? [', '] : [])]);
    }

    return renderValue(value);
  });

  const endIcons = [
    end,

    clear && !!(multiple ? value.length : value) && (
      <IconButton
        onClick={onClear}

        size='small'

        fontSize={iconFontSize}

        aria-label='Input clear'

        {...IconButtonProps}
      >
        <IconClear />
      </IconButton>
    ),

    ...(!readOnly ? [
      <IconButton
        key={1}

        size='small'

        fontSize={iconFontSize}

        onClick={onClickArrowDown}

        aria-expanded={open}

        aria-controls={refs.ids.list}

        {...IconButtonProps}
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
            `amaui-Select-version-${version}`,
            `amaui-Select-size-${size}`,
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

      {(!!items.length || children) && (
        <Menu
          ref={refs.menu}

          open={open}

          portal={false}

          onClose={() => onClose(false)}

          anchorElement={refs.root.current}

          transformOrigin='center top'

          transformOriginSwitch='center bottom'

          maxWidth='unset'

          menuItems={!!items.length ? (
            items.map((item: any, index: number) => (
              <ListItem
                key={index}

                role={'option'}

                selected={multiple ? value.includes(item?.value) : value === item?.value}

                preselected={!(multiple ? value.includes(item?.value) : value === item?.value)}

                onMouseUp={onMouseUp}

                onMouseDown={onMouseDown}

                primary={(
                  <Type
                    version='b3'
                  >
                    {item.name}
                  </Type>
                )}

                value={item.value}

                size='small'

                button

                {...item.props}

                onClick={(event: React.MouseEvent) => {
                  if (multiple && value.includes(item?.value)) onUnselect(item?.value);
                  else onSelect(item?.value);

                  if (is('function', item.props?.onClick)) item.props?.onClick(event);

                  if (!multiple) setOpen(false);
                }}
              />
            ))
          ) : children.map((item: any, index: number) => (
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
