import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingmodeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingmodeW100Filled'

      short_name='Shoppingmode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-140q-8 8-20 8t-20-8L140-426q-8-8-7.5-20.5T142-468l352-352q4-4 9.5-6t10.5-2h286q11 0 19.5 8.5T828-800v286q0 6-2.5 11.5T818-492L466-140Zm234-526q14 0 24-10t10-24q0-14-10-24t-24-10q-14 0-24 10t-10 24q0 14 10 24t24 10Z"/>
    </Icon>
  );
});

IconMaterialShoppingmodeW100Filled.displayName = 'AmauiIconMaterialShoppingmodeW100Filled';

export default IconMaterialShoppingmodeW100Filled;
