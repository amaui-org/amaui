import React from 'react';

import { is, isEnvironment } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import Menu from '../Menu';
import Chip from '../Chip';
import Type from '../Type';
import List from '../List';
import ListItem from '../ListItem';
import TextField from '../TextField';
import IconButton from '../IconButton';
import RoundProgress from '../RoundProgress';
import ListSubheader from '../ListSubheader';
import Line from '../Line';
import { ITextField } from '../TextField/TextField';

import { staticClassName, TElement, TElementReference, TPropsAny } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    width: '100%',
    flex: 'unset',

    '& .amaui-TextField-input': {
      width: 'auto'
    }
  },

  wrapper: {
    position: 'relative'
  },

  input_: {
    alignSelf: 'center'
  },

  input: {
    display: 'inline-flex',
    margin: '0px',
    border: '0px',
    color: theme.palette.text.default.primary,
    background: 'transparent',
    '-webkit-tap-highlight-color': 'transparent',
    textAlign: 'start',
    borderRadius: `${theme.shape.radius.unit / 2}px ${theme.shape.radius.unit / 2}px 0 0`,
    ...theme.typography.values.b2
  },

  inputWrapper_multiple_size_small: {
    minHeight: '48px',
    columnGap: '6px',
    rowGap: '12px'
  },

  inputWrapper_multiple_size_regular: {
    minHeight: '56px',
    columnGap: '8px',
    rowGap: '16px'
  },

  inputWrapper_multiple_size_large: {
    minHeight: '64px',
    columnGap: '10px',
    rowGap: '20px'
  },

  multiple: {
    '&.amaui-TextField-input-wrapper': {
      height: 'unset'
    }
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

  open: {},

  menu_autoWidth: {
    width: '100%'
  },

  readOnly: {
    '&.amaui-TextField-input-wrapper': {
      cursor: 'default'
    }
  },

  list: {
    maxHeight: '40vh',
    overflow: 'auto'
  },

  limitText: {
    alignSelf: 'center'
  },

  roundProgress: {
    padding: '0 8px'
  },

  disabled: {
    '&.amaui-TextField-input-wrapper': {
      cursor: 'default'
    }
  }
}), { name: 'amaui-AutoComplete' });

const IconMaterialCloseRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseRounded'
      short_name='Close'

      {...props}
    >
      <path d="M12 13.4 7.1 18.3Q6.825 18.575 6.4 18.575Q5.975 18.575 5.7 18.3Q5.425 18.025 5.425 17.6Q5.425 17.175 5.7 16.9L10.6 12L5.7 7.1Q5.425 6.825 5.425 6.4Q5.425 5.975 5.7 5.7Q5.975 5.425 6.4 5.425Q6.825 5.425 7.1 5.7L12 10.6L16.9 5.7Q17.175 5.425 17.6 5.425Q18.025 5.425 18.3 5.7Q18.575 5.975 18.575 6.4Q18.575 6.825 18.3 7.1L13.4 12L18.3 16.9Q18.575 17.175 18.575 17.6Q18.575 18.025 18.3 18.3Q18.025 18.575 17.6 18.575Q17.175 18.575 16.9 18.3Z" />
    </Icon>
  );
});

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

export type TAutoCompleteValue = string | Array<string>;

export type TAutoCompleteOption = {
  label?: string;

  version?: 'text' | 'subheader';

  noOptions?: boolean;
};

export interface IAutoComplete extends ITextField {
  value?: any;
  valueDefault?: any;
  onChange?: (value: any) => any;

  valueInput?: string;
  valueInputDefault?: string;
  onChangeInput?: (value: string) => any;

  multiple?: boolean;
  autoWidth?: boolean;
  readOnly?: boolean;
  getLabel?: (item: any) => any;
  equal?: (value1: any, value2: any) => boolean;
  equalInput?: (input: string, value: any) => boolean;
  renderValues?: (value: TAutoCompleteValue, onUnselect: (value: string) => any) => TElement;
  renderChip?: (item: any, value: any, props: TPropsAny) => TElement;
  renderOption?: (item: TAutoCompleteOption, index: number, props: TPropsAny) => TElement;
  chip?: boolean;
  filter?: (value: string, options: Array<TAutoCompleteOption>) => Array<TAutoCompleteOption>;
  options?: Array<TAutoCompleteOption>;
  clear?: boolean;
  loading?: boolean;
  autoSelectOnBlur?: boolean;
  blurOnSelect?: boolean;
  noOptions?: boolean;
  noOptionsObject?: any;
  startOptionsObject?: any;
  endOptionsObject?: any;
  noOptionsElement?: any;
  startOptionsElement?: any;
  endOptionsElement?: any;
  openOnFocus?: boolean;
  closeOnSelect?: boolean;
  clearInputOnSelect?: boolean;
  clearOnEscape?: boolean;
  groupBy?: (value: TAutoCompleteOption) => string;
  limit?: number;
  filterOutSelectedOptions?: boolean;
  selectOnFocus?: boolean;
  clearOnBlur?: boolean;

