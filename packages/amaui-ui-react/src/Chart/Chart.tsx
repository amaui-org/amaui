import React from 'react';

import { copy, is, percentageFromValueWithinRange, valueFromPercentageWithinRange } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import Line from '../Line';
import Type from '../Type';
import { IItem } from '../LineChart/LineChart';
import Path from '../Path';
import Append from '../Append';
import Grow from '../Grow';

import { minMaxBetweenNumbers, staticClassName } from '../utils';

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

  wrapper_label_x: {
    margin: '0 0 30px 0'
  },

  wrapper_label_y: {
    margin: '0 0 0 40px'
  },

  wrapper_labels: {
    margin: '0 0 30px 40px'
  },

  wrapper_name_x: {
    margin: '0 0 60px 0'
  },

  wrapper_name_y: {
    margin: '0 0 0 70px'
  },

  wrapper_names: {
    margin: '0 0 60px 70px'
  },

  svg: {
    position: 'relative',

    '& path': {
      transition: theme.methods.transitions.make('opacity', { duration: 'xs' })
    }
  },

  header: {
    width: '100%',
    marginBottom: '24px'
  },

  subtitle: {
    opacity: '0.74'
  },

  append: {
    padding: '12px 20px',
    borderRadius: '12px',
    marginBottom: '16px'
  },

  name: {
    position: 'absolute',
    userSelect: 'none'
  },

  name_x: {
    bottom: '-61px',
    left: '50%',
    transform: 'translateX(-50%)'
  },

  name_y: {
    left: '-87px',
    top: '50%',
    transform: 'translateY(-50%) rotate(-90deg)'
  },

  labels: {
    position: 'absolute',
    userSelect: 'none'
  },

  labels_x: {
    top: 'calc(100% + 12px)',
    left: '0',
    width: '100%'
  },

  labels_y: {
    top: '0',
    right: 'calc(100% + 12px)',
    height: '100%'
  },

  label: {
    position: 'absolute'
  },

  label_x: {
    transform: 'translateX(-50%)'
  },

  label_y: {
    transform: 'translateY(50%)'
  },

  marks: {
    position: 'absolute'
  },

  marks_x: {
    top: 'calc(100% + 0px)',
    left: '0',
    width: '100%'
  },

  marks_y: {
    top: '0',
    right: 'calc(100% + 0px)',
    height: '100%'
  },

  mark: {
    position: 'absolute'
  },

  mark_x: {
    width: '1px',
    height: '7px',
    background: 'currentColor'
  },

  mark_y: {
    width: '7px',
    height: '1px',
    background: 'currentColor'
  },

  grids: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },

  grids_x: {
    top: '0',
    left: '0'
  },

  grids_y: {
    top: '0',
    left: '0'
  },

  grid: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: theme.palette.light ? '0.07' : '0.14'
  },

  grid_x: {
    width: '1px',
    background: 'currentColor'
  },

  grid_y: {
    height: '1px',
    background: 'currentColor'
  },

  border: {
    position: 'absolute',
    background: 'currentColor'
  },

  borderX: {
    height: '1px',
    width: 'calc(100% + 1px)',
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
    height: 'calc(100% + 1px)',
    top: '-1px'
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

  point_hover: {
    opacity: '0',
    transition: theme.methods.transitions.make('opacity', { duration: 'xxs' }),

    '&:hover': {
      opacity: 1
    }
  },

  // Legend
  legend: {},

  legend_position_top: {
    marginBottom: '16px'
  },

  legend_position_bottom: {
    marginTop: '16px'
  },

  legend_item: {
    userSelect: 'none'
  },

  legend_item_manage_visiblity: {
    cursor: 'pointer',
    transition: theme.methods.transitions.make('opacity', { duration: 'xs' })
  },

  legend_item_hidden: {
    opacity: '0.4'
  },

  legend_icon: {
    width: '10px',
    height: '10px',
    borderRadius: '50%'
  }
}), { name: 'AmauiChart' });

// to do

