import React from 'react';

import { is, wait } from '@amaui/utils';
import { style, classNames, useAmauiTheme } from '@amaui/style-react';

import Fade from '../Fade';

import { staticClassName } from '../utils';

import Modal from '../Modal';
import Type from '../Type';
import Append from '../Append';

const useStyle = style(theme => ({
  root: {
    inset: '0px auto auto 0px !important'
  },

  labelRoot: {
    display: 'inline-flex',
    marginTop: '16px'
  },

  label: {
    borderRadius: '4px',
    padding: '4px 8px',
    lineHeight: '1.5'
  },

  // Color
  default: {
    color: theme.methods.palette.color.value('neutral', 90, true),
    background: theme.palette.color.neutral[theme.palette.light ? 40 : 20]
  },

  neutral: {
    color: theme.methods.palette.color.text(theme.palette.color.neutral.main, true, 'light'),
    background: theme.palette.color.neutral.main,
  },

  primary: {
    color: theme.methods.palette.color.text(theme.palette.color.primary.main, true, 'light'),
    background: theme.palette.color.primary.main
  },

  secondary: {
    color: theme.methods.palette.color.text(theme.palette.color.secondary.main, true, 'light'),
    background: theme.palette.color.secondary.main
  },

  tertiary: {
    color: theme.methods.palette.color.text(theme.palette.color.tertiary.main, true, 'light'),
    background: theme.palette.color.tertiary.main
  },

  quaternary: {
    color: theme.methods.palette.color.text(theme.palette.color.quaternary.main, true, 'light'),
    background: theme.palette.color.quaternary.main
  },

  info: {
    color: theme.methods.palette.color.text(theme.palette.color.info.main, true, 'light'),
    background: theme.palette.color.info.main
  },

  success: {
    color: theme.methods.palette.color.text(theme.palette.color.success.main, true, 'light'),
    background: theme.palette.color.success.main
  },

  warning: {
    color: theme.methods.palette.color.text(theme.palette.color.warning.main, true, 'light'),
    background: theme.palette.color.warning.main
  },

  error: {
    color: theme.methods.palette.color.text(theme.palette.color.error.main, true, 'light'),
    background: theme.palette.color.error.main
  },

  // Tonal
  tonal_neutral: {
    color: theme.methods.palette.color.value('neutral', 90),
    background: theme.methods.palette.color.value('neutral', 30)
  },

  tonal_primary: {
    color: theme.methods.palette.color.value('primary', 90),
    background: theme.methods.palette.color.value('primary', 30)
  },

  tonal_secondary: {
    color: theme.methods.palette.color.value('secondary', 90),
    background: theme.methods.palette.color.value('secondary', 30)
  },

  tonal_tertiary: {
    color: theme.methods.palette.color.value('tertiary', 90),
    background: theme.methods.palette.color.value('tertiary', 30)
  },

  tonal_quaternary: {
    color: theme.methods.palette.color.value('quaternary', 90),
    background: theme.methods.palette.color.value('quaternary', 30)
  },

  tonal_info: {
    color: theme.methods.palette.color.value('info', 90),
    background: theme.methods.palette.color.value('info', 30)
  },

  tonal_success: {
    color: theme.methods.palette.color.value('success', 90),
    background: theme.methods.palette.color.value('success', 30)
  },

  tonal_warning: {
    color: theme.methods.palette.color.value('warning', 90),
    background: theme.methods.palette.color.value('warning', 30)
  },

  tonal_error: {
    color: theme.methods.palette.color.value('error', 90),
    background: theme.methods.palette.color.value('error', 30)
  },

  fullWidth: { width: `calc(100% - ${theme.methods.space.value('xl') * 2}px)` },

  // maxWidth
  xxs: { maxWidth: `320px` },

  xs: { maxWidth: `400px` },

  sm: { maxWidth: `480px` },

  rg: { maxWidth: `560px` },

  lg: { maxWidth: `800px` },

  xl: { maxWidth: `1120px` },

  xxl: { maxWidth: `1360px` },
}), { name: 'AmauiTooltip' });

// To do

// arrow

// examples
// all positions and alignments
// all transitions
// max width
// color
// tonal
// disable interactive
// follow cursor
// controlled tooltip
// custom label value y

