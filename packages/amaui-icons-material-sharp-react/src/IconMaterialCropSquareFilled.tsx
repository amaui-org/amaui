import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropSquareFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropSquareFilled'

      short_name='CropSquare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v18Z"/>
    </Icon>
  );
});

IconMaterialCropSquareFilled.displayName = 'AmauiIconMaterialCropSquareFilled';

export default IconMaterialCropSquareFilled;
