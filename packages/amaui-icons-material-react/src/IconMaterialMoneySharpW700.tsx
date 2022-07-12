import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMoneySharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoneySharpW700'
      short_name='Money'

      {...props}
    >
      <path d="M14 16H19V8H14ZM16 14V10H17V14ZM8 16H13V8H8ZM10 14V10H11V14ZM5 16H7V8H5ZM0.85 21.15V2.85H23.15V21.15ZM4 6V18ZM4 18H20V6H4Z"/>
    </Icon>
  )
});

export default IconMaterialMoneySharpW700;
