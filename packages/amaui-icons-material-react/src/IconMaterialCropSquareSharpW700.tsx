import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropSquareSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropSquareSharpW700'
      short_name='CropSquare'

      {...props}
    >
      <path d="M2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM5.3 18.7V5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialCropSquareSharpW700;
