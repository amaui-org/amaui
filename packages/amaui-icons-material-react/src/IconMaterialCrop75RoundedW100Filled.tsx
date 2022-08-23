import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop75RoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75RoundedW100Filled'
      short_name='Crop75'

      {...props}
    >
      <path d="M5.8 15.7Q5.15 15.7 4.725 15.275Q4.3 14.85 4.3 14.2V9.8Q4.3 9.15 4.725 8.725Q5.15 8.3 5.8 8.3H18.2Q18.85 8.3 19.275 8.725Q19.7 9.15 19.7 9.8V14.2Q19.7 14.85 19.275 15.275Q18.85 15.7 18.2 15.7Z"/>
    </Icon>
  );
});

IconMaterialCrop75RoundedW100Filled.displayName = 'AmauiIconMaterialCrop75RoundedW100Filled';

export default IconMaterialCrop75RoundedW100Filled;
