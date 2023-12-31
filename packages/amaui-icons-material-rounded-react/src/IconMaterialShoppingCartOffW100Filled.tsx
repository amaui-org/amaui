import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingCartOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingCartOffW100Filled'

      short_name='ShoppingCartOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M606-486h-20L298-774h420q27 0 39.5 22t-1.5 48L654-514q-8 15-17.5 21.5T606-486ZM296-126q-22 0-38-15.5T242-180q0-23 16-38.5t38-15.5q22 0 38 15.5t16 38.5q0 23-16 38.5T296-126Zm504 6L594-326H296q-32 0-47.5-26.5T248-406l62-110-86-180-106-106q-4-4-4.5-9.5T118-822q5-5 10-5t10 5l682 682q4 4 4.5 9.5T820-120q-5 5-10 5t-10-5Zm-136-6q-22 0-38-15.5T610-180q0-23 16-38.5t38-15.5q22 0 38 15.5t16 38.5q0 23-16 38.5T664-126Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartOffW100Filled.displayName = 'AmauiIconMaterialShoppingCartOffW100Filled';

export default IconMaterialShoppingCartOffW100Filled;
