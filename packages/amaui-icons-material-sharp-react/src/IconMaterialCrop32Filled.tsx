import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop32Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop32Filled'

      short_name='Crop32'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 18V6h18v12Z"/>
    </Icon>
  );
});

IconMaterialCrop32Filled.displayName = 'AmauiIconMaterialCrop32Filled';

export default IconMaterialCrop32Filled;
