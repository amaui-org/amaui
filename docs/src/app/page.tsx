'use client';

import { Button, Line, Link, Surface, Tooltip, Type } from '@amaui/ui-react';
import { classNames, style } from '@amaui/style-react';

import Logo from '../../public/assets/svg/logo.svg';

const useStyle = style(theme => ({
  root: {
    width: '100%',
    flex: '1 1 auto',
    background: 'transparent'
  },

  about_wrapper: {
    width: '100%',
    padding: 'clamp(40px, 4vw, 100px) 44px',
    background: theme.methods.palette.color.value('primary', 95, true)
  },

  about_title: {
    color: theme.palette.color?.secondary?.[40]
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

      justify='flex-end'

      Component={Line}

      className={classNames([
        classes.root
      ])}
    >
      {/* Main */}

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
            version='l1'

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
              marginTop: 44,
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
