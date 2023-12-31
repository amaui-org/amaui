import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiNotificationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiNotificationFilled'

      short_name='WifiNotification'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-88h120v88q23 6 44.5 15.5T624-753q-79 17-146 63.5T354-587l306 307h140v80H160ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm213-540q-54 0-101 20.5T510-544l-43-42q44-44 102.5-69T694-680q66 0 124 25t102 69l-43 42q-35-35-82.5-55.5T693-620Zm1 120q-29 0-54.5 11T595-459l-43-43q27-27 63-42.5t78-15.5q42 0 78.5 15.5T835-502l-43 43q-19-20-44-30.5T694-500Zm0 60q17 0 31 6.5t25 17.5l-56 56-57-56q11-11 25.5-17.5T694-440Z"/>
    </Icon>
  );
});

IconMaterialWifiNotificationFilled.displayName = 'AmauiIconMaterialWifiNotificationFilled';

export default IconMaterialWifiNotificationFilled;
