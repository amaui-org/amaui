import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop54Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop54Filled'

      short_name='Crop54'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20V4h18v16Z"/>
    </Icon>
  );
});

IconMaterialCrop54Filled.displayName = 'AmauiIconMaterialCrop54Filled';

export default IconMaterialCrop54Filled;
