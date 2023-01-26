import React from 'react';

import { clamp, is, Try } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';
import { AmauiDate, add, remove, format, TTimeUnits, set } from '@amaui/date';

import Surface from '../Surface';
import Line from '../Line';
import Fade from '../Fade';
import IconButton from '../IconButton';
import Button from '../Button';
import Icon from '../Icon';
import CalendarMonth from '../CalendarMonth';
import List from '../List';
import ListItem from '../ListItem';
import Divider from '../Divider';
import Type from '../Type';
import Carousel from '../Carousel';
import PaginationItem from '../PaginationItem';
import { IconDoneAnimated } from '../Buttons/Buttons';
import { ICalenarDays, TCalendarMonthCalendar, TCalendarMonthValue } from '../CalendarMonth/CalendarMonth';

import { IBaseElement, staticClassName, TColor, TElementReference, TPropsAny, TTonal } from '../utils';

const useStyle = style(theme => ({
  root: {
    borderRadius: theme.methods.shape.radius.value(4, 'px'),
    width: '320px',
    overflow: 'hidden'
  },

  range: {
    width: 'unset'
  },

  header: {
    width: '100%',
    padding: '12px 8px 4px'
  },

  calendars: {
    width: '100%',
    padding: '0 8px 8px'
  },

  calendar: {
    width: '100%'
  },

  option: {
    transition: theme.methods.transitions.make('opacity'),

    '&.amaui-Button-root': {
      paddingInline: '8px 0px'
    },

    '& .amaui-Button-end': {
      paddingInline: '8px 0px'
    }
  },

  option_secondary: {
    opacity: '0.4'
  },

  list: {
    width: '100%',
    maxHeight: '307px',
    overflowY: 'auto',

    '&.amaui-List-root': {
      boxShadow: 'none'
    }
  },

  listItem: {
    '& .amaui-ListItem-root': {
      minHeight: '50px'
    }
  },

  list_version_year: {
    width: '100%',
    maxHeight: '299px',
    overflowY: 'auto',
    marginTop: '8px'
  },

  day_version_year: {
    flex: '0 1 72px',
    height: '36px',

    '&:hover': {
      boxShadow: 'inset 0px 0px 0px 1px currentColor'
    }
  },

  carousel: {
    '&.amaui-Carousel-root': {
      height: '100vh',
      maxHeight: '440px',
    }
  },

  carousel_item: {
    width: '100%',
    marginTop: '16px',
    userSelect: 'none'
  },

  carousel_item_label: {
    paddingInlineStart: '16px'
  },

  arrow: {
    transition: theme.methods.transitions.make('transform')
  },

  arrow_open: {
    transform: 'rotate(-180deg)'
  },

  divider: {
    '&.amaui-Divider-root': {
      margin: '0px'
    }
  }
}), { name: 'amaui-Calendar' });

export type TGetAmauiDates = (value: TCalendarMonthValue, calendar: TCalendarMonthCalendar, props: TPropsAny) => Array<{ value: AmauiDate }>;

export interface ICalendar extends IBaseElement {
  tonal?: TTonal;
  color?: TColor;

  version?: 'regular' | 'year';

  value?: TCalendarMonthValue;
  valueDefault?: TCalendarMonthValue;
  onChange?: (value: TCalendarMonthValue) => any;

  calendar?: TCalendarMonthCalendar;
  calendarDefault?: TCalendarMonthCalendar;
  onChangeCalendar?: (value: TCalendarMonthCalendar) => any;

  menu?: 'month-year' | 'month';
  now?: boolean;
  range?: boolean;
  calendars?: number;
  min?: AmauiDate;
  max?: AmauiDate;
  validate?: (value: AmauiDate) => boolean;

  valid?: (value: AmauiDate, version: 'day' | 'month' | 'year') => boolean;
  geMonths?: TGetAmauiDates;
  geYears?: TGetAmauiDates;

  belowCalendars?: any;

  IconPrevious?: TElementReference;
  IconNext?: TElementReference;
  IconDropDown?: TElementReference;

