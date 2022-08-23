import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabletMacRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletMacRoundedW100Filled'
      short_name='TabletMac'

      {...props}
    >
      <path d="M5.8 21.7Q5.175 21.7 4.738 21.262Q4.3 20.825 4.3 20.2V3.8Q4.3 3.175 4.738 2.737Q5.175 2.3 5.8 2.3H18.2Q18.825 2.3 19.263 2.737Q19.7 3.175 19.7 3.8V20.2Q19.7 20.825 19.263 21.262Q18.825 21.7 18.2 21.7ZM5 16.7H19V5.35H5ZM12 19.9Q12.275 19.9 12.488 19.688Q12.7 19.475 12.7 19.2Q12.7 18.925 12.488 18.712Q12.275 18.5 12 18.5Q11.725 18.5 11.513 18.712Q11.3 18.925 11.3 19.2Q11.3 19.475 11.513 19.688Q11.725 19.9 12 19.9Z"/>
    </Icon>
  );
});

IconMaterialTabletMacRoundedW100Filled.displayName = 'AmauiIconMaterialTabletMacRoundedW100Filled';

export default IconMaterialTabletMacRoundedW100Filled;
