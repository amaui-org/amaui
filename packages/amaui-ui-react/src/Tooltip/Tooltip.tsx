import React from 'react';

import { clamp, is, isEnvironment } from '@amaui/utils';
import { style as styleMethod, classNames, useAmauiTheme } from '@amaui/style-react';

import Grow from '../Grow';
import Modal from '../Modal';
import Append from '../Append';
import Surface from '../Surface';
import { IModal } from '../Modal/Modal';

import { staticClassName, TColor, TElement, TElementReference, THTMLElement, TMethodTransition, TPropsAny, TTonal } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    inset: '0px auto auto 0px'
  },

  labelRoot: {
    pointerEvents: 'all',
    whiteSpace: 'nowrap'
  },

  labelRoot_position_top: { paddingBlock: '16px' },

  labelRoot_position_bottom: { paddingBlock: '16px' },

  labelRoot_position_left: { paddingInline: '16px' },

  labelRoot_position_right: { paddingInline: '16px' },

  labelRoot_noMargin: { padding: '0' },

  label: {
    ...theme.typography.values.b3,

    borderRadius: `${clamp(theme.shape.radius.unit / 2, 0, 8)}px`,
    padding: '4px 8px',
    lineHeight: '1.455'
  },

  arrow: {
    '&::before': {
      content: "''",
      width: '8px',
      height: '8px',
      background: 'inherit',
      position: 'absolute',
      zIndex: '0'
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

  maxWidth_unset: { maxWidth: `unset` },

  fullWidth: { maxWidth: `${(isEnvironment('browser') ? window.innerWidth : 1400) - +theme.methods.space.value('rg', '', 1)}px` },

  nowrap: {
    whiteSpace: 'nowrap'
  }
}), { name: 'amaui-Tooltip' });

export interface ITooltip extends Omit<IModal, 'maxWidth'> {
  tonal?: TTonal;
  color?: TColor;

  open?: boolean;

  openDefault?: boolean;

  label?: TElement;

  parent?: THTMLElement;
  position?: 'top' | 'left' | 'bottom' | 'right';
  switch?: boolean;
  alignment?: 'start' | 'center' | 'end';
  portal?: boolean;
  fullWidth?: boolean;
  maxWidth?: 'xxs' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'xxl' | 'unset';
  arrow?: boolean;
  anchor?: DOMRect;
  anchorElement?: THTMLElement;
  noMargin?: string;
  classNameSwitch?: string;
  transformOrigin?: string;
  transformOriginSwitch?: string;
  transformOriginRtl?: string;
  transformOriginRtlSwitch?: string;
  click?: boolean;
  touch?: boolean;
  longPress?: boolean;
  hover?: boolean;
  focus?: boolean;
  inset?: boolean;
  nowrap?: boolean;
  follow?: boolean;
  interactive?: boolean;

  onOpen?: () => any;
  onClose?: () => any;
  onExited?: TMethodTransition;

  TransitionComponent?: TElementReference;

  TransitionComponentProps?: TPropsAny;
  AppendProps?: TPropsAny;
  ModalProps?: TPropsAny;
  LabelProps?: TPropsAny;
}

