import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudDoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudDoneFilled'

      short_name='CloudDone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.35 17 16 11.35 14.55 9.9l-4.225 4.225-2.1-2.1L6.8 13.45ZM6.5 20q-2.275 0-3.887-1.575Q1 16.85 1 14.575q0-1.95 1.175-3.475Q3.35 9.575 5.25 9.15q.625-2.3 2.5-3.725Q9.625 4 12 4q2.925 0 4.962 2.037Q19 8.075 19 11q1.725.2 2.863 1.487Q23 13.775 23 15.5q0 1.875-1.312 3.188Q20.375 20 18.5 20Z"/>
    </Icon>
  );
});

IconMaterialCloudDoneFilled.displayName = 'AmauiIconMaterialCloudDoneFilled';

export default IconMaterialCloudDoneFilled;
