import React from 'react';

import { is } from '@amaui/utils'
import { AmauiDate, format as formatMethod, set } from '@amaui/date';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import IconButton from '../IconButton';
import AdvancedTextField from '../AdvancedTextField';
import useMediaQuery from '../useMediaQuery';
import Modal from '../Modal';
import ClickListener from '../ClickListener';
import Tooltip from '../Tooltip';
import Surface from '../Surface';
import Line from '../Line';
import Type from '../Type';
import ToggleButtons from '../ToggleButtons';
import ToggleButton from '../ToggleButton';
import Button from '../Button';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  },

  mode: {
    padding: '24px',
    marginInline: '24px',
    borderRadius: '28px'
  },

  modeWrapper: {
    width: '100%'
  },

  inputs: {
    width: '100%',
    marginTop: '24px'
  },

  input: {
    maxWidth: '96px',
    flex: '1 1 auto',

    '& .AmauiTextField-inputWrapper': {
      paddingInline: '0px',
      paddingBlock: '11px 8px',
      height: '72px'
    },

    '& .AmauiTextField-input': {
      ...theme.typography.values.d2,

      lineHeight: '1',

      textAlign: 'center'
    },

    '& .AmauiTextField-footer': {
      marginTop: '8px',
      padding: '0px'
    },

    '& .AmauiTextField-helperText': {
      color: theme.palette.text.default.primary
    }
  },

  inputSeparator: {
    marginTop: '7px',
    paddingInline: '6px',
    userSelect: 'none'
  },

  toggleButtons: {
    height: '72px',

    '& > *': {
      flex: '1 1 auto'
    }
  },

  toggleButton: {

  },

  footer: {
    width: '100%',
    marginTop: '24px'
  }
}), { name: 'AmauiTimePicker' });

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

const IconMaterialKeyboardAltRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardAltRounded'
      short_name='KeyboardAlt'

      {...props}
    >
      <path d="M3 21Q2.175 21 1.588 20.413Q1 19.825 1 19V6Q1 5.175 1.588 4.588Q2.175 4 3 4H21Q21.825 4 22.413 4.588Q23 5.175 23 6V19Q23 19.825 22.413 20.413Q21.825 21 21 21ZM3 19H21Q21 19 21 19Q21 19 21 19V6Q21 6 21 6Q21 6 21 6H3Q3 6 3 6Q3 6 3 6V19Q3 19 3 19Q3 19 3 19ZM9 10H11V8H9ZM5 10H7V8H5ZM8.5 17H15.5Q15.7 17 15.85 16.85Q16 16.7 16 16.5Q16 16.3 15.85 16.15Q15.7 16 15.5 16H8.5Q8.3 16 8.15 16.15Q8 16.3 8 16.5Q8 16.7 8.15 16.85Q8.3 17 8.5 17ZM13 10H15V8H13ZM9 14H11V12H9ZM5 14H7V12H5ZM13 14H15V12H13ZM17 10H19V8H17ZM17 14H19V12H17ZM3 19Q3 19 3 19Q3 19 3 19V6Q3 6 3 6Q3 6 3 6Q3 6 3 6Q3 6 3 6V19Q3 19 3 19Q3 19 3 19Z" />
    </Icon>
  );
});

// to do

// if no minutes, or seconds, they default to 0

// picker

// picker vertical, horizontal
// horizontal only when there's enough space in the screen for it value y

// min, max date

// validate

// value

// onChange

// read only

// disabled

