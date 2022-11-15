import React from 'react';

import { is, isEnvironment, TMethod } from '@amaui/utils';
import { style as styleMethod, classNames, useAmauiTheme } from '@amaui/style-react';

import Portal from '../Portal';
import Focus from '../Focus';
import Fade from '../Fade';
import Surface from '../Surface';
import useMediaQuery from '../useMediaQuery';

import { IBaseElement, staticClassName, TColor, TElementReference, TPropsAny, TRef, TSize, TTonal } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'fixed',
    inset: '0',
    zIndex: theme.z_index.modal,
    pointerEvents: 'none'
  },

  // Size
  size_small: {
    padding: '16px',
    borderRadius: `${(theme.shape.radius.unit * 2) + (theme.shape.radius.unit / 2)}px`
  },

  size_regular: {
    padding: theme.methods.space.value('md', 'px'),
    borderRadius: `${(theme.shape.radius.unit * 3) + (theme.shape.radius.unit / 2)}px`
  },

  size_large: {
    padding: theme.methods.space.value('lg', 'px'),
    borderRadius: `${(theme.shape.radius.unit * 4) + (theme.shape.radius.unit / 2)}px`
  },

  background: {
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.44)',
    zIndex: -1,
    pointerEvents: 'all'
  },

  backgroundInvisible: {
    background: 'transparent'
  },

  modalRoot: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none'
  },

  surface: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: `280px`,
    maxHeight: `calc(100% - ${theme.methods.space.value('xl') * 2}px)`,
    margin: theme.methods.space.value('xl', 'px'),
    overflow: 'hidden',
    pointerEvents: 'all'
  },

  noSurface: {
    pointerEvents: 'all',
    maxWidth: '100%'
  },

  fullScreen: {
    width: '100%',
    height: '100%',
    borderRadius: '0 !important',
    maxWidth: 'unset !important',
    maxHeight: 'unset !important',
    margin: '0 !important'
  },

  fullWidth: { width: `calc(100% - ${theme.methods.space.value('xl') * 2}px)` },

  // minWidth
  minWidth_xxs: { minWidth: `320px` },

  minWidth_xs: { minWidth: `400px` },

  minWidth_sm: { minWidth: `480px` },

  minWidth_rg: { minWidth: `560px` },

  minWidth_lg: { minWidth: `800px` },

  minWidth_xl: { minWidth: `1120px` },

  minWidth_xxl: { minWidth: `1360px` },

  minWidth_unset: { minWidth: `unset` },

  // maxWidth
  maxWidth_xxs: { maxWidth: `320px` },

  maxWidth_xs: { maxWidth: `400px` },

  maxWidth_sm: { maxWidth: `480px` },

  maxWidth_rg: { maxWidth: `560px` },

  maxWidth_lg: { maxWidth: `800px` },

  maxWidth_xl: { maxWidth: `1120px` },

  maxWidth_xxl: { maxWidth: `1360px` },

  maxWidth_unset: { maxWidth: `unset` }
}), { name: 'AmauiModal' });

let MODALS_OPEN = 0;

// To do

// 1. Add padding right for freezeScroll for the scroll bar if it exists and width that it is

export interface IModal extends IBaseElement {
  tonal?: TTonal;
  color?: TColor;
  size?: TSize;

  open?: boolean;
  openDefault?: boolean;

  mainRef?: TRef;
  backgroundRef?: TRef;

  partialyOpened?: number;

  minWidth?: 'xss' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'xxl';

  maxWidth?: 'xss' | 'xs' | 'sm' | 'rg' | 'lg' | 'xl' | 'xxl';

  fullScreen?: boolean;

  fullWidth?: boolean;

  background?: boolean;
  modalWrapper?: boolean;
  modalWrapperSurface?: boolean;

  portal?: boolean;
  focus?: boolean;
  freezeScroll?: boolean;

  disableKeyboardClose?: boolean;
  disableBackgroundClose?: boolean;

  backgroundInvisible?: boolean;

  onClose?: TMethod;

  NoSurfaceProps?: TPropsAny;
  SurfaceProps?: TPropsAny;
  BackgroundProps?: TPropsAny;
  PortalProps?: TPropsAny;
  TransitionComponentProps?: TPropsAny;

  BackgroundComponent?: TElementReference;
  TransitionComponent?: TElementReference;
}

