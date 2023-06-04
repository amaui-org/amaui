import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop75 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75'

      short_name='Crop75'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 19V5h18v14Zm2-2h14V7H5Zm0 0V7v10Z"/>
    </Icon>
  );
});

IconMaterialCrop75.displayName = 'AmauiIconMaterialCrop75';

export default IconMaterialCrop75;
