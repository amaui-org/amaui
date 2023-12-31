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
      <path d="M368-184v-28h224v28H368Zm0-108-39-496h302l-39 496H368Z"/>
    </Icon>
  );
});

IconMaterialOnHubDeviceW100Filled.displayName = 'AmauiIconMaterialOnHubDeviceW100Filled';

export default IconMaterialOnHubDeviceW100Filled;
