import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import Fade from '../Fade';
import Expand from '../Expand';
import Icon from '../Icon';
import IconButton from '../IconButton';
import Grid from '../Grid';
import Line from '../Line';
import Type from '../Type';
import { ITransition, TTransitionStatus } from '../Transition';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';
import { IColor, IElement, IElementReference, IElevation, IPropsAny, ITonal } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    transition: theme.methods.transitions.make(['margin', 'boxShadow']),
    width: '100%',

    '&:first-of-type': {
      marginTop: '0px',
      borderTopLeftRadius: `${theme.shape.radius.unit / 2}px`,
      borderTopRightRadius: `${theme.shape.radius.unit / 2}px`
    },

    '&:last-of-type': {
      marginBottom: '0px',
      borderBottomLeftRadius: `${theme.shape.radius.unit / 2}px`,
      borderBottomRightRadius: `${theme.shape.radius.unit / 2}px`
    }
  },

  expanded_margin_vertical_start: { marginBlockStart: '16px' },

  expanded_margin_vertical_both: { marginBlock: '16px' },

  expanded_margin_vertical_end: { marginBlockEnd: '16px' },

  expanded_margin_vertical_none: { marginBlock: '0px' },

  wrapperHeader: {
    cursor: 'pointer',
    transition: theme.methods.transitions.make('padding'),
    userSelect: 'none'
  },

  header: {},

  expanded_header_padding_vertical_start: { paddingBlockStart: '16px !important' },

  expanded_header_padding_vertical_both: { paddingBlock: '16px !important' },

  expanded_header_padding_vertical_end: { paddingBlockEnd: '16px !important' },

  expanded_header_padding_vertical_none: { paddingBlock: '0px !important' },

  header_padding_vertical_start: { paddingBlockStart: '8px' },

  header_padding_vertical_both: { paddingBlock: '8px' },

  header_padding_vertical_end: { paddingBlockEnd: '8px' },

  header_padding_vertical_none: { paddingBlock: '0px' },

  header_padding_horizontal_start: { paddingInlineStart: '16px' },

  header_padding_horizontal_both: { paddingInline: '16px' },

  header_padding_horizontal_end: { paddingInlineEnd: '16px' },

  header_padding_horizontal_none: { paddingInline: '0px' },

  main: {
    width: '100%'
  },

  main_padding_vertical_start: { paddingBlockStart: '16px' },

  main_padding_vertical_both: { paddingBlock: '16px' },

  main_padding_vertical_end: { paddingBlockEnd: '16px' },

  main_padding_vertical_none: { paddingBlock: '0px' },

  main_padding_horizontal_start: { paddingInlineStart: '16px' },

  main_padding_horizontal_both: { paddingInline: '16px' },

  main_padding_horizontal_end: { paddingInlineEnd: '16px' },

  main_padding_horizontal_none: { paddingInline: '0px' },

  secondary: {
    opacity: theme.palette.visual_contrast.default.opacity.primary
  },

  icon: {
    transition: theme.methods.transitions.make('transform')
  },

  icon_open: {
    transform: 'rotate(-180deg)'
  },

  iconButton: {
    flex: '0 0 auto'
  },

  noBackground: {
    '&.amaui-Surface-root': {
      background: 'transparent'
    }
  },

  disabled: {
    cursor: 'pointer',
    pointerEvents: 'none',
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  }
}), { name: 'amaui-Accordion' });

const IconMaterialExpandMoreRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandMoreRounded'
      short_name='ExpandMore'

      {...props}
    >
      <path d="M12 14.95Q11.8 14.95 11.625 14.887Q11.45 14.825 11.3 14.675L6.675 10.05Q6.4 9.775 6.413 9.362Q6.425 8.95 6.7 8.675Q6.975 8.4 7.4 8.4Q7.825 8.4 8.1 8.675L12 12.575L15.925 8.65Q16.2 8.375 16.613 8.387Q17.025 8.4 17.3 8.675Q17.575 8.95 17.575 9.375Q17.575 9.8 17.3 10.075L12.7 14.675Q12.55 14.825 12.375 14.887Q12.2 14.95 12 14.95Z" />
    </Icon>
  );
});

