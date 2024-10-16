import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import IconElement, { IIcon } from '../Icon';
import SectionElement from '../Section';
import MenuElement from '../Menu';
import ShareElement from '../Share';
import LineElement from '../Line';
import TypeElement from '../Type';
import ButtonElement from '../Button';
import MenuItemElement from '../MenuItem';
import IconButtonElement from '../IconButton';
import { useConfirm } from '../Confirm';
import { textToInnerHTML } from '@amaui/utils';
import { staticClassName } from '../utils';
import { IBaseElement, IMediaObject } from '../types';

const IconMaterialShareRounded = React.forwardRef((props: IIcon, ref) => {

  return (
    <IconElement
      ref={ref}

      name='Share'

      short_name='Share'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363.025-.187.075-.337l-7.05-4.1q-.425.375-.95.587Q6.575 15 6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.212.525.213.95.588l7.05-4.1q-.05-.15-.075-.337Q15 5.175 15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.213-.525-.212-.95-.587L8.9 11.3q.05.15.075.337Q9 11.825 9 12t-.025.362q-.025.188-.075.338l7.05 4.1q.425-.375.95-.588Q17.425 16 18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22Zm0-16q.425 0 .712-.287Q19 5.425 19 5t-.288-.713Q18.425 4 18 4t-.712.287Q17 4.575 17 5t.288.713Q17.575 6 18 6ZM6 13q.425 0 .713-.288Q7 12.425 7 12t-.287-.713Q6.425 11 6 11t-.713.287Q5 11.575 5 12t.287.712Q5.575 13 6 13Zm12 7q.425 0 .712-.288Q19 19.425 19 19t-.288-.712Q18.425 18 18 18t-.712.288Q17 18.575 17 19t.288.712Q17.575 20 18 20Zm0-15ZM6 12Zm12 7Z" />
    </IconElement>
  );
});

const IconMaterialMoreVertRounded = React.forwardRef((props: IIcon, ref) => {

  return (
    <IconElement
      ref={ref}

      name='MoreVert'

      short_name='MoreVert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q-.825 0-1.412-.587Q10 18.825 10 18q0-.825.588-1.413Q11.175 16 12 16t1.413.587Q14 17.175 14 18q0 .825-.587 1.413Q12.825 20 12 20Zm0-6q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Zm0-6q-.825 0-1.412-.588Q10 6.825 10 6t.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6t-.587 1.412Q12.825 8 12 8Z" />
    </IconElement>
  );
});

const useStyle = style(theme => ({
  root: {
    padding: `${theme.methods.space.value(5, 'px')} ${theme.methods.space.value(3, 'px')}`
  },

  wrapper: {
    maxWidth: '1024px'
  },

  profile: {
    width: '140px',
    height: '140px',
    borderRadius: theme.methods.shape.radius.value(40, 'px'),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    border: `4px solid ${theme.palette.light ? theme.palette.color.primary[99] : theme.palette.color.primary[5]}`,
    cursor: 'default',
    userSelect: 'none'
  },

  cover: {
    height: '100vh',
    maxHeight: '274px',
    borderRadius: theme.methods.shape.radius.value(5, 'px'),
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    cursor: 'default',
    userSelect: 'none'
  },

  name: {
    wordBreak: 'break-word'
  },

  summary: {
    wordBreak: 'break-word',
    maxWidth: '540px'
  },

  links: {
    marginTop: '40px',
    padding: `0 ${theme.methods.space.value(3, 'px')}`
  },

  linkWrapper: {
    maxWidth: '740px'
  },

  link: {
    '&.amaui-Button-root': {
      whiteSpace: 'normal',
      wordBreak: 'break-word',
      flex: '1 1 auto !important'
    }
  },

  more: {
    flex: '0 0 auto'
  }
}), { name: 'amaui-Links' });

export interface ILinksItem {
  version?: 'primary' | 'secondary' | 'default';

  name?: any;

  url?: string;

  sensitivity?: string | boolean;

  share?: boolean;

  props?: any;
}

export interface ILinks extends IBaseElement {
  name?: any;

  short_description?: any;

  links?: ILinksItem[];

  cover?: IMediaObject;

  profile?: IMediaObject;

  share?: boolean;

  start?: any;
  end?: any;

  IconMore?: any;
  IconShare?: any;

  ShareProps?: any;
  ItemShareProps?: any;
}

