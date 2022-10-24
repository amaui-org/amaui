import React from 'react';

import { is, getLeadingZerosNumber } from '@amaui/utils'
import { AmauiDate, format as formatMethod, set, is as isMethod } from '@amaui/date';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import IconButton from '../IconButton';
import Button from '../Button';
import AdvancedTextField from '../AdvancedTextField';
import useMediaQuery from '../useMediaQuery';
import Modal from '../Modal';
import ClickListener from '../ClickListener';
import Tooltip from '../Tooltip';
import Surface from '../Surface';
import Line from '../Line';

import { staticClassName, valueBreakpoints } from '../utils';

const useStyle = style(theme => ({
  root: {

  },

  mode_docked: {
    borderRadius: '28px'
  },

  mode_docked_header: {
    padding: '12px 8px'
  },

  mode_docked_header_button: {
    '&.AmauiButton-root': {
      paddingInline: '8px 0px'
    },

    '& .AmauiButton-end': {
      paddingInline: '8px 0px'
    }
  },

  arrow: {
    transition: theme.methods.transitions.make('transform')
  },

  arrow_open: {
    transform: 'rotate(-180deg)'
  }
}), { name: 'AmauiDatePicker' });

const IconMaterialCalendarTodayRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarTodayRounded'
      short_name='CalendarToday'

      {...props}
    >
      <path d="M5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V2.975Q6 2.55 6.287 2.275Q6.575 2 7 2Q7.425 2 7.713 2.287Q8 2.575 8 3V4H16V2.975Q16 2.55 16.288 2.275Q16.575 2 17 2Q17.425 2 17.712 2.287Q18 2.575 18 3V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM5 20H19Q19 20 19 20Q19 20 19 20V10H5V20Q5 20 5 20Q5 20 5 20ZM5 8H19V6Q19 6 19 6Q19 6 19 6H5Q5 6 5 6Q5 6 5 6ZM5 8V6Q5 6 5 6Q5 6 5 6Q5 6 5 6Q5 6 5 6V8Z" />
    </Icon>
  );
});

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

