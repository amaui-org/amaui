import React from 'react';

import { is } from '@amaui/utils';
import { AmauiDate, format as formatMethod, set } from '@amaui/date';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import Modal from '../Modal';
import Tooltip from '../Tooltip';
import ClickListener from '../ClickListener';
import IconButton from '../IconButton';
import AdvancedTextField from '../AdvancedTextField';
import Surface from '../Surface';
import TimePicker from '../TimePicker';
import useMediaQuery from '../useMediaQuery';
import Carousel from '../Carousel';
import Line from '../Line';
import Slide from '../Slide';

import { staticClassName, valueBreakpoints } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

  },

  modal: {
    width: 'calc(100% - 48px)',
    maxWidth: '500px',
    margin: '0 auto',
    borderRadius: '28px',
    overflow: 'hidden'
  },

  mode: {
    marginInline: '24px',
    borderRadius: '28px'
  },

  timePicker: {
    '&.AmauiTimePicker-mode': {
      marginInline: '0px'
    }
  },

  divider: {
    '&.AmauiDivider-root': {
      margin: '0px'
    }
  }
}), { name: 'AmauiTimeRangePicker' });

const IconMaterialScheduleRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleRounded'
      short_name='Schedule'

      {...props}
    >
      <path d="M14.625 16.025Q14.9 16.3 15.3 16.3Q15.7 16.3 16 16Q16.275 15.725 16.275 15.3Q16.275 14.875 16 14.6L13 11.6V7.975Q13 7.55 12.713 7.275Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8V11.975Q11 12.175 11.075 12.362Q11.15 12.55 11.3 12.7ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12ZM12 20Q15.325 20 17.663 17.663Q20 15.325 20 12Q20 8.675 17.663 6.337Q15.325 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Z" />
    </Icon>
  );
});

const SEPARATOR_SYMBOL = `–`;

const SEPARATOR = ` ${SEPARATOR_SYMBOL} `;

