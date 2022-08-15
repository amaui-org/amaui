import React from 'react';

import { clamp, is, isEnvironment } from '@amaui/utils';
import { style, classNames, useAmauiTheme } from '@amaui/style-react';

import Grow from '../Grow';

import { staticClassName } from '../utils';

import Modal from '../Modal';
import Type from '../Type';
import Append from '../Append';

const useStyle = style(theme => ({
  root: {
    inset: '0px auto auto 0px !important'
  },

  labelRoot: {
    display: 'inline-flex'
  },

  labelRoot_position_top: { marginBottom: '16px' },

  labelRoot_position_bottom: { marginTop: '16px' },

  labelRoot_position_left: { marginRight: '16px' },

  labelRoot_position_right: { marginLeft: '16px' },

  label: {
    borderRadius: clamp(theme.shape.radius.unit / 2, 0, 8),
    padding: '4px 8px',
    lineHeight: 1.455
  },

  arrow: {
    '&::before': {
      content: "''",
      width: '8px',
      height: '8px',
      background: 'inherit',
      position: 'absolute',
      zIndex: -1
    }
  },

  arrow_position_top_alignment_start: {
    '&::before': {
      bottom: '-4px',
      right: '20%',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  arrow_position_top_alignment_center: {
    '&::before': {
      bottom: '-4px',
      left: '50%',
      transform: 'translate(-50%, 0) rotate(45deg)'
    }
  },

  arrow_position_top_alignment_end: {
    '&::before': {
      bottom: '-4px',
      left: '20%',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  arrow_position_bottom_alignment_start: {
    '&::before': {
      top: '-4px',
      right: '20%',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  arrow_position_bottom_alignment_center: {
    '&::before': {
      top: '-4px',
      left: '50%',
      transform: 'translate(-50%, 0) rotate(45deg)'
    }
  },

  arrow_position_bottom_alignment_end: {
    '&::before': {
      top: '-4px',
      left: '20%',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  arrow_position_left_alignment_start: {
    '&::before': {
      right: '-4px',
      bottom: '20%',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  arrow_position_left_alignment_center: {
    '&::before': {
      right: '-4px',
      top: '50%',
      transform: 'translate(0, -50%) rotate(45deg)'
    }
  },

  arrow_position_left_alignment_end: {
    '&::before': {
      right: '-4px',
      top: '20%',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  arrow_position_right_alignment_start: {
    '&::before': {
      left: '-4px',
      bottom: '20%',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  arrow_position_right_alignment_center: {
    '&::before': {
      left: '-4px',
      top: '50%',
      transform: 'translate(0, -50%) rotate(45deg)'
    }
  },

  arrow_position_right_alignment_end: {
    '&::before': {
      left: '-4px',
      top: '20%',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  // Color
  default: {
    color: theme.palette.color.neutral[90],
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
    background: theme.palette.color.neutral[theme.palette.light ? 40 : 80]
  },

  tonal_primary: {
    color: theme.methods.palette.color.value('primary', 90),
    background: theme.palette.color.primary[theme.palette.light ? 40 : 80]
  },

  tonal_secondary: {
    color: theme.methods.palette.color.value('secondary', 90),
    background: theme.palette.color.secondary[theme.palette.light ? 40 : 80]
  },

  tonal_tertiary: {
    color: theme.methods.palette.color.value('tertiary', 90),
    background: theme.palette.color.tertiary[theme.palette.light ? 40 : 80]
  },

  tonal_quaternary: {
    color: theme.methods.palette.color.value('quaternary', 90),
    background: theme.palette.color.quaternary[theme.palette.light ? 40 : 80]
  },

  tonal_info: {
    color: theme.methods.palette.color.value('info', 90),
    background: theme.palette.color.info[theme.palette.light ? 40 : 80]
  },

  tonal_success: {
    color: theme.methods.palette.color.value('success', 90),
    background: theme.palette.color.success[theme.palette.light ? 40 : 80]
  },

  tonal_warning: {
    color: theme.methods.palette.color.value('warning', 90),
    background: theme.palette.color.warning[theme.palette.light ? 40 : 80]
  },

  tonal_error: {
    color: theme.methods.palette.color.value('error', 90),
    background: theme.palette.color.error[theme.palette.light ? 40 : 80]
  },

  // maxWidth
  xxs: { maxWidth: `320px` },

  xs: { maxWidth: `400px` },

  sm: { maxWidth: `480px` },

  rg: { maxWidth: `560px` },

  lg: { maxWidth: `800px` },

  xl: { maxWidth: `1120px` },

  xxl: { maxWidth: `1360px` },

  fullWidth: { maxWidth: `${(isEnvironment('browser') ? window.innerWidth : 1400) - +theme.methods.space.value('rg', '', 1)}px` }
}), { name: 'AmauiTooltip' });

const Tooltip = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTooltip?.props?.default }), [props_]);

  const {
    open: open_,

    label,

    tonal,
    color = 'default',
    follow,
    position = 'bottom',
    switch: switch_ = true,
    alignment = 'center',
    portal = true,
    fullWidth,
    maxWidth = 'xxs',
    arrow,
    anchorElement,

    touch: touch_ = true,
    longPress: longPress_ = false,
    hover: hover_ = true,
    focus: focus_ = true,

    onOpen: onOpen_,
    onClose: onClose_,

    TransitionComponent = Grow,
    TransitionComponentProps = {},

    AppendProps = {},
    ModalProps = {},

    disableInteractive,

    className,
    style,

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

      if (!inProp) onClose();
      else setInProp(false);
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

      if (!inProp) onClose();
      else setInProp(false);
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

  const onOpen = () => {
    if (!open) setOpen(true);
    if (!inProp) setInProp(true);

    if (is('function', onOpen_) && open) onOpen_();
  };

  const onClose = () => {
    setOpen(false);

    if (is('function', onClose_)) onClose_();
  };

  React.useEffect(() => {
    refs.open.current = open_;

    if (open_ && !open) onOpen();
    else if (!open_ && open) {
      if (!inProp) onClose();
      else setInProp(false);
    }
  }, [open_]);

  React.useEffect(() => {
    refs.open.current = (touch || hover || longPress);

    if (refs.open.current) onOpen();
    else {
      if (!inProp) onClose();
      else setInProp(false);
    }
  }, [touch, hover, longPress]);

  React.useEffect(() => {
    refs.open.current = focus;

    if (refs.open.current) onOpen();
    else {
      if (!inProp) onClose();
      else setInProp(false);
    }
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
      styles.label.background = palette[theme.palette.light ? 40 : 80];
    }
    else {
      styles.label.color = theme.methods.palette.color.text(palette.main, true, 'light');
      styles.label.background = palette.main;
    }
  }

  const resolvePosition = (switched = false) => {
    if (!switched) return position;

    if (position === 'top') return 'bottom';
    if (position === 'left') return 'right';
    if (position === 'right') return 'left';
    if (position === 'bottom') return 'top';
  };

  return (
    <Append
      open={open}

      portal
      anchor={anchor}
      anchorElement={anchorElement}
      position={position}
      alignment={alignment}
      switch={switch_}

      padding={[8, 8]}

      {...AppendProps}

      element={items => (
        <Modal
          ref={items.ref}

          open={open}

          {...(!disableInteractive && {
            onMouseEnter,
            onTouchStart,

            onMouseLeave,
            onTouchEnd
          })}

          modalWrapper={false}
          portal={false}
          background={false}
          freezeScroll={false}
          focus={false}

          disableKeyboardClose

          className={classNames([
            staticClassName('Modal', theme) && [
              'AmauiTooltip-root',
              `AmauiTooltip-maxWidth-${maxWidth}`,
              `AmauiTooltip-position-${position}`,
              `AmauiTooltip-alignment-${alignment}`,
              fullWidth && `AmauiButton-fullWidth`
            ],

            classes.root,
            className,
            ModalProps?.className
          ])}

          {...ModalProps}

          style={{
            ...items.style,

            ...style,
            ...ModalProps?.style
          }}

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
                classes[`labelRoot_position_${resolvePosition(items.values.switch)}`],
                classes[maxWidth],
                fullWidth && classes.fullWidth
              ])}
            >
              {is('string', label) ?
                <Type
                  className={classNames([
                    staticClassName('Modal', theme) && [
                      'AmauiTooltip-label',
                      `AmauiTooltip-color-${!theme.palette.color[color] && color !== 'default' ? 'new' : color}`,
                      tonal && `AmauiTooltip-tonal`,
                      arrow && `AmauiTooltip-arrow`
                    ],

                    classes.label,
                    classes[color],
                    tonal && classes[`tonal_${color}`],
                    arrow && [
                      classes.arrow,
                      classes[`arrow_position_${position}_alignment_${alignment}`]
                    ]
                  ])}

                  version='b3'

                  style={{
                    ...styles.label
                  }}
                >
                  {label}
                </Type> :

                React.cloneElement(label, {
                  className: classNames([
                    label?.props?.className,
                    arrow && classes.arrow
                  ])
                })
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
