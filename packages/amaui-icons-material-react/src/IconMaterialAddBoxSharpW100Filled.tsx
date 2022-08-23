import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddBoxSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBoxSharpW100Filled'
      short_name='AddBox'

      {...props}
    >
      <path d="M11.65 16.35H12.35V12.35H16.35V11.65H12.35V7.65H11.65V11.65H7.65V12.35H11.65ZM4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialAddBoxSharpW100Filled.displayName = 'AmauiIconMaterialAddBoxSharpW100Filled';

export default IconMaterialAddBoxSharpW100Filled;
