import React from 'react';

import { clamp, is, isEnvironment } from '@amaui/utils';
import { style, classNames, useAmauiTheme } from '@amaui/style-react';

import Grow from '../Grow';

import { staticClassName } from '../utils';

import Modal from '../Modal';
import Append from '../Append';
import Surface from '../Surface';

const useStyle = style(theme => ({
  root: {
    inset: '0px auto auto 0px'
  },

  labelRoot: {
    pointerEvents: 'all'
  },

  labelRoot_position_top: { marginBottom: '16px' },

  labelRoot_position_bottom: { marginTop: '16px' },

  labelRoot_position_left: { marginRight: '16px' },

  labelRoot_position_right: { marginLeft: '16px' },

  labelRoot_noMargin: { margin: 0 },

  label: {
    ...theme.typography.values.b3,

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
      zIndex: 0
    }
  },

  arrow_position_top_alignment_start: {
    '&::before': {
      bottom: '-4px',
      left: 'clamp(11px, 14%, 24px)',
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
      right: 'clamp(11px, 14%, 24px)',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  arrow_position_bottom_alignment_start: {
    '&::before': {
      top: '-4px',
      left: 'clamp(11px, 14%, 24px)',
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
      right: 'clamp(11px, 14%, 24px)',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  arrow_position_left_alignment_start: {
    '&::before': {
      right: '-4px',
      top: 'clamp(5.4px, 14%, 24px)',
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
      bottom: 'clamp(5.4px, 14%, 24px)',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  arrow_position_right_alignment_start: {
    '&::before': {
      left: '-4px',
      top: 'clamp(5.4px, 14%, 24px)',
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
      bottom: 'clamp(5.4px, 14%, 24px)',
      transform: 'translate(0, 0) rotate(45deg)'
    }
  },

  // maxWidth
  maxWidth_xxs: { maxWidth: `320px` },

  maxWidth_xs: { maxWidth: `400px` },

  maxWidth_sm: { maxWidth: `480px` },

  maxWidth_rg: { maxWidth: `560px` },

  maxWidth_lg: { maxWidth: `800px` },

  maxWidth_xl: { maxWidth: `1120px` },

  maxWidth_xxl: { maxWidth: `1360px` },

  fullWidth: { maxWidth: `${(isEnvironment('browser') ? window.innerWidth : 1400) - +theme.methods.space.value('rg', '', 1)}px` }
}), { name: 'AmauiTooltip' });

const Tooltip = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTooltip?.props?.default }), [props_]);

  const {
    open: open_,

    label,

    tonal = true,
    color = 'inverse',
    position = 'bottom',
    switch: switch_ = true,
    alignment = 'center',
    portal = true,
    fullWidth,
    maxWidth = 'xxs',
    arrow,
    anchorElement,
    noMargin,
    transformOrigin,
    transformOriginSwitch,
    transformOriginRtl,
    transformOriginRtlSwitch,
    touch: touch_ = true,
    longPress: longPress_ = false,
    hover: hover_ = true,
    focus: focus_ = true,
    inset,
    follow,

    onOpen: onOpen_,
    onClose: onClose_,
    onExited,

    TransitionComponent = Grow,
    TransitionComponentProps = {},

    AppendProps = {},
    ModalProps = {},
    LabelProps = {},

    disableInteractive,

    className,
    style,

    children,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
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
    label: {},
    labelRoot: {}
  };

  const onMouseDown = React.useCallback((event: React.MouseEvent<any>) => {
    if (longPress_) refs.longPressTimer.current = setTimeout(() => setLongPress(true), 700);

    if (is('function', children?.props.onMouseDown)) children.props.onMouseDown(event);
  }, []);

  const onMouseUp = React.useCallback((event: React.MouseEvent<any>) => {
    if (longPress_) {
      clearTimeout(refs.longPressTimer.current);

      setLongPress(false);
    }

    if (is('function', children?.props.onMouseUp)) children.props.onMouseUp(event);
  }, []);

  const onMouseEnter = React.useCallback((event: React.MouseEvent<any>) => {
    if (hover_) setHover(true);

    if (is('function', children?.props.onMouseEnter)) children.props.onMouseEnter(event);
  }, []);

  const onMouseLeave = React.useCallback((event: React.MouseEvent<any>) => {
    if (refs.longPress.current) {
      setLongPress(false);

      if (!props.hasOwnProperty('open')) {
        if (!inProp) onClose();
        else setInProp(false);
      }
    }

    if (hover_) setHover(false);

    if (is('function', children?.props.onMouseLeave)) children.props.onMouseLeave(event);
  }, []);

  const onTouchStart = React.useCallback((event: React.MouseEvent<any>) => {
    if (touch_) setTouch(true);

    if (is('function', children?.props.onTouchStart)) children.props.onTouchStart(event);
  }, []);

  const onTouchEnd = React.useCallback((event: React.MouseEvent<any>) => {
    if (touch_) setTouch(false);

    if (is('function', children?.props.onTouchEnd)) children.props.onTouchEnd(event);
  }, []);

  const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (focus_) setFocus(true);

    if (is('function', children?.props.onFocus)) children.props.onFocus(event);
  }, []);

  const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (refs.longPress.current) {
      setLongPress(false);

      if (!props.hasOwnProperty('open')) {
        if (!inProp) onClose();
        else setInProp(false);
      }
    }

    if (focus_) setFocus(false);

    if (is('function', children?.props.onBlur)) children.props.onBlur(event);
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

    if (is('function', children?.props.onMouseMove)) children.props.onMouseMove(event);
  }, []);

  const onOpen = () => {
    if (!open) setOpen(true);
    if (!inProp) setInProp(true);

    if (is('function', onOpen_) && open) onOpen_();
  };

  const onClose = () => {
    setOpen(false);

    if (is('function', onClose_)) onClose_();

    if (is('function', onExited)) onExited();
  };

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    if (init) {
      refs.open.current = open_;

      if (open_) onOpen();
      else {
        if (!inProp) onClose();
        else setInProp(false);
      }
    }
  }, [open_]);

  React.useEffect(() => {
    if (init && !props.hasOwnProperty('open')) {
      refs.open.current = (touch || hover || longPress);

      if (refs.open.current) onOpen();
      else {
        if (!inProp) onClose();
        else setInProp(false);
      }
    }
  }, [touch, hover, longPress]);

  React.useEffect(() => {
    if (init && !props.hasOwnProperty('open')) {
      refs.open.current = focus;

      if (refs.open.current) onOpen();
      else {
        if (!inProp) onClose();
        else setInProp(false);
      }
    }
  }, [focus]);

  React.useEffect(() => {
    if (init) {
      if (longPress) refs.open.current = longPress;

      refs.longPress.current = longPress;

      if (refs.open.current) onOpen();
    }
  }, [longPress]);

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

      portal={portal}
      anchor={anchor}
      anchorElement={anchorElement}
      position={position}
      alignment={alignment}
      switch={switch_}
      inset={inset}

      padding={[8, 8]}

      {...AppendProps}

      element={items => {
        const rtl = theme.direction === 'rtl';
        const switched = items.values.switch;

        if (!rtl) {
          styles.labelRoot.transformOrigin = (!switched ? transformOrigin : transformOriginSwitch) || transformOrigin;
        }
        else {
          styles.labelRoot.transformOrigin = (!switched ? transformOriginRtl : transformOriginRtlSwitch) || transformOriginRtl;
        }

        if (!styles.labelRoot.transformOrigin) styles.labelRoot.transformOrigin = transformOrigin;

        return (
          <Modal
            ref={item => {
              if (ref) {
                if (is('function', ref)) ref(item);
                else ref.current = item;
              }

              items.ref.current = item;
            }}

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
              staticClassName('Tooltip', theme) && [
                'AmauiTooltip-root',
                `AmauiTooltip-maxWidth-${maxWidth}`,
                `AmauiTooltip-position-${position}`,
                `AmauiTooltip-alignment-${alignment}`,
                switch_ && `AmauiButton-switch`,
                portal && `AmauiButton-portal`,
                anchorElement && `AmauiButton-anchorElement`,
                fullWidth && `AmauiButton-fullWidth`,
                follow && 'AmauiTooltip-follow',
                open && `AmauiButton-open`,
                touch && 'AmauiTooltip-touch',
                longPress && 'AmauiTooltip-longPress',
                hover && 'AmauiTooltip-hover',
                focus && 'AmauiTooltip-focus',
                inset && 'AmauiTooltip-inset',
                noMargin && 'AmauiTooltip-noMargin',
                arrow && `AmauiTooltip-arrow`
              ],

              className,
              classes.root,
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
              <div
                className={classNames([
                  staticClassName('Tooltip', theme) && [
                    'AmauiTooltip-labelRoot'
                  ],

                  classes.labelRoot,
                  classes[`labelRoot_position_${resolvePosition(items.values.switch)}`],
                  classes[`maxWidth_${maxWidth}`],
                  noMargin && classes.labelRoot_noMargin,
                  fullWidth && classes.fullWidth
                ])}

                style={styles.labelRoot}
              >
                {is('simple', label) ?
                  <Surface
                    tonal={tonal}

                    color={color}

                    className={classNames([
                      staticClassName('Tooltip', theme) && [
                        'AmauiTooltip-label'
                      ],

                      classes.label,
                      arrow && [
                        classes.arrow,
                        classes[`arrow_position_${position}_alignment_${alignment}`]
                      ]
                    ])}

                    {...LabelProps}

                    style={{
                      ...styles.label,

                      ...LabelProps?.style
                    }}
                  >
                    <span
                      className={classNames([
                        staticClassName('Tooltip', theme) && [
                          'AmauiTooltip-label-text'
                        ],
                      ])}
                    >
                      {label}
                    </span>
                  </Surface> :

                  React.cloneElement(label, {
                    className: classNames([
                      label?.props?.className,
                      arrow && [
                        classes.arrow,
                        classes[`arrow_position_${position}_alignment_${alignment}`]
                      ]
                    ])
                  })
                }
              </div>
            </TransitionComponent>
          </Modal >
        );
      }}
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
    </Append >
  );
});

Tooltip.displayName = 'AmauiTooltip';

export default Tooltip;
