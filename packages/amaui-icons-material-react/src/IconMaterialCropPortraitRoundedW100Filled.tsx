import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropPortraitRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortraitRoundedW100Filled'
      short_name='CropPortrait'

      {...props}
    >
      <path d="M17.2 20.7H6.8Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H17.2Q17.85 3.3 18.275 3.725Q18.7 4.15 18.7 4.8V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7Z"/>
    </Icon>
  );
});

IconMaterialCropPortraitRoundedW100Filled.displayName = 'AmauiIconMaterialCropPortraitRoundedW100Filled';

export default IconMaterialCropPortraitRoundedW100Filled;
