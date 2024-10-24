import React from 'react';

import { is, unique } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import SpeedDialElement from '../SpeedDial';
import SpeedDialItemElement from '../SpeedDialItem';
import TransitionElement, { TTransitionStatus } from '../Transition';
import IconButtonElement from '../IconButton';
import IconElement from '../Icon';
import MoveElement from '../Move';
import WidgetsContext from './Context';
import { staticClassName } from '../utils';
import { IBaseElement, IElement, IPropsAny, IElementReference } from '../types';

const IconMaterialCloseRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='CloseRounded'
      short_name='Close'

      {...props}
    >
      <path d="M12 13.4 7.1 18.3Q6.825 18.575 6.4 18.575Q5.975 18.575 5.7 18.3Q5.425 18.025 5.425 17.6Q5.425 17.175 5.7 16.9L10.6 12L5.7 7.1Q5.425 6.825 5.425 6.4Q5.425 5.975 5.7 5.7Q5.975 5.425 6.4 5.425Q6.825 5.425 7.1 5.7L12 10.6L16.9 5.7Q17.175 5.425 17.6 5.425Q18.025 5.425 18.3 5.7Q18.575 5.975 18.575 6.4Q18.575 6.825 18.3 7.1L13.4 12L18.3 16.9Q18.575 17.175 18.575 17.6Q18.575 18.025 18.3 18.3Q18.025 18.575 17.6 18.575Q17.175 18.575 16.9 18.3Z" />
    </IconElement>
  );
});

const IconMaterialWidgetsRounded = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='WidgetsRounded'
      short_name='Widgets'

      {...props}
    >
      <path d="M16.65 12.575Q16.45 12.575 16.275 12.512Q16.1 12.45 15.95 12.3L11.7 8.05Q11.55 7.9 11.488 7.725Q11.425 7.55 11.425 7.35Q11.425 7.15 11.488 6.975Q11.55 6.8 11.7 6.65L15.95 2.4Q16.1 2.25 16.275 2.188Q16.45 2.125 16.65 2.125Q16.85 2.125 17.025 2.188Q17.2 2.25 17.35 2.4L21.6 6.65Q21.75 6.8 21.812 6.975Q21.875 7.15 21.875 7.35Q21.875 7.55 21.812 7.725Q21.75 7.9 21.6 8.05L17.35 12.3Q17.2 12.45 17.025 12.512Q16.85 12.575 16.65 12.575ZM4 11Q3.575 11 3.288 10.712Q3 10.425 3 10V4Q3 3.575 3.288 3.287Q3.575 3 4 3H10Q10.425 3 10.713 3.287Q11 3.575 11 4V10Q11 10.425 10.713 10.712Q10.425 11 10 11ZM14 21Q13.575 21 13.288 20.712Q13 20.425 13 20V14Q13 13.575 13.288 13.287Q13.575 13 14 13H20Q20.425 13 20.712 13.287Q21 13.575 21 14V20Q21 20.425 20.712 20.712Q20.425 21 20 21ZM4 21Q3.575 21 3.288 20.712Q3 20.425 3 20V14Q3 13.575 3.288 13.287Q3.575 13 4 13H10Q10.425 13 10.713 13.287Q11 13.575 11 14V20Q11 20.425 10.713 20.712Q10.425 21 10 21ZM5 9H9V5H5ZM16.675 10.2 19.5 7.375 16.675 4.55 13.85 7.375ZM15 19H19V15H15ZM5 19H9V15H5ZM9 9ZM13.85 7.375ZM9 15ZM15 15Z" />
    </IconElement>
  );
});

const useStyle = styleMethod(theme => ({
  root: {
    width: '100%',
    padding: `0 ${theme.methods.space.value(13, 'px')}`,
    pointerEvents: 'none',
    zIndex: theme.z_index.modal - 1
  },

  line: {
    pointerEvents: 'auto'
  },

  fixed: {
    position: 'fixed'
  },

  position_top: {
    top: '24px'
  },

  position_bottom: {
    bottom: '24px'
  },

  widget: {
    userSelect: 'none',
    boxShadow: theme.shadows.values.default[6]
  },

  item: {
    position: 'fixed',
    top: '40px',
    left: '40px',
    opacity: '0',
    transform: 'translateY(100%)',
    transition: theme?.methods.transitions.make(['opacity', 'transform'], { duration: 'rg', timing_function: 'standard' }),
    zIndex: theme.z_index.modal - 1,

    '&.enter': {
      opacity: '0',
      transform: 'translateY(100%)'
    },

    '&.entering': {
      opacity: '1',
      transform: 'translateY(0%)'
    },

    '&.entered': {
      opacity: '1',
      transform: 'translateY(0%)'
    },

    '&.exit': {
      opacity: '1',
      transform: 'translateY(0%)'
    },

    '&.exiting': {
      opacity: '0',
      transform: 'translateY(100%)'
    },

    '&.exited': {
      opacity: '0',
      transform: 'translateY(100%)'
    }
  },

  iconButton: {
    top: '8px',
    insetInlineEnd: '-8px',
    transform: `translateX(${theme.direction === 'ltr' ? '' : '-'}100%)`,
    zIndex: '1',

    '&.amaui-IconButton-root': {
      position: 'absolute'
    }
  }
}), { name: 'amaui-Widgets' });

