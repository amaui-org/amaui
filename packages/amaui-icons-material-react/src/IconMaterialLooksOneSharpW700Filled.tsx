import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksOneSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksOneSharpW700Filled'
      short_name='LooksOne'

      {...props}
    >
      <path d="M11.625 17H14V7H9.625V9.375H11.625ZM21.85 21.85H2.15V2.15H21.85Z"/>
    </Icon>
  )
});

export default IconMaterialLooksOneSharpW700Filled;
