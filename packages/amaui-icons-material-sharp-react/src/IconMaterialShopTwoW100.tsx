import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShopTwoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopTwoW100'

      short_name='ShopTwo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 14.05 3.65-2.3L12 9.45Zm-9.7 5.6V9.55H3v9.4h15.05v.7Zm2.7-2.7V6.55h5.4V3.6h5.9v2.95h5.4v10.4Zm6.1-10.4h4.5V4.3h-4.5Zm-5.4 9.7H21v-9H5.7Zm0-9v9Z"/>
    </Icon>
  );
});

IconMaterialShopTwoW100.displayName = 'AmauiIconMaterialShopTwoW100';

export default IconMaterialShopTwoW100;
