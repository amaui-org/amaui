import React from 'react';

import { is, wait } from '@amaui/utils';
import { style, classNames, useAmauiTheme } from '@amaui/style-react';

import Fade from '../Fade';

import { staticClassName } from '../utils';

import Modal from '../Modal';
import Type from '../Type';
import Append from '../Append';
import ClickListener from '../ClickListener';

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
    lineHeight: '1.5',
    background: theme.palette.color.neutral[theme.palette.light ? 40 : 20],
    color: theme.methods.palette.color.value('neutral', 90, true)
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

// disable interactive
// follow cursor

// color
// tonal

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

    leaveDelay = 0,
    enterDelay = 104,
    position = 'bottom',
    alignment = 'center',
    portal = true,
    fullWidth,
    maxWidth: maxWidth_ = 'xxs',

    touch: touch_ = false,
    longPress: longPress_ = false,
    hover: hover_ = true,
    focus: focus_ = true,

    onOpen: onOpen_,
    onClose: onClose_,

    TransitionComponent = Fade,
    TransitionComponentProps = {},

    AppendProps = {},
    ModalProps = {},

    className,

    children,

    ...other
  } = props;

  const [open, setOpen] = React.useState(open_);
  const [hover, setHover] = React.useState(false);
  const [touch, setTouch] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [longPress, setLongPress] = React.useState(false);
  const [inProp, setInProp] = React.useState(open_);

  const refs = {
    open: React.useRef(false),
    longPress: React.useRef(false),
    longPressTimer: React.useRef<any>()
  };

  const { classes } = useStyle(props);

  let maxWidth = maxWidth_;

  if (fullWidth) maxWidth = undefined;

  const onMouseDown = React.useCallback((event: React.MouseEvent<any>) => {
    if (longPress_) {
      refs.longPressTimer.current = setTimeout(() => setLongPress(true), 1400);

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
    if (focus_) {
      setFocus(false);

      if (is('function', children?.props.onBlur)) children.props.onBlur(event);
    }
  }, []);

  const onClickOutside = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    setLongPress(false);

    setInProp(false);
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
    refs.open.current = (touch || hover || focus);

    if (refs.open.current) onOpen();
    else setInProp(false);
  }, [touch, hover, focus]);

  React.useEffect(() => {
    refs.open.current = longPress;

    if (refs.open.current) onOpen();
  }, [longPress]);

  return (
    <Append
      open={open}

      relativeTo='window'

      position={position}
      alignment={alignment}

      {...AppendProps}

      element={(
        <Modal
          open={open}

          onMouseEnter={onMouseEnter}
          onTouchStart={onMouseEnter}

          onMouseLeave={onMouseLeave}
          onTouchEnd={onMouseLeave}

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
            >
              {is('string', label) ?
                <Type
                  className={classNames([
                    staticClassName('Modal', theme) && [
                      'AmauiTooltip-label'
                    ],

                    classes.label
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
        <ClickListener
          onClickOutside={onClickOutside}
        >
          {React.cloneElement(children, {
            onFocus,
            onBlur,

            onMouseDown,
            onMouseUp,

            onMouseEnter,
            onMouseLeave,

            onTouchStart,
            onTouchEnd
          })}
        </ClickListener>
      )}
    </Append>
  );
});

Tooltip.displayName = 'AmauiTooltip';

export default Tooltip;
