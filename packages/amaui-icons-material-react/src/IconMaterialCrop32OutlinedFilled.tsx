import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop32OutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop32OutlinedFilled'
      short_name='Crop32'

      {...props}
    >
      <path d="M5 20Q4.175 20 3.587 19.413Q3 18.825 3 18V6Q3 5.175 3.587 4.588Q4.175 4 5 4H19Q19.825 4 20.413 4.588Q21 5.175 21 6V18Q21 18.825 20.413 19.413Q19.825 20 19 20Z"/>
    </Icon>
  )
});

export default IconMaterialCrop32OutlinedFilled;
