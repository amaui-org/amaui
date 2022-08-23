import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartphoneSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartphoneSharpFilled'
      short_name='Smartphone'

      {...props}
    >
      <path d="M5 23V1H19V23ZM7 18H17V6H7Z"/>
    </Icon>
  );
});

IconMaterialSmartphoneSharpFilled.displayName = 'AmauiIconMaterialSmartphoneSharpFilled';

export default IconMaterialSmartphoneSharpFilled;
