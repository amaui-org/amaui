import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line, { ILine } from '../Line/Line';
import Property from '../Property';
import { staticClassName } from '../utils';
import { IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  maxWidth_extra_small: {
    maxWidth: '240px'
  },

  maxWidth_small: {
    maxWidth: '340px'
  },

  maxWidth_regular: {
    maxWidth: '440px'
  },

  maxWidth_large: {
    maxWidth: '740px'
  },

  maxWidth_extra_large: {
    maxWidth: '1024px'
  },

  maxWidth_extra_extra_large: {
    maxWidth: '1440px'
  }
}), { name: 'amaui-Properties' });

export interface IPropertiesValue {
  name: any;
  value: any;
  separator?: any;
  props?: any;
}

export interface IProperties extends ILine {
  version?: 'row' | 'row-20' | 'row-50' | 'row-between' | 'column';

  size?: 'small' | 'regular' | 'large';

  values?: (boolean | IPropertiesValue)[];

  maxWidth?: 'extra_small' | 'small' | 'regular' | 'large' | 'extra_large' | 'extra_extra_large';

  PropertyProps?: IPropsAny;
}

const Properties: React.FC<IProperties> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiProperties?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    version = 'row-20',

    size = 'regular',

    values = [],

    maxWidth,

    PropertyProps,

    className,

    children,

    ...other
  } = props;

  return (
    <Line
      ref={ref}

      gap={size === 'large' ? 1.5 : size === 'regular' ? 1 : 0.5}

      rowGap={size === 'large' ? 1.5 : size === 'regular' ? 1 : 0.5}

      fullWidth

      className={classNames([
        staticClassName('Properties', theme) && [
          'amaui-Properties-root'
        ],

        className,
        classes.root,
        maxWidth && classes[`maxWidth_${maxWidth}`]
      ])}

      {...other}
    >
      {(values as IPropertiesValue[])?.filter(Boolean)?.map((item, index) => (
        <Property
          key={index}

          version={version}

          size={size}

          name={item.name}

          value={item.value}

          separator={item.separator}

          {...PropertyProps}

          {...item.props}
        />
      ))}
    </Line>
  );
});

Properties.displayName = 'amaui-Properties';

export default Properties;
