import React from 'react';

import { isEnvironment } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Icon, { IIcon } from '../Icon';
import IconButton from '../IconButton';
import Line from '../Line';
import { ILine } from '../Line/Line';
import Tooltip from '../Tooltip';
import IFrameElement from '../IFrame';
import { staticClassName } from '../utils';

const IconMaterialSmartphone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Smartphone'

      short_name='Smartphone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v18q0 .825-.587 1.413Q17.825 23 17 23Zm0-5h10V6H7Zm0 2v1h10v-1ZM7 4h10V3H7Zm0-1v1-1Zm0 18v-1 1Z" />
    </Icon>
  );
});

const IconMaterialTabletMac = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletMac'

      short_name='TabletMac'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 23q-.825 0-1.413-.587Q3 21.825 3 21V3q0-.825.587-1.413Q4.175 1 5 1h14q.825 0 1.413.587Q21 2.175 21 3v18q0 .825-.587 1.413Q19.825 23 19 23Zm0-7h14V6H5Zm0 2v3h14v-3ZM5 4h14V3H5Zm0-1v1-1Zm0 18v-3 3Zm7-.5q.425 0 .713-.288.287-.287.287-.712t-.287-.712Q12.425 18.5 12 18.5t-.712.288Q11 19.075 11 19.5t.288.712q.287.288.712.288Z" />
    </Icon>
  );
});

const IconMaterialComputer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Computer'

      short_name='Computer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v11q0 .825-.587 1.413Q20.825 18 20 18Zm0-2h16V5H4v11Zm-2 5q-.425 0-.712-.288Q1 20.425 1 20t.288-.712Q1.575 19 2 19h20q.425 0 .712.288.288.287.288.712t-.288.712Q22.425 21 22 21Zm2-5V5v11Z" />
    </Icon>
  );
});

const IconMaterialDesktopWindows = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopWindows'

      short_name='DesktopWindows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 22q-.425 0-.712-.288Q8 21.425 8 21t.288-.712Q8.575 20 9 20h1v-2H4q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v11q0 .825-.587 1.413Q20.825 18 20 18h-6v2h1q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 22 15 22Zm-5-6h16V5H4v11Zm0 0V5v11Z" />
    </Icon>
  );
});

const useStyle = styleMethod(theme => ({
  '@p': {
    '*[data-theme] .amaui-Carousel-root, *[data-theme] .amaui-VideoPlayer-root, *[data-theme] .amaui-AudioPlayer-root, *[data-theme] .amaui-Share-root, *[data-theme] .amaui-website-Header-root, *[data-theme] .amaui-website-Footer-root, *[data-theme] .amaui-website-BackTo-root, *[data-theme] .amaui-websites-Resume-to, *[data-theme] .amaui-Resume-menu, *[data-theme] .amaui-websites-VisitorChat-speed-dial, *[data-theme] .amaui-websites-Form-root, *[data-theme] .amaui-websites-Reservation-root, *[data-theme] .amaui-Links-more, *[data-theme] .amaui-ImageGallery-root': {
      pointerEvents: 'none'
    }
  },

  root: {
    position: 'relative',
    overflow: 'hidden'
  },

  options: {
    overflowX: 'auto',
    overflowY: 'hidden',
    padding: '12px 24px',

    '& > *': {
      flex: '0 0 auto'
    }
  },

  wrapper: {
    margin: '0 4px 24px',
    minHeight: '15vh',
    height: 0,
    border: `0.5px solid ${theme.palette.text.divider}`,
    borderRadius: theme.methods.shape.radius.value(2),
    boxShadow: theme.shadows.values.default[1],
    overflow: 'hidden',

    '&.amaui-Line-root': {
      width: 'calc(100% - 8px)'
    }
  },

  IFrame: {
    position: 'relative'
  },

  iframe: {
    width: '100%',
    height: '100%'
  }
}), { name: 'amaui-Frame' });

export interface IFrame extends ILine {
  url?: string;
  src?: string;

  value?: any;

  startOptions?: any;
  endOptions?: any;

  IconMobile?: any;
  IconTable?: any;
  IconLaptop?: any;
  IconDesktop?: any;

  iframeProps?: any;
  IFrameProps?: any;
  OptionProps?: any;
  OptionsProps?: any;
  OptionsWrapperProps?: any;
  WrapperProps?: any;
}

