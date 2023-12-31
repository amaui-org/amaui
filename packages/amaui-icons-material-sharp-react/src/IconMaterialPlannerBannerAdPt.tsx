import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlannerBannerAdPt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlannerBannerAdPt'

      short_name='PlannerBannerAdPt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-800h640v800H160Zm80-80h480v-640H240v640Zm40-80h400L542-420l-92 120-62-80-108 140Zm-40 80v-640 640Z"/>
    </Icon>
  );
});

IconMaterialPlannerBannerAdPt.displayName = 'AmauiIconMaterialPlannerBannerAdPt';

export default IconMaterialPlannerBannerAdPt;
