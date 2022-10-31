import React from 'react';

import { clamp, copy, is, percentageFromValueWithinRange, valueFromPercentageWithinRange } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import Line from '../Line';
import Type from '../Type';
import { IItem } from '../LineChart/LineChart';
import Path from '../Path';
import Append from '../Append';
import Grow from '../Grow';
import useMediaQuery from '../useMediaQuery';

import { staticClassName, valueBreakpoints, minMaxBetweenNumbers } from '../utils';

const useStyle = style(theme => ({
  root: {
    width: '100%',

    '&.AmauiSurface-root': {
      background: 'none'
    }
  },

  additionalLines: {
    pointerEvents: 'none'
  },

  append_wrapper: {
    userSelect: 'none',
    pointerEvents: 'none'
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

  legend_offset_labels_y: {
    paddingLeft: '40px'
  },

  legend_offset_names_y: {
    paddingLeft: '70px'
  },

  svg: {
    position: 'relative',
    touchAction: 'none',

    '& path, & circle, & rect, & g': {
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

  point_visibility_hover: {
    opacity: '0',
    transition: theme.methods.transitions.make('opacity', { duration: 'xxs' }),

    '&:hover': {
      opacity: 1
    }
  },

  point_visibility_visible: {
    opacity: 1
  },

  point_active: {
    opacity: 1
  },

  point_visibility_hidden: {
    opacity: 0,
    pointerEvents: 'none'
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

  legend_item_manage_visibility: {
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
  },

  append_icon: {
    width: '8px',
    height: '8px',
    borderRadius: '50%'
  },

  // Guideline
  guideline: {
    stroke: 'currentColor',
    strokeDasharray: '4',
    opacity: '0.44',
    pointerEvents: 'none'
  }
}), { name: 'AmauiChart' });

const Chart = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiChart?.props?.default }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.sort((a, b) => theme.breakpoints.values[b] - theme.breakpoints.values[a]).forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(`(min-width: ${theme.breakpoints.values[key]}px)`);
  });

  const { classes } = useStyle(props);

  const {
    tonal = true,

    color = 'primary',

    title,

    subtitle,

    // Values
    values,

    // Pre
    pre,

    // Elements
    elements,

    // Names
    names,

    nameX: nameX_,

    nameY: nameY_,

    // Tooltip
    tooltip: tooltip_,

    tooltipIndividually: tooltipIndividually_,

    tooltipCloseOnMouseLeave: tooltipCloseOnMouseLeave_,

    elementTooltip: elementTooltip_,

    // Guideline
    guideline: guideline_,

    guidelineAppend: guidelineAppend_,

    // Additional lines
    additional_lines: additional_lines__,

    // Legend
    legend: legend___,

    legendManageVisibility = true,

    legendPosition = 'bottom',

    // Labels
    labels: labels___,

    labelsX: labelsX_,

    labelsY: labelsY_,

    labelDecimalPlaces: labelDecimalPlaces_,

    labelsAutoNumber: labelsAutoNumber_,

    labelsYAutoNumber: labelsYAutoNumber_,

    labelsXAutoNumber: labelsXAutoNumber_,

    // Marks
    marks: marks___,

    marksX: marksX_,

    marksY: marksY_,

    marksAutoNumber: marksAutoNumber_,

    marksYAutoNumber: marksYAutoNumber_,

    marksXAutoNumber: marksXAutoNumber_,

    // Grid
    grid: grid___,

    gridX: gridX_,

    gridY: gridY_,

    gridAutoNumber: gridAutoNumber_,

    gridYAutoNumber: gridYAutoNumber_,

    gridXAutoNumber: gridXAutoNumber_,

    // Points
    points: points___,

    pointsVisibility: pointsVisibility_,

    // Borders
    borders: borders_ = true,

    borderStart: borderStart_ = false,

    borderLeft: borderLeft_ = true,

    borderEnd: borderEnd_ = false,

    borderRight: borderRight_ = false,

    borderTop: borderTop_ = false,

    borderBottom: borderBottom_ = true,

    // Min, max
    minX: minX_,

    maxX: maxX_,

    minY: minY_,

    maxY: maxY_,

    minMaxPadding: minMaxPadding_,

    minPadding: minPadding_,

    maxPadding: maxPadding_,

    minPaddingX: minPaddingX_,

    minPaddingY: minPaddingY_,

    maxPaddingX: maxPaddingX_,

    maxPaddingY: maxPaddingY_,

    tooltipRender,

    tooltipGroupRender,

    labelRender,

    onUpdateRects,

    Component = 'div',

    SvgProps,
    TypeProps,
    TitleProps,
    SubtitleProps,
    PointsProps,
    PointProps,
    HeaderProps,
    AppendProps,
    AdditionalLineProps,
    AdditionalLinesProps,
    LegendProps,
    LegendItemProps,
    GuidelineProps,

    className,

    children,

    ...other
  } = props;

  const nameX = valueBreakpoints(nameX_, undefined, breakpoints, theme);
  const nameY = valueBreakpoints(nameY_, undefined, breakpoints, theme);

  const tooltip = valueBreakpoints(tooltip_, true, breakpoints, theme);
  const tooltipIndividually = valueBreakpoints(tooltipIndividually_, true, breakpoints, theme);
  const tooltipCloseOnMouseLeave = valueBreakpoints(tooltipCloseOnMouseLeave_, true, breakpoints, theme);
  const elementTooltip = valueBreakpoints(elementTooltip_, undefined, breakpoints, theme);

  const guideline = valueBreakpoints(guideline_, undefined, breakpoints, theme);
  const guidelineAppend = valueBreakpoints(guidelineAppend_, true, breakpoints, theme);

  const legend__ = valueBreakpoints(legend___, 'auto', breakpoints, theme);

  const labels__ = valueBreakpoints(labels___, 'auto', breakpoints, theme);

  const labelsX = valueBreakpoints(labelsX_, true, breakpoints, theme);
  const labelsY = valueBreakpoints(labelsY_, true, breakpoints, theme);

  const labelDecimalPlaces = valueBreakpoints(labelDecimalPlaces_, 0, breakpoints, theme);

  const labelsAutoNumber = valueBreakpoints(labelsAutoNumber_, 10, breakpoints, theme);
  const labelsYAutoNumber = valueBreakpoints(labelsYAutoNumber_, undefined, breakpoints, theme);
  const labelsXAutoNumber = valueBreakpoints(labelsXAutoNumber_, undefined, breakpoints, theme);

  const marks__ = valueBreakpoints(marks___, 'auto', breakpoints, theme);

  const marksX = valueBreakpoints(marksX_, true, breakpoints, theme);
  const marksY = valueBreakpoints(marksY_, true, breakpoints, theme);

  const marksAutoNumber = valueBreakpoints(marksAutoNumber_, 10, breakpoints, theme);
  const marksYAutoNumber = valueBreakpoints(marksYAutoNumber_, undefined, breakpoints, theme);
  const marksXAutoNumber = valueBreakpoints(marksXAutoNumber_, undefined, breakpoints, theme);

  const grid__ = valueBreakpoints(grid___, undefined, breakpoints, theme);

  const gridX = valueBreakpoints(gridX_, true, breakpoints, theme);
  const gridY = valueBreakpoints(gridY_, true, breakpoints, theme);

  const gridAutoNumber = valueBreakpoints(gridAutoNumber_, 10, breakpoints, theme);
  const gridYAutoNumber = valueBreakpoints(gridYAutoNumber_, undefined, breakpoints, theme);
  const gridXAutoNumber = valueBreakpoints(gridXAutoNumber_, undefined, breakpoints, theme);

  const points__ = valueBreakpoints(points___, true, breakpoints, theme);
  const pointsVisibility = valueBreakpoints(pointsVisibility_, 'hover', breakpoints, theme);

  const borders = valueBreakpoints(borders_, true, breakpoints, theme);
  const borderStart = valueBreakpoints(borderStart_, false, breakpoints, theme);
  const borderLeft = valueBreakpoints(borderLeft_, true, breakpoints, theme);
  const borderEnd = valueBreakpoints(borderEnd_, false, breakpoints, theme);
  const borderRight = valueBreakpoints(borderRight_, false, breakpoints, theme);
  const borderTop = valueBreakpoints(borderTop_, false, breakpoints, theme);
  const borderBottom = valueBreakpoints(borderBottom_, true, breakpoints, theme);

  const minX = valueBreakpoints(minX_, undefined, breakpoints, theme);
  const maxX = valueBreakpoints(maxX_, undefined, breakpoints, theme);
  const minY = valueBreakpoints(minY_, undefined, breakpoints, theme);
  const maxY = valueBreakpoints(maxY_, undefined, breakpoints, theme);
  const minMaxPadding = valueBreakpoints(minMaxPadding_, undefined, breakpoints, theme);
  const minPadding = valueBreakpoints(minPadding_, undefined, breakpoints, theme);
  const maxPadding = valueBreakpoints(maxPadding_, undefined, breakpoints, theme);
  const minPaddingX = valueBreakpoints(minPaddingX_, undefined, breakpoints, theme);
  const minPaddingY = valueBreakpoints(minPaddingY_, undefined, breakpoints, theme);
  const maxPaddingX = valueBreakpoints(maxPaddingX_, undefined, breakpoints, theme);
  const maxPaddingY = valueBreakpoints(maxPaddingY_, undefined, breakpoints, theme);

  const [rects, setRects] = React.useState<Record<string, DOMRect>>();
  const [points, setPoints] = React.useState<any>();
  const [labels, setLabels] = React.useState<any>();
  const [marks, setMarks] = React.useState<any>();
  const [grid, setGrid] = React.useState<any>();
  const [additionalLines, setAdditionalLines] = React.useState<any>();
  const [legend, setLegend] = React.useState<any>();
  const [append, setAppend] = React.useState<any>();
  const [visible, setVisible] = React.useState<any>({});
  const [guidelineIn, setGuidelineIn] = React.useState(false);
  const [guidelinePosition, setGuidelinePosition] = React.useState<any>({});
  const [hover, setHover] = React.useState(false);

  const refs = {
    root: React.useRef<any>(),
    wrapper: React.useRef<any>(),
    svg: React.useRef<any>(),
    minMax: React.useRef<any>(),
    rects: React.useRef<any>(),
    guideline: React.useRef<any>(),
    guidelineIn: React.useRef<any>(),
    guidelinePosition: React.useRef<any>(),
    guidelineAppend: React.useRef<any>(),
    hover: React.useRef<any>(),
    allValues: React.useRef<any>([])
  };

  refs.rects.current = rects;

  refs.guideline.current = guideline;

  refs.guidelineIn.current = guidelineIn;

  refs.guidelinePosition.current = guidelinePosition;

  refs.guidelineAppend.current = guidelineAppend;

  refs.hover.current = hover;

  const minMax = React.useMemo(() => {
    const values_ = {
      min: {
        x: minX || Number.MAX_SAFE_INTEGER,
        y: minY || Number.MAX_SAFE_INTEGER
      },

      max: {
        x: maxX || Number.MIN_SAFE_INTEGER,
        y: maxY || Number.MIN_SAFE_INTEGER
      }
    };

    const itemArrayNested = is('array', values[0]?.values?.[0]);

    const allItems = values[itemArrayNested ? 'flatMap' : 'map'](item => item.values);

    if (is('array', values)) {
      allItems.forEach((item: [number, number]) => {
        const [x, y] = item;

        if (minX === undefined) values_.min.x = Math.min(values_.min.x, x);

        if (maxX === undefined) values_.max.x = Math.max(values_.max.x, x);

        if (minY === undefined) values_.min.y = Math.min(values_.min.y, y);

        if (maxY === undefined) values_.max.y = Math.max(values_.max.y, y);
      });
    }

    const minPaddingY_ = minPaddingY !== undefined ? minPaddingY : minPadding !== undefined ? minPadding : minMaxPadding;

    const maxPaddingY_ = maxPaddingY !== undefined ? maxPaddingY : maxPadding !== undefined ? maxPadding : minMaxPadding;

    const minPaddingX_ = minPaddingX !== undefined ? minPaddingX : minPadding !== undefined ? minPadding : minMaxPadding;

    const maxPaddingX_ = maxPaddingX !== undefined ? maxPaddingX : maxPadding !== undefined ? maxPadding : minMaxPadding;

    const totals = {
      x: values_.max.x - values_.min.x,
      y: values_.max.y - values_.min.y
    };

    if (minPaddingY_ !== undefined) values_.min.y -= totals.y * minPaddingY_;

    if (maxPaddingY_ !== undefined) values_.max.y += totals.y * maxPaddingY_;

    if (minPaddingX_ !== undefined) values_.min.x -= totals.x * minPaddingX_;

    if (maxPaddingX_ !== undefined) values_.max.x += totals.x * maxPaddingX_;

    return values_;
  }, [values, minX, maxX, minY, maxY, minMaxPadding, minPadding, maxPadding, minPaddingX, minPaddingY, maxPaddingX, maxPaddingY]);

  refs.minMax.current = minMax;

  const onWrapperMouseEnter = React.useCallback(() => {
    if (!refs.guidelineIn.current) setGuidelineIn(true);

    setHover(true);
  }, []);

  const onWrapperMouseLeave = React.useCallback(() => {
    setHover(false);

    setTimeout(() => {
      if (tooltipCloseOnMouseLeave) setAppend(values_ => ({
        ...values_,

        open: false
      }));
    });
  }, [tooltipCloseOnMouseLeave]);

  const makeGroupTooltip = (x_: number, y_: number) => {
    const items = refs.allValues.current.filter(item => item.normalized[0] === x_);

    const itemsY = [...items].sort((a, b) => a.normalized[1] - b.normalized[1]);

    const x = x_;

    const y = itemsY[0].normalized[1];

    const groups: any = [];

    items.forEach(item => {
      const color = item.item?.color || 'primary';

      if (!groups[color]) groups[color] = [];

      groups[color].push(item);
    });

    // Groups sorted by lowest y
    const groupsSorted = Object.keys(groups).sort((a, b) => groups[a][0]?.normalized?.[1] - groups[b][0]?.normalized?.[1]);

    const element = is('function', tooltipGroupRender) ? tooltipGroupRender(groups, groupsSorted) : (
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

          direction='column'

          style={{
            width: '100%'
          }}
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

              style={{
                fontWeight: 600
              }}
            >
              {names?.x || 'x'}
            </Type>
          </Line>

          <Line
            gap={1}

            direction='column'
          >
            {groupsSorted.map((group: string, index: number) => (
              <Line
                key={index}

                gap={1}

                direction='column'

                style={{
                  width: '100%'
                }}
              >
                <span
                  className={classNames([
                    staticClassName('Chart', theme) && [
                      'AmauiLineChart-append-icon'
                    ],

                    classes.append_icon
                  ])}

                  style={{
                    background: !theme.palette.color[group] ? group : theme.palette.color[group][groups[group][0]?.item?.tone || 'main']
                  }}
                />

                <Line
                  gap={0}

                  direction='column'

                  style={{
                    width: '100%'
                  }}
                >
                  {groups[group].map((item: any, index_: number) => (
                    <Line
                      key={index_}

                      gap={1}

                      direction='row'

                      style={{
                        width: '100%'
                      }}
                    >
                      <Type
                        version='b3'
                      >
                        {item?.values?.[0]}
                      </Type>

                      <Type
                        version='b3'
                      >
                        {item?.values?.[1]}
                      </Type>
                    </Line>
                  ))}
                </Line>
              </Line>
            ))}
          </Line>
        </Line>
      </Line>
    );

    const rectSvg = refs.svg.current.getBoundingClientRect();

    const width = 8;

    const height = 8;

    const rect_: any = {
      x: (x + rectSvg.x) - width,
      y: (y + rectSvg.y) - width,
      width,
      height
    };

    rect_.top = rect_.y;

    rect_.bottom = rect_.y + height;

    rect_.left = rect_.x;

    rect_.right = rect_.x + width;

    setAppend({
      open: true,

      element,

      rect: rect_
    });
  };

  React.useEffect(() => {
    const onMove = (x_: number, y_: number) => {
      // Only horizontal move at the moment
      // ie. vertical guideline
      const rectWrapper = refs.rects.current.wrapper;

      const rectSvg = refs.svg.current.getBoundingClientRect();

      let x = clamp(x_ - rectSvg?.x, 0, rectWrapper?.width);

      const y = clamp(y_ - rectSvg?.y, 0, rectWrapper?.height);

      if (refs.guidelineAppend.current && ['both', 'vertical'].includes(refs.guideline.current)) {
        const allValues = refs.allValues.current;

        let index = undefined;
        let previous: any;
        let item: any;

        for (let i = 0; i < allValues.length; i++) {
          previous = allValues[i - 1];
          item = allValues[i];

          if (previous?.normalized?.[0] <= x && x <= item?.normalized?.[0]) {
            index = i;

            break;
          }
        }

        if (index === undefined) {
          index = allValues.length - 1;

          previous = allValues[index - 1];
          item = allValues[index];
        }

        if (previous || item) {
          if (!previous) x = item.normalized?.[0];
          else if (!item) x = previous.normalized?.[0];
          else {
            const len = item.normalized[0] - previous.normalized[0];
            const part = len / 2;

            x = x < (previous.normalized[0] + part) ? previous.normalized[0] : item.normalized[0];
          }
        }

        makeGroupTooltip(x, y);
      }

      setGuidelinePosition(value_ => ({
        ...value_,

        x,
        y
      }));
    };

    const onMouseMove = (event: MouseEvent) => {
      if (refs.hover.current) {
        const x: number = event.clientX;
        const y: number = event.clientY;

        onMove(x, y);
      }
    };

    const onTouchMove = (event: TouchEvent) => {
      if (refs.hover.current) {
        const x: number = event.touches[0].clientX;
        const y: number = event.touches[0].clientY;

        onMove(x, y);
      }
    };

    const method = () => {
      if (refs.wrapper.current) {
        const rectWrapper = refs.wrapper.current.getBoundingClientRect();
        const rectSvg = refs.svg.current.getBoundingClientRect();

        const rects_ = {
          wrapper: rectWrapper,
          svg: rectSvg
        };

        setRects(rects_);

        if (is('function', onUpdateRects)) onUpdateRects(rects_);
      }
    };

    method();

    const observer = new ResizeObserver(method);

    observer.observe(refs.root.current);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onWrapperMouseLeave);

    return () => {
      observer.disconnect();

      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onWrapperMouseLeave);
    };
  }, []);

  React.useEffect(() => {
    make();
  }, [values, labels__, marks__, grid__, additional_lines__, legend__, visible, (guidelineAppend && guidelinePosition), rects]);

  const onPointMouseEnter = React.useCallback((values_: any) => {
    if (tooltipIndividually) {
      setAppend({
        ...(is('function', tooltipRender) ? tooltipRender(values_) : values_),

        rect: values_.rect,

        open: true
      });
    }
  }, [tooltipRender, tooltipIndividually]);

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

  const make = (valueNew: any = values) => {
    // Make values into x, y, coordinates
    // normalized in rect width, height values

    // invert y so 0, 0 is at bottom left
    if (refs.rects.current && valueNew) {
      const { width, height } = refs.rects.current.wrapper;

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

      refs.allValues.current = [];

      // Points
      const points_ = copy(valueNew).flatMap((item: IItem) => {
        const {
          color: color_,

          tone = 'main',

          name
        } = item;

        const itemValues = ([x, y, ...args]) => {
          const values__ = {
            x: percentageFromValueWithinRange(x, refs.minMax.current.min.x, refs.minMax.current.max.x),
            y: percentageFromValueWithinRange(y, refs.minMax.current.min.y, refs.minMax.current.max.y)
          };

          values__.x = valueFromPercentageWithinRange(values__.x, 0, width);

          values__.y = valueFromPercentageWithinRange(values__.y, 0, height);

          if (visible[name] !== false) {
            refs.allValues.current.push({
              item,
              values: [x, y, ...args],
              normalized: [values__.x, height - values__.y].map(item_ => Math.abs(item_))
            });
          }

          return {
            values: [x, y, ...args],
            normalized: [values__.x, height - values__.y].map(item_ => Math.abs(item_))
          };
        };

        const itemArrayNested = is('array', item.values?.[0]);

        const values_ = itemArrayNested ? item.values
          // Sort for x from smallest to largest
          .sort((a, b) => a[0] - b[0])
          .map(itemValues) : [itemValues(item.values as any)];

        return values_.map((item, index: number) => (
          <Path
            Component='circle'

            r={4}

            cx={item.normalized[0]}

            cy={item.normalized[1]}

            fill={!theme.palette.color[color_] ? color_ : theme.palette.color[color_][tone]}

            stroke='none'

            {...(!elementTooltip ? {
              onMouseEnter: event => {
                const rect_ = event.target.getBoundingClientRect();

                onPointMouseEnter({
                  values: item.values,

                  rect: rect_
                });
              },

              onMouseLeave: onPointMouseLeave
            } : undefined)}

            {...PointProps}

            className={classNames([
              staticClassName('Chart', theme) && [
                'AmauiChart-point'
              ],

              PointProps?.className,
              classes.point,
              classes[`point_visibility_${pointsVisibility}`],
              (refs.guidelineAppend.current && refs.guidelinePosition.current.x === item.normalized[0]) && classes.point_active
            ])}

            style={{
              ...(visible[name] === false ? {
                opacity: 0,
                pointerEvents: 'none'
              } : undefined),

              ...PointProps?.style
            }}
          />
        ));
      });

      refs.allValues.current.sort((a, b) => a?.normalized[0] - b?.normalized[0]);

      // Guidelines
      const additional_lines_ = additional_lines__ && additional_lines__.map((item: any) => {
        const {
          color: color_,

          tone = 'main',

          style
        } = item;

        const values_ = {
          x1: percentageFromValueWithinRange(item.x1, refs.minMax.current.min.x, refs.minMax.current.max.x),
          y1: percentageFromValueWithinRange(item.y1, refs.minMax.current.min.y, refs.minMax.current.max.y),

          x2: percentageFromValueWithinRange(item.x2, refs.minMax.current.min.x, refs.minMax.current.max.x),
          y2: percentageFromValueWithinRange(item.y2, refs.minMax.current.min.y, refs.minMax.current.max.y),
        };

        values_.x1 = valueFromPercentageWithinRange(values_.x1, 0, width);

        values_.y1 = valueFromPercentageWithinRange(values_.y1, 0, height);

        values_.x2 = valueFromPercentageWithinRange(values_.x2, 0, width);

        values_.y2 = valueFromPercentageWithinRange(values_.y2, 0, height);

        return (
          <Path
            d={`M ${values_.x1} ${height - values_.y1} L ${values_.x2} ${height - values_.y2}`}

            fill='none'

            stroke={!theme.palette.color[color_] ? color_ : theme.palette.color[color_][tone]}

            {...AdditionalLineProps}

            className={classNames([
              staticClassName('Chart', theme) && [
                'AmauiChart-additional-lines'
              ],

              AdditionalLineProps?.className,
              classes.additionalLines
            ])}

            style={{
              ...style,

              ...AdditionalLineProps?.style
            }}
          />
        );
      });

      // Legend
      let legend_ = legend__ !== 'auto' ? legend__ : values.map((item: any) => {

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
              legendManageVisibility && classes.legend_item_manage_visibility,
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
      setAdditionalLines(additional_lines_);

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
              version='t2'

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
              version='b3'

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
            classes[`legend_position_${legendPosition}`],
            (labels?.y && labelsY) && classes.legend_offset_labels_y,
            (names?.y && nameY) && classes.legend_offset_names_y
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

        {...(guideline ? {
          onMouseEnter: onWrapperMouseEnter,

          onTouchStart: onWrapperMouseEnter,

          onMouseLeave: onWrapperMouseLeave
        } : undefined)}

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
                  ref={refs.svg}

                  xmlns='http://www.w3.org/2000/svg'

                  viewBox={`0 0 ${rects?.wrapper?.width || 0} ${rects?.wrapper?.height || 0}`}

                  {...SvgProps}

                  className={classNames([
                    staticClassName('Chart', theme) && [
                      'AmauiChart-svg'
                    ],

                    SvgProps?.className,
                    classes.svg
                  ])}
                >
                  {/* Pre */}
                  {pre}

                  {/* Elements */}
                  {elements && elements.map(({ item, element }, index: number) => (
                    React.cloneElement(element, {
                      key: index,

                      ...(elementTooltip ? {
                        onMouseEnter: event => {
                          const rect_ = (event.target as any).getBoundingClientRect();

                          onPointMouseEnter({
                            values: item.values,

                            rect: rect_
                          });
                        },

                        onMouseLeave: onPointMouseLeave
                      } : undefined),

                      style: {
                        ...element?.props?.style,

                        opacity: (visible[item?.name] === undefined || !!visible[item?.name]) ? 1 : 0
                      }
                    })
                  ))}

                  {/* Additional lines */}
                  {additionalLines && (
                    <g
                      {...AdditionalLinesProps}

                      className={classNames([
                        staticClassName('Chart', theme) && [
                          'AmauiChart-additional-lines'
                        ],

                        AdditionalLinesProps?.className,
                        classes.additionalLines
                      ])}
                    >
                      {additionalLines}
                    </g>
                  )}

                  {/* Guideline */}
                  {guideline && guidelineIn && <>
                    {['both', 'vertical'].includes(guideline) && (
                      <path
                        d={`M ${guidelinePosition?.x} 0 ${guidelinePosition?.x} ${rects?.wrapper?.height || 0}`}

                        {...GuidelineProps}

                        className={classNames([
                          staticClassName('Chart', theme) && [
                            'AmauiChart-guideline',
                            'AmauiChart-guideline-vertical'
                          ],

                          GuidelineProps?.className,
                          classes.guideline,
                          classes.guideline_vertical
                        ])}
                      />
                    )}

                    {['both', 'horizontal'].includes(guideline) && (
                      <path
                        d={`M 0 ${guidelinePosition?.y} ${rects?.wrapper?.width || 0} ${guidelinePosition?.y}`}

                        {...GuidelineProps}

                        className={classNames([
                          staticClassName('Chart', theme) && [
                            'AmauiChart-guideline',
                            'AmauiChart-guideline-horizontal'
                          ],

                          GuidelineProps?.className,
                          classes.guideline,
                          classes.guideline_horizontal
                        ])}
                      />
                    )}
                  </>}

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
                      is('function', labelRender) ?
                        labelRender(item) :

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
                      is('function', labelRender) ?
                        labelRender(item) :

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
            classes[`legend_position_${legendPosition}`],
            (labels?.y && labelsY) && classes.legend_offset_labels_y,
            (names?.y && nameY) && classes.legend_offset_names_y
          ])}
        >
          {legend.map((item: any, index: number) => (
            React.cloneElement(item, {
              key: index
            })
          ))}
        </Line>
      )}

      {/* Append */}
      {tooltip && (
        <Append
          open

          element={(
            <div
              className={classNames([
                staticClassName('Chart', theme) && [
                  'AmauiChart-append-wrapper'
                ],

                classes.append_wrapper
              ])}
            >
              <Grow
                in={append?.open}

                add
              >
                {append?.element || (
                  <Line
                    tonal={tonal}

                    color={color}

                    elevation={1}

                    gap={0.5}

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
                        {append?.values?.[1]}
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
                        {append?.values?.[0]}
                      </Type>
                    </Line>
                  </Line>
                )}
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
    </Line>
  );
});

Chart.displayName = 'AmauiChart';

export default Chart;
