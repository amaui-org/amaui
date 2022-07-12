import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartphoneSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartphoneSharpW100'
      short_name='Smartphone'

      {...props}
    >
      <path d="M6.3 21.7V2.3H17.7V21.7ZM7 18.65H17V5.35H7ZM7 21H17V19.35H7ZM7 4.65H17V3H7ZM7 4.65V3V4.65ZM7 21V19.35V21Z"/>
    </Icon>
  )
});

export default IconMaterialSmartphoneSharpW100;