export interface IWidgetsValue {
  open: (value?: string) => void;
  openAll: () => void;

  close: (value?: string) => void;
  closeAll: () => void;
}

export interface IWidgets extends IBaseElement {
  widgets?: IElement;

  position?: 'top' | 'bottom';

  move?: boolean;

  fixed?: boolean;

  onOpen?: (value: string) => any;
  onOpenAll?: () => any;

  onClose?: (value: string) => any;
  onCloseAll?: () => any;

  SpeedDialProps?: IPropsAny;
  MoveProps?: IPropsAny;

  Icon?: IElementReference;
  IconCloseItem?: IElementReference;
}

const Widgets: React.FC<IWidgets> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiWidgets?.props?.default, ...props_ }), [props_]);

  const SpeedDial = React.useMemo(() => theme?.elements?.SpeedDial || SpeedDialElement, [theme]);

  const SpeedDialItem = React.useMemo(() => theme?.elements?.SpeedDialItem || SpeedDialItemElement, [theme]);

  const Transition = React.useMemo(() => theme?.elements?.Transition || TransitionElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Move = React.useMemo(() => theme?.elements?.Move || MoveElement, [theme]);

  const {
    widgets,

    position = 'bottom',

    move = true,

    fixed = true,

    onOpen,
    onOpenAll,

    onClose,
    onCloseAll,

    SpeedDialProps,
    MoveProps,

    Icon: Icon_ = IconMaterialWidgetsRounded,
    IconCloseItem = IconMaterialCloseRounded,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [openItems, setOpenItems] = React.useState([]);

  const refs = {
    value: React.useRef<IWidgetsValue>({} as any),
    props: React.useRef<any>()
  };

  refs.props.current = props;

  const open = React.useCallback((value?: string) => {
    setOpenItems(items => unique([...items, value]));

    if (is('function', onOpen)) onOpen(value);
  }, []);

  const openAll = React.useCallback(() => {
    setOpenItems(() => unique(((widgets || []) as any).map((item: any) => {
      const valueItem = item.value !== undefined ? item.value : item.label;

      return valueItem;
    })));

    if (is('function', onOpenAll)) onOpenAll();
  }, []);

  const close = React.useCallback((value?: string) => {
    setOpenItems(items => unique(items.filter((item: any) => item !== value)));

    if (is('function', onClose)) onClose(value);
  }, []);

  const closeAll = React.useCallback(() => {
    setOpenItems([]);

    if (is('function', onCloseAll)) onCloseAll();
  }, []);

  // Add to the value
  refs.value.current.open = open;

  refs.value.current.openAll = openAll;

  refs.value.current.close = close;

  refs.value.current.closeAll = closeAll;

  const widgetsToUse = [...((widgets || []) as Array<IElement>)].reverse();

  return (
    <WidgetsContext.Provider value={refs.value.current}>
      {(widgets as any)?.length && <>
        <SpeedDial
          ref={ref}

          direction='top'

          position='bottom'

          alignment='start'

          Icon={Icon_}

          noRotate

          {...SpeedDialProps}
        >
          {(widgets as any).map((item: any, index: number) => {
            const valueItem = item.value !== undefined ? item.value : item.label;

            return (
              <SpeedDialItem
                key={index}

                onClick={() => !openItems.includes(valueItem) ? open(valueItem) : close(valueItem)}

                label={!openItems.includes(valueItem) ? item.label : `Close ${item.label}`}

                Icon={item.Icon}
              />
            );
          })}
        </SpeedDial>

        {widgetsToUse.map((item: any, index: number) => {
          const valueItem = item.value !== undefined ? item.value : item.label;

          const WidgetWrapper: any = Move;

          const WidgetWrapperProps = {
            version: 'fixed',

            manage: true,
            manageLevel: 1,

            disabled: !(move && item.move !== false),

            ...MoveProps
          };

          return (
            <Transition
              key={index}

              in={openItems.includes(valueItem)}

              removeOnExited
            >
              {(status: TTransitionStatus) => (
                <WidgetWrapper
                  className={classNames([
                    staticClassName('Widgets', theme) && [
                      `amaui-Widgets-item`
                    ],

                    classes.item,
                    status
                  ])}

                  {...WidgetWrapperProps}
                >
                  <IconButton
                    onClick={() => close(valueItem)}

                    color='default'

                    version='filled'

                    size='small'

                    elevation={false}

                    className={classNames([
                      staticClassName('Widgets', theme) && [
                        `amaui-Widgets-icon-button`
                      ],

                      classes.iconButton
                    ])}
                  >
                    <IconCloseItem />
                  </IconButton>

                  {React.cloneElement(item.element, {
                    className: classNames([
                      staticClassName('Widgets', theme) && [
                        `amaui-Widgets-widget`
                      ],

                      classes.widget
                    ]),

                    ...(((['amaui-Weather', 'amaui-Watch'].includes(item.element.type?.displayName))) ? {
                      shadow: true,

                      style: {
                        boxShadow: 'none'
                      }
                    } : undefined)
                  })}
                </WidgetWrapper>
              )}
            </Transition>
          );
        })}
      </>}

      {children}
    </WidgetsContext.Provider>
  );
});

Widgets.displayName = 'amaui-Widgets';

export default Widgets;
