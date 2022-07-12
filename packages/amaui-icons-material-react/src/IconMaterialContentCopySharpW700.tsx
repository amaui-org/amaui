import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContentCopySharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopySharpW700'
      short_name='ContentCopy'

      {...props}
    >
      <path d="M6.725 18.275V0.575H21.425V18.275ZM9.875 15.125H18.275V3.725H9.875ZM1.575 23.425V6.575H4.725V20.275H15.425V23.425ZM9.875 15.125V3.725V15.125Z"/>
    </Icon>
  )
});

export default IconMaterialContentCopySharpW700;