const TimeRangePicker = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTimeRangePicker?.props?.default }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.sort((a, b) => theme.breakpoints.values[b] - theme.breakpoints.values[a]).forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(`(min-width: ${theme.breakpoints.values[key]}px)`);
  });

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    // mobile, desktop & auto
    version: version_ = 'auto',

    versionStatic,

    value: value_,
    valueDefault,

    onChange,

    now = true,

    label,

    min,

    max,

    validate,

    autoValidation = true,

    autoNext: autoNext_,

    autoCloseOnLast: autoCloseOnLast_,

    openMobile = 'select',

    openDesktop = 'select',

    selectModeHeadingText = 'Select time',

    inputModeHeadingText = 'Enter time',

    orientation: orientation_,

    to = 'to',

    from = 'from',

    format = '12',

    hour = true,
    minute = true,
    second = false,

    switch: switch__,

    readOnly,

    disabled,

    onClick: onClick_,

    onClose: onClose_,

    Icon = IconMaterialScheduleRounded,

    FromProps,
    ToProps,

    CarouselProps,
    TooltipProps,
    IconButtonProps,
    AdvancedTextFieldProps,
    ModalProps,

    className,

    ...other
  } = props;

  const orientation = valueBreakpoints(orientation_, 'vertical', breakpoints, theme);
  const switch_ = valueBreakpoints(switch__, true, breakpoints, theme);
  const autoNext = valueBreakpoints(autoNext_, undefined, breakpoints, theme);
  const autoCloseOnLast = valueBreakpoints(autoCloseOnLast_, undefined, breakpoints, theme);

  const refs = {
    root: React.useRef<any>(),
    iconButton: React.useRef<any>(),
    version: React.useRef<any>(),
    open: React.useRef<any>(),
    mode: React.useRef<any>(),
    value: React.useRef<any>(),
    values: React.useRef<any>(),
    timePickers: React.useRef<any>()
  };

  const mergeProps = (propsValue: any) => {
    const props_ = {
      now,

      label,

      min,

      max,

      validate,

      autoNext,

      autoCloseOnLast,

      openMobile,

      openDesktop,

      selectModeHeadingText,

      inputModeHeadingText,

      orientation,

      format,

      hour,
      minute,
      second,

      switch: switch_,
    };

    if (propsValue) {
      Object.keys(propsValue).forEach(item => {
        if (propsValue[item] !== undefined) props_[item] = propsValue[item];
      });
    }

    return props_;
  };

  const valueToValues = (valueNew: [AmauiDate, AmauiDate]) => {
    const values_: any = {};

    if (valueNew) {
      const items = valueNew.map((value__: AmauiDate, index: number) => {
        const props_ = mergeProps(index === 0 ? FromProps : ToProps);

        // input
        let format_ = '';

        if (props_?.format === '12') format_ += `hh`;
        else format_ += `HH`;

        if (props_?.minute) format_ += `:mm`;

        if (props_?.second) format_ += `:ss`;

        if (props_?.format === '12') format_ += ` a`;

        return formatMethod(value__, format_);
      });

      values_.input = items.join(SEPARATOR);
    }

    return values_;
  };

  const touch = useMediaQuery('(pointer: coarse)');

  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState((touch ? openMobile : openDesktop) || 'select');
  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || (now && [new AmauiDate(), new AmauiDate()]));
  const [values, setValues] = React.useState<any>(() => valueToValues(value));

  let version = version_;

  if (version === 'auto') {
    if (touch) version = 'mobile';
    else version = 'desktop';
  }

  refs.version.current = version;

  refs.open.current = open;

  refs.mode.current = mode;

  refs.values.current = values;

  refs.value.current = value;

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (refs.open.current) {
        switch (event.key) {
          case 'Escape':
            return onClose();

          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const valuesToValue = (values_: any, index: number) => {
    let amauiDate = refs.value.current[index];

    // hour
    // and am, pm
    let hour = values_.hour || '00';

    if (hour.startsWith('0')) hour = +hour.slice(1);

    if (format === '12') {
      if (+hour === 0 || +hour === 12) {
        if (values_.dayTime === 'am') amauiDate = set(0, 'hour', amauiDate);
        else if (values_.dayTime === 'pm') amauiDate = set(12, 'hour', amauiDate);
      }
      else amauiDate = set(+hour + (values_.dayTime === 'pm' ? 12 : 0), 'hour', amauiDate);
    }
    else amauiDate = set(+hour, 'hour', amauiDate);

    // minute
    let minute = values_.minute || '00';

    if (minute.startsWith('0')) minute = +minute.slice(1);

    amauiDate = set(+minute, 'minute', amauiDate);

    // second
    let second = values_.second || '00';

    if (second.startsWith('0')) second = +second.slice(1);

    amauiDate = set(+second, 'second', amauiDate);

    return amauiDate;
  };

  const inputToValues = (valueNew: any) => {
    const values_: any = {};

    // input
    const [valuesTime, dayTime] = valueNew.split(' ');

    const [hour, minute, second] = (valuesTime || '').split(':');

    if (hour) values_.hour = hour;

    if (minute) values_.minute = minute;

    if (second) values_.second = second;

    if (dayTime) values_.dayTime = dayTime;

    return values_;
  };

  const updateValue = (valueNew: any) => {
    setValue(valueNew);

    if (is('function', onChange)) onChange(valueNew);
  };

  const updateValueFromValues = (valueNew: any) => {
    const values_ = {
      ...valueNew
    };

    const inputs = values_?.input?.split(SEPARATOR);

    const value__ = inputs.map((item: string, index: number) => valuesToValue(inputToValues(item), index));

    updateValue(value__);
  };

  const updateValues = (property: string, value_: any) => {
    const values_ = {
      ...refs.values.current,

      [property]: value_
    };

    // Value
    updateValueFromValues(values_);

    // Values
    setValues(values_);
  };

  const updateFromValuePicker = (valueNew_: [number | AmauiDate, number | AmauiDate]) => {
    const valueNew = valueNew_.map(item => new AmauiDate(item)) as [AmauiDate, AmauiDate];

    // Update values
    setValues(valueToValues(valueNew));

    // Update value
    updateValue(valueNew);
  };

  const updateFromValue = (valueNew_: [number | AmauiDate, number | AmauiDate]) => {
    const valueNew = valueNew_.map(item => new AmauiDate(item)) as [AmauiDate, AmauiDate];

    // Update values
    setValues(valueToValues(valueNew));

    // Update value
    setValue(valueNew);
  };

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== refs.value.current) updateFromValue(value_);
  }, [value_]);

  const onMode = React.useCallback(() => {
    setMode((refs.version.current === 'mobile' ? openMobile : openDesktop) || 'select');

    setOpen(!refs.open.current);
  }, [openMobile, openDesktop]);

  const onModal = React.useCallback((event: React.MouseEvent<any>) => {
    setMode((refs.version.current === 'mobile' ? openMobile : openDesktop) || 'select');

    setOpen(true);

    if (is('function', onClick_)) onClick_(event);
  }, [openMobile, openDesktop, onClick_]);

  const onClose = React.useCallback(() => {
    setOpen(false);

    if (is('function', onClose_)) onClose_();
  }, [onClose_]);

  const mask: any = [];

  let placeholder = '';

  [FromProps, ToProps].forEach((props__: any, index: number) => {
    const props_ = mergeProps(props__);

    if (props_?.hour) {
      if (props_?.format === '12') {
        mask.push(
          { pattern: '[0-1]' },

          (item: string, result: string, valueInput: string) => /^([0][0-9]|1[0-2]).*/.test(valueInput)
        );
      }

      if (props_?.format === '24') {
        mask.push(
          { pattern: '[0-2]' },

          (item: string, result: string, valueInput: string) => /^([01][0-9]|2[0-3]).*/.test(valueInput),
        );
      }

      placeholder += 'hh';

      if (props_?.minute || props_?.second) {
        mask.push(':');

        placeholder += ':';
      }
    }

    if (props_?.minute) {
      mask.push(
        { pattern: '[0-5]' },

        { pattern: '[0-9]' }
      );

      placeholder += 'mm';

      if (props_?.second) {
        mask.push(':');

        placeholder += ':';
      }
    }

    if (props_?.second) {
      mask.push(
        { pattern: '[0-5]' },

        { pattern: '[0-9]' }
      );

      placeholder += 'ss';
    }

    if (props_?.format === '12') {
      mask.push(
        ' ',

        { pattern: '[ap]' },

        'm'
      );

      placeholder += ' (a|p)m';
    }

    if (index === 0) {
      mask.push(
        ' ',
        SEPARATOR_SYMBOL,
        ' '
      );

      placeholder += SEPARATOR;
    }
  });

  const TimePickers = [
    // From
    <TimePicker
      {...mergeProps(FromProps)}

      version='static'

      max={autoValidation ? new AmauiDate(refs.value.current[1]) : undefined}

      selectModeHeadingText={`Select ${from} time`}

      inputModeHeadingText={`Enter ${from} time`}

      value={refs.value.current[0]}

      onCancel={onClose}

      onChange={(valueNew: any) => updateFromValuePicker([valueNew, refs.value.current[1]])}

      ModeSelectProps={{
        className: classNames([
          staticClassName('TimeRangePicker', theme) && [
            'AmauiTimeRangePicker-time-picker'
          ],

          classes.timePicker
        ])
      }}
    />,

    // To
    <TimePicker
      {...mergeProps(ToProps)}

      version='static'

      min={autoValidation ? new AmauiDate(refs.value.current[0]) : undefined}

      selectModeHeadingText={`Select ${to} time`}

      inputModeHeadingText={`Enter ${to} time`}

      value={refs.value.current[1]}

      onCancel={onClose}

      onChange={(valueNew: any) => updateFromValuePicker([refs.value.current[0], valueNew])}

      ModeSelectProps={{
        className: classNames([
          staticClassName('TimeRangePicker', theme) && [
            'AmauiTimeRangePicker-time-picker'
          ],

          classes.timePicker
        ])
      }}
    />
  ];

  refs.timePickers.current = TimePickers;

  const ModeDesktop = React.useCallback(React.forwardRef((props__: any, ref_: any) => {

    return (
      <Line
        ref={ref_}

        tonal={tonal}

        color={color}

        gap={0}

        direction='row'

        align='flex-start'

        justify='center'

        Component={Surface}

        className={classNames([
          staticClassName('TimeRangePicker', theme) && [
            'AmauiTimeRangePicker-mode'
          ],

          classes.mode
        ])}
      >
        {refs.timePickers.current.map((item: any, index: number) => (
          React.cloneElement(item, {
            key: index
          })
        ))}
      </Line>
    );
  }), [tonal, color]);

  const ModeMobile = React.useCallback(React.forwardRef((props__: any, ref_: any) => {

    return (
      <Line
        tonal={tonal}

        color={color}

        gap={0}

        direction='row'

        align='flex-start'

        justify='center'

        Component={Surface}

        style={{
          width: '100%'
        }}
      >
        <Carousel
          tonal={tonal}

          color={color}

          move={false}

          arrowsVisibility='visible'

          progress={false}

          round={false}

          moveBeyondEdge={false}

          autoHeight

          items={
            refs.timePickers.current.map((item: any, index: number) => (
              React.cloneElement(item, {
                key: index
              })
            ))
          }

          {...CarouselProps}
        />
      </Line>
    );
  }), [tonal, color]);

  const moreProps: any = {};

  if (version === 'desktop') {
    moreProps.end = (
      <IconButton
        ref={refs.iconButton}

        tonal={tonal}

        color={color}

        version='text'

        onClick={onMode}

        disabled={disabled || readOnly}

        {...IconButtonProps}
      >
        <Icon />
      </IconButton>
    );
  }

  if (version === 'mobile') {
    if (!readOnly) moreProps.onClick = onModal;
  }

  if (version === 'static') {
    if (versionStatic !== undefined) return 'desktop' ? <ModeDesktop /> : <ModeMobile />;

    if (!touch) return <ModeDesktop />;

    return <ModeMobile />;
  }

  return (
    <Line
      gap={0}

      direction='column'

      className={classNames([
        staticClassName('TimeRangePicker', theme) && [
          'AmauiTimeRangePicker-root',
          `AmauiTimeRangePicker-version-${version}`,
          `AmauiTimeRangePicker-orientation-${orientation}`,
          `AmauiTimeRangePicker-open-mobile-${openMobile}`,
          `AmauiTimeRangePicker-open-desktop-${openDesktop}`,
          `AmauiTimeRangePicker-format-${format}`,
          now && `AmauiTimeRangePicker-now`,
          label && `AmauiTimeRangePicker-label`,
          min && `AmauiTimeRangePicker-min`,
          max && `AmauiTimeRangePicker-max`,
          hour && `AmauiTimeRangePicker-hour`,
          minute && `AmauiTimeRangePicker-minute`,
          second && `AmauiTimeRangePicker-second`,
          autoNext && `AmauiTimeRangePicker-auto-next`,
          autoCloseOnLast && `AmauiTimeRangePicker-auto-close-on-last`,
          autoValidation && `AmauiTimeRangePicker-auto-validation`,
          switch_ && `AmauiTimeRangePicker-switch`,
          readOnly && `AmauiTimeRangePicker-read-only`,
          disabled && `AmauiTimeRangePicker-disabled`
        ],

        className,
        classes.root
      ])}
    >
      <AdvancedTextField
        rootRef={item => {
          if (ref) {
            if (is('function', ref)) ref(item);
            else ref.current = item;
          }

          refs.root.current = item;
        }}

        tonal={tonal}

        color={color}

        version='outlined'

        label={label}

        mask={mask}

        placeholder={placeholder}

        value={values.input}

        onChange={(valueNew: any) => updateValues('input', valueNew)}

        readOnly={readOnly}

        disabled={disabled}

        {...moreProps}

        {...other}

        {...AdvancedTextFieldProps}
      />

      {/* Mobile */}
      {version === 'mobile' && (
        <Modal
          open={open}

          modalWrapperSurface={false}

          onClose={onClose}

          TransitionComponent={Slide}

          NoSurfaceProps={{
            className: classNames([
              staticClassName('TimeRangePicker', theme) && [
                'AmauiTimeRangePicker-modal'
              ],

              classes.modal
            ])
          }}

          {...ModalProps}
        >
          <ModeMobile />
        </Modal>
      )}

      {/* Desktop */}
      {version === 'desktop' && (
        <Tooltip
          open={open}

          anchorElement={refs.root.current}

          alignment='center'

          position='bottom'

          hover={false}

          focus={false}

          longPress={false}

          maxWidth='unset'

          noMargin

          label={(
            <ClickListener
              onClickOutside={onClose}

              includeParentQueries={['.AmauiTimePicker-mode', '.AmauiTimeRangePicker-mode']}

              include={[refs.iconButton, refs.iconButton.current]}
            >
              <ModeDesktop />
            </ClickListener>
          )}

          {...TooltipProps}
        />
      )}
    </Line>
  );
});

TimeRangePicker.displayName = 'AmauiTimeRangePicker';

export default TimeRangePicker;
