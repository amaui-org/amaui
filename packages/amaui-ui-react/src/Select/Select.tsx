import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

import TextField from '../TextField';
import List from '../List';
import Menu from '../Menu';

const useStyle = style(theme => ({
  root: {
    width: '100%',
    cursor: 'pointer'
  },

  open: {
    cursor: 'default'
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

  input: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    pointerEvents: 'none'
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

  const [open, setOpen] = React.useState(false);

  const { classes } = useStyle(props);

  const refs = {
    root: React.useRef<any>()
  };

  const {
    size = 'regular',
    version = 'filled',
    startIcon,
    endIcon,
    autoWidth,

    onChange,

    disabled,

    className,
    style,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {},
    menu: {}
  };

  const onClick = React.useCallback(() => {
    if (!disabled) setOpen(value => !value);
  }, []);

  const onClose = React.useCallback(() => {
    if (!disabled) setOpen(false);
  }, []);

  if (refs.root.current) {
    const rect = refs.root.current.getBoundingClientRect();

    if (!autoWidth) {
      styles.menu.minWidth = rect.width;
    }
  }

  return (
    <React.Fragment>
      <TextField
        rootRef={item => {
          if (ref) ref.current = item;

          refs.root.current = item;
        }}

        enabled={open}
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
          classes[`input_size_${size}`],
          classes[`input_version_${version}_size_${size}`],
          startIcon && classes.input_start_icon,
          endIcon && classes.input_end_icon,
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
            classes.input
          ])
        }}

        style={{
          ...style,

          ...styles.root
        }}

        {...other}
      />

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
            {children}
          </List>
        </Menu>
      )}
    </React.Fragment>
  );
});

Select.displayName = 'AmauiSelect';

export default Select;
