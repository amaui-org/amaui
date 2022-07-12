import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLooksTwoSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwoSharpW700'
      short_name='LooksTwo'

      {...props}
    >
      <path d="M8.625 17H15.375V14.625H11V13.2H15.375V7H8.625V9.375H13V10.8H8.625ZM2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM5.3 18.7V5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialLooksTwoSharpW700;
