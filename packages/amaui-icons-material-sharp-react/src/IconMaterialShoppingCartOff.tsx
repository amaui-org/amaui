import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingCartOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingCartOff'

      short_name='ShoppingCartOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m633-440-80-80h69l110-200H353l-80-80h595L669-440h-36ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm540 52L566-280H177l99-202-72-162L28-820l56-56L876-84l-56 56ZM486-360l-80-80h-62l-40 80h182Zm136-160h-69 69Zm58 440q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartOff.displayName = 'AmauiIconMaterialShoppingCartOff';

export default IconMaterialShoppingCartOff;
