import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightTakeoffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightTakeoffRoundedW100Filled'
      short_name='FlightTakeoff'

      {...props}
    >
      <path d="M3.825 20.35Q3.675 20.35 3.575 20.25Q3.475 20.15 3.475 20Q3.475 19.85 3.575 19.75Q3.675 19.65 3.825 19.65H19.825Q19.975 19.65 20.075 19.75Q20.175 19.85 20.175 20Q20.175 20.15 20.075 20.25Q19.975 20.35 19.825 20.35ZM5.525 15.1Q5.275 15.175 5.038 15.075Q4.8 14.975 4.675 14.75L3.125 12.025Q3.025 11.85 3.088 11.7Q3.15 11.55 3.35 11.5Q3.425 11.475 3.513 11.5Q3.6 11.525 3.65 11.575L5.325 13L10.925 11.5L7.15 5.125Q7.025 4.925 7.1 4.737Q7.175 4.55 7.4 4.475Q7.525 4.425 7.65 4.462Q7.775 4.5 7.875 4.575L14.525 10.5L19.825 9.1Q20.325 8.975 20.725 9.287Q21.125 9.6 21.125 10.1Q21.125 10.45 20.938 10.712Q20.75 10.975 20.425 11.05Z"/>
    </Icon>
  );
});

IconMaterialFlightTakeoffRoundedW100Filled.displayName = 'AmauiIconMaterialFlightTakeoffRoundedW100Filled';

export default IconMaterialFlightTakeoffRoundedW100Filled;
