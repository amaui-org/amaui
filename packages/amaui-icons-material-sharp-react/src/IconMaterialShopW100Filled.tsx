import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopW100Filled'

      short_name='Shop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7V7.3h6V4.6h5.4v2.7h6v12.4ZM10 7.3h4v-2h-4Zm.15 9.5 5.15-3.3-5.15-3.3Z"/>
    </Icon>
  );
});

IconMaterialShopW100Filled.displayName = 'AmauiIconMaterialShopW100Filled';

export default IconMaterialShopW100Filled;
