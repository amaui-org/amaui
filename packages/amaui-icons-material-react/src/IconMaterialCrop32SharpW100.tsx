import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop32SharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop32SharpW100'
      short_name='Crop32'

      {...props}
    >
      <path d="M4.3 18.7V5.3H19.7V18.7ZM5 18H19V6H5ZM5 18V6V18Z"/>
    </Icon>
  )
});

export default IconMaterialCrop32SharpW100;
