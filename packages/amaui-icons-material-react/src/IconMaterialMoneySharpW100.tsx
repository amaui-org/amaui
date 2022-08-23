import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoneySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneySharpW100'
      short_name='Money'

      {...props}
    >
      <path d="M14.35 15.35H18V8.65H14.35ZM15.05 14.65V9.35H17.3V14.65ZM8.7 15.35H12.35V8.65H8.7ZM9.4 14.65V9.35H11.65V14.65ZM6 15.35H6.7V8.65H6ZM3.3 18.7V5.3H20.7V18.7ZM4 6V18ZM4 18H20V6H4Z"/>
    </Icon>
  );
});

IconMaterialMoneySharpW100.displayName = 'AmauiIconMaterialMoneySharpW100';

export default IconMaterialMoneySharpW100;
