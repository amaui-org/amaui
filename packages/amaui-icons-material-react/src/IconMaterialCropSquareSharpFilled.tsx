import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCropSquareSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropSquareSharpFilled'
      short_name='CropSquare'

      {...props}
    >
      <path d="M3 21V3H21V21Z"/>
    </Icon>
  );
});

IconMaterialCropSquareSharpFilled.displayName = 'AmauiIconMaterialCropSquareSharpFilled';

export default IconMaterialCropSquareSharpFilled;