  CalendarDayProps?: ICalenarDays;
  OptionButtonProps: any;
}

const IconMaterialNavigateBeforeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateBeforeRounded'
      short_name='NavigateBefore'

      {...props}
    >
      <path d="M13.3 17.3 8.7 12.7Q8.55 12.55 8.488 12.375Q8.425 12.2 8.425 12Q8.425 11.8 8.488 11.625Q8.55 11.45 8.7 11.3L13.3 6.7Q13.575 6.425 14 6.425Q14.425 6.425 14.7 6.7Q14.975 6.975 14.975 7.4Q14.975 7.825 14.7 8.1L10.8 12L14.7 15.9Q14.975 16.175 14.975 16.6Q14.975 17.025 14.7 17.3Q14.425 17.575 14 17.575Q13.575 17.575 13.3 17.3Z" />
    </Icon>
  );
});

const IconMaterialNavigateNextRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateNextRounded'
      short_name='NavigateNext'

      {...props}
    >
      <path d="M8.7 17.3Q8.425 17.025 8.425 16.6Q8.425 16.175 8.7 15.9L12.6 12L8.7 8.1Q8.425 7.825 8.425 7.4Q8.425 6.975 8.7 6.7Q8.975 6.425 9.4 6.425Q9.825 6.425 10.1 6.7L14.7 11.3Q14.85 11.45 14.913 11.625Q14.975 11.8 14.975 12Q14.975 12.2 14.913 12.375Q14.85 12.55 14.7 12.7L10.1 17.3Q9.825 17.575 9.4 17.575Q8.975 17.575 8.7 17.3Z" />
    </Icon>
  );
});

const IconMaterialArrowDropDownRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDropDownRounded'
      short_name='ArrowDropDown'

      {...props}
    >
      <path d="M11.3 14.3 8.7 11.7Q8.225 11.225 8.488 10.613Q8.75 10 9.425 10H14.575Q15.25 10 15.512 10.613Q15.775 11.225 15.3 11.7L12.7 14.3Q12.55 14.45 12.375 14.525Q12.2 14.6 12 14.6Q11.8 14.6 11.625 14.525Q11.45 14.45 11.3 14.3Z" />
    </Icon>
  );
});

