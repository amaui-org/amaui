import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContentCopySharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopySharp'
      short_name='ContentCopy'

      {...props}
    >
      <path d="M7 18V2H20V18ZM9 16H18V4H9ZM3 22V6H5V20H16V22ZM9 16V4V16Z"/>
    </Icon>
  );
});

export default IconMaterialContentCopySharp;
