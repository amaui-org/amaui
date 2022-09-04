import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Surface from '../Surface';
import Type from '../Type';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    zIndex: theme.z_index.app_bar,
    width: '100%',
    paddingInline: '4px'
  },

  // Version

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

  fixed: {
    position: 'fixed',
    insetInline: 0,
    top: 0
  }
}), { name: 'AmauiTopAppBar' });

const TopAppBar = React.forwardRef((props_: any, ref: any) => {
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
    fixed,

    className,

    children: children_,

    ...other
  } = props;

  const start = React.Children
    .toArray(start_)
    .map((item: any, index: number) => React.cloneElement(item, {
      key: index,

      elevation: item.props.elevation !== undefined ? item.props.elevation : false,

      version: item.props.version !== undefined ? item.props.version : 'filled',

      color: item.props.color !== undefined ? item.props.color : color,

      tonal: item.props.tonal !== undefined ? item.props.tonal : tonal
    }));

  const end = React.Children
    .toArray(end_)
    .map((item: any, index: number) => React.cloneElement(item, {
      key: index,

      elevation: item.props.elevation !== undefined ? item.props.elevation : false,

      version: item.props.version !== undefined ? item.props.version : 'filled',

      color: item.props.color !== undefined ? item.props.color : color,

      tonal: item.props.tonal !== undefined ? item.props.tonal : tonal
    }));

  const classNameTitle = classNames([
    staticClassName('TopAppBar', theme) && [
      'AmauiTopAppBar-title'
    ],

    classes.title,
    classes[`title_version_${version}`],
    version === 'small' && !start.length && classes.title_no_start
  ]);

  const title = is('string', title_) ? (
    <Type
      version='t1'

      color='inherit'

      tonal={tonal}

      className={classNameTitle}
    >
      {title_}
    </Type>
  ) : (
    React.cloneElement(title_, {
      color: title_.props.color !== undefined ? title_.props.color : 'inherit',

      tonal: title_.props.tonal !== undefined ? title_.props.tonal : tonal,

      className: classNameTitle
    })
  );

  const classNameTitleMedium = classNames([
    staticClassName('TopAppBar', theme) && [
      'AmauiTopAppBar-title',
      'AmauiTopAppBar-title-medium'
    ],

    classes.title,
    classes[`title_version_${version}`]
  ]);

  const titleMedium = is('string', title_) ? (
    <Type
      version={version === 'medium' ? 'h3' : 'h2'}

      color='inherit'

      tonal={tonal}

      className={classNameTitleMedium}
    >
      {title_}
    </Type>
  ) : (
    React.cloneElement(title_, {
      color: title_.props.color !== undefined ? title_.props.color : 'inherit',

      tonal: title_.props.tonal !== undefined ? title_.props.tonal : tonal,

      className: classNameTitleMedium
    })
  );

  return (
    <Surface
      ref={ref}

      Component={Line}

      color={color}

      tonal={tonal}

      justify='space-between'

      noBorderRadius

      gap={0}

      className={classNames([
        staticClassName('TopAppBar', theme) && [
          'AmauiTopAppBar-root',
          `AmauiTopAppBar-version-${version}`,
          `AmauiTopAppBar-size-${size}`,
          start && `AmauiTopAppBar-start`,
          end && `AmauiTopAppBar-end`,
          fixed && `AmauiTopAppBar-fixed`
        ],

        className,
        classes.root,
        classes[`version_${version}_size_${size}`],
        fixed && classes.fixed
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
          {titleMedium}
        </Line>
      )}
    </Surface>
  );
});

TopAppBar.displayName = 'AmauiTopAppBar';

export default TopAppBar;