const Calendar = React.forwardRef((props__: ICalendar, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiCalendar?.props?.default, ...props__ }), [props__]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    version = 'regular',

    value: value_,
    valueDefault,
    onChange,

    calendar: calendar_,
    calendarDefault,
    onChangeCalendar,

    menu = 'month-year',
    range,
    now = true,
    calendars = props.range ? 2 : 1,
    min,
    max,
    validate,

    valid: valid_,
    getMonths: getMonths_,
    getYears: getYears_,

    belowCalendars,

    IconPrevious = IconMaterialNavigateBeforeRounded,
    IconNext = IconMaterialNavigateNextRounded,
    IconDropDown = IconMaterialArrowDropDownRounded,

    CalendarMonthProps,
    OptionButtonProps,

    className,

    ...other
  } = props;

  const refs = {
    month: React.useRef<HTMLElement>(),
    year: React.useRef<HTMLElement>()
  };

  const [value, setValue] = React.useState(() => {
    const valueResult = (valueDefault !== undefined ? valueDefault : value_) || (now && (range ? [new AmauiDate(), new AmauiDate()] : [new AmauiDate()]));

    return ((is('array', valueResult) ? valueResult : [valueResult]) as Array<AmauiDate>).filter(Boolean);
  });
  const [calendar, setCalendar] = React.useState((calendarDefault !== undefined ? calendarDefault : calendar_) || new AmauiDate());
  const [carousel, setCarousel] = React.useState<any>();
  const [open, setOpen] = React.useState<'month' | 'year' | null>();

  // Value
  React.useEffect(() => {
    if (value_ !== undefined && value_ !== value) setValue(value_ as any);
  }, [value_]);

  // Calendar
  React.useEffect(() => {
    if (calendar_ !== undefined && calendar_ !== calendar) setCalendar(calendar_);
  }, [calendar_]);

  const onUpdateCalendar = React.useCallback((valueNew: AmauiDate) => {
    // Inner update
    if (!props.hasOwnProperty('calendar')) setCalendar(valueNew);

    if (is('function', onChangeCalendar)) onChangeCalendar(valueNew);
  }, [onChangeCalendar]);

  const onUpdateCalendarOption = React.useCallback((valueNew: AmauiDate) => {
    setOpen(null);

    onUpdateCalendar(valueNew);
  }, []);

  const onCalendarMonthChange = React.useCallback((valueNew: TCalendarMonthValue) => {
    if (valueNew !== value) setValue(valueNew as any);
  }, [value]);

  const onCalendarMonthChangeCalendar = React.useCallback((valueNew: TCalendarMonthCalendar) => {
    if (valueNew !== calendar) setCalendar(valueNew as any);
  }, [calendar]);

  const valid = React.useCallback((...args: [AmauiDate, any]) => {
    if (is('function', valid_)) return valid_(...args);

    return true;
  }, [valid_]);

  const move = React.useCallback((next = true, unit: TTimeUnits = 'month') => {
    setCalendar((next ? add : remove)(1, unit, calendar));
  }, [calendar]);

  const onOpen = React.useCallback((valueUpdate: 'month' | 'year' = 'month') => {
    const valueNew = open === valueUpdate ? null : valueUpdate;

    setOpen(valueNew);

    // Scroll to the value
    if (valueNew) setTimeout(() => {
      const list = refs[valueNew]?.current;

      if (list) {
        const valueData = valueNew === 'month' ? calendar.month - 1 : calendar.year;

        Try(() => {
          const element = list.querySelector(`[data-value="${valueData}"]`) as HTMLElement;

          if (element) list.scrollTo({
            top: clamp(element.offsetTop - (menu === 'month' ? 104 : 204), 0),
            behavior: 'smooth'
          });
        });
      }
    });
  }, [open, calendar]);

  const getMonths: TGetAmauiDates = is('function', getMonths_) ? getMonths_ : React.useCallback(() => {
    return Array.from({ length: 12 }).map((item: any, index: number) => ({ value: set(index, 'month', calendar) }));
  }, [calendar]);

  const getYears: TGetAmauiDates = is('function', getYears_) ? getYears_ : React.useCallback(() => {
    const minYear = 1970;
    const length = 130;

    return Array.from({ length }).map((item: any, index: number) => ({ value: set(minYear + index, 'year', calendar) }));
  }, []);

  const onCarouselInit = React.useCallback(() => {
    // Scroll to the value
    setTimeout(() => {
      Try(() => {
        let item: any = window.document.body.querySelector('[data-month-from]');

        if (item) {
          item = item.parentElement.parentElement;

          setCarousel({ y: item.offsetTop });
        }
      });
    }, 140);
  }, []);

  const main = () => {
    switch (version) {
      case 'year':
        return (
          <Carousel
            tonal={tonal}

            color={color}

            id={value[0].milliseconds + (value[1]?.milliseconds || 0) + year}

            value={carousel}

            arrows={false}

            progress={false}

            orientation='vertical'

            moveBeyondEdge={false}

            itemSize='auto'

            gap={0}

            free

            onInit={onCarouselInit}

            items={Array.from({ length: 12 }).map((item: any, index: number) => {
              const calendarAmauiDate = set(index, 'month', calendar);

              return (
                <Line
                  key={index}

                  gap={1.5}

                  direction='column'

                  className={classNames([
                    classes.carousel_item
                  ])}
                >
                  <Type
                    version='l2'

                    className={classNames([
                      classes.carousel_item_label
                    ])}
                  >
                    {format(calendarAmauiDate, 'MMMM')} {format(calendarAmauiDate, 'YYYY')}
                  </Type>

                  <CalendarMonth
                    tonal={tonal}

                    color={color}

                    value={value}

                    calendar={calendarAmauiDate}

                    valid={valid}

                    now={now}

                    range={range}

                    offset={index}

                    min={min}

                    max={max}

                    validate={validate}

                    outside={false}

                    noTransition

                    {...CalendarMonthProps}

                    onChange={onCalendarMonthChange}

                    onChangeCalendar={onCalendarMonthChangeCalendar}

                    className={classNames([
                      staticClassName('Calendar', theme) && [
                        'amaui-Calendar-calendar-days'
                      ],

                      CalendarMonthProps?.className,
                      classes.calendar
                    ])}
                  />
                </Line>
              );
            })}

            ItemWrapperProps={{
              style: {
                width: '100%'
              }
            }}

            className={classNames([
              staticClassName('Calendar', theme) && [
                'amaui-Calendar-carousel'
              ],

              classes.carousel
            ])}
          />
        );

      default:
        return (
          <Line
            gap={0}

            direction='column'

            align='center'

            style={{
              width: '100%'
            }}
          >
            {/* Calendar/s */}
            <Line
              direction='row'

              align='center'

              className={classNames([
                staticClassName('Calendar', theme) && [
                  'amaui-Calendar-calendars'
                ],

                classes.calendars
              ])}
            >
              {Array.from({ length: calendars }).map((item: any, index: number) => {
                const calendarAmauiDate = add(index, 'month', calendar);

                return (
                  <Line
                    key={index}

                    gap={1}

                    direction='column'

                    style={{
                      width: '100%'
                    }}
                  >
                    {calendars > 1 && (
                      <Type
                        version='l2'

                        style={{
                          paddingInlineStart: '16px'
                        }}
                      >
                        {format(calendarAmauiDate, 'MMMM')}
                      </Type>
                    )}

                    <CalendarMonth
                      tonal={tonal}

                      color={color}

                      value={value}

                      calendar={calendarAmauiDate}

                      valid={valid}

                      now={now}

                      range={range}

                      offset={index}

                      min={min}

                      max={max}

                      validate={validate}

                      {...CalendarMonthProps}

                      onChange={onCalendarMonthChange}

                      onChangeCalendar={onCalendarMonthChangeCalendar}

                      className={classNames([
                        staticClassName('Calendar', theme) && [
                          'amaui-Calendar-calendar-days'
                        ],

                        CalendarMonthProps?.className,
                        classes.calendar
                      ])}
                    />
                  </Line>
                );
              })}
            </Line>

            {belowCalendars}
          </Line>
        );
    }
  };

  const month = format(calendar, 'MMM');
  const year = format(calendar, 'YYYY');

  const optionButtonProps = {
    color: 'inherit',
    version: 'text',
    ...OptionButtonProps
  };

  console.log('Calendar', value, calendar, open);
  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      className={classNames([
        staticClassName('Calendar', theme) && [
          'amaui-Calendar-root'
        ],

        className,
        classes.root,
        range && classes.range
      ])}

      {...other}
    >
      {/* Header */}
      <Line
        gap={0.5}

        direction='row'

        align='center'

        justify='space-between'

        className={classNames([
          staticClassName('Calendar', theme) && [
            'amaui-Calendar-header'
          ],

          classes.header
        ])}
      >
        {menu === 'month-year' ? <>
          {/* Month */}
          <Line
            gap={0}

            direction='row'

            align='center'
          >
            <Fade
              in={!open}
            >
              <IconButton
                onClick={() => move(false)}

                aria-label='Previous month'

                disabled={open || (+year <= 1970 && month === 'Jan')}

                {...optionButtonProps}
              >
                <IconPrevious />
              </IconButton>
            </Fade>

            <Button
              version='text'

              onClick={() => onOpen()}

              fontSize={24}

              end={(
                <Fade
                  in={open !== 'year'}
                >
                  <IconDropDown
                    className={classNames([
                      staticClassName('Calendar', theme) && [
                        'amaui-Calendar-arrow'
                      ],

                      classes.arrow,
                      open === 'month' && classes.arrow_open
                    ])}
                  />
                </Fade>
              )}

              aria-label={`Select month, current ${month}`}

              {...optionButtonProps}

              className={classNames([
                staticClassName('Calendar', theme) && [
                  'amaui-Calendar-option'
                ],

                optionButtonProps?.className,
                classes.option,
                open === 'year' && classes.option_secondary
              ])}
            >
              {month}
            </Button>

            <Fade
              in={!open}
            >
              <IconButton
                onClick={() => move()}

                aria-label='Next month'

                disabled={open || (+year === 2099 && month === 'Dec')}

                {...optionButtonProps}
              >
                <IconNext />
              </IconButton>
            </Fade>
          </Line>

          {/* Year */}
          <Line
            gap={0}

            direction='row'

            align='center'
          >
            <Fade
              in={!open}
            >
              <IconButton
                onClick={() => move(false, 'year')}

                aria-label='Previous year'

                disabled={open || +year <= 1970}

                {...optionButtonProps}
              >
                <IconPrevious />
              </IconButton>
            </Fade>

            <Button
              version='text'

              onClick={() => onOpen('year')}

              fontSize={24}

              end={(
                <Fade
                  in={open !== 'month'}
                >
                  <IconDropDown
                    className={classNames([
                      staticClassName('Calendar', theme) && [
                        'amaui-Calendar-arrow'
                      ],

                      classes.arrow,
                      open === 'year' && classes.arrow_open
                    ])}
                  />
                </Fade>
              )}

              aria-label={`Select year, current ${year}`}

              {...optionButtonProps}

              className={classNames([
                staticClassName('Calendar', theme) && [
                  'amaui-Calendar-option'
                ],

                optionButtonProps?.className,
                classes.option,
                open === 'month' && classes.option_secondary
              ])}
            >
              {year}
            </Button>

            <Fade
              in={!open}
            >
              <IconButton
                onClick={() => move(true, 'year')}

                aria-label='Next year'

                disabled={open || +year === 2099}

                {...optionButtonProps}
              >
                <IconNext />
              </IconButton>
            </Fade>
          </Line>
        </> : <>
          {/* Month year */}
          <Button
            tonal={tonal}

            color='inherit'

            version='text'

            onClick={() => onOpen('year')}

            fontSize={24}

            end={(
              <IconDropDown
                className={classNames([
                  staticClassName('Calendar', theme) && [
                    'amaui-Calendar-arrow'
                  ],

                  classes.arrow,
                  open === 'year' && classes.arrow_open
                ])}
              />
            )}

            {...optionButtonProps}

            className={classNames([
              staticClassName('Calendar', theme) && [
                'amaui-Calendar-option'
              ],

              optionButtonProps?.className,
              classes.option
            ])}
          >
            {format(calendar, 'MMMM')} {format(calendar, 'YYYY')}
          </Button>

          {/* Arrows */}
          <Line
            gap={0}

            direction='row'

            align='center'
          >
            <Fade
              in={!open}
            >
              <IconButton
                tonal={tonal}

                color='inherit'

                onClick={() => move(false, 'month')}

                aria-label='Previous month'

                disabled={open || (+year === 1970 && month === 'Jan')}
              >
                <IconPrevious />
              </IconButton>
            </Fade>

            <Fade
              in={!open}
            >
              <IconButton
                tonal={tonal}

                color='inherit'

                onClick={() => move(true, 'month')}

                aria-label='Next month'

                disabled={open || (+year === 2099 && month === 'Dec')}
              >
                <IconNext />
              </IconButton>
            </Fade>
          </Line>
        </>}
      </Line>

      {/* Main */}
      {/* Calendar/s */}
      {!open && (
        <Fade
          in
        >
          {main()}
        </Fade>
      )}

      {/* Divider */}
      {open && (
        <Divider
          tonal={false}

          className={classNames([
            staticClassName('Calendar', theme) && [
              'amaui-Calendar-divider'
            ],

            classes.divider
          ])}
        />
      )}

      {/* Menu month */}
      {
        open === 'month' && (
          <Fade
            in
          >
            <List
              ref={refs.month}

              tonal={tonal}

              color={color}

              size='large'

              menu

              className={classNames([
                staticClassName('Calendar', theme) && [
                  'amaui-Calendar-list'
                ],

                classes.list
              ])}
            >
              {getMonths(value as any, calendar, props).map((item, index: number) => {
                const amauiDate = item.value;
                const selected = calendar.month === amauiDate.month;

                return (
                  <ListItem
                    key={index}

                    onClick={() => onUpdateCalendarOption(amauiDate)}

                    primary={format(amauiDate, 'MMMM')}

                    inset={!selected}

                    startAlign='center'

                    start={selected ? (
                      <IconDoneAnimated
                        in

                        add

                        simple
                      />
                    ) : undefined}

                    disabled={(
                      !valid(
                        amauiDate,

                        'month'
                      )
                    )}

                    selected={selected}

                    button

                    data-value={index}

                    className={classNames([
                      staticClassName('Calendar', theme) && [
                        'amaui-Calendar-list-item'
                      ],

                      classes.listItem
                    ])}
                  />
                );
              })}
            </List>
          </Fade>
        )
      }

      {/* Menu year */}
      {
        open === 'year' && (
          <Surface
            tonal={tonal}

            color={color}
          >
            {({ palette }) => (menu === 'month-year' ?
              <Fade
                in
              >
                <List
                  ref={refs.year}

                  tonal={tonal}

                  color={color}

                  size='large'

                  menu

                  className={classNames([
                    staticClassName('Calendar', theme) && [
                      'amaui-Calendar-list'
                    ],

                    classes.list
                  ])}
                >
                  {getYears(value as any, calendar, props).map((item, index: number) => {
                    const amauiDate = item.value;
                    const yearValue = format(amauiDate, 'YYYY');
                    const selected = calendar.year === amauiDate.year;

                    return (
                      <ListItem
                        key={index}

                        onClick={() => onUpdateCalendarOption(amauiDate)}

                        primary={yearValue}

                        inset={!selected}

                        startAlign='center'

                        start={selected ? (
                          <IconDoneAnimated
                            in

                            add

                            simple
                          />
                        ) : undefined}

                        selected={selected}

                        disabled={(
                          !valid(
                            amauiDate,

                            'year'
                          )
                        )}

                        button

                        data-value={yearValue}

                        className={classNames([
                          staticClassName('Calendar', theme) && [
                            'amaui-Calendar-list-item'
                          ],

                          classes.listItem
                        ])}
                      />
                    );
                  })}
                </List>
              </Fade> :

              <Fade
                in
              >
                <Line
                  ref={refs.year}

                  tonal={tonal}

                  color={color}

                  direction='row'

                  wrap='wrap'

                  justify='space-evenly'

                  className={classNames([
                    staticClassName('Calendar', theme) && [
                      'amaui-Calendar-list-version-year'
                    ],

                    classes.list_version_year
                  ])}
                >
                  {getYears(value as any, calendar, props).map((item, index: number) => {
                    const amauiDate = item.value;
                    const yearValue = format(amauiDate, 'YYYY');
                    const selected = calendar.year === amauiDate.year;

                    return (
                      <PaginationItem
                        key={index}

                        tonal={tonal}

                        color='inherit'

                        InteractionProps={{
                          background: false
                        }}

                        TypeProps={{
                          version: 'b2',

                          tone: !selected ? 'primary' : undefined
                        }}

                        onClick={() => onUpdateCalendarOption(amauiDate)}

                        data-value={yearValue}

                        disabled={(
                          !valid(
                            amauiDate,

                            'year'
                          )
                        )}

                        className={classNames([
                          staticClassName('Calendar', theme) && [
                            'amaui-Calendar-day-version-year'
                          ],

                          classes.day_version_year
                        ])}

                        style={{
                          ...(selected ? {
                            color: theme.methods.palette.color.value(undefined, 90, true, palette),
                            backgroundColor: theme.methods.palette.color.value(undefined, 40, true, palette)
                          } : undefined)
                        }}
                      >
                        {yearValue}
                      </PaginationItem>
                    );
                  })}
                </Line>
              </Fade>
            )}
          </Surface>
        )
      }
    </Surface >
  );
});

Calendar.displayName = 'amaui-Calendar';

export default Calendar;
