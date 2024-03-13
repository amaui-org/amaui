import React from 'react';

import { cleanValue, is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Section, { ISection } from '../Section/Section';
import Type from '../Type';
import { staticClassName } from '../utils';
import { IMediaObject, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  name: {
    wordBreak: 'break-word'
  },

  items: {
    overflow: 'auto hidden',
    padding: '16px 0'
  },

  wrapper: {
    flex: '0 0 auto'
  },

  wrapper_size_small: {
    maxWidth: '154px'
  },

  wrapper_size_regular: {
    maxWidth: '214px'
  },

  wrapper_size_large: {
    maxWidth: '274px'
  },

  item: {
    aspectRatio: '16 / 9',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },

  gray: {
    filter: 'grayscale(1)'
  }
}), { name: 'amaui-SectionLogos' });

export interface ISectionLogos extends ISection {
  values?: IMediaObject[];

  version?: 'regular';

  size?: 'small' | 'regular' | 'large';

  gray?: boolean;

  name?: boolean;

  ItemProps?: IPropsAny;
  WrapperProps?: IPropsAny;
}

const Element: React.FC<ISectionLogos> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSectionLogos?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    values = [],

    size = 'regular',

    name,

    gray,

    ItemProps,
    WrapperProps,

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

      align='center'

      className={classNames([
        staticClassName('SectionLogos', theme) && [
          'amaui-SectionLogos-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={size === 'large' ? 3 : size === 'regular' ? 2 : 1}

        direction='row'

        align='center'

        justify='flex-start'

        fullWidth

        className={classNames([
          staticClassName('SectionLogos', theme) && [
            'amaui-SectionLogos-items'
          ],

          classes.items,
          gray && classes.gray
        ])}
      >
        {values?.map((item, index) => (
          <Line
            key={index}

            {...WrapperProps}

            fullWidth

            className={classNames([
              staticClassName('SectionLogos', theme) && [
                'amaui-SectionLogos-wrapper'
              ],

              WrapperProps?.className,
              classes.wrapper,
              classes[`wrapper_size_${size}`]
            ])}
          >
            <Line
              {...ItemProps}

              fullWidth

              className={classNames([
                staticClassName('SectionLogos', theme) && [
                  'amaui-SectionLogos-item'
                ],

                ItemProps?.className,
                classes.item
              ])}

              style={{
                backgroundImage: `url(${item?.url || item?.src || item?.urlSmall || item?.srcSmall})`
              }}
            />

            {name && (
              <Type
                version={size === 'large' ? 't1' : size === 'regular' ? 't2' : 't3'}

                align='center'

                fullWidth

                className={classNames([
                  staticClassName('SectionLogos', theme) && [
                    'amaui-SectionLogos-name'
                  ],

                  classes.name
                ])}
              >
                {cleanValue(item?.name || 'No name', { capitalize: true })}
              </Type>
            )}
          </Line>
        ))}
      </Line>
    </Section>
  );
});

Element.displayName = 'amaui-SectionLogos';

export default Element;
