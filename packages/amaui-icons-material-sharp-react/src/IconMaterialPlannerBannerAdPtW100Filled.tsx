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
      <path d="M212-132v-696h536v696H212Zm106-134h332L548-402 448-278l-64-74-66 86Z"/>
    </Icon>
  );
});

IconMaterialPlannerBannerAdPtW100Filled.displayName = 'AmauiIconMaterialPlannerBannerAdPtW100Filled';

export default IconMaterialPlannerBannerAdPtW100Filled;