  disabled?: boolean;

  IconClear?: TElementReference;

  WrapperProps?: TPropsAny;
  ChipProps?: TPropsAny;
  ListProps?: TPropsAny;
  MenuProps?: TPropsAny;
  IconButtonProps?: TPropsAny;
  InputProps?: TPropsAny;
}

const getText = (value: any) => {
  const value_ = value?.name || value?.label || value?.primary || value?.secondary || value?.tertiary || value?.children || value?.value || value;

  return is('simple', value_) ? String(value_) : '';
};

const getValue = (value: any) => value?.value !== undefined ? value.value : value;

const AutoComplete: React.FC<IAutoComplete> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiAutoComplete?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color = 'primary',
    size = 'regular',
    version = 'filled',

    valueInput: valueInput_,
    valueInputDefault,
    onChangeInput: onChangeInput_,

    value: value_,
    valueDefault,
    onChange: onChange_,

    options: options_ = [],

    label,
    multiple,
    prefix,
    sufix,
    start,
    end,
    autoWidth = true,
    readOnly,
    getLabel: getLabel_,
    renderValues: renderValues_,
    renderChip,
    renderOption,
    equal,
    equalInput,
    filter,
    clear = true,
    loading,
    autoSelectOnBlur,
    blurOnSelect = false,
    noOptions,
    noOptionsObject,
    startOptionsObject,
    noOptionsElement,
    startOptionsElement,
    endOptionsElement,
    endOptionsObject,
    openOnFocus = true,
    closeOnSelect,
    clearOnEscape,
    groupBy,
    limit,
    filterOutSelectedOptions,
    selectOnFocus,
    clearOnBlur,
    clearInputOnSelect,
    chip,
    fullWidth,

    disabled,

    IconClear = IconMaterialCloseRounded,

    WrapperProps,
    ChipProps,
    ListProps,
    MenuProps,
    IconButtonProps,
    InputProps,

    className,
    style,

    children: children_,

    ...other
  } = props;

  const children = React.Children.toArray(children_);

  const [init, setInit] = React.useState(false);
  const [valueInput, setValueInput] = React.useState(valueInputDefault !== undefined ? valueInputDefault : valueInput_);
  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || []);
  const [focus, setFocus] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [mouseDown, setMouseDown] = React.useState(false);
  const [options, setOptions] = React.useState(options_);
  const [free, setFree] = React.useState(false);

  const { classes } = useStyle(props);

  const refs = {
    root: React.useRef<any>(),
    value: React.useRef<any>(),
    valueInput: React.useRef<any>(),
    menu: React.useRef<any>(),
    input: React.useRef<HTMLInputElement>(),
    optionsProps: React.useRef(options_),
    ids: {
      list: React.useId()
    }
  };

  refs.value.current = value;

  refs.valueInput.current = valueInput;

  refs.optionsProps.current = options_;

  const styles: any = {
    root: {

    }
  };

  React.useEffect(() => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    const method = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (clearOnEscape) onClear();

        onClose(true);
      }
    };

    rootDocument.addEventListener('keydown', method);

    rootDocument.addEventListener('mouseup', onMouseUp as any);

    setInit(true);

    return () => {
      // Clean up
      rootDocument.removeEventListener('mouseup', onMouseUp as any);

      rootDocument.removeEventListener('keydown', method);
    };
  }, []);

  React.useEffect(() => {
    const option = (refs.optionsProps.current || []).find(item_ => isEqualToInput(refs.valueInput.current, item_));

    if (!!valueInput?.length && !open && !option && !disabled && !readOnly) setOpen(!free);
  }, [valueInput, free]);

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== value) setValue(value_);
  }, [value_]);

  React.useEffect(() => {
    if (valueInput_ !== undefined && valueInput_ !== valueInput) setValueInput(valueInput_);
  }, [valueInput_]);

  React.useEffect(() => {
    if (init && loading) {
      setOpen(true);

      updateOptions();
    }
  }, [loading]);

  const optionsPropsUpdated = refs.optionsProps.current?.reduce((item: any, result) => result += item?.value !== undefined ? item?.value : item, '');

  React.useEffect(() => {
    updateOptions(undefined, refs.optionsProps.current);
  }, [optionsPropsUpdated]);

  const updateOptions = (valueInputNew: any = refs.valueInput.current, newOptions: any = undefined) => {
    let optionsValue = refs.optionsProps.current;

    // reset
    setFree(false);

    if (loading) optionsValue = [{ label: 'Loading...', version: 'text' }];
    else if (newOptions) optionsValue = newOptions;
    else optionsValue = is('function', filter) ? filter(valueInputNew, refs.optionsProps.current) : refs.optionsProps.current.filter(option => isEqualToInput(valueInputNew, option));

    if (!optionsValue.length) {
      if (noOptions) optionsValue.push(noOptionsObject !== undefined ? noOptionsObject : { primary: 'No options', version: 'text', noOptions: true });
      else {
        setOpen(false);

        setFree(true);

        return;
      }
    }

    if (!loading) {
      if (startOptionsObject) optionsValue.unshift(startOptionsObject);

      if (endOptionsObject) optionsValue.push(endOptionsObject);
    }

    setOptions(optionsValue);
  };

  const onMouseDown = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled && !readOnly) setMouseDown(true);
  }, [disabled, readOnly]);

  const onMouseUp = React.useCallback((event: React.MouseEvent<any>) => {
    if (!disabled && !readOnly) setMouseDown(false);
  }, [disabled, readOnly]);

  const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled && !readOnly) {
      setFocus(true);

      if (selectOnFocus) setTimeout(() => refs.input.current.select());
    }
  }, [disabled, readOnly]);

  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled && !readOnly) setFocus(false);
  };

  const onClick = React.useCallback((event: React.MouseEvent) => {
    if (!disabled && !readOnly) setOpen(open_ => {
      if (!open_) {
        if (!openOnFocus) return open_;

        refs.input.current.focus();
      }

      return !open_;
    });
  }, [disabled, readOnly]);

  const onClickArrowDown = React.useCallback((event: React.MouseEvent) => {
    if (!disabled && !readOnly) setOpen(open_ => {
      if (!open_) refs.input.current.focus();

      return !open_;
    });
  }, [disabled, readOnly]);

  const onEnterKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !disabled && !readOnly) setOpen(open_ => {
      if (!open_) {
        if (!openOnFocus) return open_;

        refs.input.current.focus();
      }

      return !open_;
    });
  }, [disabled, readOnly]);

  const onClose = (refocus = true) => {
    if (!disabled && !readOnly) {
      setOpen(open_ => {
        if (open_) {
          if (refocus) refs.input.current.focus();

          if (clearOnBlur) {
            const option = options.find(item_ => isEqualToInput(refs.valueInput.current, item_));

            if (!option) onClear();
          }
        }

        return false;
      });
    }
  };

  const onExited = () => {
    if (!disabled && !readOnly) {
      if (!open) {
        const option = (refs.optionsProps.current || []).find(item_ => isEqualToInput(refs.valueInput.current, item_));

        // Update options to all values
        // if value is one of the option values
        if (option || !refs.valueInput.current || options[0]?.noOptions) updateOptions(undefined, refs.optionsProps.current);
      }
    }
  };

  const onChange = (valueNew: any) => {
    // Inner controlled value
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange_)) onChange_(valueNew);
  };

  const onChangeInput = (valueNew: any) => {
    if (!disabled && !readOnly) {
      updateOptions(valueNew);

      if (!open) setOpen(true);

      // Inner controlled value
      if (!props.hasOwnProperty('valueInput')) setValueInput(valueNew);

      if (is('function', onChangeInput_)) onChangeInput_(valueNew);
    }
  };

  const onClear = React.useCallback((refocus = true) => {
    if (!disabled && !readOnly) {
      onChangeInput('');

      onChange([]);

      if (refocus) refs.input.current.focus();
    }
  }, []);

  const onClearInput = React.useCallback((refocus = true) => {
    if (!disabled && !readOnly) {
      onChangeInput('');

      if (refocus) refs.input.current.focus();
    }
  }, []);

  const isEqual = (value1: any, value2: any) => is('function', equal) ? equal(value1, value2) : getValue(value1) === getValue(value2);

  const isEqualToInput = (inputValue: string = refs.valueInput.current, item: any) => is('function', equalInput) ? equalInput(inputValue, item) : getText(item)?.toLowerCase().includes(inputValue?.toLowerCase());

  const onSelect = (valueNew: any) => {
    const values = multiple ? is('array', value) ? value : [value] : value;

    const selected = multiple ? !!values.find((item: any) => isEqual(valueNew, item)) : isEqual(valueNew, value);

    if (!selected) {
      onChange(!multiple ? valueNew : [...values, valueNew]);

      if (!multiple) clearInputOnSelect ? onClearInput() : onChangeInput(getText(valueNew));
      else if (clearInputOnSelect) onClearInput();
    }
  };

  const onUnselect = (valueNew: any) => {
    if (multiple) {
      let values = [...(is('array', value) ? value : [value])];

      values = (values as any).filter((item: any) => !isEqual(valueNew, item));

      onChange(values);
    }
  };

  const renderValue = (itemValue: any) => {
    const item: any = children.find((item_: any) => getValue(item_.props?.value) === getValue(itemValue));

    return getLabel(item ? item?.props : itemValue);
  };

  const renderValues = renderValues_ || ((value__ = refs.value.current, onUnselectMethod = onUnselect) => {
    if (multiple) {
      if (chip) {
        let values = value__;

        if (is('number', limit) && !open) values = values.slice(0, limit);

        values = (values as any).map((item: any, index: number) => {
          const other_ = {
            key: index,

            onClick: (event: MouseEvent) => {
              event.preventDefault();
              event.stopPropagation();
            },

            onRemove: (event: MouseEvent) => {
              event.preventDefault();
              event.stopPropagation();

              onUnselectMethod(item);
            },

            input: true
          };

          if (is('function', renderChip)) return renderChip(item, renderValue(item), other_);

          return (
            <Chip
              key={index}

              {...ChipProps}

              {...other_}
            >
              {renderValue(item)}
            </Chip>
          );
        });

        if (is('number', limit) && !open && value.length - limit > 0) (values as any).push(
          <Type
            color='default'

            className={classes.limitText}
          >
            +{value.length - limit}
          </Type>
        );

        return values;
      }

      return (value__ as any).map(item => renderValue(item)).join(', ');
    }

    return renderValue(value);
  });

  let optionsToUse = options;

  if (filterOutSelectedOptions) {
    optionsToUse = optionsToUse.filter(option => {
      const selected = !!(is('array', value) ? value : [value])?.find((item: any) => isEqual(item, option));

      return !selected;
    });
  }

  const groups = {};

  if (is('function', groupBy)) {
    optionsToUse.forEach(option => {
      const valueForGroupBy = groupBy(option) || 'Other';

      if (!groups[valueForGroupBy]) groups[valueForGroupBy] = [];

      groups[valueForGroupBy].push(option);
    });

    optionsToUse = [];

    if (Object.keys(groups).length) Object.keys(groups).forEach(item => {
      const array = groups[item];

      optionsToUse.push({ label: item, version: 'subheader' }, ...array);
    });
  }

  const getLabel = (item: any) => is('function', getLabel_) ? getLabel_(item) : item?.name || item?.label || item?.value;

  const renderOptionValue = (values: any) => {
    const result = values.map((item: any, index: number) => {
      let other_: any = {};

      const button = item.version === undefined || item.version === 'button';

      const selected = !!(is('array', value) ? value : [value])?.find((item_: any) => isEqual(item, item_));

      if (button) {
        other_ = {
          primary: getLabel(item),

          value: item,

          button,

          selected,

          onClick: (event: React.MouseEvent) => {
            if (multiple && selected) onUnselect(item);
            else onSelect(item);

            if (is('function', item.props?.onClick)) item.props?.onClick(event);

            if (blurOnSelect) {
              if (closeOnSelect) setOpen(false);

              refs.input.current.blur();
            }
            else if (closeOnSelect) onClose();
          }
        };
      }
      else {
        other_.secondary = getLabel(item);
      }

      other_.onMouseUp = onMouseUp;

      other_.onMouseDown = onMouseDown;

      if (item.noOptions) {
        if (noOptionsElement) return React.cloneElement(noOptionsElement, {
          key: 'noOptions'
        });
      }

      return (
        is('function', renderOption) ?
          renderOption(item, index, { ...other_, ...item.props }) :

          <ListItem
            key={index}

            role='option'

            preselected={!open ? false : undefined}

            {...other_}

            {...item.props}
          />
      );
    });

    if (startOptionsElement) result.unshift(React.cloneElement(startOptionsElement, { key: 'startOptionsElement' }));

    if (endOptionsElement) result.push(React.cloneElement(endOptionsElement, { key: 'endOptionsElement' }));

    return result;
  };

  const renderList = () => {
    if (Object.keys(groups).length) {
      return (
        Object.keys(groups).map((item: any, index: number) => (
          <li
            key={index}

            style={{ width: '100%' }}
          >
            <ListSubheader
              Component='div'
            >
              {item}
            </ListSubheader>

            <List
              size={size}

              paddingVertical='none'

              menu
            >
              {renderOptionValue(groups[item])}
            </List>
          </li>
        ))
      );
    }
    else return renderOptionValue(optionsToUse);
  };

  const endIcons = [
    end,

    ...(!readOnly ? [
      ...(loading ? [
        <RoundProgress
          key={1}

          className={classes.roundProgress}

          size='small'
        />
      ] : []),

      !!(multiple ? value.length : valueInput) && (
        <IconButton
          onClick={onClear}

          size='small'

          fontSize={24}

          aria-label='Input clear'

          {...IconButtonProps}
        >
          <IconClear />
        </IconButton>
      ),

      <IconButton
        key={3}

        onClick={onClickArrowDown}

        size='small'

        fontSize={24}

        aria-expanded={open}

        aria-controls={refs.ids.list}

        InteractionProps={{
          clear: !!(multiple ? value.length : valueInput)
        }}

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
  ].filter(Boolean);

  if (mouseDown) refs.input.current.focus();

  const menuItems = renderList();

  return (
    <Line
      gap={0}

      direction='column'

      fullWidth={fullWidth}

      {...WrapperProps}

      className={classNames([
        staticClassName('AutoComplete', theme) && [
          'amaui-AutoComplete-wrapper'
        ],
        WrapperProps?.className,
        classes.wrapper
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

        value={valueInput}

        onChange={onChangeInput}

        enabled={open || focus || mouseDown || !!(multiple ? (!!value.length || valueInput) : valueInput)}

        focus={open || focus || mouseDown}

        className={classNames([
          staticClassName('AutoComplete', theme) && [
            'amaui-AutoComplete-root',
            open && `amaui-AutoComplete-open`,
            mouseDown && `amaui-AutoComplete-mouse-down`,
            focus && `amaui-AutoComplete-focus`,
            loading && `amaui-AutoComplete-loading`
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

        aria-autocomplete='list'

        aria-multiselectable={multiple}

        aria-controls={refs.ids.list}

        aria-expanded={open}

        aria-haspopup='listbox'

        aria-labelledby={label}

        aria-disabled={disabled}

        disabled={disabled}

        InputWrapperProps={{
          className: classNames([
            staticClassName('AutoComplete', theme) && [
              'amaui-AutoComplete-input-wrapper'
            ],

            classes.inputWrapper,
            multiple && [
              classes.multiple,
              classes[`inputWrapper_multiple_size_${size}`]
            ],
            chip && classes.chip,
            open && classes.open,
            readOnly && classes.readOnly
          ]),

          onMouseDown,
          onMouseUp,

          onClick,

          onKeyDown: onEnterKeyDown
        }}

        inputProps={{
          disabled: multiple,

          readOnly: multiple,

          ...InputProps,

          className: classNames([
            InputProps?.className,
            multiple && classes.input_
          ])
        }}

        style={{
          ...styles.root,

          ...style
        }}

        {...other}
      >
        {multiple && !chip && !!value.length && (
          <div
            ref={refs.value}

            tabIndex={0}

            onFocus={onFocus}

            onBlur={onBlur}

            onMouseDown={onMouseDown}

            onKeyDown={onEnterKeyDown}

            className={classNames([
              staticClassName('AutoComplete', theme) && [
                'amaui-AutoComplete-input',

                multiple && [
                  chip && `amaui-AutoComplete-chip`,
                  open && `amaui-AutoComplete-open`,
                  readOnly && `amaui-Select-readOnly`
                ],
              ],

              multiple && [
                classes.input,
                chip && classes.chip,
                open && classes.open,
                readOnly && classes.readOnly
              ],
            ])}
          >
            {renderValues(value, onUnselect)}
          </div>
        )}

        {multiple && chip && !!value.length && renderValues(value, onUnselect)}
      </TextField>

      <Menu
        ref={refs.menu}

        open={open && !!menuItems?.length}

        autoSelectOnBlur={autoSelectOnBlur}

        portal={false}

        onClose={() => onClose(false)}

        anchorElement={refs.root.current}

        onExited={onExited}

        menuItems={menuItems}

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

          freezeScroll: false
        }}

        ListProps={{
          menu: true,

          paddingVertical: (is('function', groupBy) && !!options.length) ? 'none' : undefined,

          size,

          role: 'listbox',

          id: refs.ids.list,

          'aria-label': label,

          ...ListProps,

          className: classNames([
            ListProps?.className,
            classes.list
          ]),
        }}

        {...MenuProps}

        className={classNames([
          MenuProps?.className,
          autoWidth && classes.menu_autoWidth
        ])}
      />
    </Line >
  );
});

AutoComplete.displayName = 'amaui-AutoComplete';

export default AutoComplete;