type TPadding = 'start' | 'end' | 'both' | 'none';

export interface IAccordion extends ISurface {
  tonal?: ITonal;
  color?: IColor;
  elevation?: IElevation;

  primary?: IElement;
  secondary?: IElement;

  start?: any;
  end?: any;

  openDefault?: boolean;
  open?: boolean;
  onChange?: (open: boolean) => any;

  noBackground?: boolean;
  noExpandButton?: boolean;
  expandedMarginVertical?: TPadding;
  expandedHeaderPaddingVertical?: TPadding;
  headerPaddingVertical?: TPadding;
  headerPaddingHorizontal?: TPadding;
  mainPaddingVertical?: TPadding;
  mainPaddingHorizontal?: TPadding;
  noTransition?: boolean;
  disabled?: boolean;

  ExpandProps?: IPropsAny;
  TransitionComponentProps?: IPropsAny;
  WrapperHeaderProps?: IPropsAny;
  HeaderProps?: IPropsAny;
  IconButtonProps?: IPropsAny;
  StartProps?: IPropsAny;
  EndProps?: IPropsAny;

  ExpandIcon?: IElementReference;
  TransitionComponent?: IElementReference;
}

const AccordionDelays = {
  Transition: {
    enter: 70
  }
};

const Accordion: React.FC<IAccordion> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiAccordion?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color = 'primary',
    elevation = 0,

    primary,
    secondary,

    start,
    end,

    openDefault,
    open: open_,
    onChange,

    noBackground,
    noExpandButton,
    expandedMarginVertical = 'both',
    expandedHeaderPaddingVertical = 'both',
    headerPaddingVertical = 'both',
    headerPaddingHorizontal = 'both',
    mainPaddingVertical = 'both',
    mainPaddingHorizontal = 'both',
    noTransition,
    disabled,

    ExpandIcon = IconMaterialExpandMoreRounded,
    TransitionComponent: TransitionComponent_ = Fade,

    Component = 'div',

    ExpandProps,
    TransitionComponentProps: TransitionComponentProps_,
    WrapperHeaderProps,
    HeaderProps,
    IconButtonProps,
    StartProps,
    EndProps,

    className,

    children,

    ...other
  } = props;

  const [open, setOpen] = React.useState(openDefault !== undefined ? openDefault : open_);
  const [parent, setParent] = React.useState();

  const refs = {
    root: React.useRef<any>(),
    ids: {
      button: React.useId(),
      data: React.useId()
    },
    expandInProgress: React.useRef<boolean>()
  };

  const { classes } = useStyle(props);

  let TransitionComponent = TransitionComponent_;

  let TransitionComponentProps: ITransition = {
    add: true,

    delay: {
      enter: AccordionDelays.Transition.enter
    },

    ...TransitionComponentProps_
  };

  React.useEffect(() => {
    if (open_ !== undefined && open_ !== open) setOpen(open_);
  }, [open_, open]);

  const onClick = React.useCallback(() => {
    if (refs.expandInProgress.current) return;

    if (!disabled) {
      const valueNew = !open;

      // Update inner or controlled
      if (!props.hasOwnProperty('open')) setOpen(valueNew);

      if (is('function', onChange)) onChange(valueNew);
    }
  }, [open, disabled]);

  if (!noTransition) TransitionComponentProps.in = open;
  else {
    TransitionComponent = React.Fragment;
    TransitionComponentProps = {};
  }

  return (
    <Surface
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else if (ref?.current) ref.current = item;
        }

        refs.root.current = item;

        setParent(item);
      }}

      tonal={tonal}

      color={color}

      elevation={elevation}

      Component={Component}

      className={classNames([
        staticClassName('Accordion', theme) && [
          'amaui-Accordion-root',
          disabled && `amaui-Accordion-disabled`
        ],

        className,
        classes.root,
        open && classes[`expanded_margin_vertical_${expandedMarginVertical}`],
        noBackground && classes.noBackground,
        disabled && classes.disabled
      ])}

      {...other}
    >
      <Line
        gap={3}

        direction='row'

        align='center'

        onClick={onClick}

        {...WrapperHeaderProps}

        className={classNames([
          staticClassName('Accordion', theme) && [
            'amaui-Accordion-wrapper-header'
          ],

          WrapperHeaderProps?.className,
          classes.wrapperHeader,
          classes[`header_padding_vertical_${headerPaddingVertical}`],
          classes[`header_padding_horizontal_${headerPaddingHorizontal}`],
          open && [
            classes[`expanded_header_padding_vertical_${expandedHeaderPaddingVertical}`]
          ]
        ])}
      >
        {start}

        <Grid
          gap={{
            xxs: 0.5,
            xs: 0.5,
            default: 3
          } as any}

          direction={{
            xxs: 'column',
            xs: 'column',
            default: 'row'
          } as any}

          {...HeaderProps}

          className={classNames([
            staticClassName('Accordion', theme) && [
              'amaui-Accordion-header'
            ],

            HeaderProps?.className,
            classes.header
          ])}
        >
          <Grid
            values={{ sm: !secondary ? 12 : 3 } as any}
          >
            {is('simple', primary) ? (
              <Type
                version='b1'

                className={classNames([
                  staticClassName('Accordion', theme) && [
                    'amaui-Accordion-primary'
                  ],

                  classes.primary
                ])}
              >
                {primary}
              </Type>
            ) : (
              React.Children.toArray(primary)
                .filter(Boolean)
                .map((item: any, index: number) => {
                  if (is('simple', item)) return item;

                  return (
                    React.cloneElement(item, {
                      key: index
                    })
                  );
                })
            )}
          </Grid>

          {secondary && (
            <Grid
              values={{ sm: 7 } as any}
            >
              {is('simple', secondary) ? (
                <Type
                  version='b1'

                  className={classNames([
                    staticClassName('Accordion', theme) && [
                      'amaui-Accordion-secondary'
                    ],

                    classes.secondary
                  ])}
                >
                  {secondary}
                </Type>
              ) : (
                React.Children.toArray(secondary)
                  .filter(Boolean)
                  .map((item: any, index: number) => {
                    if (is('simple', item)) return item;

                    return (
                      React.cloneElement(item, {
                        key: index
                      })
                    );
                  })
              )}
            </Grid>
          )}
        </Grid>

        <Line
          gap={0}

          direction='row'

          align='center'

          {...EndProps}
        >
          {end}

          {!noExpandButton && (
            <IconButton
              color='inherit'

              aria-label={primary || secondary}

              aria-controls={refs.ids.data}

              aria-expanded={open}

              id={refs.ids.button}

              {...IconButtonProps}

              className={classNames([
                staticClassName('Accordion', theme) && [
                  'amaui-Accordion-icon-button'
                ],

                IconButtonProps?.className,
                classes.iconButton
              ])}
            >
              <ExpandIcon
                className={classNames([
                  classes.icon,
                  open && classes.icon_open
                ])}
              />
            </IconButton>
          )}
        </Line>
      </Line>

      <Expand
        in={open}

        parent={parent}

        onTransition={(element: any, status: TTransitionStatus) => {
          refs.expandInProgress.current = !['appended', 'entered', 'exited', 'removed'].includes(status);
        }}

        role='region'

        aria-labelledby={refs.ids.button}

        id={refs.ids.data}

        {...ExpandProps}
      >
        <TransitionComponent
          {...TransitionComponentProps}
        >
          <Line
            className={classNames([
              staticClassName('Accordion', theme) && [
                'amaui-Accordion-main'
              ],

              classes.main,
              classes[`main_padding_vertical_${mainPaddingVertical}`],
              classes[`main_padding_horizontal_${mainPaddingHorizontal}`],
            ])}
          >
            {children}
          </Line>
        </TransitionComponent>
      </Expand>
    </Surface>
  );
});

Accordion.displayName = 'amaui-Accordion';

export default Accordion;