const Element: React.FC<ILinks> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiLinks?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Section = React.useMemo(() => theme?.elements?.Section || SectionElement, [theme]);

  const Menu = React.useMemo(() => theme?.elements?.Menu || MenuElement, [theme]);

  const Share = React.useMemo(() => theme?.elements?.Share || ShareElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const Button = React.useMemo(() => theme?.elements?.Button || ButtonElement, [theme]);

  const MenuItem = React.useMemo(() => theme?.elements?.MenuItem || MenuItemElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const { classes } = useStyle();

  const {
    name,

    short_description,

    cover,

    profile,

    links,

    share = true,

    start,
    end,

    IconMore = IconMaterialMoreVertRounded,
    IconShare = IconMaterialShareRounded,

    ShareProps,
    ItemShareProps,

    className,

    ...other
  } = props;

  const confirm = useConfirm();

  const onOpenLink = React.useCallback(async (item: ILinksItem): Promise<any> => {
    const confirmed = (item.sensitivity && !['none'].includes(item.sensitivity as any)) ? await confirm.open({
      name: 'Sensitive URL',
      description: `This is URL might contain sensitive information, confirm you are 18+ to continue.`
    }) : true;

    if (confirmed) {
      window.open(item.url, 'blank');
    }
  }, []);

  return (
    <Section
      ref={ref}

      gap={2}

      align='center'

      maxWidth={false}

      padding={false}

      fullWidth

      className={classNames([
        staticClassName('Links', theme) && [
          'amaui-Links-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {start}

      <Line
        gap={1.4}

        fullWidth

        className={classes.wrapper}
      >
        {(profile || cover) && (
          <Line
            gap={0}

            align='center'

            fullWidth
          >
            {cover && (
              <Line
                fullWidth

                className={classes.cover}

                style={{
                  backgroundImage: `url('${cover?.url || cover?.urlSmall}')`
                }}
              />
            )}

            {profile && (
              <Line
                fullWidth

                className={classes.profile}

                style={{
                  marginTop: cover ? -71 : 0,
                  backgroundImage: `url('${profile?.urlSmall || profile?.url}')`
                }}
              />
            )}
          </Line>
        )}

        {(name || short_description) && (
          <Line
            gap={1}

            align='center'

            fullWidth
          >
            {name && (
              <Type
                version='h3'

                align='center'

                fullWidth

                dangerouslySetInnerHTML={{
                  __html: textToInnerHTML(name)
                }}

                className={classes.name}
              />
            )}

            {short_description && (
              <Type
                version='b2'

                align='center'

                fullWidth

                dangerouslySetInnerHTML={{
                  __html: textToInnerHTML(short_description)
                }}

                className={classes.summary}
              />
            )}
          </Line>
        )}

        {!!links?.length && (
          <Line
            gap={1.4}

            align='center'

            fullWidth

            className={classes.links}
          >
            {links.map((item: any, index: number) => (
              <Line
                key={index}

                gap={1}

                direction='row'

                align='center'

                justify='center'

                fullWidth

                className={classes.linkWrapper}
              >
                <Button
                  tonal

                  {...item.props}

                  version={[undefined, 'default'].includes(item.version) ? 'outlined' : 'filled'}

                  elevation={item.version === 'primary'}

                  color={item.version === 'primary' ? 'primary' : item.version === 'secondary' ? 'secondary' : 'default'}

                  fullWidth

                  onClick={() => onOpenLink(item)}

                  className={classNames([
                    `amaui-Links-link-version-${item.version}`,

                    item.props?.className,
                    classes.link
                  ])}
                >
                  {item.name || 'Link'}
                </Button>

                <Menu
                  menuItems={[
                    <MenuItem
                      start={(
                        <IconShare
                          size='small'
                        />
                      )}

                      startAlign='center'

                      primary={(
                        <Type
                          version='b3'
                        >
                          Share
                        </Type>
                      )}

                      menu={item.share ? (
                        <Share
                          version='menu-items'

                          name={item.name}

                          url={item.url}

                          exclude={['print']}

                          {...ItemShareProps}

                          ListItemProps={{
                            size: 'small',
                            noBackground: true,

                            ...ItemShareProps?.ListItemProps
                          }}
                        />
                      ) : undefined}

                      MenuProps={{
                        ListProps: {
                          noChildrenTransform: true
                        }
                      }}

                      size='small'

                      button

                      disabled={!item.share}
                    />
                  ]}
                >
                  <IconButton
                    size='small'

                    className={classNames([
                      staticClassName('Links', theme) && [
                        'amaui-Links-more'
                      ],

                      classes.more
                    ])}

                    disabled={!item.share}
                  >
                    <IconMore />
                  </IconButton>
                </Menu>
              </Line>
            ))}
          </Line>
        )}
      </Line>

      {
        share && (
          <Share
            {...ShareProps}
          />
        )
      }

      {end}
    </Section >
  );
});

Element.displayName = 'amaui-Links';

export default Element;
