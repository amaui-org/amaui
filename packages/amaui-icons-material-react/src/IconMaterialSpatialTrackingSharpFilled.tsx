import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpatialTrackingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpatialTrackingSharpFilled'
      short_name='SpatialTracking'

      {...props}
    >
      <path d="M18.75 13.75Q17.475 12.475 16.75 10.812Q16.025 9.15 16.025 7.35Q16.025 5.55 16.75 3.875Q17.475 2.2 18.75 0.925L20.125 2.375Q19.125 3.375 18.575 4.65Q18.025 5.925 18.025 7.35Q18.025 8.775 18.575 10.062Q19.125 11.35 20.125 12.35ZM21.525 10.9Q20.8 10.2 20.413 9.275Q20.025 8.35 20.025 7.325Q20.025 6.3 20.413 5.4Q20.8 4.5 21.525 3.775L22.95 5.2Q22.525 5.625 22.275 6.175Q22.025 6.725 22.025 7.35Q22.025 7.975 22.275 8.525Q22.525 9.075 22.95 9.5ZM10 13Q8.35 13 7.175 11.825Q6 10.65 6 9Q6 7.35 7.175 6.175Q8.35 5 10 5Q11.65 5 12.825 6.175Q14 7.35 14 9Q14 10.65 12.825 11.825Q11.65 13 10 13ZM2 21V18.2Q2 17.375 2.425 16.65Q2.85 15.925 3.6 15.55Q4.875 14.9 6.475 14.45Q8.075 14 10 14Q11.925 14 13.525 14.45Q15.125 14.9 16.4 15.55Q17.15 15.925 17.575 16.65Q18 17.375 18 18.2V21Z"/>
    </Icon>
  );
});

IconMaterialSpatialTrackingSharpFilled.displayName = 'AmauiIconMaterialSpatialTrackingSharpFilled';

export default IconMaterialSpatialTrackingSharpFilled;
