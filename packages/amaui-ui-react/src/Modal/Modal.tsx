import React from 'react';

import { is, isEnvironment } from '@amaui/utils';
import { style, classNames, useAmauiTheme } from '@amaui/style-react';

import Portal from '../Portal';
import Focus from '../Focus';
import Fade from '../Fade';
import Surface from '../Surface';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    position: 'fixed',
    inset: 0,
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
    inset: 0,
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

  fullScreen: {
    width: '100%',
    height: '100%',
    borderRadius: '0',
    maxWidth: 'unset',
    maxHeight: 'unset',
    margin: '0'
  },

  fullWidth: { width: `calc(100% - ${theme.methods.space.value('xl') * 2}px)` },

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

const Modal = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiModal?.props?.default }), [props_]);

  const {
    open: open_,
    openDefault,
    partialyOpened,
    mainRef,
    tonal = true,
    color = 'primary',
    size = 'regular',
    maxWidth: maxWidth_ = 'rg',
    fullScreen,
    fullWidth,
    background = true,
    modalWrapper = true,
    portal = true,
    focus = true,
    freezeScroll = true,
    disableKeyboardClose,
    disableBackgroundClose,
    backgroundInvisible,
    BackgroundComponent = Fade,
    BackgroundProps = {},

    TransitionComponent = Fade,
    TransitionComponentProps = {},

    SurfaceProps = {},

    PortalProps: PortalProps_ = {},

    onClose: onClose_,

    className,

    children,

    ...other
  } = props;

  const [open, setOpen] = React.useState(openDefault !== undefined ? openDefault : open_);
  const [inProp, setInProp] = React.useState(open_);

  const refs = {
    focus: React.useRef<HTMLDivElement>()
  };

  const { classes } = useStyle(props);

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

    return () => {
      if (open) modal.close();
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

  let PortalComponent: any = portal ? Portal : React.Fragment;

  const PortalProps = {
    ...(portal && PortalProps_)
  };

  if (portal) {
    if (isEnvironment('browser')) PortalProps.element = window.document.body;
  }

  let FocusComponent = focus ? Focus : React.Fragment;

  const FocusProps = focus ? {
    ref: refs.focus,
    onKeyDown
  } : {};

  let Main = children;

  if (modalWrapper) Main = (
    <div
      className={classNames([
        staticClassName('Modal', theme) && [
          'AmauiModal-modalRoot'
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
            classes[`maxWidth_${maxWidth}`],
            classes[`size_${size}`],
            fullScreen && classes.fullScreen,
            fullWidth && classes.fullWidth,

            SurfaceProps.className
          ])}

          onKeyDown={onKeyDown}

          {...SurfaceProps}
        >
          {children}
        </Surface>
      </TransitionComponent>
    </div>
  );

  return (
    <PortalComponent
      {...PortalProps}
    >
      <div
        ref={ref}

        className={classNames([
          staticClassName('Modal', theme) && [
            'AmauiModal-root',
            `AmauiModal-size-${size}`,
            `AmauiModal-maxWidth-${maxWidth}`,
            open && `AmauiButton-open`,
            fullScreen && `AmauiButton-fullScreen`,
            fullWidth && `AmauiButton-fullWidth`,
            background && `AmauiButton-background`,
            modalWrapper && `AmauiButton-modalWrapper`,
            portal && `AmauiButton-portal`,
            focus && `AmauiButton-focus`,
            freezeScroll && `AmauiButton-freezeScroll`,
            disableKeyboardClose && `AmauiButton-disableKeyboardClose`,
            disableBackgroundClose && `AmauiButton-disableBackgroundClose`,
            backgroundInvisible && 'AmauiModal-background-invisible'
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
                className={classNames([
                  staticClassName('Modal', theme) && [
                    'AmauiModal-background'
                  ],

                  classes.background,
                  backgroundInvisible && classes.backgroundInvisible
                ])}

                onClick={() => !disableBackgroundClose && onClose()}
              />
            </BackgroundComponent>
          )}

          {/* Main */}
          {Main}
        </FocusComponent>
      </div>
    </PortalComponent>
  );
});

Modal.displayName = 'AmauiModal';

export default Modal;
