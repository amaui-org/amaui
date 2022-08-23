import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartDisplayRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplayRoundedW100Filled'
      short_name='SmartDisplay'

      {...props}
    >
      <path d="M11.3 14.55 14.325 12.625Q14.675 12.4 14.675 12Q14.675 11.6 14.325 11.375L11.3 9.45Q10.925 9.2 10.538 9.412Q10.15 9.625 10.15 10.075V13.925Q10.15 14.375 10.538 14.587Q10.925 14.8 11.3 14.55ZM4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialSmartDisplayRoundedW100Filled.displayName = 'AmauiIconMaterialSmartDisplayRoundedW100Filled';

export default IconMaterialSmartDisplayRoundedW100Filled;
