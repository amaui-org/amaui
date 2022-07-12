import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStorageSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StorageSharpW700'
      short_name='Storage'

      {...props}
    >
      <path d="M1.85 21.925V16.375H22.15V21.925ZM5 20.35H7.375V17.95H5ZM1.85 7.625V2.075H22.15V7.625ZM5 6.05H7.375V3.65H5ZM1.85 14.775V9.225H22.15V14.775ZM5 13.2H7.375V10.8H5Z"/>
    </Icon>
  )
});

export default IconMaterialStorageSharpW700;
