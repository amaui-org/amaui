import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop75Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75Sharp'
      short_name='Crop75'

      {...props}
    >
      <path d="M3 17V7H21V17ZM5 15H19V9H5ZM5 15V9V15Z"/>
    </Icon>
  );
});

export default IconMaterialCrop75Sharp;
