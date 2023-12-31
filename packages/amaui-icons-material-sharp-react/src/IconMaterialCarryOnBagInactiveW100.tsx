import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarryOnBagInactiveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagInactiveW100'

      short_name='CarryOnBagInactive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m548-430-28-28v-142H377l-28-28h171v-172h-60v-28h88v398Zm164 318-74-74q0 36-25.5 63T548-96q-39 0-63-25t-26-51H252v-400L84-740l20-20 628 628-20 20Zm-366-88v-278l-66-66v344h66Zm202 76q26 0 44-18t18-44q0-26-18-44t-44-18q-26 0-44 18t-18 44q0 26 18 44t44 18Zm-174-76h86q2-23 20-44.5t40-26.5v-33L374-450v250Zm174 14ZM377-600Zm-17 275Zm-14 125v-278 278Zm28 0v-250 250Zm174 14Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagInactiveW100.displayName = 'AmauiIconMaterialCarryOnBagInactiveW100';

export default IconMaterialCarryOnBagInactiveW100;
