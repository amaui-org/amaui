import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShopSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopSharp'
      short_name='Shop'

      {...props}
    >
      <path d="M2 21V6H8V2H16V6H22V21ZM10 6H14V4H10ZM4 19H20V8H4ZM9.5 18 16.5 13.5 9.5 9ZM4 8V19Z"/>
    </Icon>
  );
});

export default IconMaterialShopSharp;
