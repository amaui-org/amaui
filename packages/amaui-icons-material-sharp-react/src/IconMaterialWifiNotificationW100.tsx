import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiNotificationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiNotificationW100'

      short_name='WifiNotification'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-100q-24 0-42-17t-18-43h120q0 26-17 43t-43 17ZM186-214v-28h80v-306q0-79 51-138.5T446-760v-62h68v62q22 4 42 12t38 19q-9 3-17.5 5.5T559-717q-18-8-38-12.5t-41-4.5q-78 0-132 54t-54 132v306h480v28H186Zm322-274Zm185-148q-52 0-99 19t-84 51l-20-20q41-37 92.5-57.5T694-664q60 0 111 20.5t92 57.5l-20 20q-36-32-84-51t-100-19Zm1 120q-28 0-53.5 9T595-481l-19-20q24-20 53.5-31.5T693-544q34 0 64.5 11.5T812-501l-20 20q-20-17-45-26t-53-9Zm0 92q9 0 17 2.5t15 6.5l-32 32-33-32q7-4 15.5-6.5T694-424Z"/>
    </Icon>
  );
});

IconMaterialWifiNotificationW100.displayName = 'AmauiIconMaterialWifiNotificationW100';

export default IconMaterialWifiNotificationW100;
