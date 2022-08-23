import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeviceHubSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceHubSharpW100'
      short_name='DeviceHub'

      {...props}
    >
      <path d="M4.3 19.7V16H7.5L11.65 11.85V9.05Q10.8 8.85 10.225 8.212Q9.65 7.575 9.65 6.7Q9.65 5.725 10.338 5.037Q11.025 4.35 12 4.35Q12.975 4.35 13.663 5.037Q14.35 5.725 14.35 6.7Q14.35 7.575 13.775 8.212Q13.2 8.85 12.35 9.05V11.85L16.5 16H19.7V19.7H16V16.5L12 12.5L8 16.5V19.7Z"/>
    </Icon>
  );
});

IconMaterialDeviceHubSharpW100.displayName = 'AmauiIconMaterialDeviceHubSharpW100';

export default IconMaterialDeviceHubSharpW100;
