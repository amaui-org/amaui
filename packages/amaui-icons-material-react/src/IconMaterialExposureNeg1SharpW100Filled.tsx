import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExposureNeg1SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureNeg1SharpW100Filled'
      short_name='ExposureNeg1'

      {...props}
    >
      <path d="M9.35 13.2H3.65V12.5H9.35ZM16.5 17.65V7.3L13.9 9.1L13.5 8.55L16.65 6.35H17.2V17.65Z"/>
    </Icon>
  );
});

IconMaterialExposureNeg1SharpW100Filled.displayName = 'AmauiIconMaterialExposureNeg1SharpW100Filled';

export default IconMaterialExposureNeg1SharpW100Filled;
