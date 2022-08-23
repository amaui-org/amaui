import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropTwoTone'
      short_name='Crop'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 17c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7V1H5v4H1v2h4v10zm14-2V7c0-1.1-.9-2-2-2H9v2h8v8h2z"/>
    </Icon>
  );
});

IconMaterialCropTwoTone.displayName = 'AmauiIconMaterialCropTwoTone';

export default IconMaterialCropTwoTone;
