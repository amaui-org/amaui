import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop54Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop54Sharp'
      short_name='Crop54'

      {...props}
    >
      <path d="M3 19V5H21V19ZM5 17H19V7H5ZM5 17V7V17Z"/>
    </Icon>
  );
});

export default IconMaterialCrop54Sharp;
