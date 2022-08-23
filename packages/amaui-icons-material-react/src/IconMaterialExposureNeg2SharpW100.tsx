import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposureNeg2SharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureNeg2SharpW100'
      short_name='ExposureNeg2'

      {...props}
    >
      <path d="M13.325 17.65V16.8L17.525 12.5Q18.4 11.575 18.812 10.962Q19.225 10.35 19.225 9.6Q19.225 8.475 18.475 7.763Q17.725 7.05 16.475 7.05Q15.575 7.05 14.913 7.438Q14.25 7.825 13.875 8.55L13.225 8.25Q13.725 7.375 14.5 6.862Q15.275 6.35 16.475 6.35Q18.05 6.35 18.988 7.3Q19.925 8.25 19.925 9.6Q19.925 10.5 19.462 11.25Q19 12 18.075 12.95L14.225 16.9V16.95H20.425V17.65ZM9.275 13.2H3.575V12.5H9.275Z"/>
    </Icon>
  );
});

IconMaterialExposureNeg2SharpW100.displayName = 'AmauiIconMaterialExposureNeg2SharpW100';

export default IconMaterialExposureNeg2SharpW100;
