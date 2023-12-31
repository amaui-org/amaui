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
      <path d="M160-80v-800h640v800H160Zm120-160h400L542-420l-92 120-62-80-108 140Z"/>
    </Icon>
  );
});

IconMaterialPlannerBannerAdPtFilled.displayName = 'AmauiIconMaterialPlannerBannerAdPtFilled';

export default IconMaterialPlannerBannerAdPtFilled;
