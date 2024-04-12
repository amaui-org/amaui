import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import Line from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    overflow: 'auto hidden',

    '& > *': {
      flex: '0 0 auto'
    }
  }
}), { name: 'amaui-Meta' });

export interface IMeta extends ILine {
  values?: any[];

  separator?: any;

  ItemProps?: IPropsAny;
  SeparatorProps?: IPropsAny;
}

const Meta: React.FC<IMeta> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiMeta?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle();

  const {
    values: values_ = [],

    separator: separator_ = '•',

    ItemProps,
    SeparatorProps,

    className,

    children,

    ...other
  } = props;

  const separator = is('string', separator_) ? (
    <Type
      version='b3'

      priority='secondary'

      {...SeparatorProps}
    >
      {separator_}
    </Type>
  ) : separator_;

  const getItem = (item: any, index: number) => {
    if (is('simple', item)) return (
      <Type
        key={index}

        version='b3'

        priority='secondary'
      >
        {item}
      </Type>
    );

    return (
      React.cloneElement(item, {
        key: index
      })
    );
  };

  const values = values_?.filter(Boolean)?.flatMap((item, index) => !index ? getItem(item, index) : [separator, getItem(item, index)]);

  return (
    <Line
      ref={ref}

      gap={1}

      direction='row'

      align='center'

      justify='flex-start'

      className={classNames([
        staticClassName('Meta', theme) && [
          'amaui-Meta-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {values}
    </Line>
  );
});

Meta.displayName = 'amaui-Meta';

export default Meta;
