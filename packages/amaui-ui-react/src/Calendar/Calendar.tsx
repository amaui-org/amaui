import React from 'react';

import { clamp, is, isEnvironment, Try } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';
import { AmauiDate, add, remove, format, TTimeUnits, set } from '@amaui/date';

import SurfaceElement from '../Surface';
import LineElement from '../Line';
import FadeElement from '../Fade';
import IconButtonElement from '../IconButton';
import ButtonElement from '../Button';
import IconElement from '../Icon';
import CalendarMonthElement from '../CalendarMonth';
import ListElement from '../List';
import ListItemElement from '../ListItem';
import DividerElement from '../Divider';
import TypeElement from '../Type';
import CarouselElement from '../Carousel';
import PaginationItemElement from '../PaginationItem';
import { IconDoneAnimated } from '../Buttons/Buttons';
import { ICalenarDays, TCalendarMonthCalendar, TCalendarMonthValue } from '../CalendarMonth/CalendarMonth';
import { TTransitionStatus } from '../Transition';
import { ISurface } from '../Surface/Surface';
import { iconFontSize, staticClassName } from '../utils';
import { IColor, IElementReference, IPropsAny, ISize, ITonal } from '../types';

const IconMaterialNavigateBeforeRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='NavigateBeforeRounded'
      short_name='NavigateBefore'

      {...props}
    >
      <path d="M13.3 17.3 8.7 12.7Q8.55 12.55 8.488 12.375Q8.425 12.2 8.425 12Q8.425 11.8 8.488 11.625Q8.55 11.45 8.7 11.3L13.3 6.7Q13.575 6.425 14 6.425Q14.425 6.425 14.7 6.7Q14.975 6.975 14.975 7.4Q14.975 7.825 14.7 8.1L10.8 12L14.7 15.9Q14.975 16.175 14.975 16.6Q14.975 17.025 14.7 17.3Q14.425 17.575 14 17.575Q13.575 17.575 13.3 17.3Z" />
    </IconElement>
  );
});

const IconMaterialNavigateNextRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='NavigateNextRounded'
      short_name='NavigateNext'

      {...props}
    >
      <path d="M8.7 17.3Q8.425 17.025 8.425 16.6Q8.425 16.175 8.7 15.9L12.6 12L8.7 8.1Q8.425 7.825 8.425 7.4Q8.425 6.975 8.7 6.7Q8.975 6.425 9.4 6.425Q9.825 6.425 10.1 6.7L14.7 11.3Q14.85 11.45 14.913 11.625Q14.975 11.8 14.975 12Q14.975 12.2 14.913 12.375Q14.85 12.55 14.7 12.7L10.1 17.3Q9.825 17.575 9.4 17.575Q8.975 17.575 8.7 17.3Z" />
    </IconElement>
  );
});

const IconMaterialArrowDropDownRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='ArrowDropDownRounded'
      short_name='ArrowDropDown'

      {...props}
    >
      <path d="M11.3 14.3 8.7 11.7Q8.225 11.225 8.488 10.613Q8.75 10 9.425 10H14.575Q15.25 10 15.512 10.613Q15.775 11.225 15.3 11.7L12.7 14.3Q12.55 14.45 12.375 14.525Q12.2 14.6 12 14.6Q11.8 14.6 11.625 14.525Q11.45 14.45 11.3 14.3Z" />
    </IconElement>
  );
});

