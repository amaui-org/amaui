import React from 'react';
import Head from 'next/head';
import LinkNext from 'next/link';

import { clamp, parse, random, slugify, unique, copyToClipboard } from '@amaui/utils';
import { Button, Interaction, Line, Markdown, SpyScroll, Type, useMainProgress, useMediaQuery, Placeholder, Fade, Tooltip, IconButton } from '@amaui/ui-react';
import { classNames, style as styleMethod } from '@amaui/style-react';
import AmauiRequest from '@amaui/request';

import IconGithub from '../../../public/assets/svg/github.svg';

import { BottomNavigation, Example } from '../ui';

const useStyle = styleMethod(theme => ({
  root: {
    paddingInline: 40,
    marginTop: 'clamp(40px, 7vw, 114px)',
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
    backdropFilter: 'blur(2px)',
    opacity: 0,
    transition: theme.methods.transitions.make('opacity')
  },

  action: {
    lineHeight: 0,
    cursor: 'pointer',
    userSelect: 'none',
    transition: theme.methods.transitions.make('transform'),

    '&:active': {
      transform: 'scale(0.84)'
    },

    '& svg': {
      fontSize: 16
    }
  },

  pre: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',

    '& > code': {
      flex: '1 1 auto',
      padding: '24px 32px 24px 0 !important'
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
      background: theme.palette.light ? theme.palette.background.default.primary : theme.palette.color.primary[5],
      boxShadow: theme.palette.light ? theme.shadows.values.default[12] : undefined,
      maxHeight: '540px',
      position: 'relative'
    },

    '& .operator': {
      background: 'transparent'
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
    }
  },

  sidenav: {
    width: '100%',
    maxWidth: 140,
    flex: '0 0 auto',
    position: 'sticky',
    top: '114px'
  },

  sidenav_headings: {
    marginInlineStart: -16
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
}), { name: 'library' });

