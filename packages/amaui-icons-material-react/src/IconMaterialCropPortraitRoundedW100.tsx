import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropPortraitRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortraitRoundedW100'
      short_name='CropPortrait'

      {...props}
    >
      <path d="M17.2 20.7H6.8Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V4.8Q5.3 4.15 5.725 3.725Q6.15 3.3 6.8 3.3H17.2Q17.85 3.3 18.275 3.725Q18.7 4.15 18.7 4.8V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7ZM6.8 20H17.2Q17.55 20 17.775 19.775Q18 19.55 18 19.2V4.8Q18 4.45 17.775 4.225Q17.55 4 17.2 4H6.8Q6.45 4 6.225 4.225Q6 4.45 6 4.8V19.2Q6 19.55 6.225 19.775Q6.45 20 6.8 20ZM6 20Q6 20 6 19.775Q6 19.55 6 19.2V4.8Q6 4.45 6 4.225Q6 4 6 4Q6 4 6 4.225Q6 4.45 6 4.8V19.2Q6 19.55 6 19.775Q6 20 6 20Z"/>
    </Icon>
  );
});

IconMaterialCropPortraitRoundedW100.displayName = 'AmauiIconMaterialCropPortraitRoundedW100';

export default IconMaterialCropPortraitRoundedW100;
