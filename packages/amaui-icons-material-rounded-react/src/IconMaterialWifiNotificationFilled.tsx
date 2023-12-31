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
      <path d="M240-280v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q23 6 44.5 15.5T624-753q-63 14-119 47t-105 76q-19 18-19.5 43.5T399-542l261 262h100q17 0 28.5 11.5T800-240q0 17-11.5 28.5T760-200H200q-17 0-28.5-11.5T160-240q0-17 11.5-28.5T200-280h40ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm213-540q-46 0-87 15t-74 41q-10 8-22.5 8t-21.5-9q-9-9-8-22t11-21q42-34 93.5-53T694-680q58 0 109 19t93 53q10 8 10.5 21t-8.5 22q-9 9-21 9t-22-8q-33-26-74.5-41T693-620Zm1 120q-21 0-40.5 6T617-477q-11 7-22.5 6.5T574-480q-9-9-8.5-21t10.5-20q25-18 54.5-28.5T693-560q33 0 63.5 10.5T812-521q10 8 10.5 20t-8.5 21q-9 9-21 9t-23-7q-17-11-36-16.5t-40-5.5Zm0 140q-17 0-28.5-11.5T654-400q0-17 11.5-28.5T694-440q17 0 28.5 11.5T734-400q0 17-11.5 28.5T694-360Z"/>
    </Icon>
  );
});

IconMaterialWifiNotificationFilled.displayName = 'AmauiIconMaterialWifiNotificationFilled';

export default IconMaterialWifiNotificationFilled;
