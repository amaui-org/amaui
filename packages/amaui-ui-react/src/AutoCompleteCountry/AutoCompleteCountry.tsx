import React from 'react';

import { countries } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import AutoCompleteElement from '../AutoComplete';
import ListItemElement from '../ListItem';
import TypeElement from '../Type';
import { staticClassName } from '../utils';
import { IAutoComplete } from '../AutoComplete/AutoComplete';

const useStyle = styleMethod(theme => ({
  root: {

  }
}), { name: 'amaui-AutoCompleteCountry' });

export interface IAutoCompleteCountry extends IAutoComplete {

}

const AutoCompleteCountry: React.FC<IAutoCompleteCountry> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiBadge?.props?.default, ...props_ }), [props_]);

  const AutoComplete = React.useMemo(() => theme?.elements?.AutoComplete || AutoCompleteElement, [theme]);

  const ListItem = React.useMemo(() => theme?.elements?.ListItem || ListItemElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const {
    value,

    valueDefault,

    valueInputDefault: valueInputDefault_,

    size = 'regular',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  // {
  //   flag: string;
  //   name: string;
  //   full_name: string;
  //   sovereignty: string;
  //   'alpha-2': string;
  //   'alpha-3': string;
  //   numeric: string;
  //   subdivision: string;
  //   tlds: string[];
  // }
  const options = React.useMemo(() => {
    return countries.map(item => ({
      ...item,

      value: item['alpha-2']
    }));
  }, [countries]);

  const valueInputDefault = React.useMemo(() => {
    return valueInputDefault_ !== undefined ? valueInputDefault_ : options.find(item => item.value === (value !== undefined ? value : valueDefault))?.name;
  }, []);

  return (
    <AutoComplete
      ref={ref}

      name='Country'

      valueInputDefault={valueInputDefault}

      valueDefault={valueDefault}

      value={value}

      options={options}

      size={size}

      renderOption={(item: any, index_: number, propsItem: any) => (
        <ListItem
          key={index_}

          start={item.flag}

          startAlign='center'

          primary={(
            <Type
              version='b3'
            >
              {item.name}
            </Type>
          )}

          value={item.value}

          selected={item.value === (value?.value !== undefined ? value?.value : value)}

          size='small'

          button

          {...propsItem}
        />
      )}

      className={classNames([
        staticClassName('AutoCompleteCountry', theme) && [
          'amaui-AutoCompleteCountry-root',
          `amaui-AutoCompleteCountry-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    />
  );
});

AutoCompleteCountry.displayName = 'amaui-AutoCompleteCountry';

export default AutoCompleteCountry;
