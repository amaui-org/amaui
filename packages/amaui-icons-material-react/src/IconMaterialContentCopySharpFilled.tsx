import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContentCopySharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopySharpFilled'
      short_name='ContentCopy'

      {...props}
    >
      <path d="M7 18V2H20V18ZM3 22V6H5V20H16V22Z"/>
    </Icon>
  );
});

export default IconMaterialContentCopySharpFilled;
