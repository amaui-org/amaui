import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMemorySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MemorySharp'
      short_name='Memory'

      {...props}
    >
      <path d="M9 21V19H5V15H3V13H5V11H3V9H5V5H9V3H11V5H13V3H15V5H19V9H21V11H19V13H21V15H19V19H15V21H13V19H11V21ZM7 17H17V7H7ZM9 15V9H15V15ZM11 13H13V11H11ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialMemorySharp.displayName = 'AmauiIconMaterialMemorySharp';

export default IconMaterialMemorySharp;
