import React from 'react';

import { is } from '@amaui/utils'
import { classNames, style, useAmauiTheme } from '@amaui/style-react';
import { AmauiDate, format as formatMethod, set, is as isMethod } from '@amaui/date';

import useMediaQuery from '../useMediaQuery';
import AdvancedTextField from '../AdvancedTextField';
import Modal from '../Modal';
import Tooltip from '../Tooltip';
import ClickListener from '../ClickListener';
import Slide from '../Slide';
import Surface from '../Surface';
import IconButton from '../IconButton';
import Icon from '../Icon';
import Tabs from '../Tabs';
import Tab from '../Tab';
import Line from '../Line';
import DateRangePicker from '../DateRangePicker';
import TimeRangePicker from '../TimeRangePicker';

import { staticClassName, valueBreakpoints } from '../utils';

const useStyle = style(theme => ({
  root: {

  },

  mode: {
    paddingTop: '12px',
    marginInline: '24px',
    borderRadius: '28px',
    overflow: 'hidden',

    '& .AmauiTimePicker-mode, & .AmauiDateRangePicker-mode': {
      marginInline: '0px'
    }
  },

  modal_fullScreen: {
    width: '100%',
    height: '100vh',
    maxWidth: 'unset',
    borderRadius: '0px',
    overflow: 'hidden',

    '& .AmauiDateTimeRangePicker-mode': {
      marginInline: '0px',
      borderRadius: '0px',
      height: '100vh'
    },

    '& .AmauiDatePicker-mode-modal-fullScreen-main': {
      maxHeight: 'calc(100vh - 283px) !important'
    }
  },

  mode_modal: {},

  mode_modal_fullScreen: {
    width: '100%',
    height: '100%'
  },
}), { name: 'AmauiDateTimeRangePicker' });

const IconMaterialDateRangeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DateRangeRoundedFilled'
      short_name='DateRange'

      {...props}
    >
      <path d="M8 14Q7.575 14 7.287 13.712Q7 13.425 7 13Q7 12.575 7.287 12.287Q7.575 12 8 12Q8.425 12 8.713 12.287Q9 12.575 9 13Q9 13.425 8.713 13.712Q8.425 14 8 14ZM12 14Q11.575 14 11.288 13.712Q11 13.425 11 13Q11 12.575 11.288 12.287Q11.575 12 12 12Q12.425 12 12.713 12.287Q13 12.575 13 13Q13 13.425 12.713 13.712Q12.425 14 12 14ZM16 14Q15.575 14 15.288 13.712Q15 13.425 15 13Q15 12.575 15.288 12.287Q15.575 12 16 12Q16.425 12 16.712 12.287Q17 12.575 17 13Q17 13.425 16.712 13.712Q16.425 14 16 14ZM5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V2.975Q6 2.55 6.287 2.275Q6.575 2 7 2Q7.425 2 7.713 2.287Q8 2.575 8 3V4H16V2.975Q16 2.55 16.288 2.275Q16.575 2 17 2Q17.425 2 17.712 2.287Q18 2.575 18 3V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM5 20H19Q19 20 19 20Q19 20 19 20V10H5V20Q5 20 5 20Q5 20 5 20Z" />
    </Icon>
  );
});

const SEPARATOR_SYMBOL = `–`;

const SEPARATOR = ` ${SEPARATOR_SYMBOL} `;

