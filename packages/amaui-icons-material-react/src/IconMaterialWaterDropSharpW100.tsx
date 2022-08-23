import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWaterDropSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDropSharpW100'
      short_name='WaterDrop'

      {...props}
    >
      <path d="M12 20.7Q9.35 20.7 7.325 18.837Q5.3 16.975 5.3 13.8Q5.3 11.725 6.975 9.225Q8.65 6.725 12 3.7Q15.35 6.725 17.025 9.225Q18.7 11.725 18.7 13.8Q18.7 16.975 16.675 18.837Q14.65 20.7 12 20.7ZM12 20Q14.5 20 16.25 18.262Q18 16.525 18 13.8Q18 12.025 16.525 9.737Q15.05 7.45 12 4.65Q8.95 7.45 7.475 9.737Q6 12.025 6 13.8Q6 16.525 7.75 18.262Q9.5 20 12 20ZM12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8Q12 13.8 12 13.8ZM12.2 18.6Q12.4 18.575 12.5 18.475Q12.6 18.375 12.6 18.225Q12.6 18.05 12.475 17.962Q12.35 17.875 12.175 17.9Q11.15 17.975 9.85 17.238Q8.55 16.5 8.25 14.825Q8.2 14.6 8.113 14.5Q8.025 14.4 7.875 14.4Q7.725 14.4 7.613 14.512Q7.5 14.625 7.55 14.9Q7.925 16.925 9.45 17.8Q10.975 18.675 12.2 18.6Z"/>
    </Icon>
  );
});

IconMaterialWaterDropSharpW100.displayName = 'AmauiIconMaterialWaterDropSharpW100';

export default IconMaterialWaterDropSharpW100;
