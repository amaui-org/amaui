import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropPortraitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortraitW100Filled'

      short_name='CropPortrait'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h13.4v17.4Z"/>
    </Icon>
  );
});

IconMaterialCropPortraitW100Filled.displayName = 'AmauiIconMaterialCropPortraitW100Filled';

export default IconMaterialCropPortraitW100Filled;
