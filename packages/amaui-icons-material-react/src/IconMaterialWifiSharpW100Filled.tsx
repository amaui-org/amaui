import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWifiSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiSharpW100Filled'
      short_name='Wifi'

      {...props}
    >
      <path d="M6.35 15.35 5.65 14.65Q6.9 13.4 8.512 12.7Q10.125 12 12 12Q13.875 12 15.488 12.7Q17.1 13.4 18.35 14.65L17.65 15.35Q16.55 14.25 15.1 13.625Q13.65 13 12 13Q10.35 13 8.9 13.625Q7.45 14.25 6.35 15.35ZM2.1 11.1 1.4 10.4Q3.425 8.375 6.125 7.188Q8.825 6 12 6Q15.175 6 17.875 7.188Q20.575 8.375 22.6 10.4L21.9 11.1Q19.975 9.175 17.438 8.087Q14.9 7 12 7Q9.1 7 6.562 8.087Q4.025 9.175 2.1 11.1ZM12 21 14.125 18.875Q13.7 18.45 13.163 18.225Q12.625 18 12 18Q11.375 18 10.838 18.225Q10.3 18.45 9.875 18.875Z"/>
    </Icon>
  );
});

IconMaterialWifiSharpW100Filled.displayName = 'AmauiIconMaterialWifiSharpW100Filled';

export default IconMaterialWifiSharpW100Filled;
