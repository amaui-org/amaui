import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Grow from '../Grow';
import Icon from '../Icon';
import Type from '../Type';
import Surface from '../Surface';
import IconButton from '../IconButton';
import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    minWidth: '340px',
    minHeight: '50px',
    borderRadius: `${theme.shape.radius.unit}px`,
    boxShadow: 'rgb(0 0 0 / 1%) 0px 4px 5px 0px, rgb(0 0 0 / 1%) 0px 1px 10px 0px, rgb(0 0 0 / 1%) 0px 2px 4px -1px'
  },

  end: {
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

  alignment_left: {
    left: '24px',
    right: 'auto'
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

  alignment_right: {
    right: '24px',
    left: 'auto'
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
    tonal = true,
    color = 'primary',
    size = 'regular',
    elevation = 0,

    open = true,

    primary,
    end: end_,
    position = 'bottom',
    alignment = 'start',
    autoHide = true,
    autoHideDuration = 4000,
    fixed = props.open !== undefined,
    closeButton = true,

    onMouseEnter: onMouseEnter_,
    onMouseLeave: onMouseLeave_,
    onClose: onClose_,

    TransitionComponent = Grow,

    TransitionComponentProps,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>(),
    timeout: React.useRef<any>(),
    timeoutStart: React.useRef<any>(),
    timeoutLeftOver: React.useRef<any>(),
    autoHideDuration: React.useRef<any>()
  };

  const { classes } = useStyle(props);

  refs.autoHideDuration.current = autoHideDuration;

  const end = React.Children.toArray(end_);

  const addTimeout = (value = autoHideDuration) => {
    refs.timeout.current = setTimeout(() => onClose(), value);

    refs.timeoutStart.current = new Date().getTime();
  };

  const removeTimeout = () => {
    clearTimeout(refs.timeout.current);

    refs.timeoutLeftOver.current = refs.autoHideDuration.current - (new Date().getTime() - refs.timeoutStart.current);
  };

  const onMouseEnter = React.useCallback(() => {
    if (refs.timeout.current !== undefined) removeTimeout();

    if (is('function', onMouseEnter_)) onMouseEnter_();
  }, [onMouseEnter_]);

  const onMouseLeave = React.useCallback(() => {
    if (refs.timeoutLeftOver.current !== undefined) addTimeout(refs.timeoutLeftOver.current);

    if (is('function', onMouseLeave_)) onMouseLeave_();
  }, [onMouseLeave_]);

  const onClose = React.useCallback(() => {
    if (is('function', onClose_)) onClose_();
  }, [onClose_]);

  React.useEffect(() => {
    const onTabFocus = () => {
      if (refs.timeoutLeftOver.current !== undefined) addTimeout(refs.timeoutLeftOver.current);
    };

    const onTabBlur = () => {
      if (refs.timeout.current !== undefined) removeTimeout();
    };

    const onBlur = (event: FocusEvent) => {
      if (refs.timeoutLeftOver.current !== undefined) addTimeout(refs.timeoutLeftOver.current);
    };

    const onFocus = (event: FocusEvent) => {
      if (refs.root.current?.contains(event.target)) {
        if (refs.timeout.current !== undefined) removeTimeout();
      }
    };

    window.addEventListener('focus', onTabFocus);

    window.addEventListener('blur', onTabBlur);

    window.document.addEventListener('focusin', onFocus);

    window.document.addEventListener('focusout', onBlur);

    return () => {
      window.removeEventListener('focus', onTabFocus);

      window.removeEventListener('blur', onTabBlur);

      window.document.removeEventListener('focusin', onFocus);

      window.document.removeEventListener('focusout', onBlur);
    };
  }, []);

  React.useEffect(() => {
    if (open) {
      if (autoHide && props.open !== undefined) addTimeout();
    }
    else {
      clearTimeout(refs.timeout.current);

      refs.timeout.current = refs.timeoutStart.current = refs.timeoutLeftOver.current = undefined;
    }
  }, [open, autoHide]);

  if (props.open !== undefined) {
    if (closeButton) {
      end.push(
        <IconButton
          version='text'

          color='inherit'

          onClick={onClose}
        >
          <IconMaterialCloseRounded />
        </IconButton>
      );
    }
  }

  return (
    <TransitionComponent
      in={open}

      {...TransitionComponentProps}
    >
      <Surface
        ref={item => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.root.current = item;
        }}

        tonal={tonal}

        color={color}

        elevation={elevation}

        gap={2}

        wrap='wrap'

        direction='row'

        align='center'

        justify='space-between'

        onMouseEnter={onMouseEnter}

        onMouseLeave={onMouseLeave}

        Component={Line}

        className={classNames([
          staticClassName('Snackbar', theme) && [
            `AmauiSnackbar-root`,
            `AmauiSnackbar-position-${position}`,
            `AmauiSnackbar-alignment-${alignment}`,
            `AmauiSnackbar-size-${size}`,
            autoHide && `AmauiSnackbar-auto-hide`,
            fixed && `AmauiSnackbar-fixed`
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

        {!!end.length && (
          <Line
            gap={0}

            direction='row'

            wrap='wrap'

            align='center'

            justify='flex-end'

            className={classNames([
              staticClassName('Snackbar', theme) && [
                `AmauiSnackbar-end`
              ],

              classes.end
            ])}
          >
            {end}
          </Line>
        )}
      </Surface>
    </TransitionComponent>
  );
});

Snackbar.displayName = 'AmauiSnackbar';

export default Snackbar;
