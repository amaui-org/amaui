import React from 'react';

import { clamp, is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Type from '../Type';
import Icon from '../Icon';
import IconButton from '../IconButton';
import useMediaQuery from '../useMediaQuery';
import { ILine } from '../Line/Line';

import { staticClassName, TElement, valueBreakpoints } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    margin: 0,
    padding: 0
  },

  expandMore: {
    '&.amaui-IconButton-root': {
      padding: '0',
      width: 'unset',
      height: '100%',
      borderRadius: theme.methods.shape.radius.value(0.25, 'px')
    }
  }
}), { name: 'amaui-Breadcrumbs' });

const IconMaterialNavigateNextRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateNextRounded'
      short_name='NavigateNext'

      {...props}
    >
      <path d="M8.7 17.3Q8.425 17.025 8.425 16.6Q8.425 16.175 8.7 15.9L12.6 12L8.7 8.1Q8.425 7.825 8.425 7.4Q8.425 6.975 8.7 6.7Q8.975 6.425 9.4 6.425Q9.825 6.425 10.1 6.7L14.7 11.3Q14.85 11.45 14.913 11.625Q14.975 11.8 14.975 12Q14.975 12.2 14.913 12.375Q14.85 12.55 14.7 12.7L10.1 17.3Q9.825 17.575 9.4 17.575Q8.975 17.575 8.7 17.3Z" />
    </Icon>
  );
});

const IconMaterialMoreHorizRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreHorizRounded'
      short_name='MoreHoriz'

      {...props}
    >
      <path d="M6 14Q5.175 14 4.588 13.412Q4 12.825 4 12Q4 11.175 4.588 10.587Q5.175 10 6 10Q6.825 10 7.412 10.587Q8 11.175 8 12Q8 12.825 7.412 13.412Q6.825 14 6 14ZM12 14Q11.175 14 10.588 13.412Q10 12.825 10 12Q10 11.175 10.588 10.587Q11.175 10 12 10Q12.825 10 13.413 10.587Q14 11.175 14 12Q14 12.825 13.413 13.412Q12.825 14 12 14ZM18 14Q17.175 14 16.587 13.412Q16 12.825 16 12Q16 11.175 16.587 10.587Q17.175 10 18 10Q18.825 10 19.413 10.587Q20 11.175 20 12Q20 12.825 19.413 13.412Q18.825 14 18 14Z" />
    </Icon>
  );
});

export interface IBreadcrumbs extends ILine {
  separator?: TElement | string;

  max?: number;

  renderMore?: (onExpandMore: () => void) => TElement;
}

const Breadcrumbs: React.FC<IBreadcrumbs> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiBreadcrumbs?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    max: max_,

    separator = (
      <IconMaterialNavigateNextRounded
        size='small'
      />
    ),

    renderMore,

    IconMore = IconMaterialMoreHorizRounded,

    Component = 'nav',

    MoreProps,

    className,

    children: children_,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>()
  };

  const breakpoints = {};

  theme.breakpoints.keys.forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  let max = valueBreakpoints(max_, undefined, breakpoints, theme);

  max = clamp(max, 2);

  const onExpandMore = () => {
    setChildren(resolve(children_, false));
  };

  const resolve = (items_: any = children_, maxValue = max) => {
    let items = React.Children.toArray(items_).filter(Boolean);

    if (maxValue !== undefined && maxValue >= 2 && maxValue < items.length) {
      const start = [];
      const end = [];

      for (let i = 1; i <= maxValue; i++) {
        // start
        if (i % 2 > 0) start.push(items[Math.floor(i / 2)]);
        // end
        else end.unshift(items[items.length - (i / 2)]);
      }

      items = [
        ...start,

        is('function', renderMore) ? renderMore(onExpandMore) : <IconButton
          color='default'

          size='small'

          onClick={onExpandMore}

          aria-label='Expand more path'

          {...MoreProps}

          className={classNames([
            staticClassName('Breadcrumbs', theme) && [
              'amaui-Breadcrumbs-expand-more'
            ],

            MoreProps?.className,
            classes.expandMore
          ])}
        >
          <IconMore
            size='small'
          />
        </IconButton>,

        ...end
      ];
    }

    return items;
  };

  const [init, setInit] = React.useState(false);
  const [children, setChildren] = React.useState<any[]>(resolve);

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    if (init) setChildren(resolve(children_));
  }, [children_, max]);

  const Separator = is('simple', separator) ? (
    <Type
      version='b2'

      aria-hidden

      Component='span'
    >
      {separator}
    </Type>
  ) : React.cloneElement(separator as any, {
    'aria-hidden': true
  });

  const childrenToUse = children.flatMap((item: any, index: number) => [item, index !== children.length - 1 && Separator].filter(Boolean));

  return (
    <Line
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      gap={1}

      direction='row'

      align='center'

      wrap='wrap'

      aria-label='Breadcrumb'

      Component={Component}

      {...other}

      className={classNames([
        staticClassName('Breadcrumbs', theme) && [
          'amaui-Breadcrumbs-root'
        ],

        className,
        classes.root
      ])}
    >
      {childrenToUse.map((item: any, index: number) => {
        const itemProps = {};

        if (index === childrenToUse.length - 1) {
          itemProps['aria-current'] = 'page';
        }

        if (is('simple', item)) {
          return (
            <Type
              key={index}

              version='b2'

              Component='span'

              {...itemProps}

              className={classNames([
                staticClassName('Breadcrumbs', theme) && [
                  'amaui-Breadcrumbs-item'
                ],

                classes.item
              ])}
            >
              {item}
            </Type>
          );
        }

        return (
          React.cloneElement(item, {
            key: index,

            className: classNames([
              staticClassName('Breadcrumbs', theme) && [
                'amaui-Breadcrumbs-item'
              ],

              item?.props?.className,
              classes.item
            ]),

            ...itemProps
          })
        );
      })}
    </Line>
  );
});

Breadcrumbs.displayName = 'amaui-Breadcrumbs';

export default Breadcrumbs;
