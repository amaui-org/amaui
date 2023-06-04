import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShopTwo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopTwo'

      short_name='ShopTwo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15 5.5-3.5L12 8ZM1 22V9h2v11h17v2Zm4-4V5h5V1h8v4h5v13Zm7-13h4V3h-4ZM7 16h14V7H7Zm0-9v9Z"/>
    </Icon>
  );
});

IconMaterialShopTwo.displayName = 'AmauiIconMaterialShopTwo';

export default IconMaterialShopTwo;
