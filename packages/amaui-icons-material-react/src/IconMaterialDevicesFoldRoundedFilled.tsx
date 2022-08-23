import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDevicesFoldRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DevicesFoldRoundedFilled'
      short_name='DevicesFold'

      {...props}
    >
      <path d="M12 21Q11.175 21 10.588 20.413Q10 19.825 10 19V4.275Q10 3.675 10.325 3.187Q10.65 2.7 11.2 2.45L14.2 1.15Q15.2 0.725 16.1 1.312Q17 1.9 17 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM14.675 19Q14.675 19 14.675 19Q14.675 19 14.675 19H20Q20 19 20 19Q20 19 20 19V5Q20 5 20 5Q20 5 20 5H17V16.675Q17 17.275 16.675 17.788Q16.35 18.3 15.8 18.525ZM2 5V3H4V5ZM2 21V19H4V21ZM2 17V15H4V17ZM2 13V11H4V13ZM2 9V7H4V9ZM6 5V3H8V5ZM6 21V19H8V21Z"/>
    </Icon>
  );
});

IconMaterialDevicesFoldRoundedFilled.displayName = 'AmauiIconMaterialDevicesFoldRoundedFilled';

export default IconMaterialDevicesFoldRoundedFilled;
