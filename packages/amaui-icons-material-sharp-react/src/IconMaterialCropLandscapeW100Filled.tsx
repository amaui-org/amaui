import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropLandscapeW100Filled'

      short_name='CropLandscape'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialCropLandscapeW100Filled.displayName = 'AmauiIconMaterialCropLandscapeW100Filled';

export default IconMaterialCropLandscapeW100Filled;
