import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterDropSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDropSharpW100Filled'
      short_name='WaterDrop'

      {...props}
    >
      <path d="M12 20.7Q9.35 20.7 7.325 18.837Q5.3 16.975 5.3 13.8Q5.3 11.725 6.975 9.225Q8.65 6.725 12 3.7Q15.35 6.725 17.025 9.225Q18.7 11.725 18.7 13.8Q18.7 16.975 16.675 18.837Q14.65 20.7 12 20.7ZM12.2 18.6Q12.4 18.575 12.5 18.475Q12.6 18.375 12.6 18.225Q12.6 18.05 12.475 17.962Q12.35 17.875 12.175 17.9Q11.15 17.975 9.85 17.238Q8.55 16.5 8.25 14.825Q8.2 14.6 8.113 14.5Q8.025 14.4 7.875 14.4Q7.725 14.4 7.613 14.512Q7.5 14.625 7.55 14.9Q7.925 16.925 9.45 17.8Q10.975 18.675 12.2 18.6Z"/>
    </Icon>
  );
});

IconMaterialWaterDropSharpW100Filled.displayName = 'AmauiIconMaterialWaterDropSharpW100Filled';

export default IconMaterialWaterDropSharpW100Filled;