// vertical guide line on mouse move in the ui value y
// only snaps to points, 50% between any previous and next point
// if multiple points are on same x axes hightlig ht all those points
// same for y axes?

// all above options area valueBreakpoints value y

// smooth bug fix

const Chart = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiChart?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,

    color = 'primary',

    title,

    subtitle,

    // Items
    items,

    // Elements
    elements,

    // Names
    names,

    nameX,

    nameY,

    tooltip = true,

    guidelines: guidelines__,

    // Legend
    legend: legend__ = 'auto',

    legendManageVisibility = true,

    legendPosition = 'bottom',

    // Labels
    labels: labels__ = 'auto',

    labelsX = true,

    labelsY = true,

    labelDecimalPlaces = 0,

    // valueBreakpoint xs 4, sm 8, md 10
    labelsAutoNumber = 10,

    labelsYAutoNumber,

    labelsXAutoNumber,

    // Marks
    marks: marks__ = 'auto',

    marksX = true,

    marksY = true,

    // valueBreakpoint xs 4, sm 8, md 10
    marksAutoNumber = 10,

    marksYAutoNumber,

    marksXAutoNumber,

    // Grid
    grid: grid__,

    gridX = true,

    gridY = true,

    // valueBreakpoint xs 4, sm 8, md 10
    gridAutoNumber = 10,

    gridYAutoNumber,

    gridXAutoNumber,

    // Points
    points: points__ = true,

    pointsVisibility = 'hover',

    // Borders
    borders = true,

    borderStart = false,

    borderLeft = true,

    borderEnd = false,

    borderRight = false,

    borderTop = false,

    borderBottom = true,

    // Min, max
    minX,

    maxX,

    minY,

    maxY,

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
    AppendProps,
    GuidelineProps,
    GuidelinesProps,
    LegendProps,
    LegendItemProps,

    className,

    children,

    ...other
  } = props;

  const [rect, setRect] = React.useState<DOMRect>();
  const [points, setPoints] = React.useState<any>();
  const [labels, setLabels] = React.useState<any>();
  const [marks, setMarks] = React.useState<any>();
  const [grid, setGrid] = React.useState<any>();
  const [guidelines, setGuidelines] = React.useState<any>();
  const [legend, setLegend] = React.useState<any>();
  const [append, setAppend] = React.useState<any>();
  const [visible, setVisible] = React.useState<any>({});

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
  }, [items, labels__, marks__, grid__, guidelines__, legend__, visible, rect]);

  const onPointMouseEnter = React.useCallback((values: any) => {
    setAppend({
      ...values,

      open: true
    });
  }, []);

  const onPointMouseLeave = React.useCallback(() => {
    setAppend(append_ => ({
      ...append_,

      open: false
    }));
  }, []);

  const onLegendClick = (value: any) => {
    if (value !== undefined && legendManageVisibility) {
      setVisible((visible_: any) => ({
        ...visible_,

        [value]: ![undefined, true].includes(visible_[value])
      }));
    }
  };

  const LegendItem = React.useCallback((props__: any) => {
    const {
      item = {},

      className: className_,

      ...other
    } = props__;

    const {
      color: color_,
      tone = 'main',

      name = 'No name'
    } = item;

    return (
      <Line
        gap={1}

        direction='row'

        align='center'

        {...LegendItemProps}

        className={classNames([
          staticClassName('LineChart', theme) && [
            'AmauiLineChart-legend-item'
          ],

          className_,
          LegendItemProps?.className,
          classes.legend_item
        ])}

        {...other}
      >
        <span
          className={classNames([
            staticClassName('Chart', theme) && [
              'AmauiLineChart-legend-icon'
            ],

            classes.legend_icon
          ])}

          style={{
            background: !theme.palette.color[color_] ? color_ : theme.palette.color[color_][tone]
          }}
        />

        <Type
          version='b2'
        >
          {name}
        </Type>
      </Line>
    );
  }, []);

  const make = (valueNew: any = items) => {
    // Make values into x, y, coordinates
    // normalized in rect width, height values

    // invert y so 0, 0 is at bottom left
    if (refs.rect.current && valueNew) {
      const { width, height } = refs.rect.current;

      // Labels
      const labels_: any = {
        x: is('array', labels__?.x) ? labels__.x : minMaxBetweenNumbers(labelsXAutoNumber !== undefined ? labelsXAutoNumber : labelsAutoNumber !== undefined ? labelsAutoNumber : 10, refs.minMax.current.min.x, refs.minMax.current.max.x).map(item => ({
          value: item,

          label: (item).toFixed(labelDecimalPlaces || 0)
        })),

        y: is('array', labels__?.y) ? labels__.y : minMaxBetweenNumbers(labelsYAutoNumber !== undefined ? labelsYAutoNumber : labelsAutoNumber !== undefined ? labelsAutoNumber : 10, refs.minMax.current.min.y, refs.minMax.current.max.y).map(item => ({
          value: item,

          label: (item).toFixed(labelDecimalPlaces || 0)
        }))
      };

      labels_.x = labels_.x.map(item => ({
        ...item,

        percentage: percentageFromValueWithinRange(item.value, refs.minMax.current.min.x, refs.minMax.current.max.x)
      }));

      labels_.y = labels_.y.map(item => ({
        ...item,

        percentage: percentageFromValueWithinRange(item.value, refs.minMax.current.min.y, refs.minMax.current.max.y)
      }));

      // Marks
      const marks_: any = {
        x: is('array', marks__?.x) ? marks__.x : minMaxBetweenNumbers(marksXAutoNumber !== undefined ? marksXAutoNumber : marksAutoNumber !== undefined ? marksAutoNumber : 10, refs.minMax.current.min.x, refs.minMax.current.max.x).map(item => ({
          value: item
        })),

        y: is('array', marks__?.y) ? marks__.y : minMaxBetweenNumbers(marksYAutoNumber !== undefined ? marksYAutoNumber : marksAutoNumber !== undefined ? marksAutoNumber : 10, refs.minMax.current.min.y, refs.minMax.current.max.y).map(item => ({
          value: item
        }))
      };

      marks_.x = marks_.x.map(item => ({
        ...item,

        percentage: percentageFromValueWithinRange(item.value, refs.minMax.current.min.x, refs.minMax.current.max.x)
      }));

      marks_.y = marks_.y.map(item => ({
        ...item,

        percentage: percentageFromValueWithinRange(item.value, refs.minMax.current.min.y, refs.minMax.current.max.y)
      }));

      // Grid
      const grid_: any = {
        x: is('array', grid__?.x) ? grid__.x : minMaxBetweenNumbers(gridXAutoNumber !== undefined ? gridXAutoNumber : gridAutoNumber !== undefined ? gridAutoNumber : 10, refs.minMax.current.min.x, refs.minMax.current.max.x).map(item => ({
          value: item
        })),

        y: is('array', grid__?.y) ? grid__.y : minMaxBetweenNumbers(gridYAutoNumber !== undefined ? gridYAutoNumber : gridAutoNumber !== undefined ? gridAutoNumber : 10, refs.minMax.current.min.y, refs.minMax.current.max.y).map(item => ({
          value: item
        }))
      };

      grid_.x = grid_.x.map(item => ({
        ...item,

        percentage: percentageFromValueWithinRange(item.value, refs.minMax.current.min.x, refs.minMax.current.max.x)
      }));

      grid_.y = grid_.y.map(item => ({
        ...item,

        percentage: percentageFromValueWithinRange(item.value, refs.minMax.current.min.y, refs.minMax.current.max.y)
      }));

      // Points
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

            return {
              value: [x, y],
              normalized: [values.x, height - values.y].map(item_ => Math.abs(item_))
            };
          });

        return values.map((item, index: number) => (
          <Path
            Component='circle'

            r={4}

            cx={item.normalized[0]}

            cy={item.normalized[1]}

            fill={!theme.palette.color[color_] ? color_ : theme.palette.color[color_][tone]}

            stroke='none'

            onMouseEnter={event => {
              const rect_ = event.target.getBoundingClientRect();

              onPointMouseEnter({
                value: item.value,

                rect: rect_
              });
            }}

            onMouseLeave={onPointMouseLeave}

            {...PointProps}

            className={classNames([
              staticClassName('Chart', theme) && [
                'AmauiChart-point'
              ],

              PointProps?.className,
              classes.point,
              classes[`point_${pointsVisibility}`]
            ])}
          />
        ));
      });

      // Guidelines
      const guidelines_ = guidelines__ && guidelines__.map((item: any) => {
        const {
          color: color_,

          tone = 'main',

          style
        } = item;

        const values = {
          x1: percentageFromValueWithinRange(item.x1, refs.minMax.current.min.x, refs.minMax.current.max.x),
          y1: percentageFromValueWithinRange(item.y1, refs.minMax.current.min.y, refs.minMax.current.max.y),

          x2: percentageFromValueWithinRange(item.x2, refs.minMax.current.min.x, refs.minMax.current.max.x),
          y2: percentageFromValueWithinRange(item.y2, refs.minMax.current.min.y, refs.minMax.current.max.y),
        };

        values.x1 = valueFromPercentageWithinRange(values.x1, 0, width);

        values.y1 = valueFromPercentageWithinRange(values.y1, 0, height);

        values.x2 = valueFromPercentageWithinRange(values.x2, 0, width);

        values.y2 = valueFromPercentageWithinRange(values.y2, 0, height);

        return (
          <Path
            d={`M ${values.x1} ${height - values.y1} L ${values.x2} ${height - values.y2}`}

            fill='none'

            stroke={!theme.palette.color[color_] ? color_ : theme.palette.color[color_][tone]}

            {...GuidelineProps}

            className={classNames([
              staticClassName('Chart', theme) && [
                'AmauiChart-guidelines'
              ],

              GuidelineProps?.className,
              classes.guidelines
            ])}

            style={{
              ...style,

              ...GuidelineProps?.style
            }}
          />
        );
      });

      // Legend
      let legend_ = legend__ !== 'auto' ? legend__ : items.map((item: any) => {

        return {
          item,

          element: (
            <LegendItem
              item={item}
            />
          )
        };
      });

      legend_ = legend_?.map(({ item, element }: any) => {

        return (
          React.cloneElement(element, {
            onClick: () => onLegendClick(item.name),

            className: classNames([
              element?.props?.className,
              legendManageVisibility && classes.legend_item_manage_visiblity,
              visible[item.name] === false && classes.legend_item_hidden
            ])
          })
        );
      })

      // Labels
      setLabels(labels_);

      // Marks
      setMarks(marks_);

      // Grid
      setGrid(grid_);

      // Guidelines
      setGuidelines(guidelines_);

      // Legend
      setLegend(legend_);

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

      {/* Legend top */}
      {(legend__ && legendPosition === 'top' && legend) && (
        <Line
          gap={2}

          direction='row'

          align='center'

          justify='center'

          wrap='wrap'

          {...LegendProps}

          className={classNames([
            staticClassName('Chart', theme) && [
              'AmauiChart-legend',
              `AmauiChart-legend-position-${legendPosition}`
            ],

            LegendProps?.className,
            classes.legend,
            classes[`legend_position_${legendPosition}`]
          ])}
        >
          {legend.map((item: any, index: number) => (
            React.cloneElement(item, {
              key: index
            })
          ))}
        </Line>
      )}

      {/* Main */}
      <Line
        ref={refs.wrapper}

        className={classNames([
          staticClassName('Chart', theme) && [
            'AmauiChart-wrapper'
          ],

          classes.wrapper,
          (labels?.x && labels?.y && labelsX && labelsY) && classes.wrapper_labels,
          (!(labels?.x && labels?.y && labelsX && labelsY) && labels?.x && labelsX) && classes.wrapper_label_x,
          (!(labels?.x && labels?.y && labelsX && labelsY) && labels?.y && labelsY) && classes.wrapper_label_y,
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
                {/* Grid */}
                {!!grid__ && gridX && grid?.x && (
                  <Line
                    gap={0}

                    direction='row'

                    align='flex-start'

                    className={classNames([
                      staticClassName('Chart', theme) && [
                        'AmauiChart-grids',
                        'AmauiChart-grids-x'
                      ],

                      classes.grids,
                      classes.grids_x
                    ])}
                  >
                    {grid.x.map((item: any, index: number) => (
                      <div
                        key={index}

                        className={classNames([
                          staticClassName('Chart', theme) && [
                            'AmauiChart-grid',
                            'AmauiChart-grid-x'
                          ],

                          classes.grid,
                          classes.grid_x
                        ])}

                        style={{
                          left: `${item.percentage}%`
                        }}
                      />
                    ))}
                  </Line>
                )}

                {!!grid__ && gridY && grid?.y && (
                  <Line
                    gap={0}

                    direction='column'

                    align='flex-end'

                    justify='center'

                    className={classNames([
                      staticClassName('Chart', theme) && [
                        'AmauiChart-grids',
                        'AmauiChart-grids-y'
                      ],

                      classes.grids,
                      classes.grids_y
                    ])}
                  >
                    {grid.y.map((item: any, index: number) => (
                      <div
                        key={index}

                        className={classNames([
                          staticClassName('Chart', theme) && [
                            'AmauiChart-grid',
                            'AmauiChart-grid-y'
                          ],

                          classes.grid,
                          classes.grid_y
                        ])}

                        style={{
                          bottom: `${item.percentage}%`
                        }}
                      />
                    ))}
                  </Line>
                )}

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
                  {/* Elements */}
                  {elements && elements.map(({ item, element }, index: number) => (
                    React.cloneElement(element, {
                      key: index,

                      style: {
                        ...element?.props?.style,

                        opacity: (visible[item?.name] === undefined || !!visible[item?.name]) ? 1 : 0
                      }
                    })
                  ))}

                  {/* Guidelines */}
                  {guidelines && (
                    <g
                      {...GuidelinesProps}

                      className={classNames([
                        staticClassName('Chart', theme) && [
                          'AmauiChart-guidelines'
                        ],

                        GuidelinesProps?.className,
                        classes.guidelines
                      ])}
                    >
                      {guidelines}
                    </g>
                  )}

                  {/* Points */}
                  {points__ && points && (
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

                {/* Labels */}
                {!!labels__ && labelsX && labels?.x && (
                  <Line
                    gap={0}

                    direction='row'

                    align='flex-start'

                    className={classNames([
                      staticClassName('Chart', theme) && [
                        'AmauiChart-labels',
                        'AmauiChart-labels-x'
                      ],

                      classes.labels,
                      classes.labels_x
                    ])}
                  >
                    {labels.x.map((item: any, index: number) => (
                      <Type
                        key={index}

                        version='b3'

                        className={classNames([
                          staticClassName('Chart', theme) && [
                            'AmauiChart-label',
                            'AmauiChart-label-x'
                          ],

                          classes.label,
                          classes.label_x
                        ])}

                        style={{
                          left: `${item.percentage}%`
                        }}
                      >
                        {item.label}
                      </Type>
                    ))}
                  </Line>
                )}

                {!!labels__ && labelsY && labels?.y && (
                  <Line
                    gap={0}

                    direction='column'

                    align='flex-end'

                    justify='center'

                    className={classNames([
                      staticClassName('Chart', theme) && [
                        'AmauiChart-labels',
                        'AmauiChart-labels-y'
                      ],

                      classes.labels,
                      classes.labels_y
                    ])}
                  >
                    {labels.y.map((item: any, index: number) => (
                      <Type
                        key={index}

                        version='b3'

                        className={classNames([
                          staticClassName('Chart', theme) && [
                            'AmauiChart-label',
                            'AmauiChart-label-y'
                          ],

                          classes.label,
                          classes.label_y
                        ])}

                        style={{
                          bottom: `${item.percentage}%`
                        }}
                      >
                        {item.label}
                      </Type>
                    ))}
                  </Line>
                )}

                {/* Marks */}
                {!!marks__ && marksX && marks?.x && (
                  <Line
                    gap={0}

                    direction='row'

                    align='flex-start'

                    className={classNames([
                      staticClassName('Chart', theme) && [
                        'AmauiChart-marks',
                        'AmauiChart-marks-x'
                      ],

                      classes.marks,
                      classes.marks_x
                    ])}
                  >
                    {marks.x.map((item: any, index: number) => (
                      <span
                        key={index}

                        className={classNames([
                          staticClassName('Chart', theme) && [
                            'AmauiChart-mark',
                            'AmauiChart-mark-x'
                          ],

                          classes.mark,
                          classes.mark_x
                        ])}

                        style={{
                          left: `${item.percentage}%`
                        }}
                      >
                        {item.mark}
                      </span>
                    ))}
                  </Line>
                )}

                {!!marks__ && marksY && marks?.y && (
                  <Line
                    gap={0}

                    direction='column'

                    align='flex-end'

                    justify='center'

                    className={classNames([
                      staticClassName('Chart', theme) && [
                        'AmauiChart-marks',
                        'AmauiChart-marks-y'
                      ],

                      classes.marks,
                      classes.marks_y
                    ])}
                  >
                    {marks.y.map((item: any, index: number) => (
                      <span
                        key={index}

                        className={classNames([
                          staticClassName('Chart', theme) && [
                            'AmauiChart-mark',
                            'AmauiChart-mark-y'
                          ],

                          classes.mark,
                          classes.mark_y
                        ])}

                        style={{
                          bottom: `${item.percentage}%`
                        }}
                      >
                        {item.mark}
                      </span>
                    ))}
                  </Line>
                )}

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

                {/* Append */}
                {tooltip && (
                  <Append
                    open

                    element={(
                      <div>
                        <Grow
                          in={append?.open}

                          add
                        >
                          <Line
                            tonal={tonal}

                            color={color}

                            elevation={1}

                            gap={0.25}

                            direction='column'

                            offset={[14, 14]}

                            padding={[14, 14]}

                            switch

                            Component={Surface}

                            className={classNames([
                              staticClassName('Chart', theme) && [
                                'AmauiChart-append'
                              ],

                              classes.append
                            ])}
                          >
                            <Line
                              gap={1}

                              direction='row'

                              align='center'
                            >
                              <Type
                                version='b3'

                                style={{
                                  fontWeight: 600
                                }}
                              >
                                {names?.y || 'y'}
                              </Type>

                              <Type
                                version='b3'
                              >
                                {append?.value?.[1]}
                              </Type>
                            </Line>

                            <Line
                              gap={1}

                              direction='row'

                              align='center'
                            >
                              <Type
                                version='b3'

                                style={{
                                  fontWeight: 600
                                }}
                              >
                                {names?.x || 'x'}
                              </Type>

                              <Type
                                version='b3'
                              >
                                {append?.value?.[0]}
                              </Type>
                            </Line>
                          </Line>
                        </Grow>
                      </div>
                    )}

                    anchor={append?.rect}

                    portal

                    alignment='center'

                    position='top'

                    {...AppendProps}
                  />
                )}
              </>
            );
          }}
        </Surface>
      </Line>

      {/* Legend bottom */}
      {(legend__ && legendPosition === 'bottom' && legend) && (
        <Line
          gap={2}

          direction='row'

          align='center'

          justify='center'

          wrap='wrap'

          {...LegendProps}

          className={classNames([
            staticClassName('Chart', theme) && [
              'AmauiChart-legend',
              `AmauiChart-legend-position-${legendPosition}`
            ],

            LegendProps?.className,
            classes.legend,
            classes[`legend_position_${legendPosition}`]
          ])}
        >
          {legend.map((item: any, index: number) => (
            React.cloneElement(item, {
              key: index
            })
          ))}
        </Line>
      )}
    </Line>
  );
});

Chart.displayName = 'AmauiChart';

export default Chart;
