import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartDisplaySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplaySharpW100'
      short_name='SmartDisplay'

      {...props}
    >
      <path d="M10.15 15.3 15.3 12 10.15 8.7ZM3.3 18.7V5.3H20.7V18.7ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  )
});

export default IconMaterialSmartDisplaySharpW100;
