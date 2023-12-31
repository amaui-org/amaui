import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOnHubDeviceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OnHubDeviceW100Filled'

      short_name='OnHubDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M382-184q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h196q5.95 0 9.975 4.035 4.025 4.035 4.025 10T587.975-188q-4.025 4-9.975 4H382Zm-16-136-32-406q-2-26 15-44t42.742-18h176.516Q594-788 611-770q17 18 15 44l-32 406q-1 12-9.395 20-8.394 8-20.605 8H396q-12.211 0-20.605-8Q367-308 366-320Z"/>
    </Icon>
  );
});

IconMaterialOnHubDeviceW100Filled.displayName = 'AmauiIconMaterialOnHubDeviceW100Filled';

export default IconMaterialOnHubDeviceW100Filled;
