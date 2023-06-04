import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop32W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop32W100Filled'

      short_name='Crop32'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 16.7V7.3h15.4v9.4Z"/>
    </Icon>
  );
});

IconMaterialCrop32W100Filled.displayName = 'AmauiIconMaterialCrop32W100Filled';

export default IconMaterialCrop32W100Filled;
