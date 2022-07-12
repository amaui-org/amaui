import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop54TwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop54TwoTone'
      short_name='Crop54'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"/>
    </Icon>
  )
});

export default IconMaterialCrop54TwoTone;
