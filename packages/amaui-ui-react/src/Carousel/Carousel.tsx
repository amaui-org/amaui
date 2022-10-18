import React from 'react';

import { clamp, is, unique } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import Line from '../Line';
import Fade from '../Fade';
import IconButton from '../IconButton';
import Transitions from '../Transitions';
import useMediaQuery from '../useMediaQuery';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '540px',
    overflow: 'hidden'
  },

  item: {
    position: 'absolute'
  },

  itemRects: {
    position: 'absolute',
    visibility: 'hidden'
  },

  carousel: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },

  arrow: {
    position: 'absolute'
  },

  arrow_previous: {
    top: '50%',
    transform: 'translateY(-50%)',
    left: '40px'
  },

  arrow_next: {
    top: '50%',
    transform: 'translateY(-50%)',
    right: '40px'
  }
}), { name: 'AmauiCarousel' });

const IconMaterialNavigateBeforeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateBeforeRounded'
      short_name='NavigateBefore'

      {...props}
    >
      <path d="M13.3 17.3 8.7 12.7Q8.55 12.55 8.488 12.375Q8.425 12.2 8.425 12Q8.425 11.8 8.488 11.625Q8.55 11.45 8.7 11.3L13.3 6.7Q13.575 6.425 14 6.425Q14.425 6.425 14.7 6.7Q14.975 6.975 14.975 7.4Q14.975 7.825 14.7 8.1L10.8 12L14.7 15.9Q14.975 16.175 14.975 16.6Q14.975 17.025 14.7 17.3Q14.425 17.575 14 17.575Q13.575 17.575 13.3 17.3Z" />
    </Icon>
  );
});

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

// To do

// fix arrows fast switching in transitions

// progress

// custom transition component

// or custom transitions items

// auto height, example with actual elements + images
// meaning get rects
// and on carousel update, update root height
// with height transition, to the biggest height of itemActive
// in the view

