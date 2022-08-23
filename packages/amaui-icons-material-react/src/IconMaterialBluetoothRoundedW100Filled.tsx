import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBluetoothRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothRoundedW100Filled'
      short_name='Bluetooth'

      {...props}
    >
      <path d="M11.95 20.725Q11.825 20.675 11.738 20.538Q11.65 20.4 11.65 20.275V12.85L6.65 17.85Q6.55 17.95 6.413 17.962Q6.275 17.975 6.15 17.85Q6.025 17.725 6.025 17.6Q6.025 17.475 6.15 17.35L11.5 12L6.15 6.65Q6.05 6.55 6.038 6.412Q6.025 6.275 6.15 6.15Q6.275 6.025 6.4 6.025Q6.525 6.025 6.65 6.15L11.65 11.15V3.725Q11.65 3.6 11.738 3.462Q11.825 3.325 11.95 3.275Q12.075 3.225 12.225 3.25Q12.375 3.275 12.475 3.375L16.275 7.175Q16.4 7.3 16.45 7.425Q16.5 7.55 16.5 7.7Q16.5 7.85 16.45 7.975Q16.4 8.1 16.275 8.225L12.5 12L16.275 15.775Q16.4 15.9 16.45 16.025Q16.5 16.15 16.5 16.3Q16.5 16.45 16.45 16.575Q16.4 16.7 16.275 16.825L12.475 20.625Q12.375 20.725 12.225 20.75Q12.075 20.775 11.95 20.725ZM12.35 11.15 15.8 7.7 12.35 4.25ZM12.35 19.75 15.8 16.3 12.35 12.85Z"/>
    </Icon>
  );
});

IconMaterialBluetoothRoundedW100Filled.displayName = 'AmauiIconMaterialBluetoothRoundedW100Filled';

export default IconMaterialBluetoothRoundedW100Filled;