const DatePicker = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiDatePicker?.props?.default }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.sort((a, b) => theme.breakpoints.values[b] - theme.breakpoints.values[a]).forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(`(min-width: ${theme.breakpoints.values[key]}px)`);
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

    now = true,

    label,

    min,
    max,

    validate,

    autoCloseOnPick: autoCloseOnPick_,

    openMobile = 'select',

    selectModeHeadingText = 'Select date',

    inputModeHeadingText = 'Enter date',

    day = true,

    month = true,

    year = true,

    switch: switch__,

    readOnly,

    disabled,

    onClick: onClick_,

    Icon = IconMaterialCalendarTodayRounded,
    IconPrevious = IconMaterialNavigateBeforeRounded,
    IconNext = IconMaterialNavigateNextRounded,
    IconDropDown = IconMaterialArrowDropDownRounded,

    ModalProps,
    TooltipProps,
    IconButtonProps,
    AdvancedTextFieldProps,
    ModeDockedProps,
    ModeModalProps,
    ModeFullScreenProps,
    ModeInputProps,

    className,

    ...other
  } = props;

  const switch_ = valueBreakpoints(switch__, true, breakpoints, theme);
  const autoCloseOnPick = valueBreakpoints(autoCloseOnPick_, undefined, breakpoints, theme);

  const refs = {
    root: React.useRef<any>(),
    iconButton: React.useRef<any>(),
    version: React.useRef<any>(),
    open: React.useRef<any>(),
    openMenu: React.useRef<any>(),
    mode: React.useRef<any>(),
    value: React.useRef<any>(),
    values: React.useRef<any>(),
    autoCloseOnPick: React.useRef<any>(),
    min: React.useRef<any>(),
    max: React.useRef<any>(),
    validate: React.useRef<any>()
  };

  const valueToValues = (valueNew: AmauiDate) => {
    const values_: any = {};

    if (valueNew) {
      // day
      values_.day = formatMethod(valueNew, 'DD');

      // month
      values_.month = formatMethod(valueNew, 'MM');

      // year
      values_.year = formatMethod(valueNew, 'YYYY');

      // input
      const format_ = [];

      if (day) format_.push('DD');

      if (month) format_.push('MM');

      if (year) format_.push('YYYY');

      values_.input = formatMethod(valueNew, format_.join('/'));
    }

    return values_;
  };

  const touch = useMediaQuery('(pointer: coarse)');

  const [open, setOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [mode, setMode] = React.useState(touch ? openMobile : 'select');
  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || (now && new AmauiDate()));
  const [values, setValues] = React.useState<any>(() => valueToValues(value));
  const [error, setError] = React.useState(false);

  let version = version_;

  if (version === 'auto') {
    if (touch) version = 'mobile';
    else version = 'desktop';
  }

  refs.version.current = version;

  refs.open.current = open;

  refs.openMenu.current = openMenu;

  refs.mode.current = mode;

  refs.values.current = values;

  refs.value.current = value;

  refs.autoCloseOnPick.current = autoCloseOnPick;

  refs.min.current = min;

  refs.max.current = max;

  refs.validate.current = validate;

  const valuesToValue = (values_: any) => {
    let amauiDate = refs.value.current;

    // day
    let day = values_.day || '01';

    if (day.startsWith('0')) day = +day.slice(1);

    amauiDate = set(+day, 'day', amauiDate);

    // month
    let month = values_.month || '01';

    if (month.startsWith('0')) month = +month.slice(1);

    // months start from 0
    amauiDate = set(+month - 1, 'month', amauiDate);

    // year
    let year = values_.year || new AmauiDate().year;

    amauiDate = set(+year, 'year', amauiDate);

    return amauiDate;
  };

  const updateValues = (property: string, value_: any) => {
    const values_ = {
      ...refs.values.current,

      [property]: value_
    };

    setValues(values_);

    // Error
    setError(!validItem('', '', property === 'input' ? inputToValues(value_) : values_));
  };

  const updateInputToValues = () => {
    const values_ = {
      ...refs.values.current,

      ...inputToValues(refs.values.current?.input)
    };

    const amauiDate = valuesToValue(values_);

    setValues(values_);

    updateValue(amauiDate);

    return values_;
  };

  const updateValuesToInput = () => {
    const amauiDate = valuesToValue(refs.values.current);

    setValues(valueToValues(amauiDate));

    updateValue(amauiDate);
  };

  const validItem = (item: number | string = '', version: string = '', values__ = refs.values.current) => {
    const values_ = {
      ...values__
    };

    if (version) values_[version] = is('number', item) ? getLeadingZerosNumber(item as number) : item;

    const amauiDate = valuesToValue(values_);

    Object.keys(values_).forEach((item_: any) => {
      if (is('string', values_[item_])) {
        if (values_[item_].startsWith('0')) values_[item_] = values_[item_].slice(1);
      }
    });

    if (values_.day !== undefined) values_.day = +values_.day;

    if (values_.month !== undefined) values_.month = +values_.month;

    if (values_.year !== undefined) values_.year = +values_.year;

    let valid = true;

    if (is('function', refs.validate.current)) valid = refs.validate.current(item, values_, values_.selecting);

    if (refs.min.current !== undefined) valid = valid && isMethod(amauiDate, 'after or same', refs.min.current);

    if (refs.max.current !== undefined) valid = valid && isMethod(amauiDate, 'before or same', refs.max.current);

    return valid;
  };

  const inputToValues = (valueNew: any) => {
    const values_: any = {
      ...refs.values.current
    };

    // input
    const [day, month, year] = (valueNew || '').split('/');

    if (day) values_.day = day;

    if (month) values_.month = month;

    if (year) values_.year = year;

    return values_;
  };

  const updateValue = (valueNew: any) => {
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange)) onChange(valueNew);
  };

  const updateFromValue = (valueNew: number) => {
    const amauiDate = new AmauiDate(valueNew);

    // Error
    setError(!validItem('', '', valueToValues(amauiDate)));

    // Update values
    setValues(valueToValues(amauiDate));

    // Update value
    setValue(amauiDate);
  };

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (refs.open.current) {
        switch (event.key) {
          case 'Escape':
            return onCancel();

          default:
            break;
        }
      }
    };

    // Error
    setError(!validItem('', '', inputToValues(refs.values.current?.input)));

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== refs.value.current) updateFromValue(value_);
  }, [value_]);

  const onMode = React.useCallback(() => {
    setMode(refs.version.current === 'mobile' ? openMobile : 'select');

    if (!refs.open.current) updateInputToValues();

    setOpen(!refs.open.current);
  }, [openMobile]);

  const onClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  const onModal = React.useCallback((event: React.MouseEvent<any>) => {
    setMode(refs.version.current === 'mobile' ? openMobile : 'select');

    updateInputToValues();

    setOpen(true);

    if (is('function', onClick_)) onClick_(event);
  }, [openMobile, onClick_]);

  const onModeSwitch = React.useCallback(() => {
    setMode(refs.mode.current === 'select' ? 'input' : 'select');
  }, []);

  const onOk = React.useCallback(() => {
    updateValuesToInput();

    // Error
    setError(!validItem());

    onClose();
  }, []);

  const onCancel = React.useCallback(() => {
    const values_ = updateInputToValues();

    // Error
    setError(!validItem('', '', values_));

    onClose();
  }, []);

  const ModeDocked = React.useCallback(React.forwardRef((props: any, ref: any) => {
    const monthAbr = formatMethod(refs.value.current, 'MMM');
    const year = formatMethod(refs.value.current, 'YYYY');

    const buttonsProps = {
      color: 'inherit'
    };

    return (
      <Surface
        ref={ref}

        tonal={tonal}

        color={color}

        className={classNames([
          staticClassName('TimePicker', theme) && [
            'AmauiTimePicker-mode',
            'AmauiTimePicker-mode-docked'
          ],

          ModeDockedProps?.className,
          classes.mode,
          classes.mode_docked
        ])}
      >
        {/* Header */}
        <Line
          gap={0.5}

          direction='row'

          align='center'

          justify='space-between'

          className={classNames([
            staticClassName('TimePicker', theme) && [
              'AmauiTimePicker-mode-docked-header'
            ],

            classes.mode_docked_header
          ])}
        >
          {/* Month */}
          <Line
            gap={0}

            direction='row'

            align='center'
          >
            <IconButton
              {...buttonsProps}
            >
              <IconPrevious />
            </IconButton>

            <Button
              version='text'

              {...buttonsProps}

              fontSize={24}

              end={(
                <IconDropDown
                  className={classNames([
                    staticClassName('TimePicker', theme) && [
                      'AmauiTimePicker-arrow'
                    ],

                    classes.arrow,
                    refs.openMenu.current === 'month' && classes.arrow_open
                  ])}
                />
              )}

              className={classNames([
                staticClassName('TimePicker', theme) && [
                  'AmauiTimePicker-mode-docked-header-button'
                ],

                classes.mode_docked_header_button
              ])}
            >
              {monthAbr}
            </Button>

            <IconButton
              {...buttonsProps}
            >
              <IconNext />
            </IconButton>
          </Line>

          {/* Year */}
          <Line
            gap={0}

            direction='row'

            align='center'
          >
            <IconButton
              {...buttonsProps}
            >
              <IconPrevious />
            </IconButton>

            <Button
              version='text'

              {...buttonsProps}

              fontSize={24}

              end={(
                <IconDropDown
                  className={classNames([
                    staticClassName('TimePicker', theme) && [
                      'AmauiTimePicker-arrow'
                    ],

                    classes.arrow,
                    refs.openMenu.current === 'year' && classes.arrow_open
                  ])}
                />
              )}

              className={classNames([
                staticClassName('TimePicker', theme) && [
                  'AmauiTimePicker-mode-docked-header-button'
                ],

                classes.mode_docked_header_button
              ])}
            >
              {year}
            </Button>

            <IconButton
              {...buttonsProps}
            >
              <IconNext />
            </IconButton>
          </Line>
        </Line>

        {/* Main */}
      </Surface>
    );
  }), []);

  const ModeModal = React.useCallback(React.forwardRef((props: any, ref: any) => {

    return (
      <div />
    );
  }), []);

  const ModeFullScreen = React.useCallback(React.forwardRef((props: any, ref: any) => {

    return (
      <div />
    );
  }), []);

  const ModeInput = React.useCallback(React.forwardRef((props: any, ref: any) => {

    return (
      <div />
    );
  }), []);

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

  console.log(1, value, values);
  return <>
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

      onChange={(valueNew: any) => updateValues('input', valueNew)}

      error={error}

      readOnly={readOnly}

      disabled={disabled}

      className={classNames([
        staticClassName('DatePicker', theme) && [
          'AmauiDatePicker-root'
        ],

        className,
        classes.root
      ])}

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

        {...ModalProps}
      >
        {mode === 'select' ? <ModeModal /> : <ModeInput />}
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

            includeParentQueries={['.AmauiDatePicker-mode']}

            include={[refs.iconButton, refs.iconButton.current]}
          >
            <ModeDocked />
          </ClickListener>
        )}

        {...TooltipProps}
      />
    )}
  </>;
});

DatePicker.displayName = 'AmauiDatePicker';

export default DatePicker;
