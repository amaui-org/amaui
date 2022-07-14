import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmartDisplaySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplaySharpW100Filled'
      short_name='SmartDisplay'

      {...props}
    >
      <path d="M10.15 15.3 15.3 12 10.15 8.7ZM3.3 18.7V5.3H20.7V18.7Z"/>
    </Icon>
  );
});

export default IconMaterialSmartDisplaySharpW100Filled;
