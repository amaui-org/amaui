import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPanZoomW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanZoomW100'

      short_name='PanZoom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-200h126q5.95 0 9.975 4.035 4.025 4.035 4.025 10T355.975-176q-4.025 4-9.975 4H202q-12.75 0-21.375-8.625T172-202v-144q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v126l140-140q4-4 9.5-4.5T360-360q5 5 5 10t-5 10L220-200Zm540-540L620-600q-4 4-9.5 4.5T600-600q-5-5-5-10t5-10l140-140H614q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h144q12.75 0 21.375 8.625T788-758v144q0 5.95-4.035 9.975-4.035 4.025-10 4.025T764-604.025q-4-4.025-4-9.975v-126Z"/>
    </Icon>
  );
});

IconMaterialPanZoomW100.displayName = 'AmauiIconMaterialPanZoomW100';

export default IconMaterialPanZoomW100;
