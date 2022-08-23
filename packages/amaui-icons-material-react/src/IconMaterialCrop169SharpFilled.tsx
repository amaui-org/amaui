import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop169SharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop169SharpFilled'
      short_name='Crop169'

      {...props}
    >
      <path d="M3 18V6H21V18Z"/>
    </Icon>
  );
});

IconMaterialCrop169SharpFilled.displayName = 'AmauiIconMaterialCrop169SharpFilled';

export default IconMaterialCrop169SharpFilled;
