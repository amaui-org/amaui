import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line, { ILine } from '../Line/Line';
import useMediaQuery from '../useMediaQuery';
import TypeElement from '../Type';
import { staticClassName } from '../utils';
import { IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  'version_row-50': {
    '& > *': {
      flex: '1 1 50%'
    }
  },

  'version_row-20': {
    '& > *:first-child': {
      flex: '1 1 20%'
    },

    '& > *:last-child': {
      flex: '1 1 80%'
    }
  },

  text: {
    wordBreak: 'break-word'
  }
}), { name: 'amaui-Property' });

export interface IProperty extends ILine {
  name?: any;

  value?: any;

  separator?: any;

  version?: 'row' | 'row-20' | 'row-50' | 'row-between' | 'column';

  size?: 'small' | 'regular' | 'large';

  responsive?: boolean;

  mediaQuery?: string;

  ItemProps?: IPropsAny;
  NameProps?: IPropsAny;
  NameWrapperProps?: IPropsAny;
  ValueProps?: IPropsAny;
}

const Property: React.FC<IProperty> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiProperty?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle();

  const {
    version: version_ = 'row-20',

    size = 'regular',

    name,

    value: value_,

    separator,

    responsive = true,

    mediaQuery = `(max-width: 768px)`,

    ItemProps,
    NameProps,
    NameWrapperProps,
    ValueProps,

    className,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>()
  };

  const mobile = useMediaQuery(mediaQuery, { element: refs.root.current });

  let version = version_;

  if (responsive && mobile) {
    version = 'column';
  }

  const value = value_ !== undefined ? value_ : children;

  const propsRoot: ILine = {};

  if (version === 'column') {
    propsRoot.gap = 0.5;
    propsRoot.direction = 'column';
    propsRoot.align = 'flex-start';
  }

  if (version.includes('row')) {
    propsRoot.gap = 2;
    propsRoot.direction = 'row';
    propsRoot.align = 'flex-start';
  }

  if (version === 'row') {
    propsRoot.justify = 'flex-start';
  }
  else if (['row-20', 'row-50', 'row-between'].includes(version)) {
    propsRoot.justify = 'space-between';
  }

  return (
    <Line
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      fullWidth

      className={classNames([
        staticClassName('Property', theme) && [
          'amaui-Property-root'
        ],

        className,
        classes.root,
        classes[`version_${version}`]
      ])}

      {...propsRoot}

      {...other}
    >
      <Line
        gap={0}

        direction='row'

        {...NameWrapperProps}
      >
        {is('simple', name) ? (
          <Type
            version={size === 'large' ? 'l1' : size === 'regular' ? 'l2' : 'l3'}

            {...ItemProps}

            {...NameProps}

            className={classNames([
              staticClassName('Property', theme) && [
                'amaui-Property-name'
              ],

              ItemProps?.className,
              NameProps?.className,
              classes.text,
              classes.name
            ])}
          >
            {name}
          </Type>
        ) : name}

        {separator}
      </Line>

      {is('simple', value) ? (
        <Type
          version={size === 'large' ? 'b1' : size === 'regular' ? 'b2' : 'b3'}

          {...ItemProps}

          {...ValueProps}

          className={classNames([
            staticClassName('Property', theme) && [
              'amaui-Property-name'
            ],

            ItemProps?.className,
            ValueProps?.className,
            classes.text,
            classes.name
          ])}
        >
          {value}
        </Type>
      ) : value}
    </Line>
  );
});

Property.displayName = 'amaui-Property';

export default Property;
