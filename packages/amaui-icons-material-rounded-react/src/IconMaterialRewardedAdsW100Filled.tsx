import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRewardedAdsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RewardedAdsW100Filled'

      short_name='RewardedAds'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-520q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520Zm-166-2v-158h-82q-14 0-23 9t-9 23v8q0 48 33 81.5t81 36.5Zm332 0q48-3 81-36.5t33-81.5v-8q0-14-9-23t-23-9h-82v158ZM466-200v-158q-57-2-98.5-39.5T318-492q-60-7-103-48t-43-100v-8q0-25 17.5-42.5T232-708h82v-20q0-25 17.5-42.5T374-788h212q25 0 42.5 17.5T646-728v20h82q25 0 42.5 17.5T788-648v8q0 59-43 100t-103 48q-8 57-49.5 94.5T494-358v158h100q6 0 10 4t4 10q0 6-4 10t-10 4H366q-6 0-10-4t-4-10q0-6 4-10t10-4h100Z"/>
    </Icon>
  );
});

IconMaterialRewardedAdsW100Filled.displayName = 'AmauiIconMaterialRewardedAdsW100Filled';

export default IconMaterialRewardedAdsW100Filled;
