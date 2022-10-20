import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import IconButton from '../IconButton';
import AdvancedTextField from '../AdvancedTextField';
import useMediaQuery from '../useMediaQuery';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

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

// to do

// mobile, desktop

// picker

// picker vertical, horizontal
// horizontal only when there's enough space in the screen for it value y

// min, max date

// validate

// read only

// disabled

const TimePicker = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTimePicker?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const touch = useMediaQuery('(pointer: coarse)');

  const {
    tonal = true,
    color = 'primary',

    // mobile, desktop & auto
    version: version_ = 'auto',

    label = 'Time',

    min,
    max,

    validate,

    format = '12',

    hours = true,
    minutes = true,
    seconds = false,

    Icon = IconMaterialScheduleRounded,

    IconButtonProps,

    AdvancedTextFieldProps = {
      version: 'outlined'
    },

    className,

    ...other
  } = props;

  let version = version_;

  if (version === 'auto') {
    if (touch) version = 'mobile';
    else version = 'desktop';
  }

  let mask = [];

  let placeholder = '';

  if (hours) {
    if (format === '12') {
      mask.push(
        { pattern: '[0-1]' },

        { pattern: '[0-9]' }
      );
    }

    if (format === '24') {
      mask.push(
        { pattern: '[0-2]' },

        (item: string, result: string, valueInput: string) => {
          console.log(1, item, result, valueInput);

          return /^([01][0-9]|2[0-3]).*/.test(valueInput);
        },
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
        tonal={tonal}

        color={color}

        version='text'

        {...IconButtonProps}
      >
        <Icon />
      </IconButton>
    );
  }

  return <>
    <AdvancedTextField
      ref={ref}

      tonal={tonal}

      color={color}

      version={version}

      label={label}

      mask={mask}

      placeholder={placeholder}

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
  </>;
});

TimePicker.displayName = 'AmauiTimePicker';

export default TimePicker;
