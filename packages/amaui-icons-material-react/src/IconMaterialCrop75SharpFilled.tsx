import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop75SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75SharpFilled'
      short_name='Crop75'

      {...props}
    >
      <path d="M3 17V7H21V17Z"/>
    </Icon>
  );
});

export default IconMaterialCrop75SharpFilled;
