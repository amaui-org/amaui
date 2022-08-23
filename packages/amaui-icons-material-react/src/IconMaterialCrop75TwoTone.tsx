import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop75TwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75TwoTone'
      short_name='Crop75'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"/>
    </Icon>
  );
});

IconMaterialCrop75TwoTone.displayName = 'AmauiIconMaterialCrop75TwoTone';

export default IconMaterialCrop75TwoTone;
