import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingmodeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingmodeFilled'

      short_name='Shoppingmode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M446-47 47-446l432-434h400v400L446-47Zm253-593q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640Z"/>
    </Icon>
  );
});

IconMaterialShoppingmodeFilled.displayName = 'AmauiIconMaterialShoppingmodeFilled';

export default IconMaterialShoppingmodeFilled;
