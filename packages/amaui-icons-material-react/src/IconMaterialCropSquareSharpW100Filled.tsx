import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropSquareSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropSquareSharpW100Filled'
      short_name='CropSquare'

      {...props}
    >
      <path d="M4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  );
});

export default IconMaterialCropSquareSharpW100Filled;
