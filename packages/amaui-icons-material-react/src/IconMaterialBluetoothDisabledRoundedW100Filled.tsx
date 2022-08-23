import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBluetoothDisabledRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BluetoothDisabledRoundedW100Filled'
      short_name='BluetoothDisabled'

      {...props}
    >
      <path d="M21.2 21.7 16.3 16.8 12.475 20.625Q12.375 20.725 12.225 20.75Q12.075 20.775 11.95 20.725Q11.825 20.675 11.738 20.538Q11.65 20.4 11.65 20.275V12.85L6.65 17.85Q6.55 17.95 6.413 17.962Q6.275 17.975 6.15 17.85Q6.025 17.725 6.025 17.6Q6.025 17.475 6.15 17.35L11.5 12L3.75 4.25Q3.65 4.15 3.638 4.012Q3.625 3.875 3.75 3.75Q3.875 3.625 4 3.625Q4.125 3.625 4.25 3.75L21.7 21.2Q21.8 21.3 21.812 21.438Q21.825 21.575 21.7 21.7Q21.575 21.825 21.45 21.825Q21.325 21.825 21.2 21.7ZM12.35 19.75 15.8 16.3 12.35 12.85ZM13.75 10.75 13.25 10.25 15.8 7.7 12.35 4.25V9.35L11.65 8.65V3.725Q11.65 3.6 11.738 3.462Q11.825 3.325 11.95 3.275Q12.075 3.225 12.225 3.25Q12.375 3.275 12.475 3.375L16.275 7.175Q16.4 7.3 16.45 7.425Q16.5 7.55 16.5 7.7Q16.5 7.85 16.45 7.975Q16.4 8.1 16.275 8.225Z"/>
    </Icon>
  );
});

IconMaterialBluetoothDisabledRoundedW100Filled.displayName = 'AmauiIconMaterialBluetoothDisabledRoundedW100Filled';

export default IconMaterialBluetoothDisabledRoundedW100Filled;
