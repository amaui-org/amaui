import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Grow from '../Grow';
import Icon from '../Icon';
import Type from '../Type';
import Surface from '../Surface';
import IconButton from '../IconButton';
import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    minWidth: '340px',
    minHeight: '50px',
    borderRadius: `${theme.shape.radius.unit}px`,
    boxShadow: 'rgb(0 0 0 / 1%) 0px 4px 5px 0px, rgb(0 0 0 / 1%) 0px 1px 10px 0px, rgb(0 0 0 / 1%) 0px 2px 4px -1px'
  },

  aside: {
    marginInlineStart: 'auto'
  },

  size_small: {
    padding: '4px 16px'
  },

  size_regular: {
    padding: '8px 20px'
  },

  size_large: {
    padding: '12px 24px'
  },

  fixed: {
    position: 'fixed',
    zIndex: theme.z_index.modal
  },

  position_top: {
    top: '24px'
  },

  position_bottom: {
    bottom: '24px'
  },

  alignment_start: {
    insetInlineStart: '24px',
    insetInlineEnd: 'auto'
  },

  alignment_center: {
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)'
  },

  alignment_end: {
    insetInlineEnd: '24px',
    insetInlineStart: 'auto'
  }
}), { name: 'AmauiSnackbar' });

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

const Snackbar = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiSnackbar?.props?.default }), [props_]);

  const {
    open = true,
    tonal = true,
    color = 'primary',
    size = 'regular',
    elevation = 0,
    primary,
    aside: aside_,
    position = 'bottom',
    alignment = 'start',
    autoHide = true,
    autoHideDuration = 4000,
    fixed = props.open !== undefined,
    closeButton = true,
    onClose: onClose_,
    TransitionComponent = Grow,
    TransitionComponentProps,
    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const refs = {
    timeout: React.useRef<any>(),
    timeoutStart: React.useRef<any>(),
    timeoutLeftOver: React.useRef<any>(),
    autoHideDuration: React.useRef<any>()
  };

  const { classes } = useStyle(props);

  refs.autoHideDuration.current = autoHideDuration;

  const aside = React.Children.toArray(aside_);

  const onClose = React.useCallback(() => {
    if (is('function', onClose_)) onClose_();
  }, [onClose_]);

  React.useEffect(() => {
    const onFocus = () => {
      if (refs.timeoutLeftOver.current !== undefined) {
        refs.timeout.current = setTimeout(() => onClose(), refs.timeoutLeftOver.current);

        refs.timeoutStart.current = new Date().getTime();
      }
    };

    const onBlur = () => {
      if (refs.timeout.current !== undefined) {
        clearTimeout(refs.timeout.current);

        refs.timeoutLeftOver.current = refs.autoHideDuration.current - (new Date().getTime() - refs.timeoutStart.current);
      }
    };

    window.addEventListener('focus', onFocus);

    window.addEventListener('blur', onBlur);

    return () => {
      window.removeEventListener('focus', onFocus);

      window.removeEventListener('blur', onBlur);
    };
  }, []);

  React.useEffect(() => {
    if (open) {
      if (autoHide && props.open !== undefined) {
        refs.timeout.current = setTimeout(() => onClose(), autoHideDuration);

        refs.timeoutStart.current = new Date().getTime();
      }
    }
    else {
      clearTimeout(refs.timeout.current);

      refs.timeout.current = refs.timeoutStart.current = refs.timeoutLeftOver.current = undefined;
    }
  }, [open, autoHide]);

  if (props.open !== undefined) {
    if (closeButton) {
      aside.push(
        <IconButton
          version='text'

          color='inherit'

          onClick={onClose}
        >
          <IconMaterialCloseRounded />
        </IconButton>
      )
    }
  }

  return (
    <TransitionComponent
      in={open}

      {...TransitionComponentProps}
    >
      <Surface
        ref={ref}

        tonal={tonal}

        color={color}

        elevation={elevation}

        Component={Line}

        wrap='wrap'

        direction='row'

        align='center'

        justify='space-between'

        gap={2}

        className={classNames([
          staticClassName('Snackbar', theme) && [
            `AmauiSnackbar-root`,
            `AmauiSnackbar-size-${size}`
          ],

          className,
          classes.root,
          classes[`size_${size}`],
          fixed && [
            classes.fixed,
            classes[`position_${position}`],
            classes[`alignment_${alignment}`]
          ]
        ])}

        {...other}
      >
        {(children !== undefined || primary !== undefined) && (
          <div
            className={classNames([
              staticClassName('Snackbar', theme) && [
                `AmauiSnackbar-primary`
              ],

              classes.primary
            ])}
          >
            {is('string', primary) ? (
              <Type
                color='inherit'

                version='b2'
              >
                {primary}
              </Type>
            ) : primary}

            {children}
          </div>
        )}

        {!!aside.length && (
          <Line
            direction='row'

            wrap='wrap'

            align='center'

            justify='flex-end'

            gap={0}

            className={classNames([
              staticClassName('Snackbar', theme) && [
                `AmauiSnackbar-aside`
              ],

              classes.aside
            ])}
          >
            {aside}
          </Line>
        )}
      </Surface>
    </TransitionComponent>
  );
});

Snackbar.displayName = 'AmauiSnackbar';

export default Snackbar;
