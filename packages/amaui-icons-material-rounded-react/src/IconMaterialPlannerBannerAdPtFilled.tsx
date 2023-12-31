import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlannerBannerAdPtFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlannerBannerAdPtFilled'

      short_name='PlannerBannerAdPt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm210-220-46-60q-6-8-16-8t-16 8l-67 88q-8 10-2.5 21t18.5 11h318q13 0 18.5-11t-2.5-21l-97-127q-6-8-16-8t-16 8l-76 99Z"/>
    </Icon>
  );
});

IconMaterialPlannerBannerAdPtFilled.displayName = 'AmauiIconMaterialPlannerBannerAdPtFilled';

export default IconMaterialPlannerBannerAdPtFilled;
