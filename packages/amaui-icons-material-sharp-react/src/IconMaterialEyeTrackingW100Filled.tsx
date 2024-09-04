import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEyeTrackingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EyeTrackingW100Filled'

      short_name='EyeTracking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-92H92v-160h28v132h132v28Zm456 0v-28h132v-132h28v160H708ZM480-260q-103 0-184.5-57.5T171-480q43-105 124.5-162.5T480-700q103 0 184.5 57.5T789-480q-43 105-124.5 162.5T480-260Zm0-113q45 0 76-31t31-76q0-45-31-76t-76-31q-45 0-76 31t-31 76q0 45 31 76t76 31Zm-.06-28Q447-401 424-424.06t-23-56Q401-513 424.06-536t56-23Q513-559 536-535.94t23 56Q559-447 535.94-424t-56 23ZM92-708v-160h160v28H120v132H92Zm748 0v-132H708v-28h160v160h-28Z"/>
    </Icon>
  );
});

IconMaterialEyeTrackingW100Filled.displayName = 'AmauiIconMaterialEyeTrackingW100Filled';

export default IconMaterialEyeTrackingW100Filled;