const Tooltip = React.forwardRef((props_: ITooltip, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTooltip?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color = 'inverted',

    open: open_,

    openDefault,

    label,

    parent,
    position = 'bottom',
    switch: switch_ = true,
    alignment = 'center',
    portal = true,
    fullWidth,
    maxWidth = 'xxs',
    arrow,
    anchor: anchor_,
    anchorElement,
    noMargin,
    classNameSwitch,
    transformOrigin,
    transformOriginSwitch,
    transformOriginRtl,
    transformOriginRtlSwitch,
    click,
    touch: touch_ = true,
    longPress: longPress_ = false,
    hover: hover_ = true,
    focus: focus_ = false,
    inset,
    nowrap,
    follow,
    interactive,

    onOpen: onOpen_,
    onClose: onClose_,
    onExited,

    TransitionComponent = Grow,

    TransitionComponentProps,
    AppendProps,
    ModalProps,
    LabelProps,

    // other
    elevation,

    className,
    style,

    children,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [open, setOpen] = React.useState(openDefault !== undefined ? openDefault : open_);
  const [hover, setHover] = React.useState(false);
  const [touch, setTouch] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [longPress, setLongPress] = React.useState(false);
  const [anchor, setAnchor] = React.useState<any>(anchor_);
  const [inProp, setInProp] = React.useState(open_);

  const refs = {
    open: React.useRef(false),
    inProp: React.useRef(inProp),
    longPress: React.useRef(false),
    longPressTimer: React.useRef<any>(),
    props: React.useRef<any>()
  };

  refs.props.current = props;

  refs.open.current = open;

  refs.inProp.current = inProp;

  const { classes } = useStyle(props);

  const styles: any = {
    label: {},
    labelRoot: {}
  };

  const onMouseDown = React.useCallback((event: React.MouseEvent<any>) => {
    if (longPress_) refs.longPressTimer.current = setTimeout(() => setLongPress(true), 700);

    if (is('function', (children as any)?.props.onMouseDown)) (children as any).props.onMouseDown(event);
  }, []);

  const onMouseUp = React.useCallback((event: React.MouseEvent<any>) => {
    if (longPress_) {
      clearTimeout(refs.longPressTimer.current);

      setLongPress(false);
    }

    if (is('function', (children as any)?.props.onMouseUp)) (children as any).props.onMouseUp(event);
  }, []);

  const onMouseEnter = React.useCallback((event: React.MouseEvent<any>) => {
    if (hover_) setHover(true);

    if (is('function', (children as any)?.props.onMouseEnter)) (children as any).props.onMouseEnter(event);
  }, []);

  const onMouseLeave = React.useCallback((event: React.MouseEvent<any>) => {
    if (refs.longPress.current) {
      setLongPress(false);

      if (refs.props.current.open === undefined) {
        if (!inProp) onClose();
        else setInProp(false);
      }
    }

    if (hover_) setHover(false);

    if (is('function', (children as any)?.props.onMouseLeave)) (children as any).props.onMouseLeave(event);
  }, []);

  const onTouchStart = React.useCallback((event: React.MouseEvent<any>) => {
    if (touch_) setTouch(true);

    if (is('function', (children as any)?.props.onTouchStart)) (children as any).props.onTouchStart(event);
  }, []);

  const onTouchEnd = React.useCallback((event: React.MouseEvent<any>) => {
    if (touch_) setTouch(false);

    if (is('function', (children as any)?.props.onTouchEnd)) (children as any).props.onTouchEnd(event);
  }, []);

  const onFocus = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (focus_) setFocus(true);

    if (is('function', (children as any)?.props.onFocus)) (children as any).props.onFocus(event);
  }, []);

  const onBlur = React.useCallback((event: React.FocusEvent<HTMLInputElement>) => {
    if (refs.longPress.current) {
      setLongPress(false);

      if (refs.props.current.open === undefined) {
        if (!inProp) onClose();
        else setInProp(false);
      }
    }

    if (focus_) setFocus(false);

    if (is('function', (children as any)?.props.onBlur)) (children as any).props.onBlur(event);
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

    if (is('function', (children as any)?.props.onMouseMove)) (children as any).props.onMouseMove(event);
  }, []);

  const onOpen = () => {
    if (!open) setOpen(true);

    if (!inProp) setInProp(true);

    if (is('function', onOpen_) && !open) onOpen_();
  };

  const onClose = () => {
    setOpen(false);

    if (is('function', onClose_)) onClose_();

    if (is('function', onExited)) onExited();
  };

  const onPreClose = () => {
    if (!refs.inProp.current) onClose();
    else setInProp(false);
  };

  const onClick = React.useCallback((event: Event) => {
    !refs.open.current ? onOpen() : onPreClose();
  }, [onOpen, onPreClose]);

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    setAnchor(anchor_);
  }, [anchor_]);

  React.useEffect(() => {
    if (init) {
      refs.open.current = open_;

      if (open_) onOpen();
      else onPreClose();
    }
  }, [open_]);

  React.useEffect(() => {
    if (init && refs.props.current.open === undefined) {
      refs.open.current = (touch || hover || longPress);

      if (refs.open.current) onOpen();
      else {
        if (!inProp) onClose();
        else setInProp(false);
      }
    }
  }, [touch, hover, longPress]);

  React.useEffect(() => {
    if (init && refs.props.current.open === undefined) {
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

      parent={parent}

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

            {...(interactive && {
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

            {...ModalProps}

            className={classNames([
              staticClassName('Tooltip', theme) && [
                'amaui-Tooltip-root',
                open && `amaui-Button-open`,
                touch && 'amaui-Tooltip-touch',
                longPress && 'amaui-Tooltip-long-press',
                hover && 'amaui-Tooltip-hover',
                focus && 'amaui-Tooltip-focus'
              ],

              className,
              classes.root,
              ModalProps?.className,
              switched && classNameSwitch
            ])}

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

              removeOnExited

              {...TransitionComponentProps}
            >
              <div
                role='tooltip'

                aria-label={is('simple', label) ? label as any : undefined}

                className={classNames([
                  staticClassName('Tooltip', theme) && [
                    'amaui-Tooltip-label-root'
                  ],

                  classes.labelRoot,
                  classes[`labelRoot_position_${resolvePosition(items.values.switch)}`],
                  classes[`maxWidth_${maxWidth}`],
                  noMargin && classes.labelRoot_noMargin,
                  fullWidth && classes.fullWidth,
                  nowrap && classes.nowrap
                ])}

                style={styles.labelRoot}
              >
                {is('simple', label) ?
                  <Surface
                    tonal={tonal}

                    color={color}

                    {...LabelProps}

                    className={classNames([
                      staticClassName('Tooltip', theme) && [
                        'amaui-Tooltip-label'
                      ],

                      LabelProps?.className,
                      classes.label,
                      arrow && [
                        classes.arrow,
                        classes[`arrow_position_${position}_alignment_${alignment}`]
                      ]
                    ])}

                    style={{
                      ...styles.label,

                      ...LabelProps?.style
                    }}
                  >
                    <span
                      className={classNames([
                        staticClassName('Tooltip', theme) && [
                          'amaui-Tooltip-label-text'
                        ],
                      ])}
                    >
                      {label}
                    </span>
                  </Surface> :

                  React.cloneElement(label as any, {
                    className: classNames([
                      (label as any)?.props?.className,
                      arrow && [
                        classes.arrow,
                        classes[`arrow_position_${position}_alignment_${alignment}`]
                      ]
                    ])
                  })
                }
              </div>
            </TransitionComponent>
          </Modal>
        );
      }}
    >
      {children && (
        React.cloneElement(children, {
          onMouseMove,

          ...(click && {
            onClick: (event: Event) => {
              if (is('function', children?.props?.onClick)) children?.props?.onClick(event);

              onClick(event);
            }
          }),

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

Tooltip.displayName = 'amaui-Tooltip';

export default Tooltip;