const Carousel = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiCarousel?.props?.default }), [props_]);

  const breakpoints = {};

  theme.breakpoints.keys.sort((a, b) => theme.breakpoints.values[b] - theme.breakpoints.values[a]).forEach(key => {
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(`(min-width: ${theme.breakpoints.values[key]}px)`);
  });

  const mobile = useMediaQuery('(max-width: 767px)');

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',

    version = 'regular',

    // Array of string or object
    // object having element as a string or element
    // and a transition element
    items: items_,

    autoPlay = true,

    autoPlayInterval = 4000,

    arrows = true,

    // on mobile visible
    arrowsVisibility = 'hover',

    progress = true,

    // on mobile visible
    progressVisibility = 'hover',

    onMouseEnter: onMouseEnter_,
    onMouseLeave: onMouseLeave_,

    TransitionComponent = Fade,

    ArrowTransitionComponent = Fade,
    ArrowPreviousTransitionComponent,
    ArrowNextTransitionComponent,

    IconButtonPrevious,
    IconButtonNext,

    IconPrevious = IconMaterialNavigateBeforeRounded,
    IconNext = IconMaterialNavigateNextRounded,

    ArrowProps,
    ArrowPreviousProps,
    ArrowNextProps,
    CarouselProps,
    TransitionsProps,
    TransitionComponentProps,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const [items, setItems] = React.useState([]);
  const [itemActive, setItemActive] = React.useState<any>();
  const [hover, setHover] = React.useState<any>();

  const refs = {
    items: React.useRef<any>(),
    itemActive: React.useRef<any>(),
    autoPlayTimeout: React.useRef<any>()
  };

  refs.items.current = items;

  refs.itemActive.current = itemActive;

  const onUpdate = React.useCallback((to = 'next', values: any[] = refs.items.current) => {
    let index = refs.itemActive.current?.index;

    if (index === undefined) index = 0;
    else {
      index = to === 'next' ? index + 1 : index - 1;

      if (index < 0) index = refs.items.current.length - 1;

      if (index > refs.items.current.length - 1) index = 0;
    }

    const itemNew = values[index];

    if (itemNew) setItemActive({ index, element: itemNew });
  }, []);

  const onPrevious = () => onUpdate('previous');

  const onNext = () => onUpdate('next');

  // autoPlay
  React.useEffect(() => {
    clearTimeout(refs.autoPlayTimeout.current);

    if (autoPlay) refs.autoPlayTimeout.current = setTimeout(onUpdate, autoPlayInterval);
  }, [items, itemActive, autoPlay, autoPlayInterval]);

  React.useEffect(() => {
    const values = unique([
      ...items_,

      ...React.Children.toArray(children)
    ])
      .filter(Boolean)
      .map((Item: any, index: number) => {
        if (is('string', Item)) return (
          <img
            key={index}

            src={Item}

            alt=''
          />
        );

        if (Item?.element) return React.cloneElement(Item.element, { key: index });

        return (
          <Item
            key={index}
          />
        );
      });

    onUpdate('next', values);

    setItems(values);
  }, [items_, children]);

  const onMouseEnter = React.useCallback((event: React.MouseEvent<any>) => {
    setHover(true);

    if (is('function', onMouseEnter_)) onMouseEnter_(event);
  }, []);

  const onMouseLeave = React.useCallback((event: React.MouseEvent<any>) => {
    setHover(false);

    if (is('function', onMouseLeave_)) onMouseLeave_(event);
  }, []);

  const ArrowPreviousTransitionComponent_ = ArrowPreviousTransitionComponent || ArrowTransitionComponent;

  const ArrowNextTransitionComponent_ = ArrowNextTransitionComponent || ArrowTransitionComponent;

  return (
    <Component
      ref={ref}

      onMouseEnter={onMouseEnter}

      onMouseLeave={onMouseLeave}

      className={classNames([
        staticClassName('Carousel', theme) && [
          'AmauiCarousel-root',
          `AmauiCarousel-version-${version}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {/* Carousel */}

      {/* Version transition */}
      {version === 'transition' && (
        <Line
          gap={0}

          direction='column'

          align='center'

          justify='center'

          className={classNames([
            staticClassName('Carousel', theme) && [
              'AmauiCarousel-carousel'
            ],

            classes.carousel
          ])}

          {...CarouselProps}
        >
          {itemActive && (
            <Transitions
              mode='in-out-follow'

              switch

              {...TransitionsProps}
            >
              <TransitionComponent
                key={itemActive?.index}

                {...TransitionComponentProps}
              >
                <div
                  className={classNames([
                    staticClassName('Carousel', theme) && [
                      'AmauiCarousel-item'
                    ],

                    classes.item
                  ])}
                >
                  {itemActive?.element}
                </div>
              </TransitionComponent>
            </Transitions>
          )}
        </Line>
      )}

      {/* Progress */}

      {/* Arrows */}
      {arrows && (
        <ArrowPreviousTransitionComponent_
          in={mobile || (arrowsVisibility === 'hover' && hover) || arrowsVisibility === 'visible'}
        >
          {(
            IconButtonPrevious ?
              React.cloneElement(IconButtonPrevious, {
                tonal,
                color,

                onClick: onPrevious,

                className: classNames([
                  staticClassName('Carousel', theme) && [
                    'AmauiCarousel-arrow',
                    'AmauiCarousel-arrow-previous'
                  ],

                  classes.arrow,
                  classes.arrow_previous
                ]),

                disabled: itemActive?.index === 0,

                ...ArrowProps,

                ...ArrowPreviousProps
              }) :
              <IconButton
                tonal={tonal}

                color={color}

                version='filled'

                onClick={onPrevious}

                className={classNames([
                  staticClassName('Carousel', theme) && [
                    'AmauiCarousel-arrow',
                    'AmauiCarousel-arrow-previous'
                  ],

                  classes.arrow,
                  classes.arrow_previous
                ])}

                disabled={itemActive?.index === 0}

                {...ArrowProps}

                {...ArrowPreviousProps}
              >
                <IconPrevious />
              </IconButton>
          )}
        </ArrowPreviousTransitionComponent_>
      )}

      {arrows && (
        <ArrowNextTransitionComponent_
          in={mobile || (arrowsVisibility === 'hover' && hover) || arrowsVisibility === 'visible'}
        >
          {(
            IconButtonNext ?
              React.cloneElement(IconButtonNext, {
                tonal,
                color,

                onClick: onNext,

                className: classNames([
                  staticClassName('Carousel', theme) && [
                    'AmauiCarousel-arrow',
                    'AmauiCarousel-arrow-next'
                  ],

                  classes.arrow,
                  classes.arrow_next
                ]),

                disabled: itemActive?.index === items.length - 1,

                ...ArrowProps,

                ...ArrowNextProps
              }) :
              <IconButton
                tonal={tonal}

                color={color}

                version='filled'

                onClick={onNext}

                className={classNames([
                  staticClassName('Carousel', theme) && [
                    'AmauiCarousel-arrow',
                    'AmauiCarousel-arrow-next'
                  ],

                  classes.arrow,
                  classes.arrow_next
                ])}

                disabled={itemActive?.index === items.length - 1}

                {...ArrowProps}

                {...ArrowNextProps}
              >
                <IconNext />
              </IconButton>
          )}
        </ArrowNextTransitionComponent_>
      )}

    </Component>
  );
});

Carousel.displayName = 'AmauiCarousel';

export default Carousel;
