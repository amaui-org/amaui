'use client';

import { Line, Type } from '@amaui/ui-react';
import { classNames, style } from '@amaui/style-react'

const useStyle = style(theme => ({
  root: {
    width: '100%',
    flex: '1 1 auto',
  },

  about_wrapper: {
    width: '100%',
    padding: 'clamp(40px, 4vw, 100px) 24px',
    background: theme.methods.palette.color.value('primary', 95, true)
  },

  about_title: {
    color: theme.palette.color?.secondary?.[40]
  },

  about_text: {
    maxWidth: theme.breakpoints.values?.md,
    textAlign: 'center',
    fontSize: 'clamp(1rem, 4vw, 1.5rem)'
  }
}), { name: 'root' });

export default function Root(props: any) {
  const { classes } = useStyle(props);

  return (
    <Line
      gap={0}

      justify='flex-end'

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
            I am Lazar Eric, maker of amaui. I made amaui ecosystem of front-end and back-end tools, including Material Design 3 base UI library with 100+ UI elements, all a 100% Open source and free to use, as I want to push our market forward.
            <br /> <br />

            Waste less time on building tools, and more on making modern apps quickly & with quality.
          </Type>

          <Type
            version='l1'

            color='secondary'

            style={{
              marginTop: 24
            }}
          >
            Some of the tools
          </Type>
        </Line>
      </section>
    </Line>
  )
}
