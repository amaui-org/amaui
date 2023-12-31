import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop916Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop916Filled'

      short_name='Crop916'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120v-720h400v720H280Z"/>
    </Icon>
  );
});

IconMaterialCrop916Filled.displayName = 'AmauiIconMaterialCrop916Filled';

export default IconMaterialCrop916Filled;
