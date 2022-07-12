import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShopSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopSharpW100'
      short_name='Shop'

      {...props}
    >
      <path d="M3.3 19.7V7.3H9.3V4.6H14.7V7.3H20.7V19.7ZM10 7.3H14V5.3H10ZM4 19H20V8H4ZM10.15 16.8 15.3 13.5 10.15 10.2ZM4 8V19Z"/>
    </Icon>
  )
});

export default IconMaterialShopSharpW100;
