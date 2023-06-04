import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartphoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartphoneW100Filled'

      short_name='Smartphone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 21.7V2.3h11.4v19.4Zm.7-3.05h10V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialSmartphoneW100Filled.displayName = 'AmauiIconMaterialSmartphoneW100Filled';

export default IconMaterialSmartphoneW100Filled;
