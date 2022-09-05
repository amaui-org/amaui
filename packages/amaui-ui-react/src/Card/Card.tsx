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
    position: 'relative',

    // reset
    textDecoration: 'none',
  },

  button: {
    cursor: 'pointer',
    userSelect: 'none'
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

      if (is('function', onBlur_)) onBlur_(event)
    }
  }, [focus_, disabled, onBlur_]);

  return (
    <Surface
      ref={ref}

      tabIndex={(href || button) ? 0 : undefined}

      href={href}

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

      {React.Children.toArray(children).map((item: any) => (
        React.cloneElement(item, {
          tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

          version: item.props.version !== undefined ? item.props.version : version,

          elevation: item.props.elevation !== undefined ? item.props.elevation : elevation,

          color: item.props.color || color
        })
      ))}
    </Surface>
  );
});

Card.displayName = 'AmauiCard';

export default Card;
