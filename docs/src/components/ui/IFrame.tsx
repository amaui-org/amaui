import React from 'react';
import ReactDOM from 'react-dom';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { importIframeStyles } from '../../utils';

const useStyle = style(theme => ({
  root: {
    padding: '24px 26px',
    margin: '8px 0',
    background: theme.palette.light ? theme.palette.background.default.primary : theme.palette.color.primary[5],
    boxShadow: theme.palette.light ? theme.shadows.values.default[12] : undefined,
    width: '100%',
    height: '100vh',
    maxHeight: '400px',
    borderRadius: '8px'
  }
}), { name: 'IFrame' });

const IFrame = React.forwardRef((props: any, ref: any) => {
  const {
    className,

    children,

    ...other
  } = props;

  const theme = useAmauiTheme();

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
      iframeDocument.head?.replaceWith(window.document.createElement('head'));

      importIframeStyles(iframeDocument);

      // Default
      const styleDefault = window.document.createElement('style');

      styleDefault.innerHTML = `
        body {
          background-color: transparent;
        }

        body::-webkit-scrollbar {
          display: none;
        }
      `;

      iframeDocument.head?.append(styleDefault);
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
  }, [refs.root.current, theme]);

  return (
    <iframe
      ref={refs.root}

      {...other}

      className={classNames([
        className,
        classes.root
      ])}
    >
      {init && iframeBody && ReactDOM.createPortal(React.cloneElement(children, {
        style: {
          ...children.props.style,

          transition: theme.methods.transitions.make('opacity'),

          ...(show ? {
            opacity: 1
          } : {
            opacity: 0
          })
        }
      }), iframeBody)}
    </iframe>
  );
});

export default IFrame;
