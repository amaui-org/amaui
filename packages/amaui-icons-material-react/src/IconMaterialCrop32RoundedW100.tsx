import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop32RoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop32RoundedW100'
      short_name='Crop32'

      {...props}
    >
      <path d="M5.8 18.7Q5.15 18.7 4.725 18.275Q4.3 17.85 4.3 17.2V6.8Q4.3 6.15 4.725 5.725Q5.15 5.3 5.8 5.3H18.2Q18.85 5.3 19.275 5.725Q19.7 6.15 19.7 6.8V17.2Q19.7 17.85 19.275 18.275Q18.85 18.7 18.2 18.7ZM5.8 18H18.2Q18.5 18 18.75 17.75Q19 17.5 19 17.2V6.8Q19 6.5 18.75 6.25Q18.5 6 18.2 6H5.8Q5.5 6 5.25 6.25Q5 6.5 5 6.8V17.2Q5 17.5 5.25 17.75Q5.5 18 5.8 18ZM5 18Q5 18 5 17.75Q5 17.5 5 17.2V6.8Q5 6.5 5 6.25Q5 6 5 6Q5 6 5 6.25Q5 6.5 5 6.8V17.2Q5 17.5 5 17.75Q5 18 5 18Z"/>
    </Icon>
  );
});

IconMaterialCrop32RoundedW100.displayName = 'AmauiIconMaterialCrop32RoundedW100';

export default IconMaterialCrop32RoundedW100;
