import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouseWithShieldFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseWithShieldFilled'

      short_name='HouseWithShield'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18q1.725-.425 2.863-1.988Q16 14.45 16 12.55V10l-4-2-4 2v2.55q0 1.9 1.137 3.462Q10.275 17.575 12 18Zm-8 3V9l8-6 8 6v12Z"/>
    </Icon>
  );
});

IconMaterialHouseWithShieldFilled.displayName = 'AmauiIconMaterialHouseWithShieldFilled';

export default IconMaterialHouseWithShieldFilled;
