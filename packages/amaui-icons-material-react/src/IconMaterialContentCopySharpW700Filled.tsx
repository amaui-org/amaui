import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContentCopySharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopySharpW700Filled'
      short_name='ContentCopy'

      {...props}
    >
      <path d="M6.725 18.275V0.575H21.425V18.275ZM1.575 23.425V6.575H4.725V20.275H15.425V23.425Z"/>
    </Icon>
  )
});

export default IconMaterialContentCopySharpW700Filled;
