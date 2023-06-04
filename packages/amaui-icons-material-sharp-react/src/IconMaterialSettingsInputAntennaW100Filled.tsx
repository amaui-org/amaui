import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsInputAntennaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputAntennaW100Filled'

      short_name='SettingsInputAntenna'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 12q0-2 .762-3.775.763-1.775 2.076-3.088Q6.45 3.825 8.213 3.062 9.975 2.3 12 2.3t3.8.75q1.775.75 3.088 2.062Q20.2 6.425 20.95 8.2q.75 1.775.75 3.8H21q0-1.875-.712-3.513-.713-1.637-1.938-2.862T15.488 3.7Q13.85 3 12 3t-3.488.7q-1.637.7-2.862 1.925T3.712 8.487Q3 10.125 3 12Zm4 0q0-2.425 1.663-4.062Q9.625 6.3 12 6.3t4.038 1.638Q17.7 9.575 17.7 12H17q0-2.075-1.462-3.538Q14.075 7 12 7 9.925 7 8.463 8.462 7 9.925 7 12ZM9 21.5l-.5-.5 3.15-3.15v-3.975q-.675-.175-1.1-.675-.425-.5-.425-1.175 0-.8.538-1.337.537-.538 1.337-.538.8 0 1.338.538.537.537.537 1.337 0 .675-.425 1.175t-1.1.675v3.975L15.5 21l-.5.5-3-3Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputAntennaW100Filled.displayName = 'AmauiIconMaterialSettingsInputAntennaW100Filled';

export default IconMaterialSettingsInputAntennaW100Filled;
