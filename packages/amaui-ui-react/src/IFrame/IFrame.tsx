import React from 'react';
import ReactDOM from 'react-dom';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';

import { IBaseElement, TPropsAny, importIframeStyles, staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    width: '100%',
    height: '100%'
  },

  hidden: {
    height: 0,
    width: 0,
    opacity: 0,
    visibility: 'hidden'
  }
}), { name: 'amaui-IFrame' });

export interface IIFrame extends IBaseElement {
  id?: string;

  WrapperProps?: TPropsAny;
}

const IFrame = React.forwardRef((props_: IIFrame, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiIFrame?.props?.default, ...props_ }), [props_]);

  const {
    id,

    WrapperProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [init, setInit] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const refs = {
    root: React.useRef<HTMLIFrameElement>()
  };

  const iframeDocument = refs.root.current?.contentWindow?.document;

  const iframeBody = refs.root.current?.contentWindow?.document.body;

  const refresh = React.useCallback(() => {
    if (iframeDocument) {
      const rootDocument = refs.root.current?.ownerDocument || window.document;

      // Add iframe ref to iframe document
      (iframeDocument as any).iframe = refs.root.current;

      (iframeDocument as any).iframeWindow = refs.root.current?.contentWindow;

      // Head
      iframeDocument.head?.replaceWith(rootDocument.createElement('head'));

      importIframeStyles(iframeDocument);

      // Default
      const styleDefault = rootDocument.createElement('style');

      styleDefault.innerHTML = `
        body {
          background-color: transparent;
          padding: 0px;
        }

        body::-webkit-scrollbar {
          height: 0px;
          width: 0px;
        }
      `;

      iframeDocument.head?.append(styleDefault);

      // Body
      if (iframeBody) iframeBody.dir = rootDocument.body.dir;
    }
  }, [iframeDocument]);

  React.useEffect(() => {
    if (init && !show) setTimeout(() => {
      refresh();

      setShow(true);
    }, 740);
  }, [init]);

  React.useEffect(() => {
    refresh();

    if (!init) setInit(true);
  }, [id, refs.root.current, children, theme]);

  return (
    <Line
      gap={0}

      flex

      fullWidth

      {...WrapperProps}
    >
      {/*
          Add children used in the iframe,
          so their CSS is added to the DOM,
          and is then available within the iframe
      */}
      <Line
        className={classes.hidden}
      >
        {children}
      </Line>

      <iframe
        ref={item => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.root.current = item;
        }}

        title={id}

        className={classNames([
          staticClassName('IFrame', theme) && [
            'amaui-IFrame-root'
          ],

          className,
          classes.root
        ])}

        {...other}
      >
        {init && iframeBody && ReactDOM.createPortal(React.cloneElement(children as any, {
          style: {
            ...(children as any)?.props.style,

            transition: theme.methods.transitions.make('opacity'),

            ...(show ? {
              opacity: 1
            } : {
              opacity: 0
            })
          }
        }), iframeBody)}
      </iframe>
    </Line>
  );
});

IFrame.displayName = 'amaui-IFrame';

export default IFrame;
