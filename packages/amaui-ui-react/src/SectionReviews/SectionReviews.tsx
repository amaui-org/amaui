import React from 'react';

import { is, textToInnerHTML } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import LineElement from '../Line';
import SectionElement, { ISection } from '../Section/Section';
import TypeElement from '../Type';
import AvatarElement from '../Avatar';
import RatingElement from '../Rating';
import { IMediaObject, IPropsAny } from '../types';
import { staticClassName } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    overflow: 'hidden'
  },

  reviews: {
    overflowX: 'auto',
    padding: '0px 4px 12px',
    maxWidth: '100%'
  },

  review: {
    flex: '0 0 auto',
    background: theme.palette.background.primary.secondary
  },

  review_size_small: {
    width: '240px',
    padding: `${theme.methods.space.value(2, 'px')} ${theme.methods.space.value(2.5, 'px')}`,
    borderRadius: theme.methods.shape.radius.value(2)
  },

  review_size_regular: {
    width: '340px',
    padding: `${theme.methods.space.value(3, 'px')} ${theme.methods.space.value(3.5, 'px')}`,
    borderRadius: theme.methods.shape.radius.value(3)
  },

  review_size_large: {
    width: '440px',
    padding: `${theme.methods.space.value(4, 'px')} ${theme.methods.space.value(4.5, 'px')}`,
    borderRadius: theme.methods.shape.radius.value(4)
  }
}), { name: 'amaui-SectionReviews' });

export interface ISectionReviewsItem {
  name: string;
  meta?: string;
  description: string;
  rating?: number;
  image?: string | IMediaObject;
}

export interface ISectionReviews extends ISection {
  values?: ISectionReviewsItem[];

  size?: 'small' | 'regular' | 'large';

  AvatarProps?: IPropsAny;
  TypeProps?: IPropsAny;
  NameProps?: IPropsAny;
  MetaProps?: IPropsAny;
  DescriptionProps?: IPropsAny;
  RatingProps?: IPropsAny;
  ReviewProps?: IPropsAny;
}

const Element: React.FC<ISectionReviews> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSectionReviews?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Section = React.useMemo(() => theme?.elements?.Section || SectionElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Avatar = React.useMemo(() => theme?.elements?.Avatar || AvatarElement, [theme]);

  const Rating = React.useMemo(() => theme?.elements?.Rating || RatingElement, [theme]);

  const {
    values = [],

    size = 'regular',

    AvatarProps,
    TypeProps,
    NameProps,
    MetaProps,
    DescriptionProps,
    RatingProps,
    ReviewProps,
    ReviewsProps,

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

      align='center'

      className={classNames([
        staticClassName('SectionReviews', theme) && [
          'amaui-SectionReviews-root',
          `amaui-SectionReviews-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={2}

        direction='row'

        align='flex-start'

        fullWidth

        {...ReviewsProps}

        className={classNames([
          staticClassName('SectionReviews', theme) && [
            'amaui-SectionReviews-reviews'
          ],

          ReviewsProps?.className,
          classes.reviews
        ])}
      >
        {values.filter(Boolean).map((item, index) => (
          <Line
            key={index}

            gap={1.4}

            direction='column'

            {...ReviewProps}

            className={classNames([
              staticClassName('SectionReviews', theme) && [
                'amaui-SectionReviews-review'
              ],

              ReviewProps?.className,
              classes.review,
              classes[`review_size_${size}`]
            ])}
          >
            <Line
              gap={1.7}

              direction='row'

              align='center'
            >
              <Avatar
                size={size}

                image={(is('string', item.image) ? item.image : (item.image as IMediaObject)?.url || (item.image as IMediaObject)?.urlSmall) as any}

                {...AvatarProps}

                className={classNames([
                  staticClassName('SectionReviews', theme) && [
                    'amaui-SectionReviews-avatar'
                  ],

                  AvatarProps?.className
                ])}
              >
                {item.name?.split(' ').map(item_ => item_[0]).join('')}
              </Avatar>

              <Line
                gap={0.5}

                direction='column'
              >
                <Rating
                  value={item.rating}

                  size={['regular', 'small'].includes(size) ? 'small' : 'regular'}

                  readOnly

                  {...RatingProps}

                  className={classNames([
                    staticClassName('SectionReviews', theme) && [
                      'amaui-SectionReviews-rating'
                    ],

                    RatingProps?.className
                  ])}
                />

                <Line
                  gap={0.14}

                  direction='column'
                >
                  <Type
                    version={size === 'large' ? 't2' : size === 'regular' ? 't3' : 'l1'}

                    dangerouslySetInnerHTML={{
                      __html: textToInnerHTML(item.name)
                    }}

                    {...NameProps}

                    className={classNames([
                      staticClassName('SectionReviews', theme) && [
                        'amaui-SectionReviews-name'
                      ],

                      NameProps?.className
                    ])}
                  />

                  {item.meta && (
                    <Type
                      version={size === 'large' ? 'b2' : size === 'regular' ? 'b3' : 'b3'}

                      dangerouslySetInnerHTML={{
                        __html: textToInnerHTML(item.meta)
                      }}

                      {...MetaProps}

                      className={classNames([
                        staticClassName('SectionReviews', theme) && [
                          'amaui-SectionReviews-meta'
                        ],

                        MetaProps?.className
                      ])}
                    />
                  )}
                </Line>
              </Line>
            </Line>

            <Line
              gap={1}

              direction='column'
            >
              <Type
                version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}

                dangerouslySetInnerHTML={{
                  __html: textToInnerHTML(item.description)
                }}

                {...DescriptionProps}

                className={classNames([
                  staticClassName('SectionReviews', theme) && [
                    'amaui-SectionReviews-description'
                  ],

                  DescriptionProps?.className
                ])}
              />
            </Line>
          </Line>
        ))}
      </Line>
    </Section>
  );
});

Element.displayName = 'amaui-SectionReviews';

export default Element;
