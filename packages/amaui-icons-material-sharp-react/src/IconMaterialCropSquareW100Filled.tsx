import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCropSquareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CropSquareW100Filled'

      short_name='CropSquare'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialCropSquareW100Filled.displayName = 'AmauiIconMaterialCropSquareW100Filled';

export default IconMaterialCropSquareW100Filled;
