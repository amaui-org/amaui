import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMinimizeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeSharpW100Filled'
      short_name='Minimize'

      {...props}
    >
      <path d="M6.65 20.35V19.65H17.35V20.35Z"/>
    </Icon>
  );
});

IconMaterialMinimizeSharpW100Filled.displayName = 'AmauiIconMaterialMinimizeSharpW100Filled';

export default IconMaterialMinimizeSharpW100Filled;