const useStyle = style(theme => ({
  root: {
    borderRadius: theme.methods.shape.radius.value(4, 'px'),
    overflow: 'hidden'
  },

  size_small: {
    width: '275px',

    '& .amaui-ListItem-root': {
      minHeight: '40px'
    },

    '& .amaui-ListItem-inset': {
      paddingInlineStart: '44px'
    }
  },

  size_regular: {
    width: '320px',

    '& .amaui-ListItem-root': {
      minHeight: '50px'
    },

    '& .amaui-ListItem-inset': {
      paddingInlineStart: '58px'
    }
  },

  size_large: {
    width: '375px',

    '& .amaui-ListItem-root': {
      minHeight: '60px'
    },

    '& .amaui-ListItem-inset': {
      paddingInlineStart: '78px'
    }
  },

  range: {
    width: 'unset'
  },

  header: {
    width: '100%',
    padding: `${theme.methods.space.value(1.5, 'px')} ${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(0.5, 'px')}`
  },

  calendars: {
    width: '100%',
    padding: `0 ${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(1, 'px')}`
  },

  calendar: {
    width: '100%'
  },

  option: {
    transition: theme.methods.transitions.make('opacity'),

    '&.amaui-Button-root': {
      paddingInline: `${theme.methods.space.value(1, 'px')} 0`
    },

    '& .amaui-Button-end': {
      paddingInline: `${theme.methods.space.value(1, 'px')} 0`
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
      maxWidth: 'unset !important',
      boxShadow: 'none'
    }
  },

  listItem: {

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
      padding: `0 ${theme.methods.space.value(1, 'px')}`
    }
  },

  carousel_item: {
    width: '100%',
    marginTop: '16px',
    userSelect: 'none'
  },

  carousel_item_label: {
    paddingInlineStart: theme.methods.space.value(2, 'px')
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

export type TGetAmauiDates = (value: TCalendarMonthValue, calendar: TCalendarMonthCalendar, props: IPropsAny) => Array<{ value: AmauiDate }>;

export type TCalendarUnit = 'day' | 'month' | 'year';

export interface ICalendar extends Omit<ISurface, 'version'> {
  tonal?: ITonal;
  color?: IColor;

  version?: 'regular' | 'year';
  size?: ISize;

  value?: TCalendarMonthValue;
  valueDefault?: TCalendarMonthValue;
  onChange?: (value: TCalendarMonthValue) => any;

  calendar?: TCalendarMonthCalendar;
  calendarDefault?: TCalendarMonthCalendar;
  onChangeCalendar?: (value: TCalendarMonthCalendar) => any;

  start?: any;
  end?: any;

  menu?: 'month-year' | 'month';
  now?: boolean;
  range?: boolean;
  calendars?: number;
  min?: AmauiDate;
  max?: AmauiDate;
  validate?: (value: AmauiDate) => boolean;
  menu_month_previous_unit?: TCalendarUnit;
  menu_month_next_unit?: TCalendarUnit;

  valid?: (value: AmauiDate, version: TCalendarUnit) => boolean;
  geMonths?: TGetAmauiDates;
  geYears?: TGetAmauiDates;

  belowCalendars?: any;

  IconPrevious?: IElementReference;
  IconNext?: IElementReference;
  IconDropDown?: IElementReference;

  CalendarMonthProps?: any;
  CalendarDayProps?: ICalenarDays;
  OptionButtonProps?: any;
}

const Calendar: React.FC<ICalendar> = React.forwardRef((props__, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiCalendar?.props?.default, ...props__ }), [props__]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const Fade = React.useMemo(() => theme?.elements?.Fade || FadeElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const CalendarMonth = React.useMemo(() => theme?.elements?.CalendarMonth || CalendarMonthElement, [theme]);

  const List = React.useMemo(() => theme?.elements?.List || ListElement, [theme]);

  const ListItem = React.useMemo(() => theme?.elements?.ListItem || ListItemElement, [theme]);

  const Divider = React.useMemo(() => theme?.elements?.Divider || DividerElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Carousel = React.useMemo(() => theme?.elements?.Carousel || CarouselElement, [theme]);

  const PaginationItem = React.useMemo(() => theme?.elements?.PaginationItem || PaginationItemElement, [theme]);

  const {
    tonal = true,
    color = 'primary',

    version = 'regular',

    size = 'regular',

    value: value_,
    valueDefault,
    onChange,

    calendar: calendar_,
    calendarDefault,
    onChangeCalendar,

    start,
    end,

    menu = 'month-year',
    range,
    now,
    calendars = props.range ? 2 : 1,
    min,
    max,
    validate,
    menu_month_previous_unit,
    menu_month_next_unit,

    valid: valid_,
    getMonths: getMonths_,
    getYears: getYears_,

    belowCalendars,

    disabled,

    IconPrevious = IconMaterialNavigateBeforeRounded,
    IconNext = IconMaterialNavigateNextRounded,
    IconDropDown = IconMaterialArrowDropDownRounded,

    CalendarMonthProps,
    OptionButtonProps,
    PaginationItemsProps,

    renderDay,
    renderDayName,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>(),
    month: React.useRef<HTMLElement>(),
    year: React.useRef<HTMLElement>(),
    inProgressTransition: React.useRef<boolean>()
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
    if (value_ !== undefined && value_ !== value) setValue(((is('array', value_) ? value_ : [value_] as any).filter(Boolean)));
  }, [value_]);

  // Calendar
  React.useEffect(() => {
    if (calendar_ !== undefined && calendar_ !== calendar) setCalendar(calendar_);
  }, [calendar_]);

  const onUpdate = React.useCallback((valueNew: AmauiDate) => {
    // Inner update
    if (!props.hasOwnProperty('value')) setValue(valueNew as any);

    if (is('function', onChange)) onChange(!range ? valueNew[0] : valueNew);
  }, [range, onChange]);

  const onUpdateCalendar = React.useCallback((valueNew: AmauiDate) => {
    // Inner update
    if (!props.hasOwnProperty('calendar')) setCalendar(valueNew);

    if (is('function', onChangeCalendar)) onChangeCalendar(valueNew);
  }, [onChangeCalendar]);

  const onUpdateCalendarOption = React.useCallback((valueNew: AmauiDate) => {
    setOpen(null);

    onUpdateCalendar(valueNew);
  }, []);

  const onCalendarMonthChange = React.useCallback((valueNew_: TCalendarMonthValue) => {
    const valueNew = is('array', valueNew_) ? valueNew_ : [valueNew_];

    if (valueNew !== value) onUpdate(valueNew as any);
  }, [value]);

  const onCalendarMonthChangeCalendar = React.useCallback((valueNew: TCalendarMonthCalendar) => {
    onUpdateCalendar(valueNew as any);
  }, [calendar]);

  const valid = React.useCallback((...args: [AmauiDate, any]) => {
    if (is('function', valid_)) return valid_(...args);

    return true;
  }, [valid_]);

  const move = React.useCallback((next = true, unit: TTimeUnits = 'month') => {
    if (refs.inProgressTransition.current) return;

    onUpdateCalendar((next ? add : remove)(1, unit, calendar));
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
            top: clamp((element.offsetTop - element.parentElement.offsetTop) + (menu === 'month' ? -104 : 51), 0),
            behavior: 'smooth'
          });
        });
      }
    });
  }, [open, menu, calendar]);

  const getMonths: TGetAmauiDates = is('function', getMonths_) ? getMonths_ : React.useCallback(() => {
    const valueCalendar = set(14, 'day', calendar);
    const result = Array.from({ length: 12 }).map((item: any, index: number) => ({ value: set(index, 'month', valueCalendar) }));

    return result;
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
        const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

        let item: any = rootDocument.body.querySelector('[data-month-from]');

        if (item) {
          item = item.parentElement.parentElement;

          setCarousel({ y: item.offsetTop });
        }
      });
    }, 140);
  }, []);

  // Prevent multiple moves of the calendar
  // before the previous transition is done
  const onTransition = React.useCallback((element: any, status: TTransitionStatus) => {
    refs.inProgressTransition.current = !['entered', 'exited', 'removed'].includes(status);
  }, []);

  const calendarMonthProps: any = {
    renderDay,
    renderDayName,
    disabled,

    ...CalendarMonthProps
  };

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
                    version={size === 'large' ? 'l1' : size === 'regular' ? 'l2' : 'l3'}

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

                    size={size}

                    range={range}

                    offset={index}

                    min={min}

                    max={max}

                    validate={validate}

                    outside={false}

                    noTransition

                    {...calendarMonthProps}

                    onChange={onCalendarMonthChange}

                    onChangeCalendar={onCalendarMonthChangeCalendar}

                    TransitionProps={{
                      onTransition
                    }}

                    className={classNames([
                      staticClassName('Calendar', theme) && [
                        'amaui-Calendar-calendar-days'
                      ],

                      calendarMonthProps?.className,
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
                        version={size === 'large' ? 'l1' : size === 'regular' ? 'l2' : 'l3'}

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

                      size={size}

                      range={range}

                      offset={index}

                      min={min}

                      max={max}

                      validate={validate}

                      {...calendarMonthProps}

                      onChange={onCalendarMonthChange}

                      onChangeCalendar={onCalendarMonthChangeCalendar}

                      TransitionProps={{
                        onTransition
                      }}

                      className={classNames([
                        staticClassName('Calendar', theme) && [
                          'amaui-Calendar-calendar-days'
                        ],

                        calendarMonthProps?.className,
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

  return (
    <Surface
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      tonal={tonal}

      color={color}

      className={classNames([
        staticClassName('Calendar', theme) && [
          'amaui-Calendar-root',
          `amaui-Calendar-version-${version}`,
          `amaui-Calendar-size-${size}`
        ],

        className,
        classes.root,
        classes[`size_${size}`],
        range && classes.range
      ])}

      {...other}
    >
      {/* Start */}
      {start}

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

                size={size}

                aria-label='Previous month'

                disabled={open || (+year <= 1970 && month === 'Jan')}

                {...optionButtonProps}
              >
                <IconPrevious
                  size={size}
                />
              </IconButton>
            </Fade>

            <Button
              version='text'

              onClick={() => onOpen()}

              fontSize={iconFontSize}

              size={size}

              end={(
                <Fade
                  in={open !== 'year'}
                >
                  <IconDropDown
                    size={size}

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

                size={size}

                aria-label='Next month'

                disabled={open || (+year === 2099 && month === 'Dec')}

                {...optionButtonProps}
              >
                <IconNext
                  size={size}
                />
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

                size={size}

                aria-label='Previous year'

                disabled={open || +year <= 1970}

                {...optionButtonProps}
              >
                <IconPrevious
                  size={size}
                />
              </IconButton>
            </Fade>

            <Button
              version='text'

              onClick={() => onOpen('year')}

              fontSize={iconFontSize}

              size={size}

              end={(
                <Fade
                  in={open !== 'month'}
                >
                  <IconDropDown
                    size={size}

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

                size={size}

                aria-label='Next year'

                disabled={open || +year === 2099}

                {...optionButtonProps}
              >
                <IconNext
                  size={size}
                />
              </IconButton>
            </Fade>
          </Line>
        </> : <>
          {/* Month */}
          <Button
            tonal={tonal}

            color='inherit'

            size={size}

            version='text'

            onClick={() => onOpen('year')}

            fontSize={iconFontSize}

            end={(
              <IconDropDown
                size={size}

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

                size={size}

                onClick={() => move(false, menu_month_previous_unit || 'month')}

                aria-label='Previous month'

                disabled={!!(open || (+year === 1970 && month === 'Jan'))}
              >
                <IconPrevious
                  size={size}
                />
              </IconButton>
            </Fade>

            <Fade
              in={!open}
            >
              <IconButton
                tonal={tonal}

                color='inherit'

                size={size}

                onClick={() => move(true, menu_month_next_unit || 'month')}

                aria-label='Next month'

                disabled={!!(open || (+year === 2099 && month === 'Dec'))}
              >
                <IconNext
                  size={size}
                />
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

                    size={size}

                    start={selected ? (
                      <IconDoneAnimated
                        in

                        add

                        simple

                        size={size}
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

                    PrimaryProps={{
                      version: size === 'regular' ? 'b2' : size === 'small' ? 'b3' : 'b1'
                    }}

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

                  size={size}

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

                        size={size}

                        start={selected ? (
                          <IconDoneAnimated
                            in

                            add

                            simple

                            size={size}
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

                        PrimaryProps={{
                          version: size === 'regular' ? 'b2' : size === 'small' ? 'b3' : 'b1'
                        }}

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

                        size={size}

                        InteractionProps={{
                          background: false
                        }}

                        TypeProps={{
                          version: size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3',

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

                        {...PaginationItemsProps}

                        className={classNames([
                          staticClassName('Calendar', theme) && [
                            'amaui-Calendar-day-version-year'
                          ],

                          PaginationItemsProps?.className,
                          classes.day_version_year
                        ])}

                        style={{
                          ...(selected ? {
                            color: theme.methods.palette.color.value(undefined, 90, true, palette),
                            backgroundColor: theme.methods.palette.color.value(undefined, 40, true, palette)
                          } : undefined),

                          ...PaginationItemsProps?.style
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

      {/* End */}
      {end}
    </Surface>
  );
});

Calendar.displayName = 'amaui-Calendar';

export default Calendar;
