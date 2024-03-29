import React from 'react';
import Head from 'next/head';
import LinkNext from 'next/link';

import { clamp, parse, random, slugify, unique, copyToClipboard } from '@amaui/utils';
import { Button, Interaction, Line, Markdown, SpyScroll, Type, useMainProgress, useMediaQuery, Placeholder, Fade, Tooltip, IconButton, sanitize, Accordion } from '@amaui/ui-react';
import { classNames, style as styleMethod } from '@amaui/style-react';
import AmauiRequest from '@amaui/request';

import IconGithub from '../../../public/assets/svg/github.svg';

import { BottomNavigation, Example } from '../ui';

const useStyle = styleMethod(theme => ({
  root: {
    paddingInline: 40,
    marginTop: 'clamp(40px, 4vw, 114px)',
    marginInline: 'auto',

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
    },

    '& .amaui-Markdown-root, & .amaui-Accordion-root': {
      color: 'inherit'
    }
  },

  heading: {
    position: 'relative',

    '&:hover': {
      '& > $anchor': {
        opacity: 1
      }
    }
  },

  anchor: {
    color: 'inherit',
    opacity: 0,
    position: 'absolute',
    left: '-48px',
    top: '50%',
    transform: 'translateY(-50%)',
    lineHeight: 0,
    padding: '0 12px',
    transition: theme.methods.transitions.make('opacity', { duration: 'xs' })
  },

  wrapper: {
    width: '100%',
    maxWidth: 1024,
    flex: '1 1 auto',
    position: 'relative'
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

  tooltip: {
    ...theme.typography.values.b3,

    display: 'inline-block',
    position: 'absolute',
    opacity: 0,
    transform: 'scale(0.74)',
    borderRadius: `${clamp(theme.shape.radius.unit / 2, 0, 8)}px`,
    padding: '4px 8px',
    color: theme.palette.background.default.primary,
    backgroundColor: theme.palette.light ? theme.palette.background.dark.primary : theme.palette.background.light.primary,
    lineHeight: '1.455',
    transition: theme.methods.transitions.make(['opacity', 'transform'])
  },

  pre: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',

    '& > code': {
      flex: '1 1 auto',
      paddingBlock: '24px !important',
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
      background: theme.palette.light ? theme.palette.background.default.primary : theme.palette.color.primary[10],
      boxShadow: theme.palette.light ? `0px 8px 10px 1px rgb(0 0 0 / 1%), 0px 3px 14px 2px rgb(0 0 0 / 1%), 0px 5px 5px -3px rgb(0 0 0 / 4%)` : undefined,
      height: 'auto !important',
      maxHeight: '540px',
      position: 'relative'
    },

    '& .operator': {
      background: 'transparent'
    },

    '& .keyword, & .attr-name': {
      color: theme.palette.color.primary[40]
    },

    '& .attr-name': {
      fontStyle: 'italic'
    },

    '& .function, & .class-name, & .tag': {
      color: theme.palette.color.primary[30]
    },

    '& .constant': {
      color: theme.palette.color.secondary[40]
    },

    '& .important, & .regex, & .variable': {
      color: theme.palette.color.tertiary[40]
    },

    '& .number, & .boolean': {
      color: theme.palette.color.quaternary[40]
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
      minWidth: 40,
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
  },

  sidenav: {
    width: '100%',
    maxWidth: 240,
    flex: '0 0 auto',
    position: 'sticky',
    top: '114px',

    '& *': {
      wordBreak: 'break-all'
    }
  },

  sidenav_headings: {
    maxHeight: '74vh',
    overflowY: 'auto',
    marginInlineStart: -16,
    padding: '0 8px'
  },

  sidenav_heading: {
    display: 'inline-block',
    cursor: 'pointer',
    padding: '8px 16px',
    borderRadius: '140px',
    position: 'relative',
    fontSize: '0.875rem',
    userSelect: 'none',
    textAlign: 'start',
    transition: theme.methods.transitions.make('box-shadow'),

    '&:focus-visible': {
      boxShadow: `inset 0px 0px 0px 1px ${theme.palette.text.default.tertiary}`
    },

    '&.active': {
      boxShadow: `inset 0px 0px 0px 1px ${theme.palette.text.default.primary}`
    }
  },

  header: {
    flex: '0 0 auto'
  },

  placeholders: {
    marginTop: '40px',
    width: '100%'
  },

  icon: {
    width: 'auto',
    height: '24px',
    fill: 'currentColor'
  },

  accordion: {
    '&.amaui-Accordion-root': {
      background: 'none',
      marginTop: '14px !important'
    }
  }
}), { name: 'library' });

