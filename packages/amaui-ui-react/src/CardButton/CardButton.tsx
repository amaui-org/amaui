import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Interaction from '../Interaction';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    cursor: 'pointer',
    userSelect: 'none'
  }
}), { name: 'AmauiCardButton' });

const CardButton = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiCardButton?.props?.default }), [props_]);

  const {
    focus: focus_,
    selected,
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
    <Component
      ref={ref}

      tabIndex={!disabled ? 0 : -1}

      Component={Component}

      onFocus={onFocus}

      onBlur={onBlur}

      href={href}

      className={classNames([
        staticClassName('CardButton', theme) && [
          `AmauiCardButton-root`,
          href && `AmauiCardButton-href`,
          focus && `AmauiCardButton-focus`,
          disabled && `AmauiCardButton-disabled`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Interaction
        border={false}

        pulse={focus}

        selected={selected}

        {...InteractionProps}
      />

      {children}
    </Component>
  );
});

CardButton.displayName = 'AmauiCardButton';

export default CardButton;
