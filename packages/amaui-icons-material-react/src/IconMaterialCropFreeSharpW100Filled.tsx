import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropFreeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropFreeSharpW100Filled'
      short_name='CropFree'

      {...props}
    >
      <path d="M4.3 9V4.3H9V5H5V9ZM9 19.7H4.3V15H5V19H9ZM15 19.7V19H19V15H19.7V19.7ZM19 9V5H15V4.3H19.7V9Z"/>
    </Icon>
  );
});

IconMaterialCropFreeSharpW100Filled.displayName = 'AmauiIconMaterialCropFreeSharpW100Filled';

export default IconMaterialCropFreeSharpW100Filled;
