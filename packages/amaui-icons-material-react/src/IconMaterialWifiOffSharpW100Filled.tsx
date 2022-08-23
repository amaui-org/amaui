import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifiOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiOffSharpW100Filled'
      short_name='WifiOff'

      {...props}
    >
      <path d="M21.9 11.1Q19.975 9.175 17.438 8.087Q14.9 7 12 7Q11.475 7 10.95 7.037Q10.425 7.075 10 7.15L9.1 6.25Q9.625 6.125 10.325 6.062Q11.025 6 12 6Q15.125 6 17.825 7.162Q20.525 8.325 22.6 10.4ZM17.9 15.05Q17.7 14.85 17.562 14.712Q17.425 14.575 17.225 14.375L15.6 12.75Q16.1 12.95 16.863 13.412Q17.625 13.875 18.35 14.6ZM19.95 21 12 13Q10.375 13 8.875 13.625Q7.375 14.25 6.35 15.35L5.65 14.65Q6.675 13.625 8.088 12.9Q9.5 12.175 11.05 12.05L6.95 7.95Q5.775 8.375 4.45 9.225Q3.125 10.075 2.1 11.1L1.45 10.4Q2.5 9.35 3.763 8.475Q5.025 7.6 6.15 7.15L3.8 4.8L4.3 4.3L20.5 20.5ZM12 21 9.875 18.875Q10.3 18.45 10.838 18.225Q11.375 18 12 18Q12.625 18 13.163 18.225Q13.7 18.45 14.125 18.875Z"/>
    </Icon>
  );
});

IconMaterialWifiOffSharpW100Filled.displayName = 'AmauiIconMaterialWifiOffSharpW100Filled';

export default IconMaterialWifiOffSharpW100Filled;
