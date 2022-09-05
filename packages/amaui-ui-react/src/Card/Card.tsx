import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import Interaction from '../Interaction';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'inline-block',
    overflow: 'hidden',
    borderRadius: `${theme.shape.radius.unit * 1.5}px`,
    maxWidth: '340px',

    // reset
    textDecoration: 'none',
  },

  button: {
    cursor: 'pointer'
  },

  disabled: {
    cursor: 'pointer',
    pointerEvents: 'none',
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  }
}), { name: 'AmauiCard' });

const Card = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiCard?.props?.default }), [props_]);

  const {
    tonal = true,
    color = 'primary',
    version = 'filled',
    elevation = 0,
    focus: focus_,
    onFocus: onFocus_,
    onBlur: onBlur_,
    selected,
    button,
    href,
    disabled,

    Component = props.href ? 'a' : 'div',
    InteractionProps,

    className,

    children,

    ...other
  } = props;

  const [focus, setFocus] = React.useState(focus_ !== undefined ? focus_ : false);

  const { classes } = useStyle(props);

  const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (focus_ === undefined && !disabled) {
      setFocus(true);

      if (is('function', onFocus_)) onFocus_(event);
    }
  }, [focus_, disabled, onFocus_]);

  const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (focus_ === undefined && !disabled) {
      setFocus(false);

      if (is('function', onBlur_)) onBlur_(event)
    }
  }, [focus_, disabled, onBlur_]);

  return (
    <Surface
      ref={ref}

      tabIndex={(href || button) ? 0 : undefined}

      Component={Component}

      color={color}

      tonal={tonal}

      version={version}

      elevation={elevation}

      onFocus={onFocus}

      onBlur={onBlur}

      className={classNames([
        staticClassName('Card', theme) && [
          `AmauiCard-root`,
          focus && `AmauiCard-focus`,
          (href || button) && `AmauiCard-button`,
          disabled && `AmauiCard-disabled`
        ],

        className,
        classes.root,
        (href || button) && classes.button,
        disabled && [
          classes.disabled,
          classes[`disabled_version_${version}`]
        ]
      ])}

      disabled={disabled}

      {...other}
    >
      {(href || button) && (
        <Interaction
          border={false}

          pulse={focus}

          selected={selected}

          {...InteractionProps}
        />
      )}

      {children}
    </Surface>
  );
});

Card.displayName = 'AmauiCard';

export default Card;
