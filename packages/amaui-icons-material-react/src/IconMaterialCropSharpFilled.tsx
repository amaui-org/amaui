import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropSharpFilled'
      short_name='Crop'

      {...props}
    >
      <path d="M17 15V7H9V5H19V15ZM17 23V19H5V7H1V5H5V1H7V17H23V19H19V23Z"/>
    </Icon>
  )
});

export default IconMaterialCropSharpFilled;
