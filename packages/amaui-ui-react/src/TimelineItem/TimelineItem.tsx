import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import Divider from '../Divider';
import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    '&:last-of-type': {
      '& $divider': {
        display: 'none'
      }
    }
  },

  orientation_vertical: {
    minHeight: '77px'
  },

  orientation_horizontal: {
    minWidth: '114px'
  },

  icon: {
    display: 'inline-block',
    width: '12px',
    height: '12px',
    borderRadius: '50%'
  },

  aside_orientation_vertical: {
    padding: '4px 24px'
  },

  aside_orientation_horizontal: {
    padding: '24px 4px'
  },

  iconWrapper: {
    lineHeight: 0
  },

  iconWrapper_orientation_vertical: {
    marginBlock: '8px'
  },

  iconWrapper_orientation_horizontal: {
    marginInline: '8px'
  },

  divider: {
    '&.AmauiDivider-root': {
      margin: '0px'
    }
  },

  divider_orientation_vertical: {
    '&.AmauiDivider-root': {
      width: '2px'
    }
  },

  divider_orientation_horizontal: {
    '&.AmauiDivider-root': {
      height: '2px'
    }
  }
}), { name: 'AmauiTimelineItem' });

const TimelineItem = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTimelineItem?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    orientation = 'vertical',

    start,
    end,

    DividerProps: DividerProps_ = !props.Divider ? {
      tonal: 'secondary',
      color: 'neutral'
    } : undefined,
    IconProps = !props.Icon ? {
      tonal: 'secondary',
      color: 'neutral',
      version: 'filled'
    } : undefined,

    Icon,
    Divider: Divider_,

    Component = 'li',

    className,

    children,

    ...other
  } = props;

  const direction = orientation === 'vertical' ? 'row' : 'column';

  const lineDirection = orientation === 'vertical' ? 'column' : 'row';

  const DividerProps = {
    ...DividerProps_
  };

  if (!Divider_) {
    DividerProps.orientation = orientation;
  }

  return (
    <Line
      ref={ref}

      gap={0}

      align='unset'

      justify='unset'

      direction={direction}

      Component={Component}

      className={classNames([
        staticClassName('TimelineItem', theme) && [
          'AmauiTimelineItem-root',
          `AmauiTimelineItem-orientation-${orientation}`
        ],

        className,
        classes.root,
        classes[`orientation_${orientation}`]
      ])}

      {...other}
    >
      {start && (
        <div
          className={classNames([
            staticClassName('TimelineItem', theme) && [
              'AmauiTimelineItem-aside',
              'AmauiTimelineItem-item',
              'AmauiTimelineItem-start'
            ],

            classes.aside,
            classes.item,
            classes.start,
            classes[`aside_orientation_${orientation}`]
          ])}
        >
          {start}
        </div>
      )}

      <Line
        gap={0}

        direction={lineDirection}

        align='center'

        justify='flex-start'

        className={classNames([
          staticClassName('TimelineItem', theme) && [
            'AmauiTimelineItem-item',
            'AmauiTimelineItem-middle'
          ],

          classes.item,
          classes.middle
        ])}
      >
        <div
          className={classNames([
            staticClassName('TimelineItem', theme) && [
              'AmauiTimelineItem-icon-wrapper'
            ],

            classes.iconWrapper,
            classes[`iconWrapper_orientation_${orientation}`]
          ])}
        >
          {Icon ? Icon : (
            <Surface
              {...IconProps}

              className={classNames([
                staticClassName('TimelineItem', theme) && [
                  'AmauiTimelineItem-icon'
                ],

                IconProps?.className,
                classes.icon
              ])}
            />
          )}
        </div>

        {Divider_ ? Divider_ : (
          <Divider
            {...DividerProps}

            className={classNames([
              staticClassName('TimelineItem', theme) && [
                'AmauiTimelineItem-divider'
              ],

              DividerProps?.className,
              classes.divider,
              classes[`divider_orientation_${orientation}`]
            ])}

            flex
          />
        )}
      </Line>

      {(end || children) && (
        <div
          className={classNames([
            staticClassName('TimelineItem', theme) && [
              'AmauiTimelineItem-aside',
              'AmauiTimelineItem-item',
              'AmauiTimelineItem-end'
            ],

            classes.aside,
            classes.item,
            classes.end,
            classes[`aside_orientation_${orientation}`]
          ])}
        >
          {end || children}
        </div>
      )}
    </Line>
  );
});

TimelineItem.displayName = 'AmauiTimelineItem';

export default TimelineItem;
