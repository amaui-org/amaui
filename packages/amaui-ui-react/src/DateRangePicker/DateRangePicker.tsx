import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import useMediaQuery from '../useMediaQuery';
import DatePicker from '../DatePicker';
import Tooltip from '../Tooltip';
import ClickListener from '../ClickListener';
import IconButton from '../IconButton';

import { staticClassName, valueBreakpoints } from '../utils';

const useStyle = style(theme => ({
  root: {

  }
}), { name: 'AmauiDateRangePicker' });

const IconMaterialCalendarTodayRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CalendarTodayRoundedFilled'
      short_name='CalendarToday'

      {...props}
    >
      <path d="M5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V6Q3 5.175 3.587 4.588Q4.175 4 5 4H6V2.975Q6 2.55 6.287 2.275Q6.575 2 7 2Q7.425 2 7.713 2.287Q8 2.575 8 3V4H16V2.975Q16 2.55 16.288 2.275Q16.575 2 17 2Q17.425 2 17.712 2.287Q18 2.575 18 3V4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V20Q21 20.825 20.413 21.413Q19.825 22 19 22ZM5 20H19Q19 20 19 20Q19 20 19 20V10H5V20Q5 20 5 20Q5 20 5 20Z" />
    </Icon>
  );
});

const DateRangePicker = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiDateRangePicker?.props?.default }), [props_]);

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

    readOnly,

    disabled,

    Icon = IconMaterialCalendarTodayRoundedFilled,

    DatePickerProps,
    TooltipProps,
    IconButtonProps,

    className,

    ...other
  } = props;

  const touch = useMediaQuery('(pointer: coarse)');

  const [open, setOpen] = React.useState(false);
  const [calendar, setCalendar] = React.useState<any>();

  const refs = {
    root: React.useRef<any>(),
    iconButton: React.useRef<any>()
  };

  let version = version_;

  if (version === 'auto') {
    if (touch) version = 'mobile';
    else version = 'desktop';
  }

  const onOpen = React.useCallback(() => {
    setOpen(false);
  }, []);

  const onClose = React.useCallback(() => {
    setOpen(false);
  }, []);

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

  return <>
    <DatePicker
      ref={refs.root}

      tonal={tonal}

      color={color}

      version={version}

      readOnly={readOnly}

      disabled={disabled}

      fullScreen

      range

      className={classNames([
        staticClassName('DatePicker', theme) && [
          'AmauiDateRangePicker-root'
        ],

        className,
        classes.root
      ])}

      {...moreProps}

      {...other}

      {...DatePickerProps}
    />

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
            onClickOutside={() => onClose()}

            includeParentQueries={['.AmauiDatePicker-mode', '.AmauiDatePicker-list', '.AmauiDatePicker-day']}

            include={[refs.iconButton, refs.iconButton.current]}
          >
            123
          </ClickListener>
        )}

        {...TooltipProps}
      />
    )}
  </>;
});

DateRangePicker.displayName = 'AmauiDateRangePicker';

export default DateRangePicker;
