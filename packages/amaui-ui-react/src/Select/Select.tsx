import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

import TextField from '../TextField';
import List from '../List';
import Menu from '../Menu';

const overflow = {
  width: '100%',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
};

const useStyle = style(theme => ({
  root: {
    width: '100%',
    cursor: 'pointer'
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

  input_align_start: {
    textAlign: 'start'
  },

  input_align_end: {
    textAlign: 'end'
  },

  input_size_small: {
    height: '48px',
    padding: '7px 16px',
    paddingTop: '21px'
  },

  input_size_regular: {
    height: '56px',
    padding: '11px 16px',
    paddingTop: '25px'
  },

  input_size_large: {
    height: '64px',
    padding: '16px 16px',
    paddingTop: '28px'
  },

  input_version_text: {
    '&:not($input_start_icon)': {
      paddingInline: 0
    }
  },

  input_start_icon: {
    paddingInlineStart: 0
  },

  input_end_icon: {
    paddingInlineEnd: 0
  },

  input_version_outlined_size_small: {
    paddingTop: '14px',
    paddingBottom: '14px'
  },

  input_version_outlined_size_regular: {
    paddingTop: '18px',
    paddingBottom: '18px'
  },

  input_version_outlined_size_large: {
    paddingTop: '22px',
    paddingBottom: '22px'
  },

  input_: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    pointerEvents: 'none'
  },

  open: {
    cursor: 'default'
  },

  disabled: {
    cursor: 'default'
  }
}), { name: 'AmauiSelect' });

// To do

// value
// value chips
// value
// versions
// start and end icons
// multiple
// disabled

const Select = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiSelect?.props?.default }), [props_]);

  const {
    value: value_,
    valueDefault,
    size = 'regular',
    version = 'filled',
    startIcon,
    endIcon,
    autoWidth,

    onChange,

    disabled,

    className,
    style,

    children: children_,

    ...other
  } = props;

  const children = React.Children.toArray(children_);

  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);
  const [open, setOpen] = React.useState(false);

  const { classes } = useStyle(props);

  const refs = {
    root: React.useRef<any>()
  };

  const styles: any = {
    root: {},
    menu: {}
  };

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== value) setValue(value_);
  }, [value_]);

  const onClick = React.useCallback(() => {
    if (!disabled) setOpen(value => !value);
  }, []);

  const onClose = React.useCallback(() => {
    if (!disabled) setOpen(false);
  }, []);

  const onSelect = (value: any) => {
    setValue(value);

    if (is('function', onChange)) onChange(value);
  };

  if (refs.root.current) {
    const rect = refs.root.current.getBoundingClientRect();

    if (!autoWidth) {
      styles.menu.minWidth = rect.width;
    }
  }

  const resolveItem = (value: any) => {
    const item: any = children.find((item_: any) => item_.props?.value === value);

    return item && (item.props?.label || item.props?.primary || item.props?.secondary || item.props?.tertiary || item.props?.children);
  };

  return (
    <React.Fragment>
      <TextField
        rootRef={item => {
          if (ref) ref.current = item;

          refs.root.current = item;
        }}

        enabled={open || value}

        focus={open}

        onClick={onClick}

        className={classNames([
          staticClassName('Select', theme) && [
            'AmauiSelect-root',
            `AmauiSelect-version-${version}`,
            `AmauiSelect-size-${size}`,
            startIcon && `AmauiSelect-icon-start`,
            endIcon && `AmauiSelect-icon-end`,
            open && `AmauiSelect-open`,
            disabled && `AmauiSelect-disabled`
          ],

          classes.root,
          className,
          open && classes.open,
          disabled && classes.disabled
        ])}

        size={size}

        version={version}

        startIcon={startIcon}

        endIcon={endIcon}

        disabled={disabled}

        inputProps={{
          className: classNames([
            classes.input_
          ]),

          readOnly: true
        }}

        style={{
          ...style,

          ...styles.root
        }}

        {...other}
      >
        <div
          onClick={onClick}

          className={classNames([
            staticClassName('Select', theme) && [
              'AmauiSelect-input',
              `AmauiSelect-version-${version}`,
              `AmauiSelect-size-${size}`,
              startIcon && `AmauiSelect-icon-start`,
              endIcon && `AmauiSelect-icon-end`,
              open && `AmauiSelect-open`
            ],

            classes.input,
            classes[`input_size_${size}`],
            classes[`input_version_${version}_size_${size}`],
            startIcon && classes.input_start_icon,
            endIcon && classes.input_end_icon,
            open && classes.open
          ])}
        >
          {resolveItem(value)}
        </div>
      </TextField>

      {children && (
        <Menu
          open={open}

          onClose={onClose}

          anchorElement={refs.root.current}

          transformOrigin='center top'

          transformOriginSwitch='center bottom'

          maxWidth='unset'

          style={styles.menu}
        >
          <List menu>
            {children.map((item: any) => (
              React.cloneElement(item, {
                selected: value === item.props?.value,

                onClick: (event: React.MouseEvent) => {
                  onSelect(item.props?.value);

                  if (is('function', item.props?.onClick)) item.props?.onClick(event);

                  setOpen(false);
                }
              })
            ))}
          </List>
        </Menu>
      )}
    </React.Fragment>
  );
});

Select.displayName = 'AmauiSelect';

export default Select;
