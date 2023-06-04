import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropPortraitFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortraitFilled'

      short_name='CropPortrait'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h16v20Z"/>
    </Icon>
  );
});

IconMaterialCropPortraitFilled.displayName = 'AmauiIconMaterialCropPortraitFilled';

export default IconMaterialCropPortraitFilled;
