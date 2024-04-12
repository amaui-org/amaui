import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Surface from '../Surface';
import Type from '../Type';
import { ISurface } from '../Surface/Surface';
import { staticClassName } from '../utils';
import { ISize, IElement } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    zIndex: theme.z_index.app_bar,
    width: '100%',
    paddingInline: theme.methods.space.value(0.5, 'px')
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

  position_sticky: {
    position: 'sticky',
    top: '8px'
  },

  position_unset: {
    position: 'unset'
  },

  center: {
    margin: '8px auto'
  },

  center_absolute: {
    top: '8px',
    left: '50%',
    transform: 'translateX(-50%)'
  }
}), { name: 'amaui-TopAppBar' });

export interface ITopAppBar extends Omit<ISurface, 'version'> {
  position?: 'relative' | 'absolute' | 'static' | 'sticky' | 'fixed' | 'unset';
  version?: 'small' | 'center' | 'medium' | 'large';
  size?: ISize;

  center?: boolean;

  title?: IElement;
  start?: IElement;
  end?: IElement;
}

const TopAppBar: React.FC<ITopAppBar> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTopAppBar?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',
    version = 'small',
    size = 'regular',

    center = true,

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
      'amaui-TopAppBar-title'
    ],

    classes.title,
    classes[`title_version_${version}`],
    version === 'small' && !start.length && classes.title_no_start
  ]);

  const classNameTitleMedium = classNames([
    staticClassName('TopAppBar', theme) && [
      'amaui-TopAppBar-title',
      'amaui-TopAppBar-title-medium'
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
          'amaui-TopAppBar-root'
        ],

        className,
        classes.root,
        position && classes[`position_${position}`],
        center && classes[`center${['absolute', 'fixed'].includes(position) ? '_absolute' : ''}`]
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
            'amaui-TopAppBar-wrapper'
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
                'amaui-TopAppBar-aside',
                `amaui-TopAppBar-start`
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
                'amaui-TopAppBar-aside',
                `amaui-TopAppBar-end`
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

TopAppBar.displayName = 'amaui-TopAppBar';

export default TopAppBar;
