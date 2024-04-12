import React from 'react';

import { is, isEnvironment, TMethod } from '@amaui/utils';
import { style as styleMethod, classNames, useAmauiTheme } from '@amaui/style-react';

import LineElement from '../Line';
import FocusElement from '../Focus';
import FadeElement from '../Fade';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IElementReference, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'fixed',
    inset: '0px',
    zIndex: theme.z_index.modal
  },

  background: {
    position: 'absolute',
    inset: '0px',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.44)',
    zIndex: -1
  },

  invisible: {
    background: 'transparent'
  },

  backdropRoot: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}), { name: 'amaui-Backdrop' });

let BACKDROPS_OPEN = 0;

export interface IBackdrop extends ILine {
  open?: boolean;
  invisible?: boolean;

  disableKeyboardClose?: boolean;
  disableBackgroundClose?: boolean;

  BackgroundComponent?: IElementReference;
  ModalComponent?: IElementReference;

  BackgroundProps?: IPropsAny;
  ModalProps?: IPropsAny;

  onClose?: TMethod;
}

const Backdrop: React.FC<IBackdrop> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiBackdrop?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Fade = React.useMemo(() => theme?.elements?.Fade || FadeElement, [theme]);

  const Focus = React.useMemo(() => theme?.elements?.Focus || FocusElement, [theme]);

  const {
    open: open_,
    invisible,

    disableKeyboardClose,
    disableBackgroundClose,

    BackgroundComponent = Fade,
    ModalComponent = Fade,

    BackgroundProps,
    ModalProps,

    onClose: onClose_,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const [open, setOpen] = React.useState(open_);
  const [inProp, setInProp] = React.useState(open_);
  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(),
    focus: React.useRef<HTMLDivElement>()
  };

  const onClose = () => {
    if (is('function', onClose_) && open) onClose_();
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && !disableKeyboardClose) {
      event.stopPropagation();

      onClose();
    }
  };

  const backdrop = {
    open: () => {
      BACKDROPS_OPEN++;

      const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

      rootDocument.body.style.overflow = 'hidden';
    },
    close: () => {
      BACKDROPS_OPEN--;

      const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

      if (!BACKDROPS_OPEN) rootDocument.body.style.removeProperty('overflow');
    }
  };

  React.useEffect(() => {
    if (open) backdrop.open();

    return () => {
      if (open) backdrop.close();
    };
  }, []);

  React.useEffect(() => {
    if (open_ && !open) {
      setOpen(true);
      setInProp(true);

      backdrop.open();
    }
    else if (!open_ && open) setInProp(false);
  }, [open_]);

  React.useEffect(() => {
    if (open) refs.focus.current.focus();
  }, [open]);

  const onExited = () => {
    setOpen(false);

    backdrop.close();
  };

  if (!open) return null;

  return (
    <Line
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      gap={0}

      direction='row'

      align='center'

      justify='center'

      Component={Component}

      className={classNames([
        staticClassName('Backdrop', theme) && [
          'amaui-Backdrop-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Focus
        ref={refs.focus}

        onKeyDown={onKeyDown}
      >
        {/* Background */}
        <BackgroundComponent
          in={inProp}

          add

          {...BackgroundProps}
        >
          <div
            className={classNames([
              staticClassName('Backdrop', theme) && [
                'amaui-Backdrop-background'
              ],

              classes.background,
              invisible && classes.invisible
            ])}

            onClick={() => !disableBackgroundClose && onClose()}
          />
        </BackgroundComponent>

        {/* Backdrop */}
        <div
          className={classNames([
            staticClassName('Backdrop', theme) && [
              'amaui-Backdrop-backdrop-root'
            ],

            classes.backdropRoot
          ])}
        >
          <ModalComponent
            in={inProp}

            onExited={onExited}

            add

            {...ModalProps}
          >
            {children}
          </ModalComponent>
        </div>
      </Focus>
    </Line>
  );
});

Backdrop.displayName = 'amaui-Backdrop';

export default Backdrop;
