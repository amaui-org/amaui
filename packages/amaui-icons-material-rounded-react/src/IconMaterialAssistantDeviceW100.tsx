import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssistantDeviceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssistantDeviceW100'

      short_name='AssistantDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-628q-44.55 0-76.275 31.725Q372-564.55 372-520q0 44.55 31.725 76.275Q435.45-412 480-412q44.55 0 76.275-31.725Q588-475.45 588-520q0-44.55-31.725-76.275Q524.55-628 480-628Zm0 188q-33 0-56.5-23.5T400-520q0-33 23.5-56.5T480-600q33 0 56.5 23.5T560-520q0 33-23.5 56.5T480-440Zm160.07 148q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q628-348 620-339.93t-8 20q0 11.93 8.07 19.93t20 8ZM212-232v-448q0-62 43-105t105-43h240q62 0 105 43t43 105v448q0 24.75-17.625 42.375T688-172H272q-24.75 0-42.375-17.625T212-232Zm28-8h480v-440q0-50-35-85t-85-35H360q-50 0-85 35t-35 85v440Zm20 0h460-480 20Zm-20 0h480-480Z"/>
    </Icon>
  );
});

IconMaterialAssistantDeviceW100.displayName = 'AmauiIconMaterialAssistantDeviceW100';

export default IconMaterialAssistantDeviceW100;
