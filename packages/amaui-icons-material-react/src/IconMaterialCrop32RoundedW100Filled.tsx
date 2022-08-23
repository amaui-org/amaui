import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop32RoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop32RoundedW100Filled'
      short_name='Crop32'

      {...props}
    >
      <path d="M5.8 18.7Q5.15 18.7 4.725 18.275Q4.3 17.85 4.3 17.2V6.8Q4.3 6.15 4.725 5.725Q5.15 5.3 5.8 5.3H18.2Q18.85 5.3 19.275 5.725Q19.7 6.15 19.7 6.8V17.2Q19.7 17.85 19.275 18.275Q18.85 18.7 18.2 18.7Z"/>
    </Icon>
  );
});

IconMaterialCrop32RoundedW100Filled.displayName = 'AmauiIconMaterialCrop32RoundedW100Filled';

export default IconMaterialCrop32RoundedW100Filled;
