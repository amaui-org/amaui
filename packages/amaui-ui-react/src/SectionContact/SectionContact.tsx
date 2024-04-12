import React from 'react';

import { is, textToInnerHTML } from '@amaui/utils';
import { TPaletteVersion, classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Icon, { IIcon } from '../Icon';
import Line from '../Line';
import Properties from '../Properties';
import Section, { ISection } from '../Section/Section';
import Type from '../Type';
import useMediaQuery from '../useMediaQuery';
import { staticClassName } from '../utils';
import { IPropsAny } from '../types';

const IconMaterialMapRounded = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Map'

      short_name='Map'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.35 20.775 9 18.9l-4.65 1.8q-.5.2-.925-.113Q3 20.275 3 19.75v-14q0-.325.188-.575.187-.25.512-.375l4.65-1.575q.325-.1.65-.113.325-.012.65.113L15 5.1l4.65-1.8q.5-.2.925.112.425.313.425.838v14q0 .325-.188.575-.187.25-.512.375l-4.65 1.575q-.325.1-.65.112-.325.013-.65-.112ZM14 18.55V6.85l-4-1.4v11.7Zm2 0 3-1V5.7l-3 1.15ZM5 18.3l3-1.15V5.45l-3 1ZM16 6.85v11.7Zm-8-1.4v11.7Z" />
    </Icon>
  );
});

const IconMaterialCallRounded = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Call'

      short_name='Call'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.95 21q-3.225 0-6.287-1.438-3.063-1.437-5.425-3.8-2.363-2.362-3.8-5.425Q3 7.275 3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.012.637-.063.288-.288.513L6.975 10.9q1.05 1.8 2.638 3.375Q11.2 15.85 13.1 17l2.35-2.35q.225-.225.588-.338.362-.112.712-.062l3.45.7q.35.075.575.337.225.263.225.613v4.05q0 .45-.3.75t-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025.225 1 .65 1.975ZM19 18.95v-2.2l-2.35-.475-1.675 1.675q.975.425 1.988.675 1.012.25 2.037.325Zm-4-1.025ZM6.025 9Z" />
    </Icon>
  );
});

const IconMaterialMailRounded = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Mail'

      short_name='Mail'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20ZM20 8l-7.475 4.675q-.125.075-.263.112-.137.038-.262.038t-.262-.038q-.138-.037-.263-.112L4 8v10h16Zm-8 3 8-5H4ZM4 8v.25-1.475.025V6v.8-.013V8.25 8v10Z" />
    </Icon>
  );
});

const useStyle = styleMethod(theme => ({
  root: {

  },

  text: {
    wordBreak: 'break-word'
  },

  map: {
    position: 'relative',
    height: '400px',
    borderRadius: theme.methods.shape.radius.value(3),
    overflow: 'hidden'
  },

  backgroundOverlay: {
    position: 'absolute',
    inset: '0',
    zIndex: '4'
  }
}), { name: 'amaui-SectionContact' });

export interface ISectionContact extends ISection {
  map?: {
    latitude: number;
    longitude: number;

    overlay?: TPaletteVersion;

    apiKey?: string;
  };

  mapPosition?: 'top' | 'left' | 'right' | 'bottom';

  heading?: any;
  summary?: any;

  address?: any;
  phone?: any;
  email?: any;

  IconAddress?: any;
  IconPhone?: any;
  IconEmail?: any;

  MapProps?: IPropsAny;
  HeadingProps?: IPropsAny;
  SummaryProps?: IPropsAny;
  PropertiesProps?: IPropsAny;
}

const Element: React.FC<ISectionContact> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSectionContact?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle();

  const {
    map,

    mapPosition: mapPosition_ = 'left',

    heading,
    summary,

    address,
    phone,
    email,

    IconAddress = IconMaterialMapRounded,
    IconPhone = IconMaterialCallRounded,
    IconEmail = IconMaterialMailRounded,

    MapProps,
    HeadingProps,
    SummaryProps,
    PropertiesProps,

    className,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>()
  };

  const mobile = useMediaQuery('(max-width: 768px)', { element: refs.root.current });

  let mapPosition = mapPosition_;

  if (mobile) {
    if (mapPosition === 'left') mapPosition = 'top';
    else if (mapPosition === 'right') mapPosition = 'bottom';
  }

  let styleOverlay: any = {};

  if (map?.overlay) {
    const palette = theme.palette.color[map?.overlay] || theme.methods.color(map?.overlay);

    styleOverlay = {
      ...styleOverlay,

      backgroundColor: theme.methods.palette.color.alpha(theme.methods.palette.color.value(undefined as any, 95, true, palette), 0.54)
    };
  }

  const mapElement = map?.apiKey && map?.latitude && map?.longitude && (
    <Line
      fullWidth

      className={classNames([
        staticClassName('SectionContact', theme) && [
          'amaui-SectionContact-map'
        ],

        classes.map
      ])}
    >
      {map.overlay && (
        <div
          className={classNames([
            classes.backgroundOverlay
          ])}

          style={{
            ...styleOverlay
          }}
        />
      )}

      <iframe
        title='amaui-google-map'

        src={`https://www.google.com/maps/embed/v1/place?q=${map?.latitude},${map?.longitude}${map?.apiKey ? `&key=${map?.apiKey}` : ''}`}

        width='100%'
        height='100%'
        loading='lazy'
        allowFullScreen
        referrerPolicy='no-referrer-when-downgrade'
      />
    </Line>
  );

  const properties: any = [];

  if (address) properties.push({ name: <IconAddress />, value: address });

  if (phone) properties.push({ name: <IconPhone />, value: phone });

  if (email) properties.push({ name: <IconEmail />, value: email });

  return (
    <Section
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      MainProps={{
        gap: 4
      }}

      className={classNames([
        staticClassName('SectionContact', theme) && [
          'amaui-SectionContact-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {mapPosition === 'top' && mapElement}

      <Line
        gap={4}

        direction='row'

        fullWidth
      >
        {mapPosition === 'left' && mapElement}

        <Line
          gap={5}

          flex

          fullWidth

          style={{
            paddingTop: ['left', 'right'].includes(mapPosition) ? 24 : 0
          }}
        >
          {(heading || summary) && (
            <Line
              gap={0.5}
            >
              {heading && (
                <Type
                  version='t1'

                  dangerouslySetInnerHTML={{
                    __html: textToInnerHTML(heading)
                  }}

                  {...HeadingProps}

                  className={classNames([
                    staticClassName('SectionContact', theme) && [
                      'amaui-SectionContact-heading'
                    ],

                    HeadingProps?.className,
                    classes.text
                  ])}
                />
              )}

              {summary && (
                <Type
                  version='b3'

                  dangerouslySetInnerHTML={{
                    __html: textToInnerHTML(summary)
                  }}

                  {...SummaryProps}

                  className={classNames([
                    staticClassName('SectionContact', theme) && [
                      'amaui-SectionContact-summary'
                    ],

                    SummaryProps?.className,
                    classes.text
                  ])}
                />
              )}
            </Line>
          )}

          {!!properties.length && (
            <Properties
              version='row'

              gap={1}

              values={properties}

              {...PropertiesProps}

              PropertyProps={{
                responsive: false,

                ...PropertiesProps?.PropertyProps
              }}
            />
          )}
        </Line>

        {mapPosition === 'right' && mapElement}
      </Line>

      {mapPosition === 'bottom' && mapElement}
    </Section>
  );
});

Element.displayName = 'amaui-SectionContact';

export default Element;
