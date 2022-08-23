import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifiCallingRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiCallingRoundedW100Filled'
      short_name='WifiCalling'

      {...props}
    >
      <path d="M16.5 9.5Q16.35 9.5 16.225 9.45Q16.1 9.4 15.975 9.275L12.925 6.225Q12.675 5.975 12.713 5.687Q12.75 5.4 13.025 5.225Q13.775 4.8 14.663 4.5Q15.55 4.2 16.5 4.2Q17.45 4.2 18.337 4.5Q19.225 4.8 19.975 5.225Q20.25 5.4 20.288 5.687Q20.325 5.975 20.075 6.225L17.025 9.275Q16.9 9.4 16.775 9.45Q16.65 9.5 16.5 9.5ZM18.6 19.55Q16.175 19.55 13.638 18.25Q11.1 16.95 9.038 14.887Q6.975 12.825 5.663 10.3Q4.35 7.775 4.35 5.35Q4.35 4.9 4.65 4.6Q4.95 4.3 5.4 4.3H7.4Q7.85 4.3 8.162 4.562Q8.475 4.825 8.575 5.25L9.025 7.3Q9.1 7.7 9.012 8.025Q8.925 8.35 8.65 8.575L6.55 10.5Q7.95 12.85 9.675 14.55Q11.4 16.25 13.75 17.55L15.8 15.4Q16.075 15.125 16.363 15.037Q16.65 14.95 17 15.025L18.7 15.375Q19.125 15.475 19.388 15.788Q19.65 16.1 19.65 16.55V18.5Q19.65 18.95 19.35 19.25Q19.05 19.55 18.6 19.55Z"/>
    </Icon>
  );
});

IconMaterialWifiCallingRoundedW100Filled.displayName = 'AmauiIconMaterialWifiCallingRoundedW100Filled';

export default IconMaterialWifiCallingRoundedW100Filled;