const TimePicker = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTimePicker?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    // mobile, desktop & auto
    version: version_ = 'auto',

    value: value_,
    valueDefault,

    onChange,

    label,

    min,
    max,

    validate,

    openMobile = 'select',

    openDesktop = 'select',

    selectModeHeadingText = 'Select time',

    inputModeHeadingText = 'Enter time',

    format = '12',

    hours = true,
    minutes = true,
    seconds = false,

    onClick: onClick_,

    Icon = IconMaterialScheduleRounded,
    IconEnter = IconMaterialKeyboardAltRounded,

    ButtonProps,
    ModalProps,
    TooltipProps,
    ToggleButtonsProps,
    ToggleButtonProps,
    IconButtonProps,
    InputProps,

    AdvancedTextFieldProps = {
      version: 'outlined'
    },

    className,

    ...other
  } = props;

  const valueToValues = (valueNew: AmauiDate) => {
    const values_: any = {};

    if (valueNew) {
      // hour
      if (format === '12') values_.hour = formatMethod(valueNew, 'hh');
      else values_.hour = formatMethod(valueNew, 'HH');

      // minute
      values_.minute = formatMethod(valueNew, 'mm');

      // second
      values_.second = formatMethod(valueNew, 'ss');

      // am, pm
      values_.dayTime = formatMethod(valueNew, 'a');

      // input
      let format_ = '';

      if (format === '12') format_ += `hh`;
      else format_ += `HH`;

      if (minutes) format_ += `:mm`;

      if (seconds) format_ += `:ss`;

      if (format === '12') format_ += ` a`;

      values_.input = formatMethod(valueNew, format_);
    }

    return values_;
  };

  const touch = useMediaQuery('(pointer: coarse)');

  const [modeOpen, setModeOpen] = React.useState(false);
  const [mode, setMode] = React.useState((touch ? openMobile : openDesktop) || 'select');
  const [value, setValue] = React.useState((valueDefault !== undefined ? valueDefault : value_) || new AmauiDate());
  const [values, setValues] = React.useState<any>(() => valueToValues(value));

  const refs = {
    root: React.useRef<any>(),
    iconButton: React.useRef<any>(),
    version: React.useRef<any>(),
    modeOpen: React.useRef<any>(),
    mode: React.useRef<any>(),
    values: React.useRef<any>(),
    value: React.useRef<any>()
  };

  let version = version_;

  if (version === 'auto') {
    if (touch) version = 'mobile';
    else version = 'desktop';
  }

  refs.version.current = version;

  refs.modeOpen.current = modeOpen;

  refs.mode.current = mode;

  refs.values.current = values;

  refs.value.current = value;

  const valuesToValue = (values_: any) => {
    let amauiDate = refs.value.current;

    // hour
    // and am, pm
    let hour = values_.hour || '00';

    if (hour.startsWith('0')) hour = +hour.slice(1);

    amauiDate = set(+hour + ((format === '12' && values_.dayTime === 'pm') ? 12 : 0), 'hour', amauiDate);

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
    if (!props.hasOwnProperty('value')) setValue(valueNew);

    if (is('function', onChange)) onChange(valueNew);
  };

  const updateFromValue = (valueNew: number) => {
    const amauiDate = new AmauiDate(valueNew);

    // Update values
    setValues(amauiDate);

    // Update value
    updateValue(amauiDate);
  };

  const updateValues = (property: string, value_: any) => {
    setValues((values_: any) => ({
      ...values_,

      [property]: value_
    }));
  };

  const updateInputToValues = () => {
    const values_ = {
      ...refs.values.current,

      ...inputToValues(refs.values.current.input)
    };

    const amauiDate = valuesToValue(values_);

    setValues(values_);

    updateValue(amauiDate);
  };

  const updateValuesToInput = () => {
    const amauiDate = valuesToValue(refs.values.current);

    setValues(valueToValues(amauiDate));

    updateValue(amauiDate);
  };

  React.useEffect(() => {
    if (value_ !== undefined && value_ !== refs.value.current) updateFromValue(value_);
  }, [value_]);

  let mask: any = [];

  let placeholder = '';

  const onMode = React.useCallback(() => {
    setMode((refs.version.current === 'mobile' ? openMobile : openDesktop) || 'select');

    if (!refs.modeOpen.current) updateInputToValues();

    setModeOpen(!refs.modeOpen.current);
  }, [openMobile, openDesktop]);

  const onModeClose = React.useCallback(() => {
    setModeOpen(false);
  }, []);

  const onModal = React.useCallback((event: React.MouseEvent<any>) => {
    setMode((refs.version.current === 'mobile' ? openMobile : openDesktop) || 'select');

    updateInputToValues();

    setModeOpen(true);

    if (is('function', onClick_)) onClick_(event);
  }, [openMobile, openDesktop, onClick_]);

  const onModeSwitch = React.useCallback(() => {
    setMode(refs.mode.current === 'select' ? 'input' : 'select');
  }, []);

  const onOk = React.useCallback(() => {
    updateValuesToInput();

    onModeClose();
  }, []);

  const onCancel = React.useCallback(() => {
    updateInputToValues();

    onModeClose();
  }, []);

  const ModeSelect = React.useCallback(React.forwardRef((props: any, ref: any) => {


    return (
      <Surface
        ref={ref}

        tonal={tonal}

        color={color}

        className={classNames([
          staticClassName('TimePicker', theme) && [
            'AmauiTimePicker-mode'
          ],

          classes.mode,
          classes.mode_select
        ])}
      >
        <Line
          gap={0}

          direction='column'

          className={classNames([
            staticClassName('TimePicker', theme) && [
              'AmauiTimePicker-mode-wrapper'
            ],

            classes.mode_wrapper
          ])}
        >
          {/* Heading */}
          <Type
            version='l2'
          >
            {selectModeHeadingText}
          </Type>

          {/* Footer */}
          <Line
            direction='row'

            wrap='wrap'

            align='center'

            justify='space-between'

            className={classNames([
              staticClassName('TimePicker', theme) && [
                'AmauiTimePicker-footer'
              ],

              classes.footer
            ])}
          >
            <Tooltip
              label={mode === 'select' ? 'Enter' : 'Select'}
            >
              <IconButton
                tonal={tonal}

                color='default'

                onClick={onModeSwitch}
              >
                {mode === 'select' ? <IconEnter /> : <Icon />}
              </IconButton>
            </Tooltip>

            <Line
              gap={0}

              direction='row'

              align='center'
            >
              <Button
                tonal={tonal}

                color={color}

                version='text'

                {...ButtonProps}
              >
                Cancel
              </Button>

              <Button
                tonal={tonal}

                color={color}

                version='text'

                {...ButtonProps}
              >
                Ok
              </Button>
            </Line>
          </Line>
        </Line>
      </Surface>
    );
  }), [selectModeHeadingText, mode]);

  const ModeInput = React.useCallback(React.forwardRef((props: any, ref: any) => {
    const inputProps = {
      tonal,
      color,
      version: 'outlined',
      size: 'large',

      className: classNames([
        staticClassName('TimePicker', theme) && [
          'AmauiTimePicker-input'
        ],

        classes.input,
        classes[`input_version_${version}`]
      ]),

      ...InputProps
    };

    const separator = (
      <Type
        version='d2'

        className={classNames([
          staticClassName('TimePicker', theme) && [
            'AmauiTimePicker-input-separator'
          ],

          classes.inputSeparator
        ])}
      >
        :
      </Type>
    );

    const inputs = [
      <AdvancedTextField
        helperText='Hour'

        value={refs.values.current.hour}

        onChange={(valueNew: any) => updateValues('hour', valueNew)}

        placeholder='00'

        mask={[
          ...(format === '12' ? [
            { pattern: '[0-1]' },

            (item: string, result: string, valueInput: string) => /^([0][0-9]|1[0-2]).*/.test(valueInput)
          ] : [
            { pattern: '[0-2]' },

            (item: string, result: string, valueInput: string) => /^([01][0-9]|2[0-3]).*/.test(valueInput)
          ])
        ]}

        {...inputProps}
      />
    ];

    if (minutes) {
      inputs.push(
        separator,

        <AdvancedTextField
          helperText='Minute'

          value={refs.values.current.minute}

          onChange={(valueNew: any) => updateValues('minute', valueNew)}

          placeholder='00'

          mask={[
            { pattern: '[0-5]' },

            { pattern: '[0-9]' }
          ]}

          {...inputProps}
        />
      );
    }

    if (seconds) {
      inputs.push(
        separator,

        <AdvancedTextField
          helperText='Second'

          value={refs.values.current.second}

          onChange={(valueNew: any) => updateValues('second', valueNew)}

          placeholder='00'

          mask={[
            { pattern: '[0-5]' },

            { pattern: '[0-9]' }
          ]}

          {...inputProps}
        />
      );
    }

    const toggleButtonProps = {
      icon: false,

      ...ToggleButtonProps,

      className: classNames([
        staticClassName('TimePicker', theme) && [
          'AmauiTimePicker-toggle-button'
        ],

        ToggleButtonProps?.className,
        classes.toggleButton
      ])
    };

    return (
      <Surface
        ref={ref}

        tonal={tonal}

        color={color}

        className={classNames([
          staticClassName('TimePicker', theme) && [
            'AmauiTimePicker-mode'
          ],

          classes.mode,
          classes.model_input
        ])}
      >
        <Line
          gap={0}

          direction='column'

          className={classNames([
            staticClassName('TimePicker', theme) && [
              'AmauiTimePicker-mode-wrapper'
            ],

            classes.mode_wrapper
          ])}
        >
          {/* Heading */}
          <Type
            version='l2'
          >
            {inputModeHeadingText}
          </Type>

          {/* Inputs, am, pm */}
          <Line
            gap={1.5}

            direction='row'

            align='unset'

            justify='center'

            className={classNames([
              staticClassName('TimePicker', theme) && [
                'AmauiTimePicker-inputs'
              ],

              classes.inputs
            ])}
          >
            <Line
              gap={0}

              direction='row'

              align='flex-start'

              justify='unset'
            >
              {inputs.map((item: any, index: number) => (
                React.cloneElement(item, {
                  key: index
                })
              ))}
            </Line>

            {format === '12' && (
              <ToggleButtons
                tonal={tonal}

                color='default'

                version='outlined'

                orientation='vertical'

                value={refs.values.current.dayTime}

                onChange={(valueNew: any) => {
                  if (!valueNew.length) return;

                  updateValues('dayTime', valueNew);
                }}

                select='single'

                {...ToggleButtonsProps}

                className={classNames([
                  staticClassName('TimePicker', theme) && [
                    'AmauiTimePicker-toggle-buttons'
                  ],

                  ToggleButtonsProps?.className,
                  classes.toggleButtons
                ])}
              >
                <ToggleButton
                  value='am'

                  {...toggleButtonProps}
                >
                  AM
                </ToggleButton>

                <ToggleButton
                  value='pm'

                  {...toggleButtonProps}
                >
                  PM
                </ToggleButton>
              </ToggleButtons>
            )}
          </Line>

          {/* Footer */}
          <Line
            direction='row'

            wrap='wrap'

            align='center'

            justify='space-between'

            className={classNames([
              staticClassName('TimePicker', theme) && [
                'AmauiTimePicker-footer'
              ],

              classes.footer
            ])}
          >
            <Tooltip
              label={mode === 'select' ? 'Enter' : 'Select'}
            >
              <IconButton
                tonal={tonal}

                color='default'

                onClick={onModeSwitch}
              >
                {mode === 'select' ? <IconEnter /> : <Icon />}
              </IconButton>
            </Tooltip>

            <Line
              gap={0}

              direction='row'

              align='center'
            >
              <Button
                tonal={tonal}

                color={color}

                version='text'

                onClick={onCancel}

                {...ButtonProps}
              >
                Cancel
              </Button>

              <Button
                tonal={tonal}

                color={color}

                version='text'

                onClick={onOk}

                {...ButtonProps}
              >
                Ok
              </Button>
            </Line>
          </Line>
        </Line>
      </Surface>
    );
  }), [version, format, hours, minutes, seconds, inputModeHeadingText, mode, tonal, color, InputProps]);

  if (hours) {
    if (format === '12') {
      mask.push(
        { pattern: '[0-1]' },

        (item: string, result: string, valueInput: string) => /^([0][0-9]|1[0-2]).*/.test(valueInput)
      );
    }

    if (format === '24') {
      mask.push(
        { pattern: '[0-2]' },

        (item: string, result: string, valueInput: string) => /^([01][0-9]|2[0-3]).*/.test(valueInput),
      );
    }

    placeholder += 'hh';

    if (minutes || seconds) {
      mask.push(':');

      placeholder += ':';
    }
  }

  if (minutes) {
    mask.push(
      { pattern: '[0-5]' },

      { pattern: '[0-9]' }
    );

    placeholder += 'mm';

    if (seconds) {
      mask.push(':');

      placeholder += ':';
    }
  }

  if (seconds) {
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

  const moreProps: any = {};

  if (version === 'desktop') {
    moreProps.end = (
      <IconButton
        ref={refs.iconButton}

        tonal={tonal}

        color={color}

        version='text'

        onClick={onMode}

        {...IconButtonProps}
      >
        <Icon />
      </IconButton>
    );
  }

  if (version === 'mobile') {
    moreProps.onClick = onModal;
  }
  console.log(1114, value, values);
  return <>
    <AdvancedTextField
      rootRef={item => {
        if (ref) ref.current = item;

        refs.root.current = item;
      }}

      tonal={tonal}

      color={color}

      version={version}

      label={label}

      mask={mask}

      placeholder={placeholder}

      value={values.input}

      onChange={(valueNew: any) => updateValues('input', valueNew)}

      className={classNames([
        staticClassName('TimePicker', theme) && [
          'AmauiTimePicker-root'
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
        open={modeOpen}

        modalWrapperSurface={false}

        onClose={onModeClose}

        {...ModalProps}
      >
        {mode === 'select' ? <ModeSelect /> : <ModeInput />}
      </Modal>
    )}

    {/* Desktop */}
    {version === 'desktop' && (
      <Tooltip
        open={modeOpen}

        anchorElement={refs.root.current}

        alignment='center'

        position='bottom'

        hover={false}

        focus={false}

        longPress={false}

        maxWidth='unset'

        noMargin

        label={(
          <div>
            <ClickListener
              onClickOutside={onModeClose}

              includeParentQueries={['.AmauiTimePicker-mode']}

              include={[refs.iconButton, refs.iconButton.current]}
            >
              {mode === 'select' ? <ModeSelect /> : <ModeInput />}
            </ClickListener>
          </div>
        )}

        {...TooltipProps}
      />
    )}
  </>;
});

TimePicker.displayName = 'AmauiTimePicker';

export default TimePicker;
