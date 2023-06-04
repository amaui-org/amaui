import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShopFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopFilled'

      short_name='Shop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21V6h6V2h8v4h6v15Zm8-15h4V4h-4Zm-.5 12 7-4.5-7-4.5Z"/>
    </Icon>
  );
});

IconMaterialShopFilled.displayName = 'AmauiIconMaterialShopFilled';

export default IconMaterialShopFilled;
