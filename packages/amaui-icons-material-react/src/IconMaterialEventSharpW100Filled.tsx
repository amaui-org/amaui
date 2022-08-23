import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEventSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventSharpW100Filled'
      short_name='Event'

      {...props}
    >
      <path d="M15 18Q14.175 18 13.588 17.413Q13 16.825 13 16Q13 15.175 13.588 14.587Q14.175 14 15 14Q15.825 14 16.413 14.587Q17 15.175 17 16Q17 16.825 16.413 17.413Q15.825 18 15 18ZM4.3 20.7V5.3H7.8V3H8.6V5.3H15.5V3H16.2V5.3H19.7V20.7ZM5 20H19V10.8H5Z"/>
    </Icon>
  );
});

IconMaterialEventSharpW100Filled.displayName = 'AmauiIconMaterialEventSharpW100Filled';

export default IconMaterialEventSharpW100Filled;
