import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShopTwoSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopTwoSharpW100Filled'
      short_name='ShopTwo'

      {...props}
    >
      <path d="M12 14.05 15.65 11.75 12 9.45ZM2.3 19.65V9.55H3V18.95H18.05V19.65ZM5 16.95V6.55H10.4V3.6H16.3V6.55H21.7V16.95ZM11.1 6.55H15.6V4.3H11.1Z"/>
    </Icon>
  );
});

IconMaterialShopTwoSharpW100Filled.displayName = 'AmauiIconMaterialShopTwoSharpW100Filled';

export default IconMaterialShopTwoSharpW100Filled;
