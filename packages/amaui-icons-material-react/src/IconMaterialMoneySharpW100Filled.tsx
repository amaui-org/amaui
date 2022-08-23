import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoneySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneySharpW100Filled'
      short_name='Money'

      {...props}
    >
      <path d="M14.35 15.35H18V8.65H14.35ZM15.05 14.65V9.35H17.3V14.65ZM8.7 15.35H12.35V8.65H8.7ZM9.4 14.65V9.35H11.65V14.65ZM6 15.35H6.7V8.65H6ZM3.3 18.7V5.3H20.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialMoneySharpW100Filled.displayName = 'AmauiIconMaterialMoneySharpW100Filled';

export default IconMaterialMoneySharpW100Filled;
