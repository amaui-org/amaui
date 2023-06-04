import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropW100Filled'

      short_name='Crop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.65 16.95V6.35H7.05v-.7h11.3v11.3Zm0 5.4v-4h-12v-12h-4v-.7h4v-4h.7v16h16v.7h-4v4Z"/>
    </Icon>
  );
});

IconMaterialCropW100Filled.displayName = 'AmauiIconMaterialCropW100Filled';

export default IconMaterialCropW100Filled;
