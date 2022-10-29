import React from 'react';

import { copy, is, percentageFromValueWithinRange, valueFromPercentageWithinRange } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import Line from '../Line';
import Type from '../Type';
import { IItem } from '../LineChart/LineChart';
import Path from '../Path';

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

  wrapper_name_x: {
    margin: '0 0 50px 0'
  },

  wrapper_name_y: {
    margin: '0 0 0 50px'
  },

  wrapper_names: {
    margin: '0 0 50px 50px'
  },

  header: {
    width: '100%',
    marginBottom: '24px'
  },

  subtitle: {
    opacity: '0.74'
  },

  name: {
    position: 'absolute'
  },

  name_x: {
    bottom: '-50px',
    left: '50%',
    transform: 'translateX(-50%)'
  },

  name_y: {
    left: '-64px',
    top: '50%',
    transform: 'translateY(-50%) rotate(-90deg)'
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

  point: {
    opacity: '0',
    transition: theme.methods.transitions.make('opacity', { duration: 'xxs' }),

    '&:hover': {
      opacity: 1
    }
  }
}), { name: 'AmauiChart' });

// to do

// tooltip (true, optional)

// labels, array (value and font style + optional offset, and position) (optional)
// labelsX, labelsY positions

// marks, array (value and size to add + optional offset, and position) (optional)
// marksX, marksY positions

// vertical guide line on mouse move in the ui value y
// only snaps to points, 50% between any previous and next point
// if multiple points are on same x axes hightlight all those points
// same for y axes?

// legend (expandable) (optional)
// position top, bottom, left, right, start, end
// legend items icon custom and color custom

// grid (number or { x, y }), gridX & gridY (optional)

// gridLabelsY, gridLabelsX

