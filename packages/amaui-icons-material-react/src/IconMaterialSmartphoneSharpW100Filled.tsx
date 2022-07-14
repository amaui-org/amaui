import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartphoneSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartphoneSharpW100Filled'
      short_name='Smartphone'

      {...props}
    >
      <path d="M6.3 21.7V2.3H17.7V21.7ZM7 18.65H17V5.35H7Z"/>
    </Icon>
  );
});

export default IconMaterialSmartphoneSharpW100Filled;
