import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChargingStationSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChargingStationSharpFilled'
      short_name='ChargingStation'

      {...props}
    >
      <path d="M11.5 17V13H9.5L12.5 7V11H14.5ZM5 23V1H19V23ZM7 18H17V6H7Z"/>
    </Icon>
  );
});

IconMaterialChargingStationSharpFilled.displayName = 'AmauiIconMaterialChargingStationSharpFilled';

export default IconMaterialChargingStationSharpFilled;
