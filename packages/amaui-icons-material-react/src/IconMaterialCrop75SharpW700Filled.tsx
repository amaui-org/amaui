import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop75SharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75SharpW700Filled'
      short_name='Crop75'

      {...props}
    >
      <path d="M2.15 17.85V6.15H21.85V17.85Z"/>
    </Icon>
  )
});

export default IconMaterialCrop75SharpW700Filled;
