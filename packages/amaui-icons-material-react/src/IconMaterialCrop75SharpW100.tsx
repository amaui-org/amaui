import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCrop75SharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Crop75SharpW100'
      short_name='Crop75'

      {...props}
    >
      <path d="M4.3 15.7V8.3H19.7V15.7ZM5 15H19V9H5ZM5 15V9V15Z"/>
    </Icon>
  );
});

export default IconMaterialCrop75SharpW100;
