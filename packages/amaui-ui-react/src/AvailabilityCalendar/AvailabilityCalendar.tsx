import React from 'react';

import { clamp, cleanValue, elementToCanvas, textToInnerHTML } from '@amaui/utils';
import { style as styleMethod, classNames, useAmauiTheme, colors } from '@amaui/style-react';
import { AmauiDate, add, endOf, format, months, remove, set, startOf } from '@amaui/date';

import LineElement from '../Line';
import ModalElement from '../Modal';
import ModalHeaderElement from '../ModalHeader';
import ModalMainElement from '../ModalMain';
import SelectElement from '../Select';
import TypeElement from '../Type';
import { ILine } from '../Line/Line';
import TooltipElement from '../Tooltip';
import IconButtonElement from '../IconButton';
import LabelElement from '../Label';
import ChipElement from '../Chip';
import SlideElement from '../Slide';
import SwitchElement from '../Switch';
import IconElement from '../Icon';
import { formats, staticClassName } from '../utils';
import { IElement } from '../types';

const IconMaterialKeyboardArrowDown = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='KeyboardArrowDown'

      short_name='KeyboardArrowDown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.975q-.2 0-.387-.075-.188-.075-.313-.2l-4.6-4.6q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l3.9 3.9 3.9-3.9q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7l-4.6 4.6q-.15.15-.325.212-.175.063-.375.063Z" />
    </IconElement>
  );
});

const IconMaterialShortText = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='ShortText'

      short_name='ShortText'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 11q-.425 0-.713-.288Q4 10.425 4 10t.287-.713Q4.575 9 5 9h14q.425 0 .712.287Q20 9.575 20 10t-.288.712Q19.425 11 19 11Zm0 4q-.425 0-.713-.288Q4 14.425 4 14t.287-.713Q4.575 13 5 13h8q.425 0 .713.287.287.288.287.713t-.287.712Q13.425 15 13 15Z" />
    </IconElement>
  );
});

const IconMaterialArrowForwardIos = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='ArrowForwardIos'

      short_name='ArrowForwardIos'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.15 21.1q-.375-.375-.375-.888 0-.512.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375.512 0 .887.375l8.4 8.425q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325L8.9 21.125q-.35.35-.862.35-.513 0-.888-.375Z" />
    </IconElement>
  );
});

const IconMaterialArrowBackIosNew = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='ArrowBackIosNew'

      short_name='ArrowBackIosNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.125 21.1 6.7 12.7q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.862 0 .513-.375.888t-.875.375q-.5 0-.875-.375Z" />
    </IconElement>
  );
});

