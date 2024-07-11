import React from 'react';

import { elementToCanvas, textToInnerHTML } from '@amaui/utils';
import { style as styleMethod, classNames, useAmauiTheme } from '@amaui/style-react';
import { AmauiDate, add, endOf, format, remove, set, startOf } from '@amaui/date';
import { IAvailableTimes, IWorkDayTimesValue } from '@amaui/api-utils';

import LineElement from '../Line';
import TypeElement from '../Type';
import { ILine } from '../Line/Line';
import TooltipElement from '../Tooltip';
import IconButtonElement from '../IconButton';
import LabelElement from '../Label';
import ChipElement from '../Chip';
import SwitchElement from '../Switch';
import IconElement from '../Icon';
import { formats, staticClassName } from '../utils';
import { IElement } from '../types';

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
    minWidth: '140px',
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
    background: theme.palette.color.secondary[50]
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
      padding: '0 12px !important',
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
  }
}), { name: 'amaui-WorkDaysCalendar' });

export interface IWorkDaysCalendar extends ILine {
  name?: string | IElement;

  description?: string | IElement;

  times?: IAvailableTimes<IWorkDayTimesValue>;

  meta?: boolean;

  IconPrevious?: any;

  IconNext?: any;
}

const WorkDaysCalendar: React.FC<IWorkDaysCalendar> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiWorkDaysCalendar?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Tooltip = React.useMemo(() => theme?.elements?.Tooltip || TooltipElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Label = React.useMemo(() => theme?.elements?.Label || LabelElement, [theme]);

  const Chip = React.useMemo(() => theme?.elements?.Chip || ChipElement, [theme]);

  const Switch = React.useMemo(() => theme?.elements?.Switch || SwitchElement, [theme]);

  const {
    name,

    description,

    times,

    meta,

    Component = Line,

    IconPrevious = IconMaterialArrowBackIosNew,
    IconNext = IconMaterialArrowForwardIos,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [date, setDate] = React.useState(AmauiDate.amauiDate);
  const [now, setNow] = React.useState(AmauiDate.amauiDate);
  const [view, setView] = React.useState<any>('calendar');
  const [displayTime, setDisplayTime] = React.useState(true);

  const refs = {
    date: React.useRef(date),
    displayTime: React.useRef(displayTime),
    interval: React.useRef<any>(),
    calendar: React.useRef<any>()
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

  const itemsLegend = React.useMemo(() => {
    return [
      { name: 'Working', color: theme.palette.color.success[rangeShade] },
      { name: 'On a break', color: theme.palette.color.warning[rangeShade] },
      { name: 'Not working', color: theme.palette.color.info[rangeShade] }
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

  const datesWeek = React.useMemo(() => {
    const weekFrom = startOf(date, 'week');
    const weekTo = endOf(date, 'week');

    return dates.filter((item: any) => {
      const from = new AmauiDate(item.from);

      return from.milliseconds >= weekFrom.milliseconds && from.milliseconds <= weekTo.milliseconds;
    });
  }, [date, dates]);

  const weekStart = startOf(date, 'week');

  const renderTimes = (day: AmauiDate, valuesAll: any, weekly = true) => {
    const values = valuesAll?.filter((item: any) => {
      const from = new AmauiDate(item.from);

      return weekly ? weekly : from && format(day, formats.date) === format(from, formats.date);
    });

    const elements: any = [];

    const renderTo = (valueNew: any) => {
      if (valueNew === '23:59') return '24:00';

      return valueNew;
    };

    values.forEach((item: any, index: number) => {
      if (!(item.from && item.to)) return;

      const from = new AmauiDate(item.from);
      const to = new AmauiDate(item.to);

      elements.push(
        <Line
          key={index}

          gap={0.5}

          align='center'

          justify='center'

          className={classes.range}

          style={{
            top: `${100 * (((from.hour * 60) + from.minute) / (24 * 60))}%`,
            bottom: `${(100 - (100 * (((to.hour * 60) + (to.minute === 59 ? 60 : to.minute)) / (24 * 60))))}%`,
            background: (!item.skip && !item.break) ? theme.palette.color.success[rangeShade] : item.break ? theme.palette.color.warning[rangeShade] : theme.palette.color.info[rangeShade]
          }}
        >
          <Type
            version='l3'

            align='center'

            className={classNames([
              classes.time,
              !refs.displayTime.current && 'amaui-work-day-time'
            ])}
          >
            {format(from, 'HH:mm')}h - {renderTo(format(to, 'HH:mm'))}h
          </Type>

          {item.description && (
            <Type
              version='b3'

              className={classNames([
                classes.timeDescription,
                !refs.displayTime.current && 'amaui-work-day-time'
              ])}

              dangerouslySetInnerHTML={{
                __html: textToInnerHTML(item.description)
              }}
            />
          )}
        </Line>
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
        {itemsLegend.map((item, index) => (
          <Line
            key={index}

            gap={1}

            direction='row'

            align='center'
          >
            <Line
              className={classes.palettePreview}

              style={{
                background: item.color
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
  }, [itemsLegend]);

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
        staticClassName('WorkDaysCalendar', theme) && [
          'amaui-WorkDaysCalendar-root'
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
          <Type
            version='b2'
          >
            {weekName}
          </Type>

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
                    {Object.values(times.weekly?.days).filter((item: any) => !!item.values.length).map((item: any, index: number) => {
                      const day = set(index + 1, 'dayWeek');

                      const values = item.values || [];

                      return (
                        <Line
                          key={index}

                          gap={1.5}

                          direction='column'
                        >
                          <Type
                            version='l2'
                          >
                            {format(day, 'dd')}
                          </Type>

                          <Line
                            gap={1}
                          >
                            {values.map((itemValue: any, indexItem: number) => {
                              const itemBackground = (!itemValue.skip && !itemValue.break) ? theme.palette.color.success[rangeShade] : itemValue.break ? theme.palette.color.warning[rangeShade] : theme.palette.color.info[rangeShade];

                              const itemValueFrom = new AmauiDate(itemValue.from);
                              const itemValueTo = new AmauiDate(itemValue.to);

                              return (
                                <Line
                                  key={indexItem}

                                  gap={1}

                                  direction='row'

                                  align='center'
                                >
                                  <Line
                                    className={classes.palettePreview}

                                    style={{
                                      background: itemBackground
                                    }}
                                  />

                                  <Type>
                                    {format(itemValueFrom, 'HH:mm')}h — {format(itemValueTo, 'HH:mm')}h
                                  </Type>
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

                      const itemBackground = (!itemValue.skip && !itemValue.break) ? theme.palette.color.success[rangeShade] : itemValue.break ? theme.palette.color.warning[rangeShade] : theme.palette.color.info[rangeShade];

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
                              background: itemBackground
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
                                {format(itemValueFrom, 'HH:mm')}h — {format(itemValueTo, 'HH:mm')}h
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
                        {times?.weekly?.active && renderTimes(day, times.weekly.days[index + 1]?.values)}

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
    </Component>
  );
});

WorkDaysCalendar.displayName = 'amaui-WorkDaysCalendar';

export default WorkDaysCalendar;