export default function Library(props: any) {
  const { classes } = useStyle(props);
  const mainProgress = useMainProgress();

  const [init, setInit] = React.useState(false);
  const [markdownAdded, setMarkdownAdded] = React.useState(false);
  const [value, setValue] = React.useState(props.value || '');
  const [headings, setHeadings] = React.useState<any>([]);
  const [loaded, setLoaded] = React.useState(false);

  const mediumScreen = useMediaQuery('(max-width: 1300px)');
  const useMiddleMargin = useMediaQuery('(min-width: 1800px)');

  const refs = {
    id: React.useId(),
    wrapper: React.useRef<HTMLElement>(),
    value: React.useRef<any>(),
    url: React.useRef<string>()
  };

  refs.value.current = value;

  const page = React.useCallback(async (url_: string) => {
    refs.url.current = url_;

    const url = url_?.split('/dev')[1];

    // Main progress
    mainProgress.start();

    // page md
    const response = await AmauiRequest.get(`/assets/md/dev${url}.md`, { response: { type: 'text' } });

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
    // Element scroll into the view
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');

      setTimeout(() => {
        scrollIntoView(id);
      }, 1400);
    }

    onUpdate();

    setInit(true);
  }, []);

  React.useEffect(() => {
    if (refs.url.current !== props.url) {
      setMarkdownAdded(false);
    }

    // Get page details
    page(props.url);
  }, [props.url]);

  const onStart = React.useCallback(() => {
    // setLoaded(false);
  }, []);

  const onAdded = React.useCallback(() => {
    setMarkdownAdded(true);
  }, []);

  const onUpdate = React.useCallback(() => {
    const Prism = (window as any).Prism;

    const markdowns = Array.from(refs.wrapper.current!.querySelectorAll('.amaui-Markdown-root'));

    const valuesHeadings: any = [];

    markdowns.forEach(markdown => {
      // Update all headings within the markdown inner html
      let elements = Array.from(markdown?.querySelectorAll('h1, h2, h3, h4, h5, h6') || []);

      // Add url anchor to heading elements
      elements.forEach(item => {
        const id = slugify(item.innerHTML);

        const text = item.textContent;

        // ID
        if (!(item as any).dataset.amaui) {
          item.id = id;

          // ClassName
          item.className = classNames([item.className, classes.heading]);

          // Mark
          item.setAttribute('data-amaui', 'true');

          const iconAnchor = `<svg viewBox="0 0 24 24" width="1em" height="1em" focusable="false" aria-hidden="true" style="fill: currentcolor; font-size: 24px;"><path d="M7 17Q4.925 17 3.463 15.537Q2 14.075 2 12Q2 9.925 3.463 8.462Q4.925 7 7 7H10Q10.425 7 10.713 7.287Q11 7.575 11 8Q11 8.425 10.713 8.712Q10.425 9 10 9H7Q5.75 9 4.875 9.875Q4 10.75 4 12Q4 13.25 4.875 14.125Q5.75 15 7 15H10Q10.425 15 10.713 15.287Q11 15.575 11 16Q11 16.425 10.713 16.712Q10.425 17 10 17ZM9 13Q8.575 13 8.288 12.712Q8 12.425 8 12Q8 11.575 8.288 11.287Q8.575 11 9 11H15Q15.425 11 15.713 11.287Q16 11.575 16 12Q16 12.425 15.713 12.712Q15.425 13 15 13ZM14 17Q13.575 17 13.288 16.712Q13 16.425 13 16Q13 15.575 13.288 15.287Q13.575 15 14 15H17Q18.25 15 19.125 14.125Q20 13.25 20 12Q20 10.75 19.125 9.875Q18.25 9 17 9H14Q13.575 9 13.288 8.712Q13 8.425 13 8Q13 7.575 13.288 7.287Q13.575 7 14 7H17Q19.075 7 20.538 8.462Q22 9.925 22 12Q22 14.075 20.538 15.537Q19.075 17 17 17Z"/></svg>`;

          // Add the anchors
          item.innerHTML += `<a href='#${id}' class='${classNames([classes.anchor])}' aria-label='${text}' title='${text}'>${iconAnchor}</a>`;
        }

        valuesHeadings.push({
          id: item.id,
          text,
          priority: +item.tagName.slice(1)
        });
      });

      // Update all headings within the markdown inner html
      elements = Array.from(markdown?.querySelectorAll('pre') || []);

      // Add url anchor to heading elements
      elements.forEach(item => {
        const text = item.textContent;

        if (!(item as any).dataset.amaui) {
          // ClassName
          item.className = classNames([item.className, classes.pre]);

          // Mark
          item.setAttribute('data-amaui', 'true');

          const iconCopy = `<svg viewBox="0 0 24 24" width="1em" height="1em" focusable="false" aria-hidden="true" style="fill: currentcolor; font-size: 22px;"><path d="M9 18Q8.175 18 7.588 17.413Q7 16.825 7 16V4Q7 3.175 7.588 2.587Q8.175 2 9 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V16Q20 16.825 19.413 17.413Q18.825 18 18 18ZM9 16H18Q18 16 18 16Q18 16 18 16V4Q18 4 18 4Q18 4 18 4H9Q9 4 9 4Q9 4 9 4V16Q9 16 9 16Q9 16 9 16ZM5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V7Q3 6.575 3.288 6.287Q3.575 6 4 6Q4.425 6 4.713 6.287Q5 6.575 5 7V20Q5 20 5 20Q5 20 5 20H15Q15.425 20 15.713 20.288Q16 20.575 16 21Q16 21.425 15.713 21.712Q15.425 22 15 22ZM9 4Q9 4 9 4Q9 4 9 4V16Q9 16 9 16Q9 16 9 16Q9 16 9 16Q9 16 9 16V4Q9 4 9 4Q9 4 9 4Z"/></svg>`;

          const actions = window.document.createElement('div');

          actions.className = classNames([classes.actions]);

          // Actions
          const actionCopy = window.document.createElement('span');

          actionCopy.onclick = async () => {
            await copyToClipboard(text?.trim());
          };

          actionCopy.className = classNames([classes.action]);

          actionCopy.innerHTML = iconCopy;

          // Add to actions
          actions.append(actionCopy);

          // Add to pre
          item.append(actions);
        }
      });

      // Code blocks
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

            lineDiv.innerHTML = line;

            Prism.highlightElement(lineDiv);

            item.append(lineDiv);
          });
        }
      });
    });

    setHeadings(unique([...valuesHeadings], 'id'));

    setMarkdownAdded(true);
  }, []);

  const values = value?.trim().match(/[^~]+?(?=~)|(?:~)[\s\S]+?(?:~)/ig) || [];

  if (!value.includes('~{')) values.push(value);

  const element = (value_: string, index: number) => {
    if (value_?.indexOf('~{') !== 0) return (
      <Markdown
        key={index}

        value={value_}

        onAdded={onAdded}

        onStart={onStart}

        onUpdate={onUpdate}

        className={classNames([
          classes.markdown
        ])}
      />
    );

    const object = parse(value_.slice(1, -1));

    const objectProps = {
      key: index,

      ...object?.props
    };

    switch (object?.element) {
      case 'BottomNavigation':
        return (
          markdownAdded && <BottomNavigation {...objectProps} />
        );

      case 'Example':
        return (
          <Example {...objectProps} />
        );

      default:
        break;
    }
  };

  const onClickSidenavHeading = React.useCallback((heading: any) => {
    const { id } = heading;

    // Scroll into view the value
    scrollIntoView(id);
  }, []);

  const withSidenav = !mediumScreen && !!headings.length;

  const activePageRecursive = (menu: any[] = props.menu): any => {
    for (const item of menu) {
      if (item.url === props.url) return item;
      else if (item?.menu) {
        const activePage_ = activePageRecursive(item.menu as any);

        if (activePage_) return activePage_;
      }
    }
  };

  const activePage = activePageRecursive();

  const maxPriority = clamp(Math.max(...headings?.map((item: any) => item.priority)), 1);

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

  let activePageGroup = activePage?.url?.split('/')[3];

  activePageGroup = activePageGroup === 'api' ? 'API' : activePageGroup === 'use' ? 'Use' : '';

  if (activePageGroup === 'Use' && !activePage?.menu?.length) activePageGroup = '';

  return <>
    <Head>
      <title>{props.label}{activePageGroup ? ` ${activePageGroup}` : activePageGroup}{activePage?.label ? `: ${activePage?.label}` : ''}</title>

      <meta property='og:title' content={`${props.label}${activePageGroup ? ` ${activePageGroup}` : activePageGroup}${activePage?.label ? `: ${activePage?.label}` : ''}`} />
      <meta property='og:url' content={`https://amaui.me${props.url}`} />
    </Head>

    <SpyScroll
      ids={headings.map((heading: any) => heading.id)}

      addClassName='active'
    >
      <Line
        gap={0}

        direction='column'

        align='center'

        id={refs.id}

        className={classNames([
          classes.root
        ])}
      >
        {!value && loaded && (
          <Line
            gap={3}

            direction='column'

            justify='center'

            align='center'
          >
            <Type
              version='h3'

              style={{
                textAlign: 'center'
              }}
            >
              Oops, no page found 🤷‍♀️
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
            gap={0}

            direction='column'

            className={classes.wrapper}

            style={{
              ...((withSidenav && useMiddleMargin) ? {
                marginInlineStart: 180
              } : {})
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

                      href={`https://github.com/amaui-org/amaui/tree/main/docs/public/assets/md${props.url}.md`}

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

          {withSidenav && (
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
                {headings.map((heading: any, index: number) => (
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
                      marginLeft: (heading.priority - maxPriority + 1) * 8
                    }}
                  >
                    {heading.text}

                    <Interaction />
                  </Type>
                ))}
              </Line>
            </Line>
          )}
        </Line>
      </Line>
    </SpyScroll >
  </>;
}
