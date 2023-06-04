import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChargingStationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChargingStationW100Filled'

      short_name='ChargingStation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.6 15.35V12.8h-1.025q-.2 0-.3-.163-.1-.162-.025-.362l1.625-3.75q.1-.2.313-.138.212.063.212.263v2.55h1.025q.2 0 .3.162.1.163.025.363l-1.625 3.75q-.1.2-.313.137-.212-.062-.212-.262ZM7.8 21.7q-.625 0-1.062-.438Q6.3 20.825 6.3 20.2V3.8q0-.625.438-1.063Q7.175 2.3 7.8 2.3h8.4q.625 0 1.062.437.438.438.438 1.063v16.4q0 .625-.438 1.062-.437.438-1.062.438ZM7 18.65h10V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialChargingStationW100Filled.displayName = 'AmauiIconMaterialChargingStationW100Filled';

export default IconMaterialChargingStationW100Filled;