const useStyle = styleMethod(theme => ({
  root: {

  },

  calendar: {
    padding: '12px 8px',
    backgroundColor: theme.palette.light ? theme.palette.color.primary[99] : theme.palette.color.primary[5]
  },

  actions: {
    overflow: 'auto hidden',

    '& > *': {
      flex: '0 0 auto'
    }
  },

  days: {
    overflow: 'auto',
    padding: '0 4px 10px 0',
    backgroundColor: theme.palette.light ? theme.palette.color.primary[100] : theme.palette.color.primary[10]
  },

  day: {
    minWidth: '184px',
    minHeight: '540px',
    width: 'calc((100% / 7) - 106px)'
  },

  dayLine: {
    position: 'relative',
    borderRadius: '16px',
    boxShadow: theme.shadows.values.default[1],
    overflow: 'hidden'
  },

  hours: {
    width: '44px',
    flex: '0 0 auto',
    marginRight: '6px'
  },

  hourLine: {
    position: 'relative',
    borderRadius: '16px'
  },

  hour: {
    position: 'absolute',
    right: '0px',
    whiteSpace: 'nowrap'
  },

  guide: {
    position: 'absolute',
    left: 0,
    height: '1px',
    background: theme.palette.color.neutral[theme.palette.light ? 95 : 20]
  },

  nowGuide: {
    position: 'absolute',
    left: 0,
    height: '1px',
    transform: 'translateY(-50%)',
    background: theme.palette.color.secondary[50],
    zIndex: 1
  },

  range: {
    position: 'absolute',
    left: 0,
    right: 0,
    cursor: 'default',
    borderBlock: `1px solid white`,
    zIndex: 1,
    transition: theme.methods.transitions.make('box-shadow'),

    '& > *': {
      whiteSpace: 'pre-wrap',
      transition: theme.methods.transitions.make('opacity')
    },

    '& > .amaui-work-day-time': {
      opacity: 0
    },

    '&:hover': {
      zIndex: 14,
      boxShadow: theme.shadows.values.default[2],

      '& > .amaui-work-day-time': {
        opacity: 1
      }
    }
  },

  time: {
    position: 'relative',
    zIndex: 1,
    padding: '0px 2px',
    borderRadius: 2
  },

  meta: {
    position: 'absolute',
    top: '2px',
    right: '4px',

    '& .amaui-Icon-root': {
      pointerEvents: 'all'
    }
  },

  description: {
    ...theme.typography.values.b3,
    background: theme.palette.background.default.primary,
    borderRadius: `${clamp(theme.shape.radius.unit / 2, 0, 8)}px`,
    padding: `${theme.methods.space.value(0.5, 'px')} ${theme.methods.space.value(1, 'px')}`,
    boxShadow: '0px 4px 32px 0px rgba(0, 0, 0, 0.04)',
    lineHeight: '1.455'
  },

  palettePreview: {
    width: '17px',
    height: '17px',
    boxShadow: theme.palette.light ? '0px 1px 1px 0px rgba(0, 0, 0, 0.07), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px 0px rgba(0, 0, 0, 0.11)' : '0px 1px 1px 0px rgba(255, 255, 255, 0.21), 0px 2px 1px -1px rgba(255, 255, 255, 0.12), 0px 1px 3px 0px rgba(255, 255, 255, 0.40)',
    borderRadius: '50%',
    cursor: 'default',
    flex: '0 0 auto',
    transition: theme.methods.transitions.make('transform'),

    '& > *': {
      width: '100% !important',
      height: 'calc(100% + 12px) !important'
    },

    '&:active': {
      transform: 'scale(0.94)'
    }
  },

  dayWeekSimple: {
    maxWidth: 184
  }
}), { name: 'amaui-AvailabilityCalendar' });

export interface IAvailabilityCalendar extends ILine {
  name?: string | IElement;

  description?: string | IElement;

  times?: any;

  meta?: boolean;

  IconPrevious?: any;

  IconNext?: any;

  IconDescription?: any;

  IconClose?: any;
}

