import React from 'react';
import Dynamic from 'next/dynamic';

import { is, copyToClipboard } from '@amaui/utils';
import { IconButton, Line, Surface, Tooltip, Type } from '@amaui/ui-react';
import { classNames, style } from '@amaui/style-react';
import AmauiRequest from '@amaui/request';

import IconMaterialTempPreferencesCustomRounded from '@amaui/icons-material-react/IconMaterialTempPreferencesCustomRounded';
import IconMaterialDataObjectRounded from '@amaui/icons-material-react/IconMaterialDataObjectRounded';
import IconMaterialDraftRounded from '@amaui/icons-material-react/IconMaterialDraftRounded';
import IconMaterialContentCopyRounded from '@amaui/icons-material-react/IconMaterialContentCopyRounded';

import IFrame from './IFrame';

const useStyle = style(theme => ({
  root: {
    width: '100%',
    background: 'transparent'
  },

  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    backdropFilter: 'blur(2px)',
    padding: '24px 26px',
    zIndex: 4
  },

  main: {
    paddingTop: 56,
    width: '100%',

    '& > *': {
      width: '100%'
    }
  },

  pre: {
    padding: '12px 0 !important',
    margin: '0 !important',
    background: [theme.palette.light ? theme.palette.background.default.primary : theme.palette.color.primary[5], '!important'],

    '& code[class*=language-], &[class*=language-]': {
      ...theme.typography.values.m3,

      color: 'inherit',
      fontSize: '0.75rem !important',
      textShadow: 'none !important',

      '& span': {
        whiteSpace: 'unset !important'
      }
    },

    '& .token.comment': {
      color: 'inherit',
      opacity: 0.5
    },

    '& .operator': {
      background: 'transparent'
    },

    '& .amaui_string': {
      color: 'hsl(114deg 54% 54%)'
    },

    '& .amaui_number': {
      color: 'hsl(214deg 54% 64%)'
    },

    '& .amaui_boolean': {
      color: 'hsl(170deg 54% 54%)'
    },

    '& .amaui_other': {
      color: 'hsl(57deg 54% 54%)'
    }
  }
}), { name: 'Example' });

const Example = React.forwardRef((props: any, ref: any) => {
  const {
    id,
    src,
    label,
    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [use, setUse] = React.useState('example');
  const [children, setChildren] = React.useState<any>();
  const [files, setFiles] = React.useState<any>({});
  const [copied, setCopied] = React.useState(false);

  const init = React.useCallback(async () => {
    let mainSrc = is('string', src) ? src : src?.main;
    let shortSrc = src?.short;

    let Element: any;

    switch (id) {
      case 'Zip-examples-zip':
        mainSrc = mainSrc || '/assets/js/examples/Zip/zip.tsx';
        shortSrc = shortSrc || '/assets/js/examples/Zip/zip.short.tsx';
        Element = Dynamic(() => import('../../../public/assets/js/examples/Zip/zip'));
        break;

      case 'Zip-examples-unzip':
        mainSrc = mainSrc || '/assets/js/examples/Zip/unzip.tsx';
        shortSrc = shortSrc || '/assets/js/examples/Zip/unzip.short.tsx';
        Element = Dynamic(() => import('../../../public/assets/js/examples/Zip/unzip'));
        break;

      default:
        break;
    }

    const files_ = {
      long: (await AmauiRequest.get(mainSrc, { response: { type: 'text' } })).response,
      short: (await AmauiRequest.get(shortSrc, { response: { type: 'text' } })).response
    };

    // Element
    if (Element) setChildren(<Element />);

    // Files
    setFiles(files_);
  }, []);

  const onUse = React.useCallback((valueNew: string) => {
    setUse(valueNew);

    if (['long', 'short'].includes(valueNew)) {
      const Prism = (window as any).Prism;

      const iframes = window.document.querySelectorAll('iframe');

      for (const iframe of Array.from(iframes)) {
        const bodyIframe = iframe.contentWindow?.document.body;

        if (bodyIframe) {
          setTimeout(() => Prism.highlightAllUnder(bodyIframe));
        }
      }
    }
  }, []);

  const onCopy = React.useCallback(async () => {
    await copyToClipboard(files[use]);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1400);
  }, [use, files]);

  React.useEffect(() => {
    init();
  }, []);

  const optionButtonProps = {
    color: 'inherit',
    version: 'text',
    size: 'small'
  };

  const tooltipProps = {
    portal: false
  };

  return (
    <IFrame
      ref={ref}

      id={use}
    >
      <Surface
        tonal

        color='primary'

        direction='column'

        Component={Line}

        className={classes.root}
      >
        <Line
          ref={ref}

          className={classNames([
            className,
            classes.root
          ])}

          {...other}
        >
          <Line
            direction='row'

            align='center'

            justify='space-between'

            Component='nav'

            className={classes.nav}
          >
            <Type
              version='h3'
            >
              {label}
            </Type>

            <Line
              gap={0}

              direction='row'

              align='center'
            >
              {['short', 'long'].includes(use) && (
                <Tooltip
                  label={copied ? `Copied!` : 'Copy'}

                  alignment='start'

                  {...tooltipProps}
                >
                  <IconButton
                    onClick={onCopy}

                    {...optionButtonProps}
                  >
                    <IconMaterialContentCopyRounded />
                  </IconButton>
                </Tooltip>
              )}

              <Tooltip
                label='Short'

                {...tooltipProps}
              >
                <IconButton
                  onClick={() => onUse('short')}

                  {...optionButtonProps}
                >
                  <IconMaterialDataObjectRounded />
                </IconButton>
              </Tooltip>

              <Tooltip
                label='Entire file'

                {...tooltipProps}
              >
                <IconButton
                  onClick={() => onUse('long')}

                  {...optionButtonProps}
                >
                  <IconMaterialDraftRounded />
                </IconButton>
              </Tooltip>

              <Tooltip
                label='Example'

                {...tooltipProps}
              >
                <IconButton
                  onClick={() => onUse('example')}

                  {...optionButtonProps}
                >
                  <IconMaterialTempPreferencesCustomRounded />
                </IconButton>
              </Tooltip>
            </Line>
          </Line>

          <Line
            Component='main'

            className={classes.main}
          >
            {use === 'example' && children}

            {['long', 'short'].includes(use) && (
              <pre
                className={classNames([
                  'language-javascript',
                  classes.pre
                ])}
              >
                <code>
                  {use === 'short' ? files.short : files.long}
                </code>
              </pre>
            )}
          </Line>
        </Line>
      </Surface>
    </IFrame>
  );
});

export default Example;
