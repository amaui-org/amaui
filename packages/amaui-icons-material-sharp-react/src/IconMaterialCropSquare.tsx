import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropSquare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropSquare'

      short_name='CropSquare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Zm2-2h14V5H5Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialCropSquare.displayName = 'AmauiIconMaterialCropSquare';

export default IconMaterialCropSquare;
