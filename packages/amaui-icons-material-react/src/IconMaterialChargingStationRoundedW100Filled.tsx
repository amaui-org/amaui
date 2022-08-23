import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChargingStationRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChargingStationRoundedW100Filled'
      short_name='ChargingStation'

      {...props}
    >
      <path d="M11.6 15.35V12.8H10.575Q10.375 12.8 10.275 12.637Q10.175 12.475 10.25 12.275L11.875 8.525Q11.975 8.325 12.188 8.387Q12.4 8.45 12.4 8.65V11.2H13.425Q13.625 11.2 13.725 11.362Q13.825 11.525 13.75 11.725L12.125 15.475Q12.025 15.675 11.812 15.612Q11.6 15.55 11.6 15.35ZM7.8 21.7Q7.175 21.7 6.738 21.262Q6.3 20.825 6.3 20.2V3.8Q6.3 3.175 6.738 2.737Q7.175 2.3 7.8 2.3H16.2Q16.825 2.3 17.262 2.737Q17.7 3.175 17.7 3.8V20.2Q17.7 20.825 17.262 21.262Q16.825 21.7 16.2 21.7ZM7 18.65H17V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialChargingStationRoundedW100Filled.displayName = 'AmauiIconMaterialChargingStationRoundedW100Filled';

export default IconMaterialChargingStationRoundedW100Filled;
