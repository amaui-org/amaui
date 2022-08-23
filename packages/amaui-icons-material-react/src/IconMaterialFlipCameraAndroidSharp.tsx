import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlipCameraAndroidSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipCameraAndroidSharp'
      short_name='FlipCameraAndroid'

      {...props}
    >
      <path d="M12 15Q10.75 15 9.875 14.125Q9 13.25 9 12Q9 10.75 9.875 9.875Q10.75 9 12 9Q13.25 9 14.125 9.875Q15 10.75 15 12Q15 13.25 14.125 14.125Q13.25 15 12 15ZM2 10V4H4V6Q5.425 4.1 7.525 3.05Q9.625 2 12 2Q15.575 2 18.325 4.25Q21.075 6.5 21.8 10H19.75Q19.05 7.35 16.9 5.675Q14.75 4 12 4Q9.85 4 8 5.062Q6.15 6.125 5.1 8H8V10ZM12 22Q8.425 22 5.675 19.75Q2.925 17.5 2.2 14H4.25Q4.95 16.65 7.1 18.325Q9.25 20 12 20Q14.15 20 16 18.938Q17.85 17.875 18.9 16H16V14H22V20H20V18Q18.575 19.9 16.475 20.95Q14.375 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialFlipCameraAndroidSharp.displayName = 'AmauiIconMaterialFlipCameraAndroidSharp';

export default IconMaterialFlipCameraAndroidSharp;