const Tooltip = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTooltip?.props?.default }), [props_]);

  const {
    open: open_,

    label,

    tonal,
    color = 'default',
    follow,
    leaveDelay = 0,
    enterDelay = 104,
    position = 'bottom',
    alignment = 'center',
    portal = true,
    fullWidth,
    maxWidth: maxWidth_ = 'xxs',

    touch: touch_ = true,
    longPress: longPress_ = false,
    hover: hover_ = true,
    focus: focus_ = true,

    onOpen: onOpen_,
    onClose: onClose_,

    TransitionComponent = Fade,
    TransitionComponentProps = {},

    AppendProps = {},
    ModalProps = {},

    disableInteractive,

    className,

    children,

    ...other
  } = props;

  const [open, setOpen] = React.useState(open_);
  const [hover, setHover] = React.useState(false);
  const [touch, setTouch] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [longPress, setLongPress] = React.useState(false);
  const [anchor, setAnchor] = React.useState<any>();
  const [inProp, setInProp] = React.useState(open_);

  const refs = {
    open: React.useRef(false),
    longPress: React.useRef(false),
    longPressTimer: React.useRef<any>()
  };

  const { classes } = useStyle(props);

  const styles: any = {
    label: {}
  };

  let maxWidth = maxWidth_;

  if (fullWidth) maxWidth = undefined;

  const onMouseDown = React.useCallback((event: React.MouseEvent<any>) => {
    if (longPress_) {
      refs.longPressTimer.current = setTimeout(() => setLongPress(true), 700);

      if (is('function', children?.props.onMouseDown)) children.props.onMouseDown(event);
    }
  }, []);

  const onMouseUp = React.useCallback((event: React.MouseEvent<any>) => {
    if (longPress_) {
      clearTimeout(refs.longPressTimer.current);

      setLongPress(false);

      if (is('function', children?.props.onMouseUp)) children.props.onMouseUp(event);
    }
  }, []);

  const onMouseEnter = React.useCallback((event: React.MouseEvent<any>) => {
    if (hover_) {
      setHover(true);

      if (is('function', children?.props.onMouseEnter)) children.props.onMouseEnter(event);
    }
  }, []);

  const onMouseLeave = React.useCallback((event: React.MouseEvent<any>) => {
    if (refs.longPress.current) {
      setLongPress(false);

      setInProp(false);
    }

    if (hover_) {
      setHover(false);

      if (is('function', children?.props.onMouseLeave)) children.props.onMouseLeave(event);
    }
  }, []);

  const onTouchStart = React.useCallback((event: React.MouseEvent<any>) => {
    if (touch_) {
      setTouch(true);

      if (is('function', children?.props.onTouchStart)) children.props.onTouchStart(event);
    }
  }, []);

  const onTouchEnd = React.useCallback((event: React.MouseEvent<any>) => {
    if (touch_) {
      setTouch(false);

      if (is('function', children?.props.onTouchEnd)) children.props.onTouchEnd(event);
    }
  }, []);

  const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (focus_) {
      setFocus(true);

      if (is('function', children?.props.onFocus)) children.props.onFocus(event);
    }
  }, []);

  const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (refs.longPress.current) {
      setLongPress(false);

      setInProp(false);
    }

    if (focus_) {
      setFocus(false);

      if (is('function', children?.props.onBlur)) children.props.onBlur(event);
    }
  }, []);

  const onMouseMove = React.useCallback((event: MouseEvent) => {
    if (follow) {
      setAnchor({
        x: event.clientX,
        y: event.clientY,
        width: 10,
        height: 20
      });
    }
  }, []);

  const onOpen = async () => {
    await wait(enterDelay);

    if (refs.open.current) {
      if (!open) setOpen(true);
      if (!inProp) setInProp(true);

      if (is('function', onOpen_) && open) onOpen_();
    }
  };

  const onClose = async () => {
    await wait(leaveDelay);

    if (!refs.open.current) {
      setOpen(false);

      if (is('function', onClose_) && open) onClose_();
    }
  };

  React.useEffect(() => {
    if (open_ && !open) onOpen();
    else if (!open_ && open) setInProp(false);
  }, [open_]);

  React.useEffect(() => {
    refs.open.current = (touch || hover || longPress);

    if (refs.open.current) onOpen();
    else setInProp(false);
  }, [touch, hover, longPress]);

  React.useEffect(() => {
    refs.open.current = focus;

    if (refs.open.current) onOpen();
    else setInProp(false);
  }, [focus]);

  React.useEffect(() => {
    if (longPress) refs.open.current = longPress;

    refs.longPress.current = longPress;

    if (refs.open.current) onOpen();
  }, [longPress]);

  if (!classes[color]) {
    const palette = theme.methods.color(color);

    if (tonal) {
      styles.label.color = theme.methods.palette.color.value(undefined, 90, true, palette);
      styles.label.background = theme.methods.palette.color.value(undefined, 30, true, palette);
    }
    else {
      styles.label.color = theme.methods.palette.color.text(palette.main, true, 'light');
      styles.label.background = palette.main;
    }
  }

  return (
    <Append
      open={open}

      relativeTo='window'

      anchor={anchor}
      position={position}
      alignment={alignment}

      {...AppendProps}

      element={(
        <Modal
          open={open}

          {...(!disableInteractive && {
            onMouseEnter,
            onTouchStart,

            onMouseLeave,
            onTouchEnd
          })}

          modalWrapper={false}
          portal={portal}
          background={false}
          freezeScroll={false}
          focus={false}

          disableKeyboardClose

          className={classNames([
            staticClassName('Modal', theme) && [
              'AmauiTooltip-root',
              `AmauiTooltip-maxWidth-${maxWidth}`,
              fullWidth && `AmauiButton-fullWidth`
            ],

            classes.root,
            className,
            ModalProps?.className
          ])}

          {...ModalProps}

          {...other}
        >
          <TransitionComponent
            in={inProp}

            onExited={onClose}

            add

            {...TransitionComponentProps}
          >
            <span
              className={classNames([
                staticClassName('Modal', theme) && [
                  'AmauiTooltip-labelRoot'
                ],

                classes.labelRoot,
                classes[maxWidth],
                fullWidth && classes[fullWidth]
              ])}

              style={{
                ...styles.label
              }}
            >
              {is('string', label) ?
                <Type
                  className={classNames([
                    staticClassName('Modal', theme) && [
                      'AmauiTooltip-label',
                      `AmauiTooltip-color-${!theme.palette.color[color] && color !== 'default' ? 'new' : color}`,
                      tonal && `AmauiTooltip-tonal`,
                    ],

                    classes.label,
                    classes[color],
                    tonal && classes[`tonal_${color}`]
                  ])}

                  version='b3'
                >
                  {label}
                </Type> :

                label
              }
            </span>
          </TransitionComponent>
        </Modal>
      )}
    >
      {children && (
        React.cloneElement(children, {
          onMouseMove,

          onFocus,
          onBlur,

          onMouseDown,
          onMouseUp,

          onMouseEnter,
          onMouseLeave,

          onTouchStart,
          onTouchEnd
        })
      )}
    </Append>
  );
});

Tooltip.displayName = 'AmauiTooltip';

export default Tooltip;