export default function Library(props: any) {
  const { classes } = useStyle(props);
  const mainProgress = useMainProgress();

  const [init, setInit] = React.useState(false);
  const [markdownAdded, setMarkdownAdded] = React.useState(false);
  const [value, setValue] = React.useState(props.value || '');
  const [headings, setHeadings] = React.useState<any>([]);
  const [loaded, setLoaded] = React.useState(false);

  const smallScreen = useMediaQuery('(max-width: 1100px)');
  const mediumScreen = useMediaQuery('(max-width: 1300px)');
  const minMediumScreen = useMediaQuery('(min-width: 1300px)');
  const useMiddleMargin = useMediaQuery('(min-width: 1800px)');

  const refs = {
    id: React.useId(),
    root: React.useRef<HTMLElement>(),
    wrapper: React.useRef<HTMLElement>(),
    main: React.useRef<HTMLElement>(),
    value: React.useRef<any>(),
    url: React.useRef<string>()
  };

  refs.value.current = value;

  const allURLs: string[] = [];

  const allURLsRecursive = (menu = props.menu || []) => {
    for (const item of menu) {
      if (item.url) allURLs.push(item.url);

      if (item.menu) allURLsRecursive(item.menu);
    }
  };

  allURLsRecursive();

  const URL = React.useMemo(() => {
    const urls = [props.default, ...allURLs];

    return urls.includes(props.url) ? props.url : props.default;
  }, [props.url]);

  const activePageRecursive = (menu: any[] = props.menu): any => {
    for (const item of menu) {
      if (item.url === URL) return item;
      else if (item?.menu) {
        const activePage_ = activePageRecursive(item.menu as any);

        if (activePage_) return activePage_;
      }
    }
  };

  const activePage = activePageRecursive();

  let group = activePage?.url?.split('/')[3];

  group = group === 'api' ? 'API' : group === 'use' ? 'Use' : '';

  let pageLabel = activePage?.label;

  if (['use', 'api'].includes(pageLabel.toLowerCase())) group = '';

  const title = `${props.label}${group ? ` ${group}` : group}${pageLabel ? `: ${pageLabel}` : ''}`;

  const page = React.useCallback(async (url_: string) => {
    refs.url.current = url_;

    const url = url_?.split('/library')[1];

    // Main progress
    mainProgress.start();

    // page md
    const response = await AmauiRequest.get(`/assets/md/library${url}.md`, { response: { type: 'text' } });

    if (response.status === 200) setValue(response.response);
    else {
      setValue('');
    }

    if (!loaded) setLoaded(true);

    // Main progress
    mainProgress.done();
  }, [mainProgress, loaded]);

  const scrollIntoView = React.useCallback((id: string) => {
    const element = window.document.getElementById(id);

    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, []);

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    if (init) {
      onUpdate();

      // Element scroll into the view
      if (window.location.hash) {
        const id = window.location.hash.replace('#', '');

        setTimeout(() => {
          scrollIntoView(id);
        }, 4400);
      }
    }
  }, [init]);

  React.useEffect(() => {
    if (refs.url.current !== URL) {
      setMarkdownAdded(false);
    }

    // Get page details
    page(URL);
  }, [URL]);

  const onStart = React.useCallback(() => {
    // setLoaded(false);
  }, []);

  const onAdded = React.useCallback(() => {
    setMarkdownAdded(true);
  }, []);

  const onUpdate = React.useCallback(() => {
    const Prism = (window as any).Prism;

    const markdowns = Array.from(refs.main.current!.querySelectorAll('.amaui-Markdown-root'));

    markdowns.forEach(markdown => {
      let elements: Element[] = [];

      // Update all headings within the markdown inner html
      elements = Array.from(markdown?.querySelectorAll('pre') || []);

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

            // if (!(target as any).tooltip) {
            //   const tooltip = window.document.createElement('span');

            //   (target as any).tooltip = tooltip;

            //   tooltip.innerHTML = 'Copied!';
            //   tooltip.className = classes.tooltip;

            //   const rect = target.getBoundingClientRect();

            //   window.document.body.append(tooltip);

            //   setTimeout(() => {
            //     tooltip.style.top = `${window.scrollY + rect.y + 40}px`;
            //     tooltip.style.left = `${rect.x - (Math.abs(tooltip.clientWidth - target.clientWidth) / 2)}px`;
            //     tooltip.style.opacity = '1';
            //     tooltip.style.transform = 'scale(1)';
            //   }, 14);
            // }

            actionCopy.innerHTML = iconDone;

            clearTimeout((target as any).timeout);

            const remove = () => {
              actionCopy.innerHTML = iconCopy;

              // (actionCopy.parentElement?.parentElement as any).onmouseleave = (actionCopy.parentElement?.parentElement as any).onmouseout = undefined;

              // if ((target as any).tooltip) {
              //   (target as any).tooltip.style.opacity = 0;
              //   (target as any).tooltip.style.transform = 'scale(0.74)';

              //   setTimeout(() => {
              //     if ((target as any).tooltip) {
              //       (target as any).tooltip.remove();

              //       (target as any).tooltip = undefined;

              //       (actionCopy.parentElement?.parentElement as any).onmouseleave = (actionCopy.parentElement?.parentElement as any).onmouseout = undefined;
              //     }
              //   }, 300);
              // }
            };

            // const removeOnOut = (event_: any) => {
            //   if (event_.target === (actionCopy.parentElement?.parentElement as any)) remove();
            // };

            // (actionCopy.parentElement?.parentElement as any).onmouseleave = (actionCopy.parentElement?.parentElement as any).onmouseout = removeOnOut;

            (target as any).timeout = setTimeout(remove, 1100);
          };

          actionCopy.className = classNames([classes.action]);

          actionCopy.innerHTML = iconCopy;

          // On mouse enter
          (item as any).onmouseenter = () => {
            clearTimeout((actionCopy as any).timeout);

            actionCopy.innerHTML = iconCopy;
          };

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
    });

    const valuesHeadings: any = [];

    // Update all headings within the markdown inner html
    let elements = Array.from(refs.main.current?.querySelectorAll('h1, h2, h3, h4, h5, h6') || []);

    const exists = (item: string) => window.document.getElementById(item);

    // Add url anchor to heading elements
    elements.forEach(item => {
      const text = item.textContent;

      if (!item.id) {
        item.id = slugify(text as any);

        let counter = 1;

        const elementExists = exists(item.id);

        if (elementExists && elementExists !== item) {
          while (exists(`${item.id}-${counter}`)) counter++;

          item.id = `${item.id}-${counter}`;
        }
      }

      valuesHeadings.push({
        id: item.id,
        text,
        priority: +item.tagName.slice(1)
      });

      // ID
      if (!(item as any).dataset.amaui) {
        // ClassName
        item.className = classNames([item.className, classes.heading]);

        // Mark
        item.setAttribute('data-amaui', 'true');

        const iconAnchor = `<svg viewBox="0 0 24 24" width="1em" height="1em" focusable="false" aria-hidden="true" style="fill: currentcolor; font-size: 24px;"><path d="M7 17Q4.925 17 3.463 15.537Q2 14.075 2 12Q2 9.925 3.463 8.462Q4.925 7 7 7H10Q10.425 7 10.713 7.287Q11 7.575 11 8Q11 8.425 10.713 8.712Q10.425 9 10 9H7Q5.75 9 4.875 9.875Q4 10.75 4 12Q4 13.25 4.875 14.125Q5.75 15 7 15H10Q10.425 15 10.713 15.287Q11 15.575 11 16Q11 16.425 10.713 16.712Q10.425 17 10 17ZM9 13Q8.575 13 8.288 12.712Q8 12.425 8 12Q8 11.575 8.288 11.287Q8.575 11 9 11H15Q15.425 11 15.713 11.287Q16 11.575 16 12Q16 12.425 15.713 12.712Q15.425 13 15 13ZM14 17Q13.575 17 13.288 16.712Q13 16.425 13 16Q13 15.575 13.288 15.287Q13.575 15 14 15H17Q18.25 15 19.125 14.125Q20 13.25 20 12Q20 10.75 19.125 9.875Q18.25 9 17 9H14Q13.575 9 13.288 8.712Q13 8.425 13 8Q13 7.575 13.288 7.287Q13.575 7 14 7H17Q19.075 7 20.538 8.462Q22 9.925 22 12Q22 14.075 20.538 15.537Q19.075 17 17 17Z"/></svg>`;

        // Add the anchors
        item.innerHTML += `<a href='#${item.id}' class='${classNames([classes.anchor])}' aria-label='${text}' title='${text}'>${iconAnchor}</a>`;
      }
    });

    setHeadings(unique([...valuesHeadings], 'id'));

    setMarkdownAdded(true);
  }, []);

  let values = value?.trim().match(/(?!}~)[^~]+((?!~{))/ig) || [];

  if (values.length > 0 && values.length <= 2) {
    const md = (values[0].split(/## API[^~]+(?!$|~])/))[0]?.trim();
    let api = (values[0].match(/## API[^~]+(?!$|~])/) || [])[0]?.trim();

    if (api?.endsWith('\n``')) api = api + '`';

    values.splice(0, 1, md, api);

    values = values.filter(Boolean);
  }

  const element = React.useCallback((value_: string, index: number) => {
    if (value_?.indexOf('{') !== 0) {
      let valueMarkdown = value_;

      const isAPI = valueMarkdown.trim().includes('# API');

      if (isAPI) valueMarkdown = valueMarkdown.replace(`## API\n\n`, '');

      const markdown = (
        <Markdown
          key={index}

          value={valueMarkdown}

          onAdded={onAdded}

          onStart={onStart}

          onUpdate={onUpdate}

          className={classNames([
            classes.markdown
          ])}
        />
      );

      if (isAPI) {
        return (
          <Accordion
            openDefault={!!window.location.hash}

            primary={(
              <Type version='h2' id='api'>API</Type>
            )}

            className={classes.accordion}

            expandedMarginVertical='none'

            expandedHeaderPaddingVertical='none'

            headerPaddingHorizontal='none'

            mainPaddingHorizontal='none'
          >
            {markdown}
          </Accordion>
        )
      }

      return markdown;
    }

    const object = parse(value_);

    const objectProps = {
      key: index,

      ...object?.props
    };

    switch (object?.element) {
      case 'BottomNavigation':
        return (
          init && <BottomNavigation {...objectProps} />
        );

      case 'Example':
        return (
          <Example {...objectProps} />
        );

      default:
        break;
    }
  }, [init]);

  const onClickSidenavHeading = React.useCallback((heading: any) => {
    const { id } = heading;

    // Scroll into view the value
    scrollIntoView(id);
  }, []);

  const withSidenav = !mediumScreen && !!headings.length;

  const Placeholders = React.useMemo(() => {

    return (
      <Line
        direction='column'

        className={classes.placeholders}
      >
        {new Array(4).fill(true).map((item: any, index: number) => <>
          <Placeholder
            key={index}

            width={`${random(14, 40)}%`}

            height={40}
          />

          <Line
            gap={1}

            direction='column'

            style={{
              width: '100%'
            }}
          >
            {new Array(1).fill(true).map((item: any, index_: number) => (
              <Placeholder
                key={`${index}_${index_}`}

                width={`${random(4, 70)}%`}

                height={20}
              />
            ))}
          </Line>

          <Placeholder
            key={index + 1}

            width='100%'

            height={random(70, 240)}

            style={{
              marginTop: 7,
              marginBottom: 41
            }}
          />
        </>)}
      </Line>
    );
  }, []);

  if (!init) return null;

  const order = Array.from(new Set(headings.map((item: any) => item.priority)));

  order.sort();

  return <>
    <Head>
      <title>{title}</title>

      <meta property='og:title' content={title} />
      <meta property='og:url' content={`https://amaui.me${URL}`} />
    </Head>

    <SpyScroll
      ids={headings.map((heading: any) => heading.id)}

      addClassName='active'
    >
      <Line
        ref={refs.root}

        gap={0}

        direction='column'

        align='center'

        id={refs.id}

        className={classNames([
          classes.root
        ])}
      >
        {smallScreen && (
          <Type
            version='h2'

            style={{
              textAlign: 'center',
              margin: '24px 0 40px'
            }}
          >
            {title}
          </Type>
        )}

        {!value && loaded && (
          <Line
            gap={3}

            direction='column'

            justify='center'

            align='center'
          >
            <Type
              version='b1'

              style={{
                fontSize: 24,
                textAlign: 'center'
              }}
            >
              Oops, no page found 🤷
            </Type>

            <LinkNext
              href='/'
            >
              <Button
                color='inherit'
              >
                Back to home
              </Button>
            </LinkNext>
          </Line>
        )}

        <Line
          ref={refs.wrapper}

          gap={5}

          direction='row'

          justify='center'

          style={{
            width: '100%'
          }}
        >
          <Line
            ref={refs.main}

            gap={0}

            direction='column'

            className={classes.wrapper}

            style={{
              ...((withSidenav && minMediumScreen) && {
                width: `calc(100% - 280px)`
              }),

              ...((withSidenav && useMiddleMargin) && {
                width: `calc(100% - 280px)`,
                marginInlineStart: 280
              })
            }}
          >
            {!loaded && Placeholders}

            <Fade
              in={loaded}
            >
              <Line
                gap={0}

                direction='column'

                className={classes.wrapper}
              >
                {value && (
                  <Line
                    direction='row'

                    justify='flex-end'

                    align='center'

                    gap={0.5}

                    Component='header'

                    className={classNames([
                      classes.wrapper,
                      classes.header
                    ])}
                  >
                    <Tooltip
                      label={`${props?.label} repository`}
                    >
                      <IconButton
                        color='inherit'

                        Component='a'

                        href={`https://github.com/amaui-org${props?.github}`}

                        target='_blank'

                        size='small'
                      >
                        <IconGithub
                          className={classes.icon}

                          style={{
                            height: 22
                          }}
                        />
                      </IconButton>
                    </Tooltip>

                    <Button
                      color='inherit'

                      version='text'

                      href={`https://github.com/amaui-org/amaui/tree/main/docs/public/assets/md${URL}.md`}

                      target='_blank'

                      Component='a'
                    >
                      Edit page
                    </Button>
                  </Line>
                )}

                {values?.map((item: string, index: number) => element(item, index))}
              </Line>
            </Fade>
          </Line>

          {withSidenav && !!values?.length && (
            <Line
              gap={1}

              Component='nav'

              className={classNames([
                classes.sidenav
              ])}
            >
              <Type
                version='b3'
              >
                On this page
              </Type>

              <Type
                version='t2'
              >
                {activePage?.label || props.label}
              </Type>

              <Line
                gap={0}

                direction='column'

                className={classNames([
                  classes.sidenav_headings
                ])}
              >
                {headings.map((heading: any, index: number) => {
                  const orderIndex = order.findIndex(item => item === heading.priority);

                  return (
                    <Type
                      key={index}

                      version='b2'

                      onClick={() => onClickSidenavHeading(heading)}

                      data-amaui-spy-scroll={heading.id}

                      Component='button'

                      className={classNames([
                        classes.sidenav_heading
                      ])}

                      style={{
                        marginLeft: orderIndex * 8
                      }}
                    >
                      {heading.text}

                      <Interaction />
                    </Type>
                  );
                })}
              </Line>
            </Line>
          )}
        </Line>
      </Line>
    </SpyScroll>
  </>;
}
