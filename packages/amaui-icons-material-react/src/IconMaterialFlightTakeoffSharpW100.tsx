import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightTakeoffSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightTakeoffSharpW100'
      short_name='FlightTakeoff'

      {...props}
    >
      <path d="M3.475 20.35V19.65H20.175V20.35ZM4.975 15.25 2.875 11.6 3.525 11.45 5.325 13 10.925 11.5 6.875 4.65 7.675 4.4 14.525 10.5 19.825 9.1Q20.325 8.975 20.725 9.287Q21.125 9.6 21.125 10.1Q21.125 10.45 20.938 10.712Q20.75 10.975 20.425 11.05Z"/>
    </Icon>
  );
});

IconMaterialFlightTakeoffSharpW100.displayName = 'AmauiIconMaterialFlightTakeoffSharpW100';

export default IconMaterialFlightTakeoffSharpW100;
