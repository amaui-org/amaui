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
      <path d="M17.2 20.7H6.8q-.65 0-1.075-.425Q5.3 19.85 5.3 19.2V4.8q0-.65.425-1.075Q6.15 3.3 6.8 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v14.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialCropPortraitW100Filled.displayName = 'AmauiIconMaterialCropPortraitW100Filled';

export default IconMaterialCropPortraitW100Filled;