const Frame: React.FC<IFrame> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiFrame?.props?.default, ...props_ }), [props_]);

  const {
    url,
    src,

    value,

    startOptions,
    endOptions,

    IconMobile = IconMaterialSmartphone,
    IconTablet = IconMaterialTabletMac,
    IconLaptop = IconMaterialComputer,
    IconDesktop = IconMaterialDesktopWindows,

    iframeProps,
    IFrameProps,
    OptionProps,
    OptionsProps,
    OptionsWrapperProps,
    WrapperProps,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  const [responsive, setResponsive] = React.useState<any>();

  const onResponsive = React.useCallback((value_: any) => {
    setResponsive((previous: any) => {
      if (previous === value_) return '';

      return value_;
    });
  }, []);

  const responsiveOptions = [
    { name: 'Mobile', icon: IconMobile, disabled: isEnvironment('browser') && window.innerWidth < 375 },
    { name: 'Tablet', icon: IconTablet, disabled: isEnvironment('browser') && window.innerWidth < 768 },
    { name: 'Laptop', icon: IconLaptop, disabled: isEnvironment('browser') && window.innerWidth < 1440 },
    { name: 'Desktop', icon: IconDesktop, disabled: isEnvironment('browser') && window.innerWidth < 1920 }
  ];

  const WrapperStyle: any = {};

  if (responsive) {
    // iphone SE
    if (responsive === 'Mobile') {
      WrapperStyle.maxWidth = 375;
      WrapperStyle.maxHeight = 667;
    }

    // ipad mini
    if (responsive === 'Tablet') {
      WrapperStyle.maxWidth = 768;
      WrapperStyle.maxHeight = 1024;
    }

    // laptop
    if (responsive === 'Laptop') {
      WrapperStyle.maxWidth = 1440;
      WrapperStyle.maxHeight = 768;
    }

    // desktop
    if (responsive === 'Desktop') {
      WrapperStyle.maxWidth = 1920;
      WrapperStyle.maxHeight = 1080;
    }
  }

  const main = <>
    {children}

    {value && !children && (
      <IFrameElement
        className={classNames([
          classes.IFrame
        ])}

        WrapperProps={{
          align: 'center',
          justify: 'center'
        }}
      >
        {value || children}
      </IFrameElement>
    )}

    {(url || src) && !(value || children) && (
      <iframe
        title='frame'

        src={url || src}

        {...iframeProps}

        className={classNames([
          iframeProps?.className,
          classes.iframe
        ])}
      />
    )}
  </>;

  return (
    <Line
      ref={ref}

      gap={0}

      align='center'

      flex

      fullWidth

      className={classNames([
        staticClassName('Frame', theme) && [
          'amaui-Frame-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={0.5}

        direction='row'

        align='center'

        justify={{
          xxs: 'flex-start',
          xs: 'flex-start',
          default: 'flex-end'
        }}

        fullWidth

        {...OptionsWrapperProps}

        className={classNames([
          staticClassName('Frame', theme) && [
            'amaui-Frame-options-wrapper'
          ],

          OptionsWrapperProps?.className
        ])}
      >
        <Line
          gap={0.4}

          direction='row'

          align='center'

          justify='flex-end'

          {...OptionsProps}

          className={classNames([
            staticClassName('Frame', theme) && [
              'amaui-Frame-options'
            ],

            OptionsProps?.className,
            classes.options
          ])}
        >
          {startOptions}

          {responsiveOptions.map((item, index) => (
            <Tooltip
              key={index}

              label={item.name}
            >
              <IconButton
                size='small'

                selected={item.name === responsive}

                onClick={() => onResponsive(item.name)}

                disabled={item.disabled}

                {...OptionProps}

                className={classNames([
                  staticClassName('Frame', theme) && [
                    'amaui-Frame-option'
                  ],

                  OptionProps?.className
                ])}
              >
                <item.icon />
              </IconButton>
            </Tooltip>
          ))}

          {endOptions}
        </Line>
      </Line>

      <Line
        gap={0}

        align='center'

        flex

        fullWidth

        {...WrapperProps}

        className={classNames([
          staticClassName('Frame', theme) && [
            'amaui-Frame-wrapper'
          ],

          WrapperProps?.className,
          classes.wrapper
        ])}

        style={{
          ...WrapperStyle,
          ...WrapperProps?.style
        }}
      >
        {main}
      </Line>
    </Line>
  );
});

Frame.displayName = 'amaui-Frame';

export default Frame;