const AvailabilityCalendar: React.FC<IAvailabilityCalendar> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiAvailabilityCalendar?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Label = React.useMemo(() => theme?.elements?.Label || LabelElement, [theme]);

  const Chip = React.useMemo(() => theme?.elements?.Chip || ChipElement, [theme]);

  const Switch = React.useMemo(() => theme?.elements?.Switch || SwitchElement, [theme]);

  const Modal = React.useMemo(() => theme?.elements?.Modal || ModalElement, [theme]);

  const ModalHeader = React.useMemo(() => theme?.elements?.ModalHeader || ModalHeaderElement, [theme]);

  const ModalMain = React.useMemo(() => theme?.elements?.ModalMain || ModalMainElement, [theme]);

  const Select = React.useMemo(() => theme?.elements?.Select || SelectElement, [theme]);

  const Slide = React.useMemo(() => theme?.elements?.Slide || SlideElement, [theme]);

  const {
    name,

    description,

    times,

    meta,

    Component = Line,

    IconPrevious = IconMaterialArrowBackIosNew,
    IconNext = IconMaterialArrowForwardIos,
    IconDescription = IconMaterialShortText,
    IconClose = IconMaterialKeyboardArrowDown,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [date, setDate] = React.useState(AmauiDate.amauiDate);
  const [now, setNow] = React.useState(AmauiDate.amauiDate);
  const [view, setView] = React.useState<any>('calendar');
  const [displayTime, setDisplayTime] = React.useState(true);
  const [modal, setModal] = React.useState<any>();

  const refs = {
    date: React.useRef(date),
    displayTime: React.useRef(displayTime),
    interval: React.useRef<any>(),
    calendar: React.useRef<any>(),
    days: React.useRef<any>({}),
    overlaping: React.useRef<any>({})
  };

  refs.date.current = date;

  refs.displayTime.current = displayTime;

  const rangeShade = theme.palette.light ? 90 : 30;

  const init = React.useCallback(() => {
    refs.interval.current = setInterval(() => {
      setNow(AmauiDate.amauiDate);
    }, 60 * 1e3);
  }, []);

  React.useEffect(() => {
    // init
    init();

    return () => {
      clearInterval(refs.interval.current);
    };
  }, []);

  const onOpen = React.useCallback((item: any) => {
    setModal({ ...item, open: true });
  }, []);

  const onClose = React.useCallback(() => {
    setModal((item: any) => ({
      ...item,

      open: false
    }));
  }, []);

  const onPreviousCalendar = React.useCallback(() => {
    const valueNew = remove(1, 'week', refs.date.current);

    setDate(new AmauiDate(valueNew));
  }, []);

  const onNextCalendar = React.useCallback(() => {
    const valueNew = add(1, 'week', refs.date.current);

    setDate(new AmauiDate(valueNew));
  }, []);

  const onToday = React.useCallback(() => {
    setDate(AmauiDate.amauiDate);
  }, []);

  const onChangeDisplayTime = React.useCallback((valueNew: any) => {
    setDisplayTime(valueNew);
  }, []);

  const onChangeView = React.useCallback((valueNew: any) => {
    setView(valueNew ? 'simple' : 'calendar');
  }, []);

  const onDownload = React.useCallback(() => {
    elementToCanvas(
      refs.calendar.current,
      {
        response: 'download',

        download: {
          name: `Calendar ${name || 'amaui'}`
        }
      }
    );
  }, [name]);

  const optionsStatus = React.useMemo(() => {
    return [
      { name: 'Working', value: 'working' },
      { name: 'Not working', value: 'not-working' },
      { name: 'On a break', value: 'break' },
      { name: 'Scheduled', value: 'pending' },
      { name: 'Rescheduled', value: 'rescheduled' },
      { name: 'Cancelled', value: 'cancelled' },
      { name: 'Other', value: 'other' }
    ];
  }, []);

  const dates = React.useMemo(() => {
    const values = times?.dates?.values || [];

    return values.map((item: any) => {
      if (item.entire) {
        if (item.from) {
          let from = new AmauiDate(item.from);
          let to: AmauiDate;

          if (['day', 'week', 'month', 'year'].includes(item.entire)) from = startOf(from, 'day');

          if (item.entire === 'minute') from = startOf(from, 'minute');

          if (item.entire === 'hour') from = startOf(from, 'hour');

          to = endOf(from, item.entire);

          item.from = from.milliseconds;

          item.to = to.milliseconds;
        }
      }

      return item;
    });
  }, [times]);

  const onChangeMonth = React.useCallback((valueNew: any) => setDate(set(valueNew, 'month', refs.date.current)), []);

  const onChangeYear = React.useCallback((valueNew: any) => setDate(set(valueNew, 'year', refs.date.current)), []);

  const monthOptions = React.useMemo(() => {
    return months.map((item, index: number) => ({
      name: item,
      value: index
    }));
  }, [months]);

  const yearOptions = React.useMemo(() => {
    const values = [];

    for (let i = 1970; i <= 2070; i++) values.push({ name: i, value: i });

    return values;
  }, []);

  const datesWeek = React.useMemo(() => {
    const weekFrom = startOf(date, 'week');
    const weekTo = endOf(date, 'week');

    return dates.filter((item: any) => {
      const from = new AmauiDate(item.from);
      const to = new AmauiDate(item.to);

      return !(from.milliseconds >= weekTo.milliseconds || to.milliseconds <= weekFrom.milliseconds);
    });
  }, [date, dates]);

  const weekStart = startOf(date, 'week');

  const getColor = React.useCallback((item: any) => {
    let palette = theme.palette.color.neutral;

    if (item?.status === 'working') palette = theme.palette.color.success;

    if (item?.status === 'not-working') palette = theme.palette.color.info;

    if (item?.status === 'break') palette = theme.palette.color.warning;

    if (item?.status === 'pending') palette = theme.methods.color(colors.yellow[50]) as any;

    if (item?.status === 'rescheduled') palette = theme.methods.color(colors.purple[50]) as any;

    if (item?.status === 'cancelled') palette = theme.palette.color.error;

    if (item?.status === 'other') palette = theme.palette.color.neutral;

    return palette[rangeShade];
  }, [rangeShade, colors, theme]);

  const itemToText = React.useCallback((item: any) => {
    if (item === 'pending') return 'scheduled';

    if (item === 'not-count-workout-session') return `don't count workout session`;

    return item;
  }, []);

  const renderTimes = (day: AmauiDate, valuesAll: any, weekly = true, itemDay?: any) => {
    if (itemDay !== undefined && !itemDay?.active) return null;

    if (weekly) {
      const ends_at = itemDay?.ends_at ? new AmauiDate(itemDay.ends_at) : undefined;

      if (ends_at) {
        const day_StartDay = startOf(day, 'day');
        const ends_at_StartDay = startOf(ends_at, 'day');

        if (day_StartDay.milliseconds >= ends_at_StartDay.milliseconds) return null;
      }
    }

    const dayStartOfDay = startOf(day, 'day');

    const dayDate = format(day, formats.date);

    const values = valuesAll?.filter((item: any) => {
      const from = new AmauiDate(item.from);
      const fromStartOfDay = startOf(from, 'day');

      const to = new AmauiDate(item.to);
      const toStartOfDay = startOf(to, 'day');

      return weekly ? weekly : (
        // from
        (
          (dayDate === format(from, formats.date)) ||
          (dayStartOfDay.milliseconds > fromStartOfDay.milliseconds)
        ) &&
        // to
        (
          (dayDate === format(to, formats.date)) ||
          (dayStartOfDay.milliseconds < toStartOfDay.milliseconds)
        )
      );
    });

    const elements: any = [];

    const renderTo = (valueNew: any) => {
      if (valueNew === '23:59') return '24:00';

      return valueNew;
    };

    // clean up
    if (weekly) {
      refs.days.current = {};
      refs.overlaping.current = {};
    }

    values?.forEach((item: any, index: number) => {
      if (!(item.from && item.to)) return;

      let from = new AmauiDate(item.from);

      let to = new AmauiDate(item.to);

      if (!weekly) {
        const fromStartOfDay = startOf(from, 'day');

        const toStartOfDay = startOf(to, 'day');

        if (
          (dayStartOfDay?.milliseconds > fromStartOfDay?.milliseconds) &&
          (
            (dayDate === format(to, formats.date)) ||
            (dayStartOfDay.milliseconds < toStartOfDay.milliseconds)
          )
        ) item.from = startOf(from, 'day').milliseconds;

        if (
          (
            (dayDate === format(from, formats.date)) ||
            (dayStartOfDay.milliseconds > fromStartOfDay.milliseconds)
          ) &&
          (dayStartOfDay?.milliseconds < toStartOfDay?.milliseconds)
        ) item.to = endOf(to, 'day').milliseconds;
      }

      from = new AmauiDate(item.from);

      to = new AmauiDate(item.to);

      const itemDate = format(day, formats.date);

      const top = +(100 * (((from.hour * 60) + from.minute) / (24 * 60))).toFixed(4);

      const bottom = +((100 - (100 * (((to.hour * 60) + (to.minute === 59 ? 60 : to.minute)) / (24 * 60))))).toFixed(4);

      if (!refs.days.current[itemDate]) refs.days.current[itemDate] = [];

      if (!refs.overlaping.current[itemDate]) refs.overlaping.current[itemDate] = [];

      const bottom_ = 100 - bottom;

      // intersections
      const overlaps = refs.days.current[itemDate].filter(([itemTop, itemBottom]: [number, number]) => {
        return !(top >= itemBottom || bottom_ <= itemTop);
      });

      let level = 0;

      if (overlaps.length) {
        level = refs.overlaping.current[itemDate].filter(([itemTop, itemBottom]: [number, number]) => {
          return !(top >= itemBottom || bottom_ <= itemTop);
        }).length + 1;

        refs.overlaping.current[itemDate].push([top, bottom_]);
      }

      refs.days.current[itemDate].push([top, bottom_]);

      elements.push(
        <Tooltip
          name={cleanValue(itemToText(item.status), { capitalize: true })}

          color={getColor(item)}
        >
          <Line
            key={index}

            gap={0.5}

            align='center'

            justify='center'

            onClick={() => onOpen({ ...item, day, weekly })}

            className={classes.range}

            style={{
              top: `${top}%`,
              bottom: `${bottom}%`,
              background: getColor(item),
              left: `calc(0px + ${level * 10}px)`,

              ...(top === 0 && bottom === 0 && {
                border: 'none'
              })
            }}
          >
            <Type
              version='l3'

              align='center'

              className={classNames([
                classes.time,
                !refs.displayTime.current && 'amaui-work-day-time'
              ])}

              style={{
                background: getColor(item)
              }}
            >
              {format(from, 'hh:mm a')} - {renderTo(format(to, 'hh:mm a'))}
            </Type>

            {item.description && (
              <Line
                gap={0.5}

                direction='row'

                align='center'

                className={classNames([
                  classes.meta,
                  !refs.displayTime.current && 'amaui-work-day-time'
                ])}
              >
                <Tooltip
                  name={(
                    <Line
                      className={classes.description}
                    >
                      <Type
                        version='b3'

                        whiteSpace='pre-line'

                        dangerouslySetInnerHTML={{
                          __html: textToInnerHTML(item.description)
                        }}
                      />
                    </Line>
                  )}

                  color='default'
                >
                  <IconDescription
                    size='small'
                  />
                </Tooltip>
              </Line>
            )}
          </Line>
        </Tooltip>
      );
    });

    return elements;
  };

  const weekName = `${format(startOf(date, 'week'), formats.date)} — ${format(endOf(date, 'week'), formats.date)}`;

  const legend = React.useMemo(() => {
    return (
      <Line
        rowGap={1.5}

        direction='row'

        align='center'

        justify='center'

        wrap='wrap'

        className={classes.legend}

        fullWidth

        style={{
          height: 40
        }}
      >
        {optionsStatus.map((item, index) => (
          <Line
            key={index}

            gap={1}

            direction='row'

            align='center'
          >
            <Line
              className={classes.palettePreview}

              style={{
                background: getColor({ status: item.value })
              }}
            />

            <Type
              version='b3'
            >
              {item.name}
            </Type>
          </Line>
        ))}
      </Line>
    );
  }, [optionsStatus]);

  const elementProps: any = {
    size: 'small'
  };

  return (
    <Component
      ref={ref}

      gap={1.5}

      direction='column'

      justify='unset'

      align='unset'

      fullWidth

      className={classNames([
        staticClassName('AvailabilityCalendar', theme) && [
          'amaui-AvailabilityCalendar-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {meta && (name || description) && (
        <Line
          gap={1}

          justify='center'

          align='center'

          fullWidth

          style={{
            marginBottom: 12
          }}
        >
          {name && (
            <Type
              version='h3'

              align='center'

              dangerouslySetInnerHTML={{
                __html: textToInnerHTML(name)
              }}
            />
          )}

          {description && (
            <Type
              version='b3'

              whiteSpace='pre-wrap'

              align='center'

              dangerouslySetInnerHTML={{
                __html: textToInnerHTML(description)
              }}
            />
          )}
        </Line>
      )}

      <Line
        direction='row'

        align='center'

        justify='space-between'

        fullWidth

        style={{
          marginBottom: 8
        }}
      >
        <Tooltip
          name='Previous'
        >
          <IconButton
            onClick={onPreviousCalendar}

            {...elementProps}
          >
            <IconPrevious />
          </IconButton>
        </Tooltip>

        <Line
          gap={1}

          align='center'

          fullWidth
        >
          <Line
            gap={1}

            align='center'

            fullWidth
          >
            <Type
              version='b2'
            >
              {weekName}
            </Type>

            <Line
              gap={1}

              direction='row'

              align='center'
            >
              <Select
                name='Month'

                value={monthOptions.find(item => item.value === date.month - 1)?.value}

                onChange={onChangeMonth}

                options={monthOptions as any}

                size='small'
              />

              <Select
                name='Year'

                value={yearOptions.find(item => item.value === date.year)?.value}

                onChange={onChangeYear}

                options={yearOptions as any}

                size='small'
              />
            </Line>
          </Line>

          <Line
            gap={1}

            direction='row'

            align='center'

            className={classes.actions}
          >
            <Label
              value={view === 'simple'}

              onChange={onChangeView}

              {...elementProps}
            >
              <Switch />

              Simple
            </Label>

            <Label
              value={displayTime}

              onChange={onChangeDisplayTime}

              {...elementProps}
            >
              <Switch />

              Display time
            </Label>

            <Chip
              onClick={onToday}

              selected={format(date, formats.date) === format(AmauiDate.amauiDate, formats.date)}

              {...elementProps}
            >
              Today
            </Chip>

            <Chip
              onClick={onDownload}

              {...elementProps}
            >
              Download
            </Chip>
          </Line>
        </Line>

        <Tooltip
          name='Next'
        >
          <IconButton
            onClick={onNextCalendar}

            {...elementProps}
          >
            <IconNext />
          </IconButton>
        </Tooltip>
      </Line>

      <Line
        gap={0}

        flex

        fullWidth

        className={classes.calendar}
      >
        {view === 'simple' && (
          <Line
            gap={1}

            align='center'

            justify='center'

            flex

            fullWidth
          >
            <Line
              ref={refs.calendar}

              gap={3}

              className={classes.calendar}
            >
              <Type
                version='b2'
              >
                {weekName}
              </Type>

              {/* Weekly */}
              {times?.weekly?.active && (
                <Line>
                  <Type
                    version='t1'
                  >
                    Weekly
                  </Type>

                  <Line
                    gap={4}

                    direction={{
                      xxs: 'column',
                      xs: 'column',
                      sm: 'column',
                      md: 'column',
                      default: 'row'
                    }}
                  >
                    {Object.values(times.weekly?.days!).filter((item: any) => !!item.values.length).map((item: any, index: number) => {
                      const day = set(index + 1, 'dayWeek', weekStart);

                      const values = item.values || [];

                      return (
                        <Line
                          key={index}

                          gap={1.5}

                          direction='column'
                        >
                          <Type
                            version='b2'
                          >
                            <b> {format(day, 'dd')}</b> {format(day, 'DD.MM.')}
                          </Type>

                          <Line
                            gap={1}
                          >
                            {values.map((itemValue: any, indexItem: number) => {
                              const itemValueFrom = new AmauiDate(itemValue.from);
                              const itemValueTo = new AmauiDate(itemValue.to);

                              return (
                                <Line
                                  key={indexItem}

                                  gap={1}

                                  className={classes.dayWeekSimple}
                                >
                                  <Line
                                    gap={1}

                                    direction='row'

                                    align='center'
                                  >
                                    <Line
                                      className={classes.palettePreview}

                                      style={{
                                        background: getColor(itemValue)
                                      }}
                                    />

                                    <Type>
                                      {format(itemValueFrom, 'hh:mm a')} — {format(itemValueTo, 'hh:mm a')}
                                    </Type>
                                  </Line>

                                  {itemValue.description && (
                                    <Type
                                      version='b3'

                                      whiteSpace='pre-wrap'

                                      className={classNames([
                                        classes.timeDescription,
                                        !refs.displayTime.current && 'amaui-work-day-time'
                                      ])}

                                      dangerouslySetInnerHTML={{
                                        __html: textToInnerHTML(itemValue.description)
                                      }}
                                    />
                                  )}
                                </Line>
                              );
                            })}
                          </Line>
                        </Line>
                      );
                    })}
                  </Line>
                </Line>
              )}

              {/* Dates */}
              {times?.dates?.active && !!datesWeek.length && (
                <Line
                  gap={1.5}
                >
                  <Type
                    version='t3'
                  >
                    Exceptions this week
                  </Type>

                  <Line
                    gap={1}
                  >
                    {datesWeek.map((itemValue: any, index: number) => {
                      const day = set(index + 1, 'dayWeek');

                      const itemValueFrom = new AmauiDate(itemValue.from);
                      const itemValueTo = new AmauiDate(itemValue.to);

                      return (
                        <Line
                          key={index}

                          gap={1}

                          direction='row'

                          align='flex-start'
                        >
                          <Line
                            className={classes.palettePreview}

                            style={{
                              background: getColor(itemValue)
                            }}
                          />

                          <Line
                            gap={0.5}
                          >
                            <Line
                              gap={1}

                              direction='row'

                              align='center'
                            >
                              <Type
                                version='l2'
                              >
                                {format(day, 'dd')}
                              </Type>

                              <Type>
                                {format(itemValueFrom, formats.entire)} — {format(itemValueTo, formats.entire)}
                              </Type>
                            </Line>

                            {itemValue.description && (
                              <Type
                                version='b3'

                                whiteSpace='pre-wrap'

                                className={classNames([
                                  classes.timeDescription,
                                  !refs.displayTime.current && 'amaui-work-day-time'
                                ])}

                                dangerouslySetInnerHTML={{
                                  __html: textToInnerHTML(itemValue.description)
                                }}
                              />
                            )}
                          </Line>
                        </Line>
                      );
                    })}
                  </Line>
                </Line>
              )}

              {legend}
            </Line>
          </Line>
        )}

        {view === 'calendar' && (
          <Line
            ref={refs.calendar}

            gap={1.5}

            flex

            fullWidth

            className={classes.calendar}
          >
            <Line
              gap={1}

              direction='row'

              align='stretch'

              flex

              fullWidth

              className={classes.days}
            >
              <Line
                gap={1}

                align='center'

                className={classes.hours}

                fullWidth
              >
                <Line
                  gap={0}

                  align='center'

                  fullWidth

                  style={{
                    height: 36
                  }}
                >
                  <Type
                    align='center'
                  >
                    Hours
                  </Type>
                </Line>

                <Line
                  className={classes.hourLine}

                  flex

                  fullWidth
                >
                  {new Array(25).fill(1).map((item, index) => (
                    <Line
                      key={index}

                      gap={0.5}

                      direction='row'

                      align='center'

                      className={classes.hour}

                      style={{
                        top: `calc(${(100 / 24) * index}% - 8px)`
                      }}
                    >
                      <Type
                        version='b3'
                      >
                        {index === 0 ? '00' : index} h
                      </Type>
                    </Line>
                  ))}
                </Line>
              </Line>

              {new Array(7).fill(1).map((item, index) => {
                const day = add(index, 'day', weekStart);

                return (
                  <Line
                    key={index}

                    className={classes.day}

                    flex
                  >
                    <Line
                      gap={1}

                      align='center'

                      flex

                      fullWidth
                    >
                      <Line
                        gap={0}

                        align='center'

                        fullWidth
                      >
                        <Type
                          align='center'
                        >
                          {format(day, 'd')}
                        </Type>

                        <Type
                          version='b3'

                          align='center'
                        >
                          {format(day, formats.date)}
                        </Type>
                      </Line>

                      <Line
                        className={classes.dayLine}

                        flex

                        fullWidth
                      >
                        {/* Weekly */}
                        {times?.weekly?.active && renderTimes(day, (times.weekly!.days as any)![index + 1]?.values as any, true, (times.weekly!.days as any)![index + 1])}

                        {/* Dates */}
                        {times?.dates?.active && renderTimes(day, dates, false)}

                        {/* Guides */}
                        {new Array(25).fill(1).map((itemGuide, indexGuide) => (
                          <Line
                            key={indexGuide}

                            className={classes.guide}

                            fullWidth

                            style={{
                              top: `${(100 / 24) * indexGuide}%`
                            }}
                          />
                        ))}

                        {/* Now */}
                        {(format(now, formats.date) === format(day, formats.date)) && (
                          <Line
                            className={classes.nowGuide}

                            fullWidth

                            style={{
                              top: `${100 * (((now.hour * 60) + now.minute) / (24 * 60))}%`
                            }}
                          />
                        )}
                      </Line>
                    </Line>
                  </Line>
                );
              })}
            </Line>

            {legend}
          </Line>
        )}
      </Line>

      {times && (
        <Modal
          open={!!modal?.open}

          onClose={onClose}

          TransitionComponent={Slide}

          size='small'
        >
          <ModalHeader
            gap={1}

            direction='row'

            align='center'

            justify='space-between'

            fullWidth
          >
            <Line
              gap={1}

              direction='row'

              align='center'

              fullWidth
            >
              <Line
                className={classes.palettePreview}

                style={{
                  background: getColor(modal)
                }}
              />

              <Type
                version='b3'
              >
                {cleanValue(itemToText(modal?.status), { capitalize: true })}
              </Type>
            </Line>

            <Tooltip
              name='Close'
            >
              <IconButton
                onClick={onClose}
              >
                <IconClose />
              </IconButton>
            </Tooltip>
          </ModalHeader>

          <ModalMain
            align='flex-start'

            className={classes.modalMain}
          >
            <Line
              gap={1.5}

              fullWidth
            >
              <Type
                version='l2'
              >
                {format(modal?.day, 'dd')} {format(new AmauiDate(modal?.from), modal?.weekly ? `hh:mm a` : formats.entire)} — {format(new AmauiDate(modal?.to), modal?.weekly ? `hh:mm a` : formats.entire)}
              </Type>

              {modal?.description && (
                <Type
                  dangerouslySetInnerHTML={{
                    __html: textToInnerHTML(modal.description)
                  }}
                />
              )}
            </Line>
          </ModalMain>
        </Modal>
      )}
    </Component>
  );
});

AvailabilityCalendar.displayName = 'amaui-AvailabilityCalendar';

export default AvailabilityCalendar;
