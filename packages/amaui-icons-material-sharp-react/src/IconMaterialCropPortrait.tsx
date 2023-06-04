import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropPortrait = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropPortrait'

      short_name='CropPortrait'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h16v20Zm2-2h12V4H6Zm0 0V4v16Z"/>
    </Icon>
  );
});

IconMaterialCropPortrait.displayName = 'AmauiIconMaterialCropPortrait';

export default IconMaterialCropPortrait;
