import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropFreeSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropFreeSharpW700'
      short_name='CropFree'

      {...props}
    >
      <path d="M2.15 9V2.15H9V5.3H5.3V9ZM9 21.85H2.15V15H5.3V18.7H9ZM15 21.85V18.7H18.7V15H21.85V21.85ZM18.7 9V5.3H15V2.15H21.85V9Z"/>
    </Icon>
  )
});

export default IconMaterialCropFreeSharpW700;
