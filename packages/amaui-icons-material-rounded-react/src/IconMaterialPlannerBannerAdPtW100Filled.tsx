import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlannerBannerAdPtW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlannerBannerAdPtW100Filled'

      short_name='PlannerBannerAdPt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h416q26 0 43 17t17 43v576q0 26-17 43t-43 17H272Zm176-146-52-60q-5-5-11.5-5t-11.5 6l-36 47q-6 8-2 16t13 8h272q9 0 13-8t-1-16l-72-97q-5-6-12-6t-12 6l-88 109Z"/>
    </Icon>
  );
});

IconMaterialPlannerBannerAdPtW100Filled.displayName = 'AmauiIconMaterialPlannerBannerAdPtW100Filled';

export default IconMaterialPlannerBannerAdPtW100Filled;
