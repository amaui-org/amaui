import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Surface from '../Surface';
import Type from '../Type';
import { ISurface } from '../Surface/Surface';

import { staticClassName, TElement, TSize } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    zIndex: theme.z_index.app_bar,
    width: '100%',
    paddingInline: '4px'
  },

  wrapper: {
    width: '100%'
  },

  // Size
  version_small_size_small: { height: '56px' },

  version_small_size_regular: { height: '64px' },

  version_small_size_large: { height: '72px' },

  version_center_size_small: { height: '56px' },

  version_center_size_regular: { height: '64px' },

  version_center_size_large: { height: '72px' },

  version_medium_size_small: { height: '104px' },

  version_medium_size_regular: { height: '112px' },

  version_medium_size_large: { height: '120px' },

  version_large_size_small: { height: '144px' },

  version_large_size_regular: { height: '152px' },

  version_large_size_large: { height: '160px' },

  aside: {
    flex: '0 0 auto',
    width: 'auto'
  },

  title: {
    flex: '1 1 auto',
    textAlign: 'start',
    marginInline: '4px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },

  title_version_small: {
    marginInline: '4px'
  },

  title_version_center: {
    textAlign: 'center',
    marginInline: '4px'
  },

  title_version_medium: {
    marginInline: '12px',
    marginBottom: '20px',
    width: 'calc(100% - 24px)'
  },

  title_version_large: {
    textAlign: 'start',
    marginInline: '12px',
    marginBottom: '28px',
    width: 'calc(100% - 24px)'
  },

  title_no_start: {
    marginInlineStart: '12px'
  },

  position_relative: {
    position: 'relative'
  },

  position_absolute: {
    position: 'absolute'
  },

  position_static: {
    position: 'static'
  },

  position_fixed: {
    position: 'fixed'
  },

  position_unset: {
    position: 'unset'
  }
}), { name: 'AmauiTopAppBar' });

export interface ITopAppBar extends Omit<ISurface, 'version'> {
  version?: 'small' | 'center' | 'medium' | 'large';
  size?: TSize;

  title?: TElement;
  start?: TElement;
  end?: TElement;
  position?: 'relative' | 'absolute' | 'static' | 'position' | 'unset';
}

const TopAppBar = React.forwardRef((props_: ITopAppBar, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTopAppBar?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',
    version = 'small',
    size = 'regular',

    title: title_,
    start: start_,
    end: end_,
    position,

    Component = 'div',

    className,

    children: children_,

    ...other
  } = props;

  const start = React.Children
    .toArray(start_)
    .map((item: any, index: number) => React.cloneElement(item, {
      key: index,

      tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

      color: item.props.color !== undefined ? item.props.color : color,

      version: item.props.version !== undefined ? item.props.version : 'filled',

      elevation: item.props.elevation !== undefined ? item.props.elevation : false
    }));

  const end = React.Children
    .toArray(end_)
    .map((item: any, index: number) => React.cloneElement(item, {
      key: index,

      tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

      color: item.props.color !== undefined ? item.props.color : color,

      version: item.props.version !== undefined ? item.props.version : 'filled',

      elevation: item.props.elevation !== undefined ? item.props.elevation : false
    }));

  const classNameTitle = classNames([
    staticClassName('TopAppBar', theme) && [
      'AmauiTopAppBar-title'
    ],

    classes.title,
    classes[`title_version_${version}`],
    version === 'small' && !start.length && classes.title_no_start
  ]);

  const classNameTitleMedium = classNames([
    staticClassName('TopAppBar', theme) && [
      'AmauiTopAppBar-title',
      'AmauiTopAppBar-title-medium'
    ],

    classes.title,
    classes[`title_version_${version}`]
  ]);

  let title: any;

  if (title_) {
    if (['small', 'center'].includes(version)) {
      title = is('simple', title_) ? (
        <Type
          version='t1'

          color='inherit'

          className={classNameTitle}
        >
          {title_}
        </Type>
      ) : (
        title_ && React.cloneElement(title_ as any, {
          tonal: (title_ as any).props.tonal !== undefined ? (title_ as any).props.tonal : tonal,

          color: (title_ as any).props.color !== undefined ? (title_ as any).props.color : 'inherit',

          className: classNameTitle
        })
      );
    }
    else {
      title = is('simple', title_) ? (
        <Type
          version={version === 'medium' ? 'h3' : 'h2'}

          color='inherit'

          className={classNameTitleMedium}
        >
          {title_}
        </Type>
      ) : (
        title_ && React.cloneElement(title_ as any, {
          tonal: (title_ as any).props.tonal !== undefined ? (title_ as any).props.tonal : tonal,

          color: (title_ as any).props.color !== undefined ? (title_ as any).props.color : 'inherit',

          className: classNameTitleMedium
        })
      );
    }
  }

  return (
    <Surface
      ref={ref}

      color={color}

      tonal={tonal}

      gap={0}

      justify='space-between'

      Component={Line}

      AdditionalProps={{
        Component
      }}

      className={classNames([
        staticClassName('TopAppBar', theme) && [
          'AmauiTopAppBar-root',
          `AmauiTopAppBar-version-${version}`,
          `AmauiTopAppBar-size-${size}`,
          start && `AmauiTopAppBar-start`,
          end && `AmauiTopAppBar-end`,
          position && `AmauiTopAppBar-position-${position}`
        ],

        className,
        classes.root,
        position && classes[`position_${position}`]
      ])}

      {...other}
    >
      <Line
        direction='row'

        align='center'

        justify='space-between'

        gap={0}

        className={classNames([
          staticClassName('TopAppBar', theme) && [
            'AmauiTopAppBar-wrapper'
          ],

          classes.wrapper,
          classes[`version_small_size_${size}`]
        ])}
      >
        {!!start.length && (
          <Line
            direction='row'

            align='center'

            justify='flex-start'

            gap={0}

            className={classNames([
              staticClassName('TopAppBar', theme) && [
                'AmauiTopAppBar-aside',
                `AmauiTopAppBar-start`
              ],

              classes.aside
            ])}
          >
            {start}
          </Line>
        )}

        {['small', 'center'].includes(version) && title}

        {!!end.length && (
          <Line
            direction='row'

            align='center'

            justify='flex-end'

            gap={0}

            className={classNames([
              staticClassName('TopAppBar', theme) && [
                'AmauiTopAppBar-aside',
                `AmauiTopAppBar-end`
              ],

              classes.aside
            ])}
          >
            {end}
          </Line>
        )}
      </Line>

      {['medium', 'large'].includes(version) && (
        <Line
          justify='flex-end'

          gap={0}
        >
          {title}
        </Line>
      )}
    </Surface>
  );
});

TopAppBar.displayName = 'AmauiTopAppBar';

export default TopAppBar;