// array, guidelines (style, dashed, solid, stroke width, color x,y to x1, y1 (either as % or values))

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

    subtitle,

    items,

    names,

    nameX,

    nameY,

    points: pointsVisible = true,

    borders = true,

    borderStart = false,

    borderLeft = true,

    borderEnd = false,

    borderRight = false,

    borderTop = false,

    borderBottom = true,

    minX,

    maxX,

    minY,

    maxY,

    // Add % of the min, max range for min and max, y, x
    minMaxPadding,

    minPadding,

    maxPadding,

    minPaddingX,

    minPaddingY,

    maxPaddingX,

    maxPaddingY,

    onUpdateRect,

    Component = 'div',

    SvgProps,
    TypeProps,
    TitleProps,
    SubtitleProps,
    PointsProps,
    PointProps,
    HeaderProps,

    className,

    children,

    ...other
  } = props;

  const [rect, setRect] = React.useState<DOMRect>();
  const [points, setPoints] = React.useState<any>();

  const refs = {
    root: React.useRef<any>(),
    wrapper: React.useRef<any>(),
    minMax: React.useRef<any>(),
    rect: React.useRef<any>()
  };

  refs.rect.current = rect;

  const minMax = React.useMemo(() => {
    const values = {
      min: {
        x: minX || Number.MAX_SAFE_INTEGER,
        y: minY || Number.MAX_SAFE_INTEGER
      },

      max: {
        x: maxX || Number.MIN_SAFE_INTEGER,
        y: maxY || Number.MIN_SAFE_INTEGER
      }
    };

    const allItems = items.flatMap(item => item.values);

    if (is('array', items)) {
      allItems.forEach((item: [number, number]) => {
        const [x, y] = item;

        if (minX === undefined) values.min.x = Math.min(values.min.x, x);

        if (maxX === undefined) values.max.x = Math.max(values.max.x, x);

        if (minY === undefined) values.min.y = Math.min(values.min.y, y);

        if (maxY === undefined) values.max.y = Math.max(values.max.y, y);
      });
    }

    const minPaddingY_ = minPaddingY !== undefined ? minPaddingY : minPadding !== undefined ? minPadding : minMaxPadding;

    const maxPaddingY_ = maxPaddingY !== undefined ? maxPaddingY : maxPadding !== undefined ? maxPadding : minMaxPadding;

    const minPaddingX_ = minPaddingX !== undefined ? minPaddingX : minPadding !== undefined ? minPadding : minMaxPadding;

    const maxPaddingX_ = maxPaddingX !== undefined ? maxPaddingX : maxPadding !== undefined ? maxPadding : minMaxPadding;

    const totals = {
      x: values.max.x - values.min.x,
      y: values.max.y - values.min.y
    };

    if (minPaddingY_ !== undefined) values.min.y -= totals.y * minPaddingY_;

    if (maxPaddingY_ !== undefined) values.max.y += totals.y * maxPaddingY_;

    if (minPaddingX_ !== undefined) values.min.x -= totals.x * minPaddingX_;

    if (maxPaddingX_ !== undefined) values.max.x += totals.x * maxPaddingX_;

    return values;
  }, [items, minX, maxX, minY, maxY, minMaxPadding, minPadding, maxPadding, minPaddingX, minPaddingY, maxPaddingX, maxPaddingY]);

  refs.minMax.current = minMax;

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

  React.useEffect(() => {
    make();
  }, [items, rect]);

  const make = (valueNew: any = items) => {
    // Make values into x, y, coordinates
    // normalized in rect width, height values

    // invert y so 0, 0 is at bottom left
    if (refs.rect.current && valueNew) {
      const { width, height } = refs.rect.current;

      // points
      const points_ = copy(valueNew).flatMap((item: IItem) => {
        const {
          color: color_,

          tone = 'main'
        } = item;

        const values = item.values
          // Sort for x from smallest to largest
          .sort((a, b) => a[0] - b[0])
          .map(value => {
            const [x, y] = value;

            const values = {
              x: percentageFromValueWithinRange(x, refs.minMax.current.min.x, refs.minMax.current.max.x),
              y: percentageFromValueWithinRange(y, refs.minMax.current.min.y, refs.minMax.current.max.y)
            };

            values.x = valueFromPercentageWithinRange(values.x, 0, width);

            values.y = valueFromPercentageWithinRange(values.y, 0, height);

            return [values.x, height - values.y].map(item_ => Math.abs(item_));
          });

        return values.map((item, index: number) => (
          <Path
            Component='circle'

            r={4}

            cx={item[0]}

            cy={item[1]}

            fill={!theme.palette.color[color_] ? color_ : theme.palette.color[color_][tone]}

            stroke='none'

            className={classNames([
              staticClassName('Chart', theme) && [
                'AmauiChart-point'
              ],

              PointProps?.className,
              classes.point
            ])}
          />
        ));
      });

      // Update children value
      setPoints(points_);
    }
  };

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
      {/* Header */}
      {(title || subtitle) && (
        <Line
          gap={0.5}

          align='center'

          justify='center'

          {...HeaderProps}

          className={classNames([
            staticClassName('Chart', theme) && [
              'AmauiChart-header'
            ],

            HeaderProps?.className,
            classes.header
          ])}
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

          {/* Subtitle */}
          {is('simple', subtitle) ? (
            <Type
              version='b2'

              color='inherit'

              {...TypeProps}

              {...SubtitleProps}

              className={classNames([
                staticClassName('Chart', theme) && [
                  'AmauiChart-title'
                ],

                TypeProps?.className,
                SubtitleProps?.className,
                classes.subtitle
              ])}
            >
              {subtitle}
            </Type>
          ) : subtitle}
        </Line>
      )}

      <Line
        ref={refs.wrapper}

        className={classNames([
          staticClassName('Chart', theme) && [
            'AmauiChart-wrapper'
          ],

          classes.wrapper,
          (names?.x && names?.y && nameX && nameY) && classes.wrapper_names,
          (!(names?.x && names?.y && nameX && nameY) && names?.x && nameX) && classes.wrapper_name_x,
          (!(names?.x && names?.y && nameX && nameY) && names?.y && nameY) && classes.wrapper_name_y
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
                  {pointsVisible && points && (
                    <g
                      {...PointsProps}

                      className={classNames([
                        staticClassName('Chart', theme) && [
                          'AmauiChart-points'
                        ],

                        PointsProps?.className,
                        classes.points
                      ])}
                    >
                      {points.map((item: any, index: number) => (
                        React.cloneElement(item, {
                          key: index
                        })
                      ))}
                    </g>
                  )}
                </svg>

                {/* Borders */}
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

                {/* Axes names */}
                {names?.x && nameX && (
                  <Type
                    version='b2'

                    className={classNames([
                      staticClassName('Chart', theme) && [
                        'AmauiChart-name',
                        'AmauiChart-name-x'
                      ],

                      classes.name,
                      classes.name_x
                    ])}
                  >
                    {names.x}
                  </Type>
                )}

                {names?.y && nameY && (
                  <Type
                    version='b2'

                    className={classNames([
                      staticClassName('Chart', theme) && [
                        'AmauiChart-name',
                        'AmauiChart-name-y'
                      ],

                      classes.name,
                      classes.name_y
                    ])}
                  >
                    {names.y}
                  </Type>
                )}
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
