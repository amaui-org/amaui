import React, { ChangeEvent } from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import IconButton from '../IconButton';
import Fade from '../Fade';
import { IconDoneAnimated } from '../SegmentedButtons/SegmentedButtons';

const useStyle = style(theme => ({
  input: {
    cursor: 'inherit',
    margin: 0,
    padding: 0,
    position: 'absolute',
    inset: 0,
    opacity: 0,
    zIndex: 1
  },
  icon: {
    zIndex: 1,
    pointerEvents: 'none'
  },
  iconBox: {

  },
  iconDone: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    inset: 0,
    width: ['100%', '!important'],
    height: '100%',

    '&:not($indeterminate) > svg': {
      padding: '3px'
    }
  }
}), { name: 'AmauiCheckbox' });

// Outline
const IconMaterialCheckBoxOutlineBlankSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckBoxOutlineBlankSharp'
      short_name='CheckBoxOutlineBlank'

      {...props}
    >
      <path d='M3 21V3H21V21ZM5 19H19V5H5Z' />
    </Icon>
  );
});

// Indeterminate
const IconMaterialIndeterminateCheckBoxSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IndeterminateCheckBoxSharp'
      short_name='IndeterminateCheckBox'

      {...props}
    >
      <path d='M7 13H17V11H7V13Z' />
    </Icon>
  );
});

// Filled
const IconMaterialFilledCheckBoxSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilledCheckBoxSharp'
      short_name='FilledCheckBox'

      {...props}
    >
      <path d='M3 21V3H21V21H3Z ' />
    </Icon>
  );
});

const Checkbox = React.forwardRef((props: any, ref: any) => {
  const {
    color = 'primary',
    colorIndeterminate = props.color,
    colorUnchecked = 'default',
    valueDefault,
    value,
    onChange,
    indeterminate: indeterminate_,
    Component = 'span',

    children,

    ...other
  } = props;
  const [checked, setChecked] = React.useState(valueDefault !== undefined ? valueDefault : value);
  const [indeterminate, setIndeterminate] = React.useState(!checked && indeterminate_);
  const refs = {
    input: React.useRef<HTMLInputElement>()
  };

  const { classes } = useStyle();

  const theme = useAmauiTheme();

  const styles: any = {
    iconBox: {},
    iconDone: {}
  };

  React.useEffect(() => {
    if (valueDefault !== undefined) refs.input.current.checked = valueDefault;
  }, []);

  React.useEffect(() => {
    if (value !== undefined && checked !== value) {
      setChecked(value);

      if (indeterminate) setIndeterminate(false);
    }
  }, [value]);

  const onUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    if (is('function', onChange)) onChange(event);

    // Inner controlled checkbox
    if (!props.hasOwnProperty('value')) {
      setChecked(event.target.checked);

      if (indeterminate) setIndeterminate(false);
    }
  };

  let color_ = indeterminate ? colorIndeterminate : color;
  let palette: any;

  if (!theme.palette.color[color]) palette = theme.methods.color(color_);

  if (props.tonal) {
    // Text
    // Outlined
    if (['text', 'outlined'].includes(props.version)) {
      styles.iconBox.color = styles.iconBox.color = theme.methods.palette.color.value(color_, 10, true, palette);

      styles.iconDone.color = styles.iconDone.color = theme.methods.palette.color.value(color_, 90, true, palette);
    }

    // Filled
    if (props.version === 'filled') styles.iconDone.color = theme.methods.palette.color.value(color_, 90, true, palette);
  }
  else {
    if (!theme.palette.light && props.disabled) styles.iconDone.color = theme.palette.background.default.primary;
    else {
      if (props.version === 'filled') styles.iconDone.color = color_ === 'default' ? theme.palette.text.default.primary : (palette || theme.palette.color[color_])?.main;
      else styles.iconDone.color = theme.methods.palette.color.text(color_ === 'default' ? theme.palette.text.default.primary : (palette || theme.palette.color[color_])?.main, true, 'light');
    }
  }

  let Icon = IconMaterialCheckBoxOutlineBlankSharp;

  if (checked || indeterminate) Icon = IconMaterialFilledCheckBoxSharp;

  let colorValue = color;

  if (!checked) colorValue = colorUnchecked;

  if (indeterminate) colorValue = colorIndeterminate;

  return (
    <IconButton
      color={colorValue}

      Component={Component}

      {...other}
    >
      <input
        ref={refs.input}

        className={classes.input}

        onChange={onUpdate}

        type='checkbox'

        disabled={props.disabled}
      />

      <Fade
        add
        in
      >
        <Icon
          className={classNames([
            classes.icon,
            classes.iconBox
          ])}

          style={styles.iconBox}
        />
      </Fade>

      {indeterminate && (
        <span
          className={classNames([
            classes.icon,
            classes.iconDone,
            indeterminate && classes.indeterminate
          ])}

          style={styles.iconDone}
        >
          <IconMaterialIndeterminateCheckBoxSharp />
        </span>
      )}

      {checked && (
        <IconDoneAnimated
          className={classNames([
            classes.icon,
            classes.iconDone
          ])}

          style={styles.iconDone}

          in
        />
      )}
    </IconButton>
  );
});

export default Checkbox;
