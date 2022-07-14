import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContentCopySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopySharpW100Filled'
      short_name='ContentCopy'

      {...props}
    >
      <path d="M8.15 17.5V4.1H18.55V17.5ZM5.45 20.2V8.1H6.15V19.5H14.55V20.2Z"/>
    </Icon>
  );
});

export default IconMaterialContentCopySharpW100Filled;
