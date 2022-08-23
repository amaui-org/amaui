import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropRounded'
      short_name='Crop'

      {...props}
    >
      <path d="M17 15V7Q17 7 17 7Q17 7 17 7H9V5H17Q17.825 5 18.413 5.588Q19 6.175 19 7V15ZM18 23Q17.575 23 17.288 22.712Q17 22.425 17 22V19H7Q6.175 19 5.588 18.413Q5 17.825 5 17V7H2Q1.575 7 1.288 6.713Q1 6.425 1 6Q1 5.575 1.288 5.287Q1.575 5 2 5H5V2Q5 1.575 5.287 1.287Q5.575 1 6 1Q6.425 1 6.713 1.287Q7 1.575 7 2V17Q7 17 7 17Q7 17 7 17H22Q22.425 17 22.712 17.288Q23 17.575 23 18Q23 18.425 22.712 18.712Q22.425 19 22 19H19V22Q19 22.425 18.712 22.712Q18.425 23 18 23Z"/>
    </Icon>
  );
});

IconMaterialCropRounded.displayName = 'AmauiIconMaterialCropRounded';

export default IconMaterialCropRounded;
