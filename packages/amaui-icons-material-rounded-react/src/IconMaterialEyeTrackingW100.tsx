import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEyeTrackingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EyeTrackingW100'

      short_name='EyeTracking'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M152-92q-26 0-43-17t-17-43v-86q0-6 4-10t10-4q6 0 10 4t4 10v86q0 14 9 23t23 9h86q6 0 10 4t4 10q0 6-4 10t-10 4h-86Zm656 0h-86q-6 0-10-4t-4-10q0-6 4-10t10-4h86q14 0 23-9t9-23v-86q0-6 4-10t10-4q6 0 10 4t4 10v86q0 26-17 43t-43 17ZM480-260q-94 0-169.5-47T189-441q-5-9-7-18.5t-2-19.5q0-10 2-20.5t7-19.5q46-87 121.5-134T480-700q94 0 169.5 47T771-519q5 9 7 19t2 20q0 10-2 20t-7 19q-46 87-121.5 134T480-260Zm0-28q92 0 164-50t114-142q-42-92-114-142t-164-50q-92 0-164 50T202-480q42 92 114 142t164 50Zm0-85q45 0 76-31t31-76q0-45-31-76t-76-31q-45 0-76 31t-31 76q0 45 31 76t76 31Zm0-28q-33 0-56-23t-23-56q0-33 23-56t56-23q33 0 56 23t23 56q0 33-23 56t-56 23ZM238-840h-86q-14 0-23 9t-9 23v100H92v-100q0-26 17-43t43-17h86q6 0 10 4t4 10q0 6-4 10t-10 4Zm630 32v86q0 6-4 10t-10 4q-6 0-10-4t-4-10v-86q0-14-9-23t-23-9h-86q-6 0-10-4t-4-10q0-6 4-10t10-4h86q26 0 43 17t17 43ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialEyeTrackingW100.displayName = 'AmauiIconMaterialEyeTrackingW100';

export default IconMaterialEyeTrackingW100;
