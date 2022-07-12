import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop75SharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75SharpW700'
      short_name='Crop75'

      {...props}
    >
      <path d="M2.15 17.85V6.15H21.85V17.85ZM5.3 14.7H18.7V9.3H5.3ZM5.3 14.7V9.3V14.7Z"/>
    </Icon>
  )
});

export default IconMaterialCrop75SharpW700;
