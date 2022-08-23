import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropPortraitRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortraitRounded'
      short_name='CropPortrait'

      {...props}
    >
      <path d="M18 22H6Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM6 20H18Q18 20 18 20Q18 20 18 20V4Q18 4 18 4Q18 4 18 4H6Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20ZM6 20Q6 20 6 20Q6 20 6 20V4Q6 4 6 4Q6 4 6 4Q6 4 6 4Q6 4 6 4V20Q6 20 6 20Q6 20 6 20Z"/>
    </Icon>
  );
});

IconMaterialCropPortraitRounded.displayName = 'AmauiIconMaterialCropPortraitRounded';

export default IconMaterialCropPortraitRounded;
