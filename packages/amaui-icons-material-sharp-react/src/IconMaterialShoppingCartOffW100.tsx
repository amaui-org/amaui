import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingCartOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingCartOffW100'

      short_name='ShoppingCartOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m586-486-28-28h64l125-232H326l-28-28h496L639-486h-53ZM296-126q-23 0-38.5-15.5T242-180q0-23 15.5-38.5T296-234q23 0 38.5 15.5T350-180q0 23-15.5 38.5T296-126Zm514 16L594-326H203l107-190-86-180-116-116 20-20 702 702-20 20ZM566-354 434-486H324l-72 132h314Zm56-160h-64 64Zm42 388q-22 0-38-15.5T610-180q0-23 16-38.5t38-15.5q22 0 38 15.5t16 38.5q0 23-16 38.5T664-126Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartOffW100.displayName = 'AmauiIconMaterialShoppingCartOffW100';

export default IconMaterialShoppingCartOffW100;
