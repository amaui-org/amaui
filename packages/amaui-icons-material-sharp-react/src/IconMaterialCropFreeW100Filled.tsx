import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropFreeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropFreeW100Filled'

      short_name='CropFree'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 9V4.3H9V5H5v4ZM9 19.7H4.3V15H5v4h4Zm6 0V19h4v-4h.7v4.7ZM19 9V5h-4v-.7h4.7V9Z"/>
    </Icon>
  );
});

IconMaterialCropFreeW100Filled.displayName = 'AmauiIconMaterialCropFreeW100Filled';

export default IconMaterialCropFreeW100Filled;
