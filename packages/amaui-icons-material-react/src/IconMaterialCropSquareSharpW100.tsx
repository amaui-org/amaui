import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropSquareSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropSquareSharpW100'
      short_name='CropSquare'

      {...props}
    >
      <path d="M4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialCropSquareSharpW100.displayName = 'AmauiIconMaterialCropSquareSharpW100';

export default IconMaterialCropSquareSharpW100;
