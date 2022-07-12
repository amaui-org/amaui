import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropPortraitOutlinedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortraitOutlinedFilled'
      short_name='CropPortrait'

      {...props}
    >
      <path d="M18 22H6Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V20Q20 20.825 19.413 21.413Q18.825 22 18 22Z"/>
    </Icon>
  )
});

export default IconMaterialCropPortraitOutlinedFilled;
