import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropLandscape = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropLandscape'

      short_name='CropLandscape'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"/>
    </Icon>
  );
});

IconMaterialCropLandscape.displayName = 'AmauiIconMaterialCropLandscape';

export default IconMaterialCropLandscape;
