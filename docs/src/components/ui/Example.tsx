import React from 'react';
import Dynamic from 'next/dynamic';

import { is } from '@amaui/utils';
import { IconButton, Line, Surface, Type } from '@amaui/ui-react';
import { classNames, style } from '@amaui/style-react';
import AmauiRequest from '@amaui/request';

import IconMaterialTempPreferencesCustomRounded from '@amaui/icons-material-react/IconMaterialTempPreferencesCustomRounded';
import IconMaterialDataObjectRounded from '@amaui/icons-material-react/IconMaterialDataObjectRounded';
import IconMaterialDraftRounded from '@amaui/icons-material-react/IconMaterialDraftRounded';

import IFrame from './IFrame';

const useStyle = style(theme => ({
  root: {
    width: '100%',
    background: 'none',

    '& > *': {
      width: '100%'
    }
  },

  pre: {
    padding: '16px 0 !important',
    margin: '0 !important',
    background: [theme.palette.light ? theme.palette.background.default.primary : theme.palette.color.primary[5], '!important'],

    '& code[class*=language-], &[class*=language-]': {
      ...theme.typography.values.m3,

      color: 'inherit',
      fontSize: '0.75rem !important',
      textShadow: 'none !important'
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

  React.useEffect(() => {
    init();
  }, []);

  const optionButtonProps = {
    color: 'inherit',
    version: 'text',
    size: 'small'
  };

  return (
    <IFrame
      ref={ref}
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

            style={{
              width: '100%'
            }}
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
              <IconButton
                onClick={() => onUse('short')}

                {...optionButtonProps}
              >
                <IconMaterialDataObjectRounded />
              </IconButton>

              <IconButton
                onClick={() => onUse('long')}

                {...optionButtonProps}
              >
                <IconMaterialDraftRounded />
              </IconButton>

              <IconButton
                onClick={() => onUse('example')}

                {...optionButtonProps}
              >
                <IconMaterialTempPreferencesCustomRounded />
              </IconButton>
            </Line>
          </Line>

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
      </Surface>
    </IFrame>
  );
});

export default Example;
