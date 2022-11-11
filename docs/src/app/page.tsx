'use client';

import { Button, Line, Link, Surface, Tooltip, Type } from '@amaui/ui-react';
import { classNames, style } from '@amaui/style-react';

import Logo from '../../public/assets/svg/logo.svg';

const useStyle = style(theme => ({
  root: {
    width: '100vw',
    flex: '1 1 auto',
    background: theme.palette.background?.default?.primary
  },

  main_wrapper: {
    width: '100%',
    padding: 'clamp(104px, 14vw, 240px) 44px'
  },

  main_title: {
    color: theme.palette.color?.secondary?.[50],
    textAlign: 'center'
  },

  main_text: {
    maxWidth: theme.breakpoints.values?.md,
    textAlign: 'center',
    fontSize: 'clamp(2.1rem, 4vw, 4.4rem)'
  },

  main_text_accent: {
    color: theme.palette.color?.primary?.[50]
  },

  about_wrapper: {
    width: '100%',
    padding: 'clamp(40px, 5vw, 104px) 44px',
    background: theme.methods.palette.color.value('primary', 95, true)
  },

  about_title: {
    color: theme.palette.color?.secondary?.[50]
  },

  about_text: {
    maxWidth: theme.breakpoints.values?.md,
    textAlign: 'center',
    fontSize: 'clamp(1rem, 4vw, 1.5rem)'
  },

  library: {
    '& > svg': {
      height: '44px',
      width: 'auto'
    }
  }
}), { name: 'root' });

export default function Root(props: any) {
  const { classes } = useStyle(props);

  return (
    <Surface
      tonal

      color='primary'

      gap={0}

      Component={Line}

      className={classNames([
        classes.root
      ])}
    >
      {/* Main */}
      <section
        className={classNames([
          classes.main_wrapper
        ])}
      >
        <Line
          align='center'

          justify='center'

          className={classNames([
            classes.main
          ])}
        >
          <Type
            version='l2'

            className={classNames([
              classes.main_title
            ])}
          >
            Worlds First 100% Open Source Material Design 3 UI Library
          </Type>

          <Type
            version='d1'

            className={classNames([
              classes.main_text
            ])}
          >
            Make Modern Web & Mobile Apps Quickly <span className={classes.main_text_accent}>100+ UI elements</span>
          </Type>
        </Line>
      </section>

      {/* Presentation */}

      {/* About */}
      <section
        className={classNames([
          classes.about_wrapper
        ])}
      >
        <Line
          align='center'

          justify='center'

          className={classNames([
            classes.about
          ])}
        >
          <Type
            version='t2'

            className={classNames([
              classes.about_title
            ])}
          >
            About
          </Type>

          <Type
            version='h3'

            className={classNames([
              classes.about_text
            ])}
          >
            I am Lazar Eric, maker of amaui. I made amaui ecosystem of front-end & back-end tools, including UI React library with 100+ UI elements, based on newest Material Design 3, all a 100% Open source and free to use, as I want to push our market forward.
            <br /> <br />

            Waste less time on building tools, and more on making modern apps quickly, with quality.
          </Type>

          <Type
            version='l1'

            color='secondary'

            style={{
              marginTop: 54,
              marginBottom: 12
            }}
          >
            amaui libraries
          </Type>

          <Line
            gap={3}

            direction='row'

            align='center'

            justify='center'

            wrap='wrap'
          >
            <Line
              gap={5}

              direction='row'

              align='center'

              justify='center'

              wrap='wrap'
            >
              {[
                { name: 'UI', desc: 'UI React library, based on Material Design 3', url: 'https://github.com/amaui-org/amaui' },
                { name: 'Utils', desc: 'Utils for front-end, back-end', url: 'https://github.com/amaui-org/amaui-utils' },
                { name: 'Style', desc: 'Amaui CSS in JS library', url: 'https://github.com/amaui-org/amaui-style' },
                { name: 'Date', desc: 'Date & time utils', url: 'https://github.com/amaui-org/amaui-date' },
                { name: 'Request', desc: 'Request making for front-end, back-end', url: 'https://github.com/amaui-org/amaui-request' },
                { name: 'Test', desc: 'Test framework for front-end, back-end', url: 'https://github.com/amaui-org/amaui-test' }
              ].map((item: any, index: number) => (
                <Tooltip
                  key={index}

                  label={item.desc}
                >
                  <Line
                    gap={1}

                    align='center'

                    justify='center'

                    color='default'

                    href={item.url}

                    target='_blank'

                    underline={false}

                    Component={Link}

                    className={classNames([
                      classes.library
                    ])}
                  >
                    <Logo />

                    <Type
                      version='b2'
                    >
                      {item.name}
                    </Type>
                  </Line>
                </Tooltip>
              ))}
            </Line>

            <Button
              color='secondary'

              version='text'

              href='https://github.com/amaui-org'

              target='_blank'
            >
              More 24+ libraries
            </Button>
          </Line>
        </Line>
      </section>
    </Surface>
  )
}
