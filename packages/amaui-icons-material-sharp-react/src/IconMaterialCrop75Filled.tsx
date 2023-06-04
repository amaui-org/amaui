import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop75Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75Filled'

      short_name='Crop75'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19V5h18v14Z"/>
    </Icon>
  );
});

IconMaterialCrop75Filled.displayName = 'AmauiIconMaterialCrop75Filled';

export default IconMaterialCrop75Filled;
