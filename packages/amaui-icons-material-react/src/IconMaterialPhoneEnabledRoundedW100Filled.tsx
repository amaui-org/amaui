import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneEnabledRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneEnabledRoundedW100Filled'
      short_name='PhoneEnabled'

      {...props}
    >
      <path d="M5.4 19.55Q4.95 19.55 4.65 19.25Q4.35 18.95 4.35 18.5V16.55Q4.35 16.1 4.613 15.788Q4.875 15.475 5.3 15.375L7 15.025Q7.35 14.95 7.638 15.037Q7.925 15.125 8.2 15.4L10.25 17.55Q12.6 16.25 14.325 14.55Q16.05 12.85 17.45 10.5L15.35 8.575Q15.075 8.35 14.988 8.025Q14.9 7.7 14.975 7.3L15.425 5.25Q15.525 4.825 15.838 4.562Q16.15 4.3 16.6 4.3H18.6Q19.05 4.3 19.35 4.6Q19.65 4.9 19.65 5.35Q19.65 7.775 18.338 10.3Q17.025 12.825 14.963 14.887Q12.9 16.95 10.375 18.25Q7.85 19.55 5.4 19.55Z"/>
    </Icon>
  );
});

IconMaterialPhoneEnabledRoundedW100Filled.displayName = 'AmauiIconMaterialPhoneEnabledRoundedW100Filled';

export default IconMaterialPhoneEnabledRoundedW100Filled;
