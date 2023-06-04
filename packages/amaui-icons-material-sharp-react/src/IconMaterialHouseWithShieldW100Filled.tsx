import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHouseWithShieldW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseWithShieldW100Filled'

      short_name='HouseWithShield'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17.175q1.275-.325 2.113-1.462.837-1.138.837-2.538v-1.9L12 9.8l-2.95 1.475v1.9q0 1.4.838 2.538.837 1.137 2.112 1.462ZM5.3 19.7V9.65L12 4.625l6.7 5.025V19.7Z"/>
    </Icon>
  );
});

IconMaterialHouseWithShieldW100Filled.displayName = 'AmauiIconMaterialHouseWithShieldW100Filled';

export default IconMaterialHouseWithShieldW100Filled;
