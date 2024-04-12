import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import Interaction from '../Interaction';
import { ISurface } from '../Surface/Surface';
import Line from '../Line';
import { staticClassName } from '../utils';
import { IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    borderRadius: `${theme.shape.radius.unit * 3}px`,
    maxWidth: '340px',
    overflow: 'hidden',
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
}), { name: 'amaui-Card' });

export interface ICard extends ISurface {
  focus?: boolean;
  selected?: boolean;
  button?: boolean;
  href?: boolean;
  disabled?: boolean;

  onFocus?: (event: React.FocusEvent<any>) => any;
  onBlur?: (event: React.FocusEvent<any>) => any;

  InteractionProps?: IPropsAny;
}

const Card: React.FC<ICard> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiCard?.props?.default, ...props_ }), [props_]);

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

  const { classes } = useStyle();

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

      gap={0}

      tabIndex={(href || button) && !disabled ? 0 : undefined}

      color={color}

      tonal={tonal}

      version={version}

      elevation={elevation}

      href={href}

      onFocus={onFocus}

      onBlur={onBlur}

      disabled={disabled}

      AdditionalProps={{
        Component
      }}

      Component={Line}

      className={classNames([
        staticClassName('Card', theme) && [
          `amaui-Card-root`,
          focus && `amaui-Card-focus`,
          disabled && `amaui-Card-disabled`
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

Card.displayName = 'amaui-Card';

export default Card;
