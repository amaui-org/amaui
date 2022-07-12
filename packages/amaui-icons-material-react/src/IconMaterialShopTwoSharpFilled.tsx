import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShopTwoSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopTwoSharpFilled'
      short_name='ShopTwo'

      {...props}
    >
      <path d="M12 15 17.5 11.5 12 8ZM1 22V9H3V20H20V22ZM5 18V5H10V1H18V5H23V18ZM12 5H16V3H12Z"/>
    </Icon>
  )
});

export default IconMaterialShopTwoSharpFilled;
