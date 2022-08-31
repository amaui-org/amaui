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
    zIndex: theme.z_index.modal
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
    zIndex: -1
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
    pointerEvents: 'all'
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

  // maxWidth
  xxs: { maxWidth: `320px` },

  xs: { maxWidth: `400px` },

  sm: { maxWidth: `480px` },

  rg: { maxWidth: `560px` },

  lg: { maxWidth: `800px` },

  xl: { maxWidth: `1120px` },

  xxl: { maxWidth: `1360px` },

  unset: { maxWidth: `unset` }
}), { name: 'AmauiModal' });

let MODALS_OPEN = 0;

// To do

// 1. Add padding right for freezeScroll for the scroll bar if it exists and width that it is

const Modal = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiModal?.props?.default }), [props_]);

  const {
    open: open_,

    tonal = true,
    color = 'primary',
    size = 'regular',
    fullScreen,
    fullWidth,
    maxWidth: maxWidth_ = 'rg',
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

    ModalComponent = Fade,
    ModalProps = {},

    SurfaceProps = {},

    PortalProps: PortalProps_ = {},

    onClose: onClose_,

    className,

    children,

    ...other
  } = props;

  const [open, setOpen] = React.useState(open_);
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

      if (!MODALS_OPEN && freezeScroll) window.document.body.style.removeProperty('overflow');
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

  const onExited = () => {
    setOpen(false);

    modal.close();
  };

  if (!open) return null;

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
      <ModalComponent
        in={inProp}

        onExited={onExited}

        add

        {...ModalProps}
      >
        <Surface
          tonal={tonal}

          color={color}

          tabIndex='-1'

          className={classNames([
            staticClassName('Modal', theme) && [
              'AmauiModal-surface'
            ],

            classes.surface,
            classes[maxWidth],
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
      </ModalComponent>
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
            `AmauiModal-maxWidth-${maxWidth}`,
            fullScreen && `AmauiButton-fullScreen`,
            fullWidth && `AmauiButton-fullWidth`
          ],

          classes.root,
          className
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
                    'AmauiModal-background',
                    backgroundInvisible && 'AmauiModal-backgroundInvisible'
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
