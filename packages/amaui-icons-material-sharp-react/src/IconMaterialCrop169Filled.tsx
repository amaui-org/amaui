import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop169Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop169Filled'

      short_name='Crop169'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 17V7h18v10Z"/>
    </Icon>
  );
});

IconMaterialCrop169Filled.displayName = 'AmauiIconMaterialCrop169Filled';

export default IconMaterialCrop169Filled;
