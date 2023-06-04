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
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialCropSquareW100Filled.displayName = 'AmauiIconMaterialCropSquareW100Filled';

export default IconMaterialCropSquareW100Filled;
