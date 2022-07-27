import React, { ChangeEvent } from 'react';

import { is } from '@amaui/utils';
import { style, useAmauiTheme } from '@amaui/style-react';

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
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    inset: 0,
    width: ['100%', '!important'],
    height: '100%',

    '& > svg': {
      padding: '2px'
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
      <path d='M7 13H17V11H7ZM3 21V3H21V21Z' />
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
    icon: {}
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

  if (checked) {
    let palette: any;

    if (!theme.palette.color[color]) palette = theme.methods.color(color);

    styles.icon.color = theme.methods.palette.color.text((palette || theme.palette.color[color])?.main, true, 'light');
  }

  let Icon = IconMaterialCheckBoxOutlineBlankSharp;

  if (checked) Icon = IconMaterialFilledCheckBoxSharp;

  let colorValue = color;

  if (!checked) colorValue = colorUnchecked;

  if (indeterminate) {
    Icon = IconMaterialIndeterminateCheckBoxSharp;

    colorValue = colorIndeterminate;
  }

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
      />

      <Fade
        add
        in
      >
        <Icon />
      </Fade>

      {checked && (
        <IconDoneAnimated
          className={classes.icon}

          style={styles.icon}

          in
        />
      )}
    </IconButton>
  );
});

export default Checkbox;
