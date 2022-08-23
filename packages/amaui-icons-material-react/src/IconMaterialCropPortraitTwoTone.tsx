import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropPortraitTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortraitTwoTone'
      short_name='CropPortrait'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14z"/>
    </Icon>
  );
});

IconMaterialCropPortraitTwoTone.displayName = 'AmauiIconMaterialCropPortraitTwoTone';

export default IconMaterialCropPortraitTwoTone;
