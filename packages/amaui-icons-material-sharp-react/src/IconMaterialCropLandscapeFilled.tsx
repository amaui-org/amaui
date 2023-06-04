import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropLandscapeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropLandscapeFilled'

      short_name='CropLandscape'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialCropLandscapeFilled.displayName = 'AmauiIconMaterialCropLandscapeFilled';

export default IconMaterialCropLandscapeFilled;
