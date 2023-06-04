import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCrop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop'

      short_name='Crop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 15V7H9V5h10v10Zm0 8v-4H5V7H1V5h4V1h2v16h16v2h-4v4Z"/>
    </Icon>
  );
});

IconMaterialCrop.displayName = 'AmauiIconMaterialCrop';

export default IconMaterialCrop;
