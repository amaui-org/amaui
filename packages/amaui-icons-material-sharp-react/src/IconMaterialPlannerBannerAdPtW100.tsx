import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlannerBannerAdPtW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlannerBannerAdPtW100'

      short_name='PlannerBannerAdPt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-132v-696h536v696H212Zm28-28h480v-640H240v640Zm78-106h332L548-402 448-278l-64-74-66 86Zm-78 106v-640 640Z"/>
    </Icon>
  );
});

IconMaterialPlannerBannerAdPtW100.displayName = 'AmauiIconMaterialPlannerBannerAdPtW100';

export default IconMaterialPlannerBannerAdPtW100;
