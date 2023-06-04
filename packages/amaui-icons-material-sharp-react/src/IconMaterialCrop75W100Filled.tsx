import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop75W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75W100Filled'

      short_name='Crop75'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 17.7V6.3h15.4v11.4Z"/>
    </Icon>
  );
});

IconMaterialCrop75W100Filled.displayName = 'AmauiIconMaterialCrop75W100Filled';

export default IconMaterialCrop75W100Filled;
