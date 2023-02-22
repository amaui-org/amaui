import React from 'react';
import Dynamic from 'next/dynamic';

import { is, copyToClipboard } from '@amaui/utils';
import { IconButton, Line, Markdown, sanitize, Surface, Tooltip, Type } from '@amaui/ui-react';
import { classNames, style } from '@amaui/style-react';
import AmauiRequest from '@amaui/request';

import IconMaterialTempPreferencesCustomRounded from '@amaui/icons-material-react/IconMaterialTempPreferencesCustomRounded';
import IconMaterialDataObjectRounded from '@amaui/icons-material-react/IconMaterialDataObjectRounded';
import IconMaterialDraftRounded from '@amaui/icons-material-react/IconMaterialDraftRounded';

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

  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    gap: '8px',
    top: '0px',
    right: '0px',
    minHeight: 68,
    padding: '20px 26px',
    borderEndStartRadius: 12,
    backdropFilter: 'blur(2px)',
    opacity: 0,
    transition: theme.methods.transitions.make('opacity')
  },

  action: {
    position: 'relative',
    lineHeight: 0,
    cursor: 'pointer',
    userSelect: 'none',

    '&:active': {
      '& svg': {
        transform: 'scale(0.84)'
      }
    },

    '& svg': {
      fontSize: 16,
      pointerEvents: 'none',
      transition: theme.methods.transitions.make('transform')
    }
  },

  pre: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',

    '& > code': {
      flex: '1 1 auto',
      paddingBlock: '0 !important',
      paddingInlineEnd: '32px',
    },

    '& > $actions': {
      position: 'sticky',
      flex: '0 0 74px'
    },

    '&:hover': {
      '& $actions': {
        opacity: 1
      }
    }
  },

  markdown: {
    padding: '0',
    margin: '0',

    '& code[class*=language-], & pre[class*=language-]': {
      ...theme.typography.values.m3,

      color: 'inherit',
      fontSize: '0.75rem',
      textShadow: 'none'
    },

    '& .token.comment': {
      color: 'inherit',
      opacity: 0.5
    },

    '& code': {
      counterReset: 'lines'
    },

    '& pre': {
      padding: '0',
      margin: '16px 0',
      background: theme.palette.light ? theme.palette.background.default.primary : theme.palette.color.primary[5],
      boxShadow: theme.palette.light ? theme.shadows.values.default[12] : undefined,
      // maxHeight: '540px',
      position: 'relative'
    },

    '& .operator': {
      background: 'transparent'
    },

    '& .keyword, & .attr-name': {
      color: theme.palette.color.primary[theme.palette.light ? 40 : 30]
    },

    '& .attr-name': {
      fontStyle: 'italic'
    },

    '& .function, & .class-name, & .tag': {
      color: theme.palette.color.primary[theme.palette.light ? 30 : 40]
    },

    '& .constant': {
      color: theme.palette.color.secondary[theme.palette.light ? 40 : 30]
    },

    '& .important, & .regex, & .variable': {
      color: theme.palette.color.tertiary[theme.palette.light ? 40 : 30]
    },

    '& .number, & .boolean': {
      color: theme.palette.color.quaternary[theme.palette.light ? 40 : 30]
    },

    '& .punctuation': {
      color: theme.methods.palette.color.colorToRgb(theme.methods.palette.color.value('primary', 10), 54)
    },

    '& .property, & .operator, & .builtin.class-name, & .script': {
      color: theme.methods.palette.color.value('primary', 10)
    },

    '& .token.attr-value': {
      color: '#690'
    },

    '& table': {
      border: 'none',

      '& th, & td': {
        borderRight: 'none'
      }
    },

    '& thead > tr > th': {
      fontWeight: 700
    }
  },

  line: {
    textAlign: 'start',
    counterIncrement: 'line',
    height: 20,
    lineHeight: '20px',

    '&:only-child': {
      paddingInlineStart: 32
    },

    '&:not(:only-child)::before': {
      content: 'counter(line)',
      minWidth: 24,
      marginInlineEnd: 20,
      textAlign: 'end',
      display: 'inline-block',
      color: 'currentcolor',
      opacity: 0.3
    },

    '&.language-bash': {
      '& .function + .function': {
        color: theme.methods.palette.color.value('primary', 10)
      }
    },

    '&.language-sh': {
      '& .function + .function': {
        color: theme.methods.palette.color.value('primary', 10)
      }
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

  const onUpdate = React.useCallback(() => {
    const Prism = (window as any).Prism;

    const iframes = Array.from(window.document.querySelectorAll('iframe'));

    for (const iframe of iframes) {
      const bodyIframe = iframe.contentWindow?.document.body;

      const markdowns = Array.from(bodyIframe!.querySelectorAll('.amaui-Markdown-root'));

      for (const markdown of markdowns) {
        // Update all headings within the markdown inner html
        let elements = Array.from(markdown?.querySelectorAll('pre') || []);

        // Add actions to pre elements
        elements.forEach(item => {
          const text = item.textContent;

          if (!(item as any).dataset.amaui) {
            // ClassName
            item.className = classNames([item.className, classes.pre]);

            // Mark
            item.setAttribute('data-amaui', 'true');

            const iconCopy = `<svg viewBox="0 0 24 24" width="1em" height="1em" focusable="false" aria-hidden="true" style="fill: currentcolor; font-size: 22px;"><path d="M9 18Q8.175 18 7.588 17.413Q7 16.825 7 16V4Q7 3.175 7.588 2.587Q8.175 2 9 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V16Q20 16.825 19.413 17.413Q18.825 18 18 18ZM9 16H18Q18 16 18 16Q18 16 18 16V4Q18 4 18 4Q18 4 18 4H9Q9 4 9 4Q9 4 9 4V16Q9 16 9 16Q9 16 9 16ZM5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V7Q3 6.575 3.288 6.287Q3.575 6 4 6Q4.425 6 4.713 6.287Q5 6.575 5 7V20Q5 20 5 20Q5 20 5 20H15Q15.425 20 15.713 20.288Q16 20.575 16 21Q16 21.425 15.713 21.712Q15.425 22 15 22ZM9 4Q9 4 9 4Q9 4 9 4V16Q9 16 9 16Q9 16 9 16Q9 16 9 16Q9 16 9 16V4Q9 4 9 4Q9 4 9 4Z"/></svg>`;

            const iconDone = `<svg viewBox="0 0 24 24" width="1em" height="1em" focusable="false" aria-hidden="true" style="fill: currentcolor; font-size: 22px;"><path d="M9.55 17.575Q9.35 17.575 9.175 17.512Q9 17.45 8.85 17.3L4.55 13Q4.275 12.725 4.287 12.287Q4.3 11.85 4.575 11.575Q4.85 11.3 5.275 11.3Q5.7 11.3 5.975 11.575L9.55 15.15L18.025 6.675Q18.3 6.4 18.738 6.4Q19.175 6.4 19.45 6.675Q19.725 6.95 19.725 7.387Q19.725 7.825 19.45 8.1L10.25 17.3Q10.1 17.45 9.925 17.512Q9.75 17.575 9.55 17.575Z"/></svg>`;

            const actions = window.document.createElement('div');

            actions.className = classNames([classes.actions]);

            // Actions
            const actionCopy = window.document.createElement('span');

            actionCopy.onclick = async event => {
              const target = event.target as HTMLElement;

              await copyToClipboard(text?.trim());

              actionCopy.innerHTML = iconDone;

              clearTimeout((target as any).timeout);

              const remove = () => {
                actionCopy.innerHTML = iconCopy;

                (actionCopy.parentElement?.parentElement as any).onmouseleave = (actionCopy.parentElement?.parentElement as any).onmouseout = undefined;
              };

              const removeOnOut = (event_: any) => {
                if (event_.target === (actionCopy.parentElement?.parentElement as any)) remove();
              };

              (actionCopy.parentElement?.parentElement as any).onmouseleave = (actionCopy.parentElement?.parentElement as any).onmouseout = removeOnOut;

              (target as any).timeout = setTimeout(remove, 1100);
            };

            actionCopy.className = classNames([classes.action]);

            actionCopy.innerHTML = iconCopy;

            // Add to actions
            actions.append(actionCopy);

            // Add to pre
            item.append(actions);
          }
        });

        // Parse code blocks
        elements = Array.from(markdown?.querySelectorAll('pre > code') || []);

        elements.forEach(item => {
          if (!(item as any).dataset.amaui) {
            // Mark
            item.setAttribute('data-amaui', 'true');

            const items = (item.textContent || '').split('\n').slice(0, -1);

            // Reset
            item.innerHTML = '';

            items.forEach(line => {
              const lineDiv = window.document.createElement('div');

              lineDiv.className = classNames([classes.line, ...(Array.from(item.parentElement?.classList || []) as any).filter((value: any) => value.startsWith('language-'))]);

              lineDiv.innerHTML = line ? sanitize(line) : '';

              Prism.highlightElement(lineDiv);

              item.append(lineDiv);
            });
          }
        });
      }
    }
  }, []);

  const onUse = React.useCallback((valueNew: string) => {
    setUse(valueNew);
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

              style={{
                position: 'relative'
              }}
            >
              <Tooltip
                label='Short'

                {...tooltipProps}
              >
                <IconButton
                  onClick={() => onUse('short')}

                  selected={use === 'short'}

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

                  selected={use === 'long'}

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

                  selected={use === 'example'}

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
              <Markdown
                value={`\`\`\`jsx\n${use === 'short' ? files.short : files.long}\`\`\``}

                onUpdate={onUpdate}

                className={classes.markdown}
              />
            )}
          </Line>
        </Line>
      </Surface>
    </IFrame>
  );
});

export default Example;
