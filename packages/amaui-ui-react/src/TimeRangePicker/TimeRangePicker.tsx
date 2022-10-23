import React from 'react';

import { is } from '@amaui/utils';
import { AmauiDate, format as formatMethod } from '@amaui/date';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import Modal from '../Modal';
import Tooltip from '../Tooltip';
import ClickListener from '../ClickListener';
import IconButton from '../IconButton';
import AdvancedTextField from '../AdvancedTextField';
import Surface from '../Surface';
import TimePicker from '../TimePicker';
import useMediaQuery from '../useMediaQuery';
import Line from '../Line';

import { staticClassName, valueBreakpoints } from '../utils';

const useStyle = style(theme => ({
  root: {

  },

  mode: {
    borderRadius: '28px'
  },
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

    value: value_,
    valueDefault,

    onChange,

    now = true,

    label,

    min,
    max,

    validate,

    autoNext: autoNext_,

    autoCloseOnLast: autoCloseOnLast_,

    openMobile = 'select',

    openDesktop = 'select',

    selectModeHeadingText = 'Select time',

    inputModeHeadingText = 'Enter time',

    orientation: orientation_,

    format = '12',

    hours = true,
    minutes = true,
    seconds = false,

    switch: switch__,

    readOnly,

    disabled,

    Icon = IconMaterialScheduleRounded,

    FromProps,
    ToProps,

    TooltipProps,
    IconButtonProps,
    AdvancedTextFieldProps,

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

      hours,
      minutes,
      seconds,

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

        if (props_?.minutes) format_ += `:mm`;

        if (props_?.seconds) format_ += `:ss`;

        if (props_?.format === '12') format_ += ` a`;

        return formatMethod(value__, format_);
      });

      values_.input = items.join(' – ');
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

  const updateValue = (valueNew: any) => {
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange)) onChange(valueNew);
  };

  const updateValues = (property: string, value_: any) => {
    const values_ = {
      ...refs.values.current,

      [property]: value_
    };

    setValues(values_);
  };

  const updateFromValue = (valueNew_: [number | AmauiDate, number | AmauiDate]) => {
    const valueNew = valueNew_.map(item => new AmauiDate(item)) as [AmauiDate, AmauiDate];

    // Update values
    setValues(valueToValues(valueNew));

    // Update value
    updateValue(valueNew);
  };

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== refs.value.current) updateFromValue(value_);
  }, [value_]);

  const onMode = React.useCallback(() => {
    setMode((refs.version.current === 'mobile' ? openMobile : openDesktop) || 'select');

    setOpen(!refs.open.current);
  }, [openMobile, openDesktop]);

  const onClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  let mask: any = [];

  let placeholder = '';

  [FromProps, ToProps].forEach((props__: any, index: number) => {
    const props_ = mergeProps(props__);

    if (props_?.hours) {
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

      if (props_?.minutes || props_?.seconds) {
        mask.push(':');

        placeholder += ':';
      }
    }

    if (props_?.minutes) {
      mask.push(
        { pattern: '[0-5]' },

        { pattern: '[0-9]' }
      );

      placeholder += 'mm';

      if (props_?.seconds) {
        mask.push(':');

        placeholder += ':';
      }
    }

    if (props_?.seconds) {
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
        '–',
        ' '
      );

      placeholder += ` – `;
    }
  });

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

      readOnly={readOnly}

      disabled={disabled}

      className={classNames([
        staticClassName('TimeRangePicker', theme) && [
          'AmauiTimeRangePicker-root'
        ],

        className,
        classes.root
      ])}

      {...moreProps}

      {...other}

      {...AdvancedTextFieldProps}
    />

    {/* Mobile */}
    {/* {version === 'mobile' && (
      <Modal
        open={open}

        modalWrapperSurface={false}

        onClose={onClose}

        {...ModalProps}
      >
        {mode === 'select' ? <ModeSelect /> : <ModeInput />}
      </Modal>
    )} */}

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
            <Line
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
              {/* From */}
              <TimePicker
                {...mergeProps(FromProps)}

                version='static'

                openDesktop={mode}

                value={value[0]}

                onChange={(valueNew: any) => updateFromValue([valueNew, value[1]])}
              />

              <TimePicker
                {...mergeProps(ToProps)}

                version='static'

                openDesktop={mode}

                value={value[1]}

                onChange={(valueNew: any) => updateFromValue([value[0], valueNew])}
              />
            </Line>
          </ClickListener>
        )}

        {...TooltipProps}
      />
    )}
  </>;
});

TimeRangePicker.displayName = 'AmauiTimeRangePicker';

export default TimeRangePicker;
