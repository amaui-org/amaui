import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

import Expand from '../Expand';
import Icon from '../Icon';
import IconButton from '../IconButton';
import Grid from '../Grid';
import Line from '../Line';
import Type from '../Type';
import Fade from '../Fade';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    transition: theme.methods.transitions.make(['margin', 'boxShadow']),
    width: '100%',

    '&:first-of-type': {
      borderTopLeftRadius: `${theme.shape.radius.unit / 2}px`,
      borderTopRightRadius: `${theme.shape.radius.unit / 2}px`
    },

    '&:last-of-type': {
      borderBottomLeftRadius: `${theme.shape.radius.unit / 2}px`,
      borderBottomRightRadius: `${theme.shape.radius.unit / 2}px`
    }
  },

  background: {
    background: theme.palette.background.default.primary
  },

  elevation_0: { boxShadow: theme.shadows.values.neutral[0] },

  elevation_1: { boxShadow: theme.shadows.values.neutral[1] },

  elevation_2: { boxShadow: theme.shadows.values.neutral[2] },

  expanded_margin_vertical_start: { marginBlockStart: '16px' },

  expanded_margin_vertical_both: { marginBlock: '16px' },

  expanded_margin_vertical_end: { marginBlockEnd: '16px' },

  expanded_margin_vertical_none: { marginBlock: '0px' },

  wrapperHeader: {
    cursor: 'pointer',
    transition: theme.methods.transitions.make('padding'),
    userSelect: 'none'
  },

  header: {

  },

  header_padding_vertical_start: { paddingBlockStart: '8px' },

  header_padding_vertical_both: { paddingBlock: '8px' },

  header_padding_vertical_end: { paddingBlockEnd: '8px' },

  header_padding_vertical_none: { paddingBlock: '0px' },

  expanded_header_padding_vertical_start: { paddingBlockStart: '16px' },

  expanded_header_padding_vertical_both: { paddingBlock: '16px' },

  expanded_header_padding_vertical_end: { paddingBlockEnd: '16px' },

  expanded_header_padding_vertical_none: { paddingBlock: '0px' },

  header_padding_horizontal_start: { paddingInlineStart: '16px' },

  header_padding_horizontal_both: { paddingInline: '16px' },

  header_padding_horizontal_end: { paddingInlineEnd: '16px' },

  header_padding_horizontal_none: { paddingInline: '0px' },

  main: {

  },

  main_padding_vertical_start: { paddingBlockStart: '16px' },

  main_padding_vertical_both: { paddingBlock: '16px' },

  main_padding_vertical_end: { paddingBlockEnd: '16px' },

  main_padding_vertical_none: { paddingBlock: '0px' },

  main_padding_horizontal_start: { paddingInlineStart: '16px' },

  main_padding_horizontal_both: { paddingInline: '16px' },

  main_padding_horizontal_end: { paddingInlineEnd: '16px' },

  main_padding_horizontal_none: { paddingInline: '0px' },

  icon: {
    transition: theme.methods.transitions.make('transform')
  },

  icon_open: {
    transform: 'rotate(180deg)'
  },

  iconButton: {
    alignSelf: 'flex-start'
  },

  disabled: {
    cursor: 'pointer',
    pointerEvents: 'none',
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  }
}), { name: 'AmauiAccordion' });

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

const Accordion = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiAccordion?.props?.default }), [props_]);

  const {
    primary,
    secondary,
    elevation = 0,
    ExpandIcon = IconMaterialExpandMoreRounded,
    background,
    noExpandButton,
    expandedMarginVertical = 'both',
    expandedHeaderPaddingVertical = 'both',
    headerPaddingVertical = 'both',
    headerPaddingHorizontal = 'none',
    mainPaddingVertical = 'both',
    mainPaddingHorizontal = 'none',
    openDefault,
    open: open_,
    onChange,
    TransitionComponent: TransitionComponent_ = Fade,
    TransitionComponentProps: TransitionComponentProps_ = { add: true },
    noTransition,
    disabled,

    ExpandProps = {},

    className,

    children,

    ...other
  } = props;

  const [open, setOpen] = React.useState(openDefault !== undefined ? openDefault : open_);

  const { classes } = useStyle(props);

  let TransitionComponent = TransitionComponent_;
  let TransitionComponentProps = TransitionComponentProps_;

  React.useEffect(() => {
    if (open_ !== open) setOpen(open_);
  }, [open_]);

  const onClick = React.useCallback(() => {
    if (!disabled) {
      const valueNew = !open;

      // Update inner or controlled
      if (props.hasOwnProperty('open')) {
        if (is('function', onChange)) onChange(valueNew);
      }
      else setOpen(valueNew);
    }
  }, [open, disabled]);

  if (!noTransition) TransitionComponentProps.in = open;
  else {
    TransitionComponent = React.Fragment;
    TransitionComponentProps = {};
  }

  return (
    <div
      ref={ref}

      className={classNames([
        staticClassName('Accordion', theme) && [
          'AmauiAccordion-root',
          elevation !== undefined && classes[`elevation_${elevation}`],
          open && [
            `AmauiAccordion-expanded-margin-vertical-${expandedMarginVertical}`
          ],
          background && `AmauiAccordion-background`,
          disabled && `AmauiAccordion-disabled`
        ],

        className,
        classes.root,
        classes[`elevation_${elevation}`],
        open && [
          classes[`expanded_margin_vertical_${expandedMarginVertical}`]
        ],
        background && classes.background,
        disabled && classes.disabled
      ])}

      {...other}
    >
      <Line
        gap={3}

        direction='row'

        align='center'

        onClick={onClick}

        className={classNames([
          staticClassName('Accordion', theme) && [
            'AmauiAccordion-wrapperHeader'
          ],

          classes.wrapperHeader,
          classes[`header_padding_vertical_${headerPaddingVertical}`],
          classes[`header_padding_horizontal_${headerPaddingHorizontal}`],
          open && [
            classes[`expanded_header_padding_vertical_${expandedHeaderPaddingVertical}`]
          ]
        ])}
      >
        <Grid
          gap={{ xs: 0.5, sm: 3 }}

          direction={{ xs: 'column', sm: 'row' }}

          line

          className={classNames([
            staticClassName('Accordion', theme) && [
              'AmauiAccordion-header'
            ],

            classes.header
          ])}
        >
          <Grid
            values={{ sm: !secondary ? 10 : 3 }}
          >
            {is('simple', primary) ? (
              <Type
                version='b1'

                color='primary'
              >
                {primary}
              </Type>
            ) : primary}
          </Grid>

          {secondary && (
            <Grid
              values={{ sm: 7 }}
            >
              {is('simple', secondary) ? (
                <Type
                  version='b1'

                  color='secondary'
                >
                  {secondary}
                </Type>
              ) : secondary}
            </Grid>
          )}
        </Grid>

        {!noExpandButton && (
          <IconButton
            color='default'

            className={classNames([
              staticClassName('Accordion', theme) && [
                'AmauiAccordion-iconButton'
              ],

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

      <Expand
        in={open}

        {...ExpandProps}
      >
        <TransitionComponent
          {...TransitionComponentProps}
        >
          <div
            className={classNames([
              staticClassName('Accordion', theme) && [
                'AmauiAccordion-main'
              ],

              classes.main,
              classes[`main_padding_vertical_${mainPaddingVertical}`],
              classes[`main_padding_horizontal_${mainPaddingHorizontal}`],
            ])}
          >
            {children}
          </div>
        </TransitionComponent>
      </Expand>
    </div>
  );
});

Accordion.displayName = 'AmauiAccordion';

export default Accordion;
