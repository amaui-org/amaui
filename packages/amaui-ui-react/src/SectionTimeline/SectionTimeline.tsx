import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import ListItem from '../ListItem';
import Section, { ISection } from '../Section/Section';
import Timeline from '../Timeline';
import TimelineItem from '../TimelineItem';
import Type from '../Type';
import { TPropsAny, staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {

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

  TimelineProps?: TPropsAny;
  TimelineItemProps?: TPropsAny;
  TitleProps?: TPropsAny;
  HeadingProps?: TPropsAny;
  DescriptionProps?: TPropsAny;
}

const Element: React.FC<ISectionTimeline> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSectionTimeline?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    size = 'regular',

    values = [],

    TimelineProps,
    TimelineItemProps,
    TitleProps,
    HeadingProps,
    DescriptionProps,

    className,

    ...other
  } = props;

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
          'amaui-SectionTimeline-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Timeline
        {...TimelineProps}
      >
        {values?.map((item, index: number) => (
          <TimelineItem
            key={index}

            start={is('string', item.title) ? (
              <Type
                version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}

                {...TitleProps}
              >
                {item.title}
              </Type>
            ) : item.title}

            end={(
              <ListItem
                Component='div'

                primary={is('string', item.heading) ? (
                  <Type
                    version={size === 'large' ? 'l1' : size === 'regular' ? 'l2' : 'l3'}

                    {...HeadingProps}
                  >
                    {item.heading}
                  </Type>
                ) : item.heading}

                secondary={is('string', item.description) ? (
                  <Type
                    version={size === 'large' ? 'b2' : size === 'regular' ? 'b3' : 'b3'}

                    {...DescriptionProps}
                  >
                    {item.description}
                  </Type>
                ) : item.description}

                noPadding
              />
            )}

            {...TimelineItemProps}
          />
        ))}
      </Timeline>
    </Section>
  );
});

Element.displayName = 'amaui-SectionTimeline';

export default Element;
