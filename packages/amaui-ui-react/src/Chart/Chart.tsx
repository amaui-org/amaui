import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import Line from '../Line';
import Type from '../Type';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    width: '100%',

    '&.AmauiSurface-root': {
      background: 'none'
    }
  },

  wrapper: {
    position: 'relative',
    height: '400px',
    width: '100%',
    maxWidth: '1000px'
  },

  title: {
    marginBottom: '24px'
  },

  border: {
    position: 'absolute',
    background: 'currentColor'
  },

  borderX: {
    height: '1px',
    width: '100%',
    left: '0'
  },

  borderTop: {
    top: '0'
  },

  borderBottom: {
    bottom: '0'
  },

  borderY: {
    width: '1px',
    height: '100%',
    top: '0'
  },

  borderStart: {
    insetInlineStart: '0'
  },

  borderLeft: {
    left: '0'
  },

  borderEnd: {
    insetInlineEnd: '0'
  },

  borderRight: {
    right: '0'
  },

}), { name: 'AmauiChart' });

// to do

// vertical guide line on mouse move in the ui value y
// only snaps to points, 50% between any previous and next point
// if multiple points are on same x axes hightlight all those points
// same for y axes?

// axes names (top, bottom, start, end, left, right)

// labels, array (value and font style + optional offset, and position) (optional)
// labelsX, labelsY positions

// marks, array (value and size to add + optional offset, and position) (optional)
// marksX, marksY positions

// legend (expandable) (optional)
// position top, bottom, left, right, start, end
// legend items icon custom and color custom

// grid (number or { x, y }), gridX & gridY (optional)

// gridLabelsY, gridLabelsX

// array, guidelines (style, dashed, solid, stroke width, color x,y to x1, y1 (either as % or values))

// points (true, optional)

// tooltip (true, optional)

// all above options area valueBreakpoints value y

// any children within the chart (minX, maxX, minY, maxY as an option value y)

// mobile resize test

// example youtube video watch user value

const Chart = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiChart?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,

    color = 'primary',

    title,

    borders = true,

    borderStart = false,

    borderLeft = true,

    borderEnd = false,

    borderRight = false,

    borderTop = false,

    borderBottom = true,

    onUpdateRect,

    Component = 'div',

    SvgProps,
    TypeProps,
    TitleProps,

    className,

    children,

    ...other
  } = props;

  const [rect, setRect] = React.useState<DOMRect>();

  const refs = {
    root: React.useRef<any>(),
    wrapper: React.useRef<any>()
  };

  React.useEffect(() => {
    const method = () => {
      if (refs.wrapper.current) {
        const rect_ = refs.wrapper.current.getBoundingClientRect();

        setRect(rect_);

        if (is('function', onUpdateRect)) onUpdateRect(rect_);
      }
    };

    method();

    const observer = new ResizeObserver(method);

    observer.observe(refs.root.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Line
      ref={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

      tonal={tonal}

      color={color}

      gap={0}

      direction='column'

      align='center'

      Component={Surface}

      className={classNames([
        staticClassName('Chart', theme) && [
          'AmauiChart-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {/* Title */}
      {is('simple', title) ? (
        <Type
          version='t1'

          color='inherit'

          {...TypeProps}

          {...TitleProps}

          className={classNames([
            staticClassName('Chart', theme) && [
              'AmauiChart-title'
            ],

            TypeProps?.className,
            TitleProps?.className,
            classes.title
          ])}
        >
          {title}
        </Type>
      ) : title}

      <Line
        ref={refs.wrapper}

        className={classNames([
          staticClassName('Chart', theme) && [
            'AmauiChart-wrapper'
          ],

          classes.wrapper
        ])}
      >
        <Surface
          tonal={tonal}

          color={color}
        >
          {({ color: color_, backgroundColor, palette }) => {

            return (
              <>
                <svg
                  xmlns='http://www.w3.org/2000/svg'

                  viewBox={`0 0 ${rect?.width || 0} ${rect?.height || 0}`}

                  {...SvgProps}

                  className={classNames([
                    staticClassName('Chart', theme) && [
                      'AmauiChart-svg'
                    ],

                    SvgProps?.className,
                    classes.svg
                  ])}
                >
                  {/* Grid */}

                  {/* Children */}
                  {children}

                  {/* Guidelines */}

                  {/* Points */}
                </svg>

                {borders && <>
                  {borderTop && (
                    <div
                      className={classNames([
                        staticClassName('Chart', theme) && [
                          'AmauiChart-border',
                          'AmauiChart-border-x',
                          'AmauiChart-border-top'
                        ],

                        classes.border,
                        classes.borderX,
                        classes.borderTop
                      ])}
                    />
                  )}

                  {borderBottom && (
                    <div
                      className={classNames([
                        staticClassName('Chart', theme) && [
                          'AmauiChart-border',
                          'AmauiChart-border-x',
                          'AmauiChart-border-bottom'
                        ],

                        classes.border,
                        classes.borderX,
                        classes.borderBottom
                      ])}
                    />
                  )}

                  {borderStart && (
                    <div
                      className={classNames([
                        staticClassName('Chart', theme) && [
                          'AmauiChart-border',
                          'AmauiChart-border-y',
                          'AmauiChart-border-start'
                        ],

                        classes.border,
                        classes.borderY,
                        classes.boderStart
                      ])}
                    />
                  )}

                  {borderLeft && (
                    <div
                      className={classNames([
                        staticClassName('Chart', theme) && [
                          'AmauiChart-border',
                          'AmauiChart-border-y',
                          'AmauiChart-border-left'
                        ],

                        classes.border,
                        classes.borderY,
                        classes.borderLeft
                      ])}
                    />
                  )}

                  {borderEnd && (
                    <div
                      className={classNames([
                        staticClassName('Chart', theme) && [
                          'AmauiChart-border',
                          'AmauiChart-border-y',
                          'AmauiChart-border-end'
                        ],

                        classes.border,
                        classes.borderY,
                        classes.borderEnd
                      ])}
                    />
                  )}

                  {borderRight && (
                    <div
                      className={classNames([
                        staticClassName('Chart', theme) && [
                          'AmauiChart-border',
                          'AmauiChart-border-y',
                          'AmauiChart-border-right'
                        ],

                        classes.border,
                        classes.borderY,
                        classes.borderRight
                      ])}
                    />
                  )}
                </>}
              </>
            );
          }}
        </Surface>

      </Line>
    </Line>
  );
});

Chart.displayName = 'AmauiChart';

export default Chart;
