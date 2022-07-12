import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShopSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopSharpW700Filled'
      short_name='Shop'

      {...props}
    >
      <path d="M1.15 21.925V5.225H7.225V0.475H16.775V5.225H22.85V21.925ZM10.375 5.225H13.625V3.625H10.375ZM9.5 18.075 16.5 13.575 9.5 9.075Z"/>
    </Icon>
  )
});

export default IconMaterialShopSharpW700Filled;