const Modal = React.forwardRef((props_: IModal, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.AmauiModal?.props?.default, ...props_ }), [props_]);

  const mobile = useMediaQuery('(max-width: 767px)');

  const {
    tonal = true,
    color = 'primary',
    size = 'regular',

    open: open_,
    openDefault,

    mainRef,
    backgroundRef,

    partialyOpened,

    minWidth = !mobile ? 'sm' : undefined,
    maxWidth: maxWidth_ = 'rg',

    fullScreen,
    fullWidth,

    background = true,
    modalWrapper = true,
    modalWrapperSurface = true,

    portal = true,
    focus = true,
    freezeScroll = true,

    disableKeyboardClose,
    disableBackgroundClose,

    backgroundInvisible,

    onClose: onClose_,

    NoSurfaceProps,
    SurfaceProps,
    BackgroundProps,
    PortalProps: PortalProps_,
    TransitionComponentProps,

    BackgroundComponent = Fade,
    TransitionComponent = Fade,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const [open, setOpen] = React.useState(openDefault !== undefined ? openDefault : open_);
  const [inProp, setInProp] = React.useState(open_);

  const refs = {
    focus: React.useRef<HTMLDivElement>(),
    freezeScroll: React.useRef<any>(),
    interval: React.useRef<any>()
  };

  const { classes } = useStyle(props);

  refs.freezeScroll.current = freezeScroll;

  const modal = {
    open: () => {
      MODALS_OPEN++;

      if (freezeScroll) window.document.body.style.overflow = 'hidden';
    },
    close: () => {
      MODALS_OPEN--;

      if (MODALS_OPEN <= 0 && freezeScroll) window.document.body.style.removeProperty('overflow');
    }
  };

  let maxWidth = maxWidth_;

  if (fullWidth) maxWidth = undefined;

  const onClose = () => {
    if (is('function', onClose_) && open) onClose_();
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && !disableKeyboardClose) onClose();
  };

  React.useEffect(() => {
    if (open) modal.open();

    // Bug clean up fix
    refs.interval.current = setInterval(() => {
      if (MODALS_OPEN <= 0 && refs.freezeScroll.current && window.document.body.style.overflow === 'hidden') {
        window.document.body.style.removeProperty('overflow');
      }
    }, 1400);

    return () => {
      if (open) modal.close();

      clearInterval(refs.interval.current);
    };
  }, []);

  React.useEffect(() => {
    if (open_ && !open) {
      setOpen(true);
      setInProp(true);

      modal.open();
    }
    else if (!open_ && open) modalWrapper ? setInProp(false) : setOpen(false);
  }, [open_]);

  React.useEffect(() => {
    if (open) refs.focus.current?.focus();
  }, [open]);

  const onExited = (value: any) => {
    setOpen(false);

    modal.close();

    if (is('function', TransitionComponentProps?.onExited)) TransitionComponentProps?.onExited(value);
  };

  if (!open && !partialyOpened) return null;

  const PortalComponent: any = portal ? Portal : React.Fragment;

  const PortalProps = {
    ...(portal && PortalProps_)
  };

  if (portal) {
    if (isEnvironment('browser')) PortalProps.element = window.document.body;
  }

  const FocusComponent = focus ? Focus : React.Fragment;

  const FocusProps = focus ? {
    ref: refs.focus,
    onKeyDown
  } : {};

  let Main = children;

  if (modalWrapper) Main = (
    <div
      className={classNames([
        staticClassName('Modal', theme) && [
          'AmauiModal-modal-root'
        ],

        classes.modalRoot
      ])}
    >
      <TransitionComponent
        in={inProp}

        {...TransitionComponentProps}

        onExited={onExited}

        add
      >
        {
          !modalWrapperSurface ?
            (
              <div
                className={classNames([
                  staticClassName('Modal', theme) && [
                    'AmauiModal-no-surface'
                  ],

                  NoSurfaceProps?.className,
                  classes.noSurface
                ])}
              >
                {children}
              </div>
            ) :

            <Surface
              ref={mainRef}

              tonal={tonal}

              color={color}

              tabIndex='-1'

              className={classNames([
                staticClassName('Modal', theme) && [
                  'AmauiModal-surface'
                ],

                classes.surface,
                classes[`minWidth_${minWidth}`],
                classes[`maxWidth_${maxWidth}`],
                classes[`size_${size}`],
                fullScreen && classes.fullScreen,
                fullWidth && classes.fullWidth,

                SurfaceProps?.className
              ])}

              onKeyDown={onKeyDown}

              {...SurfaceProps}
            >
              {children}
            </Surface>
        }
      </TransitionComponent>
    </div>
  );

  return (
    <PortalComponent
      {...PortalProps}
    >
      <Component
        ref={ref}

        className={classNames([
          staticClassName('Modal', theme) && [
            'AmauiModal-root',
            `AmauiModal-size-${size}`,
            `AmauiModal-min-width-${minWidth}`,
            `AmauiModal-max-width-${maxWidth}`,
            open && `AmauiButton-open`,
            fullScreen && `AmauiButton-full-screen`,
            fullWidth && `AmauiButton-full-width`,
            background && `AmauiButton-background`,
            modalWrapper && `AmauiButton-modal-wrapper`,
            portal && `AmauiButton-portal`,
            focus && `AmauiButton-focus`,
            freezeScroll && `AmauiButton-freeze-scroll`,
            backgroundInvisible && 'AmauiModal-background-invisible',
            disableKeyboardClose && `AmauiButton-disable-keyboard-close`,
            disableBackgroundClose && `AmauiButton-disable-background-close`,
          ],

          className,
          classes.root
        ])}

        {...other}
      >
        <FocusComponent
          {...FocusProps}
        >
          {/* Background */}
          {background && (
            <BackgroundComponent
              in={inProp}

              add

              {...BackgroundProps}
            >
              <div
                ref={backgroundRef}

                onClick={() => !disableBackgroundClose && onClose()}

                className={classNames([
                  staticClassName('Modal', theme) && [
                    'AmauiModal-background'
                  ],

                  classes.background,
                  backgroundInvisible && classes.backgroundInvisible
                ])}
              />
            </BackgroundComponent>
          )}

          {/* Main */}
          {Main}
        </FocusComponent>
      </Component>
    </PortalComponent>
  );
});

Modal.displayName = 'AmauiModal';

export default Modal;
