import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksTwoSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwoSharpW700Filled'
      short_name='LooksTwo'

      {...props}
    >
      <path d="M8.625 17H15.375V14.625H11V13.2H15.375V7H8.625V9.375H13V10.8H8.625ZM2.15 21.85V2.15H21.85V21.85Z"/>
    </Icon>
  )
});

export default IconMaterialLooksTwoSharpW700Filled;
