import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShopW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopW100'

      short_name='Shop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 19.7V7.3h6V4.6h5.4v2.7h6v12.4ZM10 7.3h4v-2h-4ZM4 19h16V8H4Zm6.15-2.2 5.15-3.3-5.15-3.3ZM4 8v11Z"/>
    </Icon>
  );
});

IconMaterialShopW100.displayName = 'AmauiIconMaterialShopW100';

export default IconMaterialShopW100;
