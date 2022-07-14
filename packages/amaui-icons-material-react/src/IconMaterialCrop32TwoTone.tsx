import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop32TwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop32TwoTone'
      short_name='Crop32'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z"/>
    </Icon>
  );
});

export default IconMaterialCrop32TwoTone;
