import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotRegionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotRegionW100Filled'

      short_name='ScreenshotRegion'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M693.965 898Q688 898 684 893.975T680 884v-80h-80q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h80v-80q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v80h80q5.95 0 9.975 4.035 4.025 4.035 4.025 10T797.975 800q-4.025 4-9.975 4h-80v80q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM252 744v-48q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v48q0 14 9 23t23 9h48q5.95 0 9.975 4.035 4.025 4.035 4.025 10T369.975 800q-4.025 4-9.975 4h-48q-24.75 0-42.375-17.625T252 744Zm13.965-274Q260 470 256 465.975T252 456v-48q0-24.75 17.625-42.375T312 348h48q5.95 0 9.975 4.035 4.025 4.035 4.025 10T369.975 372q-4.025 4-9.975 4h-48q-14 0-23 9t-9 23v48q0 5.95-4.035 9.975-4.035 4.025-10 4.025Zm428 0Q688 470 684 465.975T680 456v-48q0-14-9-23t-23-9h-48q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h48q24.75 0 42.375 17.625T708 408v48q0 5.95-4.035 9.975-4.035 4.025-10 4.025Z"/>
    </Icon>
  );
});

IconMaterialScreenshotRegionW100Filled.displayName = 'AmauiIconMaterialScreenshotRegionW100Filled';

export default IconMaterialScreenshotRegionW100Filled;
