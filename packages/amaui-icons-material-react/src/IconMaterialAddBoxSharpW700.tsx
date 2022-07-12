import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddBoxSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBoxSharpW700'
      short_name='AddBox'

      {...props}
    >
      <path d="M10.625 17.2H13.375V13.375H17.2V10.625H13.375V6.8H10.625V10.625H6.8V13.375H10.625ZM2.15 21.85V2.15H21.85V21.85ZM5.3 18.7H18.7V5.3H5.3ZM5.3 18.7V5.3V18.7Z"/>
    </Icon>
  )
});

export default IconMaterialAddBoxSharpW700;
