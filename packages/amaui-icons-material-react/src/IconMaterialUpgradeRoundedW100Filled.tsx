import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUpgradeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpgradeRoundedW100Filled'
      short_name='Upgrade'

      {...props}
    >
      <path d="M12 15.35Q11.85 15.35 11.75 15.25Q11.65 15.15 11.65 15V6.225L8.625 9.275Q8.525 9.375 8.375 9.375Q8.225 9.375 8.125 9.275Q8.025 9.175 8.025 9.025Q8.025 8.875 8.125 8.775L11.475 5.45Q11.6 5.325 11.725 5.275Q11.85 5.225 12 5.225Q12.15 5.225 12.275 5.275Q12.4 5.325 12.525 5.45L15.875 8.775Q15.975 8.875 15.975 9.025Q15.975 9.175 15.875 9.275Q15.775 9.375 15.625 9.375Q15.475 9.375 15.375 9.275L12.35 6.225V15Q12.35 15.15 12.25 15.25Q12.15 15.35 12 15.35ZM8 19.35Q7.85 19.35 7.75 19.25Q7.65 19.15 7.65 19Q7.65 18.85 7.75 18.75Q7.85 18.65 8 18.65H16Q16.15 18.65 16.25 18.75Q16.35 18.85 16.35 19Q16.35 19.15 16.25 19.25Q16.15 19.35 16 19.35Z"/>
    </Icon>
  );
});

IconMaterialUpgradeRoundedW100Filled.displayName = 'AmauiIconMaterialUpgradeRoundedW100Filled';

export default IconMaterialUpgradeRoundedW100Filled;
