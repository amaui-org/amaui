import React from 'react';

import { is, unique } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

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

const useStyle = styleMethod((theme: AmauiTheme) => ({
  root: {
    width: '100%',
    flex: 'unset',

    '& .AmauiTextField-input': {
      width: 'auto'
    }
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
    '&.AmauiTextField-input-wrapper': {
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

  readOnly: {
    '&.AmauiTextField-input-wrapper': {
      cursor: 'default'
    }
  },

  list: {
    maxHeight: '40vh',
    overflow: 'auto'
  },

  limitText: {
    alignSelf: 'center',
    color: theme.palette.text.default.primary
  },

  roundProgress: {
    padding: '0 8px'
  },

  disabled: {
    '&.AmauiTextField-input-wrapper': {
      cursor: 'default'
    }
  }
}), { name: 'AmauiAutoComplete' });

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
  valueInput?: TAutoCompleteValue;
  valueInputDefault?: TAutoCompleteValue;
  onChangeInput?: (value: TAutoCompleteValue) => any;

  multiple?: boolean;
  autoWidth?: boolean;
  readOnly?: boolean;
  getLabel?: (element: TElement, props: TPropsAny) => TElement;
  renderValues?: (value: TAutoCompleteValue, onUnselect: (value: string) => any) => TElement;
  renderChip?: (value: any, props: TPropsAny) => TElement;
  renderOption?: (item: TAutoCompleteOption, index: number, props: TPropsAny) => TElement;
  chip?: boolean;
  optionEqualValue?: (value: string, item: TAutoCompleteOption) => boolean;
  filter?: (value: string, options: Array<TAutoCompleteOption>) => Array<TAutoCompleteOption>;
  options?: Array<TAutoCompleteOption>;
  clear?: boolean;
  loading?: boolean;
  autoSelectOnBlur?: boolean;
  blurOnSelect?: boolean;
  noOptions?: boolean;
  openOnFocus?: boolean;
  closeOnSelect?: boolean;
  clearOnEscape?: boolean;
  groupBy?: (value: TAutoCompleteOption) => string;
  limit?: number;
  filterOutSelectedOptions?: boolean;
  selectOnFocus?: boolean;
  clearOnBlur?: boolean;

  disabled?: boolean;

  IconClear?: TElementReference;

  ChipGroupProps?: TPropsAny;
  ListProps?: TPropsAny;
  MenuProps?: TPropsAny;
}

const AutoComplete = React.forwardRef((props_: IAutoComplete, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiAutoComplete?.props?.default }), [props_]);

  const {
    tonal,
    color = 'primary',
    size = 'regular',
    version = 'filled',

    valueInput: valueInput_,
    valueInputDefault,
    onChangeInput,

    value: value_,
    valueDefault,
    onChange,

    multiple,
    prefix,
    sufix,
    start,
    end,
    autoWidth,
    readOnly,
    getLabel,
    renderValues: renderValues_,
    renderChip,
    renderOption,
    chip,
    optionEqualValue,
    filter,
    options: options_ = [],
    clear = true,
    loading,
    autoSelectOnBlur,
    blurOnSelect = false,
    noOptions = true,
    openOnFocus = true,
    closeOnSelect = true,
    clearOnEscape,
    groupBy,
    limit,
    filterOutSelectedOptions,
    selectOnFocus,
    clearOnBlur,

    disabled,

    IconClear = IconMaterialCloseRounded,

    ChipGroupProps,
    ListProps,
    MenuProps,

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
    menu: React.useRef<any>(),
    input: React.useRef<HTMLInputElement>()
  };

  const styles: any = {
    root: {

    }
  };

  React.useEffect(() => {
    const method = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (clearOnEscape) onClear();

        onClose(true);
      }
    };

    window.addEventListener('keydown', method);

    window.addEventListener('mouseup', onMouseUp as any);

    setInit(true);

    return () => {
      // Clean up
      window.removeEventListener('mouseup', onMouseUp as any);

      window.removeEventListener('keydown', method);
    };
  }, []);

  React.useEffect(() => {
    const item = (options_ || []).find(item_ => item_.label === valueInput);

    if (!!valueInput?.length && !open && !item && !disabled && !readOnly) setOpen(!free);
  }, [valueInput, free]);

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== valueInput) setValueInput(value_);
  }, [value_]);

  React.useEffect(() => {
    if (init && loading) setOpen(true);
  }, [loading]);

  const updateOptions = (newValue: any = valueInput, newOptions: any = undefined) => {
    let optionsValue = options_;

    // reset
    setFree(false);

    if (loading) optionsValue = [{ label: 'Loading...', version: 'text' }];
    else if (newOptions) optionsValue = newOptions;
    else optionsValue = is('function', filter) ? filter(newValue, options_) : options_.filter(item => is('function', optionEqualValue) ? optionEqualValue(newValue, item) : item?.label?.toLowerCase().includes(newValue?.toLowerCase()));

    if (!optionsValue.length) {
      if (noOptions) optionsValue.push({ label: 'No options', version: 'text', noOptions: true });
      else {
        setOpen(false);

        setFree(true);

        return;
      }
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
            const item = options.find(item_ => item_.label === valueInput);

            if (!item) onClear();
          }
        }

        return false;
      });
    }
  };

  const onExited = () => {
    if (!disabled && !readOnly) {
      if (!open) {
        const item = (options_ || []).find(item_ => item_.label === valueInput);

        // Update options to all values
        // if value is one of the option values
        if (item || !valueInput || options[0]?.noOptions) updateOptions(undefined, options_);
      }
    }
  };

  const onChangeValue = React.useCallback((newValue: any) => {
    if (!disabled && !readOnly) {
      updateOptions(newValue);

      setValueInput(newValue);
    }
  }, []);

  const onClear = React.useCallback((refocus = true) => {
    if (!disabled && !readOnly) {
      setValueInput('');
      setValue([]);

      if (refocus) refs.input.current.focus();
    }
  }, []);

  const onSelect = (newValue: any) => {
    let values = multiple ? is('array', value) ? value : [value] : valueInput;

    values = multiple ? unique([...values, newValue]) : newValue;

    if (!multiple) {
      if (is('function', onChange)) onChange(newValue);
    }
    else {
      if (is('function', onChangeInput)) onChangeInput(newValue);

      if (is('function', onChange)) onChange(values);
    }

    // Inner controlled value
    if (!props.hasOwnProperty('value')) {
      if (!multiple) setValueInput(newValue);
      else {
        setValueInput('');

        setValue(values);
      }
    }
  };

  const onUnselect = (itemValue: any) => {
    if (multiple) {
      let values = is('array', value) ? value : [value];

      values = (values as any).filter(item => item !== itemValue);

      // Inner controlled value
      if (!props.hasOwnProperty('value')) setValue(values);

      if (is('function', onChange)) onChange(values);
    }
  };

  const renderValue = (itemValue: any) => {
    const item: any = children.find((item_: any) => item_.props?.value === itemValue);

    const getItemLabel = getLabel || (() => {
      return (item.props?.label || item.props?.primary || item.props?.secondary || item.props?.tertiary || item.props?.children);
    });

    return item ? getItemLabel(item, props) : itemValue;
  };

  const renderValues = renderValues_ || ((value__ = value, onUnselectMethod = onUnselect) => {
    if (multiple) {
      if (chip) {
        let values = value__;

        if (is('number', limit) && !open) values = values.slice(0, limit);

        values = (values as any).map((item: any, index: number) => {
          const other_ = {
            key: item,

            onClick: (event: React.MouseEvent<any>) => {
              event.preventDefault();
              event.stopPropagation();
            },

            onRemove: (event: React.MouseEvent<any>) => {
              event.preventDefault();
              event.stopPropagation();

              onUnselectMethod(item);
            },

            input: true
          };

          if (is('function', renderChip)) return renderChip(renderValue(item), other_);

          return (
            <Chip
              key={index}

              {...other_}
            >
              {renderValue(item)}
            </Chip>
          );
        });

        if (is('number', limit) && !open && value.length - limit > 0) (values as any).push(
          <Type
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
    optionsToUse = optionsToUse.filter(item_ => {
      const item = multiple ? value.includes(item_.label) : valueInput === item_.label;

      return !item;
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

  const renderOptionValue = (values: any) => {
    return values.map((item: any, index: number) => {
      let other_: any = {};

      const button = item.version === undefined || item.version === 'button';

      if (button) {
        other_ = {
          primary: item.label,

          value: item.label,

          button,

          selected: multiple ? value.includes(item.label) : valueInput === item.label,

          onClick: (event: React.MouseEvent) => {
            if (multiple && value.includes(item.label)) onUnselect(item.label);
            else onSelect(item.label);

            if (is('function', item.props?.onClick)) item.props?.onClick(event);

            if (!multiple) {
              if (blurOnSelect) {
                if (closeOnSelect) setOpen(false);

                refs.input.current.blur();
              }
              else if (closeOnSelect) onClose();
            }
          }
        };
      }
      else {
        other_.secondary = item.label;
      }

      other_.onMouseUp = onMouseUp;

      other_.onMouseDown = onMouseDown;

      return (
        is('function', renderOption) ?
          renderOption(item, index, { ...other_, ...item.props }) :

          <ListItem
            key={index}

            preselected={!open ? false : undefined}

            {...other_}

            {...item.props}
          />
      );
    });
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
        >
          <IconClear />
        </IconButton>
      ),

      <IconButton
        key={3}

        onClick={onClickArrowDown}

        InteractionProps={{
          clear: !!(multiple ? value.length : valueInput)
        }}
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

  return (
    <Line
      gap={0}

      direction='column'

      className={classNames([
        staticClassName('AutoComplete', theme) && [
          'AmauiAutoComplete-wrapper'
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

        value={valueInput}

        onChange={onChangeValue}

        enabled={open || focus || mouseDown || !!(multiple ? (value.length || valueInput) : valueInput)}

        focus={open || focus || mouseDown}

        className={
          classNames([
            staticClassName('AutoComplete', theme) && [
              'AmauiAutoComplete-root',
              open && `AmauiAutoComplete-open`,
              mouseDown && `AmauiAutoComplete-mouse-down`,
              focus && `AmauiAutoComplete-focus`,
              chip && `AmauiAutoComplete-chip`,
              multiple && `AmauiAutoComplete-multiple`,
              autoWidth && `AmauiAutoComplete-auto-width`,
              clear && `AmauiAutoComplete-clear`,
              loading && `AmauiAutoComplete-loading`,
              autoSelectOnBlur && `AmauiAutoComplete-auto-select-on-blur`,
              blurOnSelect && `AmauiAutoComplete-blur-on-select`,
              openOnFocus && `AmauiAutoComplete-open-on-focus`,
              noOptions && `AmauiAutoComplete-no-options`,
              closeOnSelect && `AmauiAutoComplete-close-on-select`,
              clearOnEscape && `AmauiAutoComplete-clear-on-escape`,
              limit !== undefined && `AmauiAutoComplete-limit`,
              selectOnFocus && `AmauiAutoComplete-select-on-focus`,
              clearOnBlur && `AmauiAutoComplete-clear-on-blur`
            ],

            className,
            classes.root,
            open && classes.open,
            disabled && classes.disabled
          ])
        }

        tonal={tonal}

        color={color}

        size={size}

        version={version}

        prefix={prefix}

        sufix={sufix}

        start={start}

        end={endIcons}

        readOnly={readOnly}

        endVerticalAlign='center'

        disabled={disabled}

        InputWrapperProps={{
          className: classNames([
            staticClassName('AutoComplete', theme) && [
              'AmauiAutoComplete-input-wrapper'
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
          className: classNames([
            multiple && classes.input_
          ]),

          disabled: multiple,

          readOnly: multiple
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
                'AmauiAutoComplete-input',

                multiple && [
                  chip && `AmauiAutoComplete-chip`,
                  open && `AmauiAutoComplete-open`,
                  readOnly && `AmauiSelect-readOnly`
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

      {children && (
        <Menu
          ref={refs.menu}

          open={open}

          autoSelectOnBlur={autoSelectOnBlur}

          onSelect={onSelect}

          portal={false}

          onClose={() => onClose(false)}

          onExited={onExited}

          anchorElement={refs.root.current}

          transformOrigin='center top'

          transformOriginSwitch='center bottom'

          maxWidth='unset'

          AppendProps={{
            ...(!autoWidth ? {
              alignment: 'start',

              additional: (rects: any) => {

                return {
                  style: {
                    minWidth: rects?.root?.width
                  }
                };
              }
            } : undefined)
          }}

          ModalProps={{
            // focus: !MenuProps.portal

            freezeScroll: false
          }}

          ListProps={{
            menu: true,

            paddingVertical: (is('function', groupBy) && !!options.length) ? 'none' : undefined,

            size,

            ...ListProps,

            className: classNames([
              ListProps?.className,
              classes.list
            ]),
          }}

          {...MenuProps}
        >
          {renderList()}
        </Menu>
      )}
    </Line>
  );
});

AutoComplete.displayName = 'AmauiAutoComplete';

export default AutoComplete;