const DateTimeRangePicker = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiDateTimeRangePicker?.props?.default }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.sort((a, b) => theme.breakpoints.values[b] - theme.breakpoints.values[a]).forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(`(min - width: ${theme.breakpoints.values[key]}px)`);
  });

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    // mobile, desktop, static & auto
    version: version_ = 'auto',

    value: value_,
    valueDefault,

    onChange,

    label,

    now = true,

    validate,

    min,

    max,

    format = '12',

    openMobile = 'date',

    openDesktop = 'date',

    range,

    fullScreen = true,

    useHelperText: useHelperText_,

    onClick: onClick_,

    readOnly,

    disabled,

    year = true,
    month = true,
    day = true,

    hour = true,
    minute = true,
    second = false,

    Icon = IconMaterialDateRangeRoundedFilled,

    ModalProps,
    TooltipProps,
    AdvancedTextFieldProps,
    DateRangePickerProps,
    TimeRangePickerProps,
    IconButtonProps,
    ModeDesktopProps,
    ModeMobileProps,
    TabsProps,
    TabProps,

    className,

    ...other
  } = props;

  const useHelperText = valueBreakpoints(useHelperText_, undefined, breakpoints, theme);

  const refs = {
    root: React.useRef<any>(),
    iconButton: React.useRef<any>(),
    value: React.useRef<any>(),
    open: React.useRef<any>(),
    openVersion: React.useRef<any>(),
    validate: React.useRef<any>(),
    min: React.useRef<any>(),
    max: React.useRef<any>(),
    version: React.useRef<any>()
  };

  const valueToInput = (value__ = refs.value.current) => {
    const valuesInput = value__.map((item: any) => {
      let amauiDate = new AmauiDate(item);

      let format_ = '';

      if (day) {
        format_ += `DD`;

        if (month || year) format_ += `/`;
      }

      if (month) {
        format_ += `MM`;

        if (year) format_ += `/`;
      }

      if (year) format_ += `YYYY`;

      format_ += ' ';

      if (hour) {
        if (format === '12') format_ += `hh`;
        else format_ += `HH`;

        if (minute || second) format_ += `:`;
      }

      if (minute) {
        format_ += `mm`;

        if (second) format_ += `:`;
      }

      if (second) format_ += `ss`

      if (format === '12') format_ += ` a`;

      return formatMethod(amauiDate, format_);
    });

    return valuesInput.join(SEPARATOR);
  };

  const touch = useMediaQuery('(pointer: coarse)');

  const [open, setOpen] = React.useState(false);
  const [openVersion, setOpenVersion] = React.useState((touch ? openMobile : openDesktop) || 'date');
  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || (now && [new AmauiDate(), new AmauiDate()]));
  const [values, setValues] = React.useState<any>({
    input: valueToInput(value)
  });
  const [error, setError] = React.useState(false);

  refs.value.current = value;

  refs.open.current = open;

  refs.openVersion.current = openVersion;

  refs.validate.current = validate;

  refs.min.current = min;

  refs.max.current = max;

  let version = version_;

  if (version === 'auto') {
    if (touch) version = 'mobile';
    else version = 'desktop';
  }

  refs.version.current = version;

  const updateValue = (valueNew: any) => {
    setValue(valueNew);

    setError(!valid(valueNew));

    if (is('function', onChange)) onChange(valueNew);
  };

  const updateValueFromPicker = (valueNew: [AmauiDate, AmauiDate]) => {
    setValues(values_ => ({
      ...values_,

      input: valueToInput(valueNew)
    }));

    updateValue(valueNew);
  };

  const updateInput = (valueNew: any) => {
    const [from, to] = valueNew.split(SEPARATOR);

    const amauiDates = [from, to].map(item => {
      let [date, ...time] = valueNew.split(' ');

      time = time.join(' ').replace(/ +/, ' ');

      let [day_, month_, year_] = date.split('/');

      if (day_ && day_.startsWith('0')) day_ = day_.slice(1);

      if (month_ && month_.startsWith('0')) month_ = month_.slice(1);

      const [timeValue, dayTime] = time.split(' ');

      let [hour_, minute_, second_] = timeValue.split(':');

      if (hour_ && hour_.startsWith('0')) hour_ = hour_.slice(1);

      if (hour_) {
        hour_ = +hour_;

        if (dayTime === 'pm' && hour_ < 12) hour_ += 12;
      }

      if (minute_ && minute_.startsWith('0')) minute_ = minute_.slice(1);

      if (second_ && second_.startsWith('0')) second_ = second_.slice(1);

      let amauiDate = new AmauiDate();

      if (day_) amauiDate = set(+day_, 'day', amauiDate);

      if (month_) amauiDate = set(+month_ - 1, 'month', amauiDate);

      if (year_) amauiDate = set(+year_, 'year', amauiDate);

      if (hour_ !== undefined) amauiDate = set(hour_, 'hour', amauiDate);

      if (minute_) amauiDate = set(+minute_, 'minute', amauiDate);

      if (second_) amauiDate = set(+second_, 'second', amauiDate);

      return amauiDate;
    });

    // Values
    setValues(values_ => ({
      ...values_,

      input: valueNew
    }));

    // Value
    updateValue(amauiDates);
  };

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== refs.value.current) setValue(value_);
  }, [value_]);

  const onOpen = React.useCallback(() => {
    setOpen(!refs.open.current);
  }, []);

  const onClose = React.useCallback(() => {
    setOpen(false);

    setOpenVersion((touch ? openMobile : openDesktop) || 'date');
  }, []);

  let mask: any = [];

  let placeholder: any = [];

  if (day) {
    mask.push(
      { pattern: '[0-3]' },

      (item: string, result: string, valueInput: string) => /^(0[0-9]|1[0-9]|2[0-9]|3[0-1]).*/.test(valueInput)
    );

    placeholder.push('DD');
  }

  if (month) {
    if (!!mask.length) mask.push('/');

    mask.push(
      { pattern: '[0-1]' },

      (item: string, result: string, valueInput: string) => day ? /^(0[0-9]|1[0-9]|2[0-9]|3[0-1])\/(0[0-9]|1[0-2])/.test(valueInput) : /^(0[0-9]|1[0-2]).*/.test(valueInput)
    );

    placeholder.push('MM');
  }

  if (year) {
    if (!!mask.length) mask.push('/');

    mask.push(
      { pattern: '[1-2]' },

      { pattern: '[0-9]' },

      { pattern: '[0-9]' },

      { pattern: '[0-9]' }
    );

    placeholder.push('YYYY');
  }

  placeholder = placeholder.join('/');

  placeholder += ' ';

  mask.push(' ');

  if (hour) {
    if (format === '12') {
      mask.push(
        { pattern: '[0-1]' },

        (item: string, result: string, valueInput: string) => /^[^ ]+ ([0][0-9]|1[0-2]).*/.test(valueInput)
      );
    }

    if (format === '24') {
      mask.push(
        { pattern: '[0-2]' },

        (item: string, result: string, valueInput: string) => /^[^ ]+ ([01][0-9]|2[0-3]).*/.test(valueInput),
      );
    }

    placeholder += 'hh';

    if (minute || second) {
      mask.push(':');

      placeholder += ':';
    }
  }

  if (minute) {
    mask.push(
      { pattern: '[0-5]' },

      { pattern: '[0-9]' }
    );

    placeholder += 'mm';

    if (second) {
      mask.push(':');

      placeholder += ':';
    }
  }

  if (second) {
    mask.push(
      { pattern: '[0-5]' },

      { pattern: '[0-9]' }
    );

    placeholder += 'ss';
  }

  if (format === '12') {
    mask.push(
      ' ',

      { pattern: '[ap]' },

      'm'
    );

    placeholder += ' (a|p)m';
  }

  mask.push(
    ' ',
    SEPARATOR_SYMBOL,
    ' ',

    ...mask
  );

  placeholder += `${SEPARATOR} ${placeholder}`;

  const valid = (valueNew = refs.value.current) => {
    return valueNew.every((item: any) => {
      let valid = true;

      if (is('function', refs.validate.current)) valid = refs.validate.current(item);

      if (refs.min.current !== undefined) valid = valid && isMethod(item, 'after or same', refs.min.current);

      if (refs.max.current !== undefined) valid = valid && isMethod(item, 'before or same', refs.max.current);

      return valid;
    });
  };

  const ModeDesktop = React.useCallback(React.forwardRef((props_: any, ref_: any) => {

    return (
      <Surface
        ref={ref_}

        tonal={tonal}

        color={color}

        className={classNames([
          staticClassName('DateRangePicker', theme) && [
            'AmauiDateTimeRangePicker-mode',
            'AmauiDateTimeRangePicker-mode-docked'
          ],

          ModeDesktopProps?.className,
          classes.mode,
          classes.mode_docked
        ])}
      >
        <Tabs
          tonal={tonal}

          color={color}

          justify='center'

          initialLineUpdateTimeout={314}

          value={refs.openVersion.current}

          onChange={(valueNew: string) => setOpenVersion(valueNew)}

          {...TabsProps}
        >
          <Tab
            value='date'

            label='Date'

            {...TabProps}
          />

          <Tab
            value='time'

            label='Time'

            {...TabProps}
          />
        </Tabs>

        <Line
          gap={0}

          direction='column'

          align='center'

          justify='center'

          style={{
            width: '100%'
          }}
        >
          {refs.openVersion.current === 'date' ? (
            <DateRangePicker
              tonal={tonal}

              color={color}

              version='static'

              day={day}

              month={month}

              year={year}

              value={refs.value.current}

              onClose={onClose}

              onCancel={onClose}

              onChange={(valueNew: any) => updateValueFromPicker(valueNew)}

              {...DateRangePickerProps}
            />
          ) : (
            <TimeRangePicker
              tonal={tonal}

              color={color}

              version='static'

              format={format}

              hour={hour}

              minute={minute}

              second={second}

              value={refs.value.current}

              onClose={onClose}

              onCancel={onClose}

              onChange={(valueNew: any) => updateValueFromPicker(valueNew)}

              {...TimeRangePickerProps}
            />
          )}
        </Line>
      </Surface>
    );
  }), [tonal, color, day, month, year, hour, minute, second, format]);

  const ModeMobile = React.useCallback(React.forwardRef((props_: any, ref_: any) => {

    return (
      <Surface
        ref={ref_}

        tonal={tonal}

        color={color}

        className={classNames([
          staticClassName('DateTimeRangePicker', theme) && [
            'AmauiDateTimeRangePicker-mode',
            'AmauiDateTimeRangePicker-mode-modal'
          ],

          ModeMobileProps?.className,
          classes.mode,
          classes.mode_modal
        ])}
      >
        <Tabs
          tonal={tonal}

          color={color}

          justify='center'

          initialLineUpdateTimeout={314}

          value={refs.openVersion.current}

          onChange={(valueNew: string) => setOpenVersion(valueNew)}

          {...TabsProps}
        >
          <Tab
            value='date'

            label='Date'

            {...TabProps}
          />

          <Tab
            value='time'

            label='Time'

            {...TabProps}
          />
        </Tabs>

        <Line
          gap={0}

          direction='column'

          align='center'

          justify='center'

          style={{
            width: '100%'
          }}
        >
          {refs.openVersion.current === 'date' ? (
            <DateRangePicker
              tonal={tonal}

              color={color}

              version='static'

              day={day}

              month={month}

              year={year}

              fullScreen={fullScreen}

              value={refs.value.current}

              onClose={onClose}

              onCancel={onClose}

              onChange={(valueNew: any) => updateValueFromPicker(valueNew)}

              {...DateRangePickerProps}
            />
          ) : (
            <TimeRangePicker
              tonal={tonal}

              color={color}

              version='static'

              format={format}

              hour={hour}

              minute={minute}

              second={second}

              value={refs.value.current}

              onClose={onClose}

              onCancel={onClose}

              onChange={(valueNew: any) => updateValueFromPicker(valueNew)}

              {...TimeRangePickerProps}
            />
          )}
        </Line>
      </Surface>
    );
  }), [tonal, color, day, month, year, hour, minute, second, format, fullScreen]);

  const moreProps: any = {};

  if (version === 'desktop') {
    moreProps.end = (
      <IconButton
        ref={refs.iconButton}

        tonal={tonal}

        color={color}

        version='text'

        onClick={onOpen}

        disabled={disabled || readOnly}

        {...IconButtonProps}
      >
        <Icon />
      </IconButton>
    );
  }

  if (version === 'mobile') {
    if (!readOnly) moreProps.onClick = onOpen;
  }

  if (version === 'static') {
    if (touch) return <ModeDesktop />;

    return <ModeMobile />;
  }

  return (
    <Line
      gap={0}

      direction='column'

      className={classNames([
        staticClassName('DateTimeRangePicker', theme) && [
          'AmauiDateTimeRangePicker-root',
          `AmauiDateTimeRangePicker-version-${version}`,
          `AmauiDateTimeRangePicker-open-mobile-${openMobile}`,
          `AmauiDateTimeRangePicker-open-desktop-${openDesktop}`,
          `AmauiDateTimeRangePicker-format-${format}`,
          useHelperText && `AmauiDateTimeRangePicker-use-helper-text`,
          now && `AmauiDateTimeRangePicker-now`,
          label && `AmauiDateTimeRangePicker-label`,
          min && `AmauiDateTimeRangePicker-min`,
          max && `AmauiDateTimeRangePicker-max`,
          day && `AmauiDateTimeRangePicker-day`,
          month && `AmauiDateTimeRangePicker-month`,
          year && `AmauiDateTimeRangePicker-year`,
          hour && `AmauiDateTimeRangePicker-hour`,
          minute && `AmauiDateTimeRangePicker-minute`,
          second && `AmauiDateTimeRangePicker-second`,
          range && `AmauiDateTimeRangePicker-range`,
          fullScreen && `AmauiDateTimeRangePicker-full-screen`,
          readOnly && `AmauiDateTimeRangePicker-read-only`,
          disabled && `AmauiDateTimeRangePicker-disabled`
        ],

        className,
        classes.root
      ])}
    >
      <AdvancedTextField
        rootRef={item => {
          if (ref) ref.current = item;

          refs.root.current = item;
        }}

        tonal={tonal}

        color={color}

        version='outlined'

        label={label}

        mask={mask}

        placeholder={placeholder}

        value={values.input}

        onChange={(valueNew: any) => updateInput(valueNew)}

        helperText={useHelperText ? placeholder : undefined}

        error={error}

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

          fullScreen={fullScreen}

          NoSurfaceProps={{
            className: classNames([
              staticClassName('DateTimeRangePicker', theme) && [
                'AmauiDatePicker-modal',
                fullScreen && `AmauiDatePicker-modal-fullScreen`
              ],

              classes.modal,
              fullScreen && classes.modal_fullScreen
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

              includeParentQueries={['.AmauiDateTimeRangePicker-mode', '.AmauiDatePicker-list', '.AmauiDatePicker-day', '.AmauiTimePicker-mode']}

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

DateTimeRangePicker.displayName = 'AmauiDateTimeRangePicker';

export default DateTimeRangePicker;
