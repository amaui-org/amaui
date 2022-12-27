import React from 'react';

import { Interaction, Line, Markdown, SpyScroll, Type, useMainProgress, useMediaQuery } from '@amaui/ui-react';
import { classNames, style as styleMethod } from '@amaui/style-react';
import AmauiRequest from '@amaui/request';
import { slugify } from '@amaui/utils';

const useStyle = styleMethod(theme => ({
  root: {
    paddingInline: 40,
    marginTop: 114,
    marginInline: 'auto'
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

  markdown: {
    maxWidth: 1024,
    flex: '1 1 auto',

    '& code[class*=language-], & pre[class*=language-]': {
      ...theme.typography.values.m3,

      color: 'inherit',
      fontSize: '0.75rem',
      textShadow: 'none'
    },

    '& pre': {
      padding: '24px 26px',
      margin: '16px 0',
      background: theme.palette.light ? theme.palette.background.default.primary : theme.palette.color.primary[5],
      boxShadow: theme.palette.light ? theme.shadows.values.default[12] : undefined,
      maxHeight: '540px'
    },

    '& .operator': {
      background: 'transparent'
    },

    '& > *:first-child': {
      marginTop: 0
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
    transition: theme.methods.transitions.make('box-shadow'),

    '&:focus-visible': {
      boxShadow: `inset 0px 0px 0px 1px ${theme.palette.text.default.tertiary}`
    },

    '&.active': {
      boxShadow: `inset 0px 0px 0px 1px ${theme.palette.text.default.primary}`
    }
  }
}), { name: 'library' });

export default function Library(props: any) {
  const { classes } = useStyle(props);
  const mainProgress = useMainProgress();

  const [init, setInit] = React.useState(false);
  const [value, setValue] = React.useState(props.value || '');
  const [headings, setHeadings] = React.useState<any>([]);

  const mediumScreen = useMediaQuery('(max-width: 1300px)');
  const useMiddleMargin = useMediaQuery('(min-width: 1800px)');

  const refs = {
    id: React.useId(),
    headings: React.useRef<any[]>([]),
    markdown: React.useRef<HTMLElement>()
  };

  const page = React.useCallback(async (url_: string) => {
    const url = url_?.split('/dev')[1];

    // Main progress
    mainProgress.start();

    // page md
    const response = (await AmauiRequest.get(`/assets/md/dev${url}.md`, { response: { type: 'text' } }));

    if (response.status === 200) setValue(response.response);
    else {
      setValue('');
      setHeadings([]);
    }

    // Main progress
    mainProgress.done();
  }, [mainProgress]);

  const scrollIntoView = React.useCallback((id: string) => {
    const element = window.document.getElementById(id);

    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }, []);

  React.useEffect(() => {
    // Element scroll into the view
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');

      scrollIntoView(id);
    }

    setInit(true);
  }, []);

  React.useEffect(() => {
    // Get page details
    if (init || !value) page(props.url);
  }, [props.url]);

  const onUpdate = React.useCallback(() => {
    const Prism = (window as any).Prism;

    Prism.highlightAllUnder(window.document.getElementById(refs.id) as HTMLElement);

    setHeadings([...refs.headings.current]);

    // Update all headings within the markdown inner html
    const elements = Array.from(refs.markdown.current?.querySelectorAll('h1, h2, h3, h4, h5, h6') || []);

    elements.forEach(element => {
      const id = slugify(element.innerHTML);

      // ID
      element.id = id;

      // ClassName
      element.className = classNames([element.className, classes.heading]);

      const text = element.innerHTML;

      const iconAnchor = `<svg viewBox="0 0 24 24" width="1em" height="1em" focusable="false" aria-hidden="true" style="fill: currentcolor; font-size: 24px;"><path d="M7 17Q4.925 17 3.463 15.537Q2 14.075 2 12Q2 9.925 3.463 8.462Q4.925 7 7 7H10Q10.425 7 10.713 7.287Q11 7.575 11 8Q11 8.425 10.713 8.712Q10.425 9 10 9H7Q5.75 9 4.875 9.875Q4 10.75 4 12Q4 13.25 4.875 14.125Q5.75 15 7 15H10Q10.425 15 10.713 15.287Q11 15.575 11 16Q11 16.425 10.713 16.712Q10.425 17 10 17ZM9 13Q8.575 13 8.288 12.712Q8 12.425 8 12Q8 11.575 8.288 11.287Q8.575 11 9 11H15Q15.425 11 15.713 11.287Q16 11.575 16 12Q16 12.425 15.713 12.712Q15.425 13 15 13ZM14 17Q13.575 17 13.288 16.712Q13 16.425 13 16Q13 15.575 13.288 15.287Q13.575 15 14 15H17Q18.25 15 19.125 14.125Q20 13.25 20 12Q20 10.75 19.125 9.875Q18.25 9 17 9H14Q13.575 9 13.288 8.712Q13 8.425 13 8Q13 7.575 13.288 7.287Q13.575 7 14 7H17Q19.075 7 20.538 8.462Q22 9.925 22 12Q22 14.075 20.538 15.537Q19.075 17 17 17Z"/></svg>`;

      // Add the anchors
      element.innerHTML += `<a href='#${id}' class='${classNames([classes.anchor])}' aria-label='${text}' title='${text}'>${iconAnchor}</a>`;
    });
  }, []);

  const onStart = React.useCallback(() => {
    refs.headings.current = [];
  }, []);

  const render = React.useCallback((tag: string, className: string, style: string, match: string, a1: string, ...args: string[]) => {
    switch (tag) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        const id = slugify(a1);

        refs.headings.current.push({
          tag,
          id,
          text: a1
        });

        return;

      default:
        return;
    }
  }, []);

  const onClickSidenavHeading = React.useCallback((heading: any) => {
    const { id } = heading;

    // Scroll into view the value
    scrollIntoView(id);
  }, []);

  const withSidenav = !mediumScreen && !!headings.length;

  return (
    <SpyScroll
      ids={headings.map((heading: any) => heading.id)}

      addClassName='active'
    >
      <Line
        gap={5}

        direction='row'

        justify='center'

        id={refs.id}

        className={classNames([
          classes.root
        ])}
      >
        <Markdown
          ref={refs.markdown}

          value={value}

          onStart={onStart}

          onUpdate={onUpdate}

          render={render}

          className={classNames([
            classes.markdown
          ])}

          style={{
            ...((withSidenav && useMiddleMargin) ? {
              marginInlineStart: 180
            } : {})
          }}
        />

        {withSidenav && (
          <Line
            gap={1}

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
              {props.label}
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
                >
                  {heading.text}

                  <Interaction />
                </Type>
              ))}
            </Line>
          </Line>
        )}
      </Line>
    </SpyScroll>
  );
}
