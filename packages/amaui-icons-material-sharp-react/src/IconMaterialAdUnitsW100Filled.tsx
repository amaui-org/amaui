import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdUnitsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdUnitsW100Filled'

      short_name='AdUnits'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 7.7V7h6.7v.7Zm-2.35 14V2.3h11.4v19.4Zm.7-3.05h10V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialAdUnitsW100Filled.displayName = 'AmauiIconMaterialAdUnitsW100Filled';

export default IconMaterialAdUnitsW100Filled;
