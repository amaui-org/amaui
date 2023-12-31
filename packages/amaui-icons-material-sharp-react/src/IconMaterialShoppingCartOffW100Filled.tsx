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
      <path d="M586-486 298-774h496L639-486h-53ZM296-126q-22 0-38-15.5T242-180q0-23 16-38.5t38-15.5q22 0 38 15.5t16 38.5q0 23-16 38.5T296-126Zm514 16L594-326H203l107-190-86-180-116-116 20-20 702 702-20 20Zm-146-16q-22 0-38-15.5T610-180q0-23 16-38.5t38-15.5q22 0 38 15.5t16 38.5q0 23-16 38.5T664-126Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartOffW100Filled.displayName = 'AmauiIconMaterialShoppingCartOffW100Filled';

export default IconMaterialShoppingCartOffW100Filled;
