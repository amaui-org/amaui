import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRingVolumeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RingVolumeSharpFilled'
      short_name='RingVolume'

      {...props}
    >
      <path d="M4.025 21 0.4 17.475Q2.75 14.725 5.75 13.363Q8.75 12 12 12Q15.25 12 18.238 13.363Q21.225 14.725 23.6 17.475L19.975 21L16 18V14.65Q15.05 14.35 14.05 14.175Q13.05 14 12 14Q10.95 14 9.95 14.175Q8.95 14.35 8 14.65V18ZM11.05 7.05V2.05H13.05V7.05ZM17.65 9.9 16.25 8.45 19.8 4.9 21.2 6.35ZM6.45 9.9 2.9 6.35 4.3 4.9 7.85 8.45Z"/>
    </Icon>
  );
});

IconMaterialRingVolumeSharpFilled.displayName = 'AmauiIconMaterialRingVolumeSharpFilled';

export default IconMaterialRingVolumeSharpFilled;
