import React from 'react';

import { is, textToInnerHTML } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import SectionElement, { ISection } from '../Section/Section';
import ListItemElement from '../ListItem';
import TimelineElement from '../Timeline';
import TimelineItemElement from '../TimelineItem';
import TypeElement from '../Type';
import { staticClassName } from '../utils';
import { IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  timeline: {

  },

  timelineItem: {
    '&.amaui-TimelineItem-root': {
      width: '100%'
    },

    '& .amaui-TimelineItem-aside': {
      width: 'calc(50% - 6px)'
    }
  }
}), { name: 'amaui-SectionTimeline' });

export interface ISectionTimelineItem {
  title?: string;
  heading?: string;
  description?: string;
}

export interface ISectionTimeline extends ISection {
  size?: 'small' | 'regular' | 'large';

  values?: ISectionTimelineItem[];

  TimelineProps?: IPropsAny;
  TimelineItemProps?: IPropsAny;
  TitleProps?: IPropsAny;
  HeadingProps?: IPropsAny;
  DescriptionProps?: IPropsAny;
  ItemStartProps?: IPropsAny;
  ItemEndProps?: IPropsAny;
}

const SectionTimeline: React.FC<ISectionTimeline> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSectionTimeline?.props?.default, ...props_ }), [props_]);

  const Section = React.useMemo(() => theme?.elements?.Section || SectionElement, [theme]);

  const ListItem = React.useMemo(() => theme?.elements?.ListItem || ListItemElement, [theme]);

  const Timeline = React.useMemo(() => theme?.elements?.Timeline || TimelineElement, [theme]);

  const TimelineItem = React.useMemo(() => theme?.elements?.TimelineItem || TimelineItemElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    size = 'regular',

    values = [],

    TimelineProps,
    TimelineItemProps,
    TitleProps,
    HeadingProps,
    DescriptionProps,
    ItemStartProps,
    ItemEndProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const refs = {
    root: React.useRef<any>()
  };

  return (
    <Section
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      className={classNames([
        staticClassName('SectionTimeline', theme) && [
          'amaui-SectionTimeline-root',
          `amaui-SectionTimeline-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Timeline
        fullWidth

        {...TimelineProps}

        className={classNames([
          staticClassName('SectionTimeline', theme) && [
            'amaui-SectionTimeline-timeline'
          ],

          TimelineProps?.className,
          classes.timeline
        ])}
      >
        {values?.map((item, index: number) => (
          <TimelineItem
            key={index}

            start={is('string', item.title) ? (
              <Type
                version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}

                align='right'

                {...ItemStartProps}

                className={classNames([
                  staticClassName('SectionTimeline', theme) && [
                    'amaui-SectionTimeline-item-start'
                  ],

                  ItemStartProps?.className,
                  classes.start
                ])}

                dangerouslySetInnerHTML={{
                  __html: textToInnerHTML(item.title)
                }}
              />
            ) : item.title}

            end={(
              <ListItem
                Component='div'

                primary={is('string', item.heading) ? (
                  <Type
                    version={size === 'large' ? 't1' : size === 'regular' ? 't2' : 't3'}

                    {...HeadingProps}

                    dangerouslySetInnerHTML={{
                      __html: textToInnerHTML(item.heading)
                    }}
                  />
                ) : item.heading}

                secondary={is('string', item.description) ? (
                  <Type
                    version={size === 'large' ? 'b2' : size === 'regular' ? 'b3' : 'b3'}

                    {...DescriptionProps}

                    dangerouslySetInnerHTML={{
                      __html: textToInnerHTML(item.description)
                    }}
                  />
                ) : item.description}

                noBackground

                {...ItemEndProps}

                className={classNames([
                  staticClassName('SectionTimeline', theme) && [
                    'amaui-SectionTimeline-item-end'
                  ],

                  ItemEndProps?.className,
                  classes.end
                ])}

                noPadding
              />
            )}

            {...TimelineItemProps}

            className={classNames([
              staticClassName('SectionTimeline', theme) && [
                'amaui-SectionTimeline-timeline-item'
              ],

              TimelineItemProps?.className,
              classes.timelineItem
            ])}
          />
        ))}
      </Timeline>
    </Section>
  );
});

SectionTimeline.displayName = 'amaui-SectionTimeline';

export default SectionTimeline;
