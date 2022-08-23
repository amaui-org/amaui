import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop32SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop32SharpFilled'
      short_name='Crop32'

      {...props}
    >
      <path d="M3 20V4H21V20Z"/>
    </Icon>
  );
});

IconMaterialCrop32SharpFilled.displayName = 'AmauiIconMaterialCrop32SharpFilled';

export default IconMaterialCrop32SharpFilled;
