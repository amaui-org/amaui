import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop169Sharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop169Sharp'
      short_name='Crop169'

      {...props}
    >
      <path d="M3 18V6H21V18ZM5 16H19V8H5ZM5 16V8V16Z"/>
    </Icon>
  );
});

IconMaterialCrop169Sharp.displayName = 'AmauiIconMaterialCrop169Sharp';

export default IconMaterialCrop169Sharp;
