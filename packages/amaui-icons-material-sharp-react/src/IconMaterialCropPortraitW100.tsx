import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropPortraitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortraitW100'

      short_name='CropPortrait'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V3.3h13.4v17.4ZM6 20h12V4H6Zm0 0V4v16Z"/>
    </Icon>
  );
});

IconMaterialCropPortraitW100.displayName = 'AmauiIconMaterialCropPortraitW100';

export default IconMaterialCropPortraitW100;
