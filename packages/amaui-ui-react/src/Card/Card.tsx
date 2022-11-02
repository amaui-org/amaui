import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import Interaction from '../Interaction';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'inline-block',
    overflow: 'hidden',
    borderRadius: `${theme.shape.radius.unit * 3}px`,
    maxWidth: '340px',
    position: 'relative',
    transition: theme.methods.transitions.make('border-radius'),

    // reset
    textDecoration: 'none',
  },

  button: {
    cursor: 'pointer',
    userSelect: 'none',

    '&:active': {
      borderRadius: `${theme.shape.radius.unit * 6}px`,
    }
  },

  href: {
    '&:active': {
      borderRadius: `${theme.shape.radius.unit * 6}px`,
    }
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
    color: color_ = 'primary',
    version = 'filled',
    elevation: elevation_ = 0,

    focus: focus_,
    selected,
    button,
    href,
    disabled,

    onFocus: onFocus_,
    onBlur: onBlur_,

    InteractionProps,

    Component = props.href ? 'a' : 'div',

    className,

    children,

    ...other
  } = props;

  const [focus, setFocus] = React.useState(focus_ !== undefined ? focus_ : false);

  const { classes } = useStyle(props);

  let color = color_;
  let elevation = elevation_;

  if (disabled) {
    color = 'neutral';
    elevation = 0;
  }

  const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (focus_ === undefined && !disabled) {
      setFocus(true);

      if (is('function', onFocus_)) onFocus_(event);
    }
  }, [focus_, disabled, onFocus_]);

  const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (focus_ === undefined && !disabled) {
      setFocus(false);

      if (is('function', onBlur_)) onBlur_(event);
    }
  }, [focus_, disabled, onBlur_]);

  return (
    <Surface
      ref={ref}

      tabIndex={(href || button) && !disabled ? 0 : undefined}

      color={color}

      tonal={tonal}

      version={version}

      elevation={elevation}

      href={href}

      onFocus={onFocus}

      onBlur={onBlur}

      disabled={disabled}

      Component={Component}

      className={classNames([
        staticClassName('Card', theme) && [
          `AmauiCard-root`,
          focus && `AmauiCard-focus`,
          href && `AmauiCard-href`,
          button && `AmauiCard-button`,
          disabled && `AmauiCard-disabled`
        ],

        className,
        classes.root,
        href && classes.href,
        button && classes.button,
        disabled && [
          classes.disabled,
          classes[`disabled_version_${version}`]
        ]
      ])}

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

      {React.Children.toArray(children).map((item: any) => (
        React.cloneElement(item, {
          tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

          version: item.props.version !== undefined ? item.props.version : version,

          elevation: item.props.elevation !== undefined ? item.props.elevation : elevation,

          color: item.props.color !== undefined ? item.props.color : color
        })
      ))}
    </Surface>
  );
});

Card.displayName = 'AmauiCard';

export default Card;
