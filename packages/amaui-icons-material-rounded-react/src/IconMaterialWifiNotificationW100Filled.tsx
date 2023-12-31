import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiNotificationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiNotificationW100Filled'

      short_name='WifiNotification'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-242v-306q0-79 51-138.5T446-760v-28q0-15 9.5-24.5T480-822q15 0 24.5 9.5T514-788v28q22 4 42 12t38 19q-51 15-96.5 42.5T412-624q-16 15-16 36t15 36l311 310h38q6 0 10 4t4 10q0 6-4 10t-10 4H200q-6 0-10-4t-4-10q0-6 4-10t10-4h66Zm214 142q-24 0-42-17t-18-43h120q0 26-17 43t-43 17Zm213-536q-48 0-92 16t-79 44q-5 4-11 4.5t-11-4.5q-5-5-4-10.5t6-9.5q39-32 88-50t104-18q55 0 103.5 18t87.5 50q5 4 6 9.5t-4 10.5q-5 5-11 4.5t-11-4.5q-35-28-79.5-44T693-636Zm1 120q-24 0-46 6.5T607-490q-5 4-11 4t-10-5q-4-5-3.5-10t5.5-9q23-16 49-25t56-9q30 0 57 9t50 25q5 4 6 9t-4 10q-5 5-11 5t-11-4q-19-13-40.5-19.5T694-516Zm0 138q-11 0-18.5-7.5T668-404q0-11 7.5-18.5T694-430q11 0 18.5 7.5T720-404q0 11-7.5 18.5T694-378Z"/>
    </Icon>
  );
});

IconMaterialWifiNotificationW100Filled.displayName = 'AmauiIconMaterialWifiNotificationW100Filled';

export default IconMaterialWifiNotificationW100Filled;
