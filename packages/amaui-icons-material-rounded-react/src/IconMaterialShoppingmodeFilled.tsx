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
      <path d="M503-104q-24 24-57 24t-57-24L103-390q-23-23-23-56.5t23-56.5l352-353q11-11 26-17.5t32-6.5h286q33 0 56.5 23.5T879-800v286q0 17-6.5 32T855-456L503-104Zm196-536q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640Z"/>
    </Icon>
  );
});

IconMaterialShoppingmodeFilled.displayName = 'AmauiIconMaterialShoppingmodeFilled';

export default IconMaterialShoppingmodeFilled;
