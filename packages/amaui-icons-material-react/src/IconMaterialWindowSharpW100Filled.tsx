import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowSharpW100Filled'
      short_name='Window'

      {...props}
    >
      <path d="M11.65 11.65H3.3V3.3H11.65ZM12.35 11.65V3.3H20.7V11.65ZM11.65 12.35V20.7H3.3V12.35ZM20.7 20.7H12.35V12.35H20.7Z"/>
    </Icon>
  );
});

IconMaterialWindowSharpW100Filled.displayName = 'AmauiIconMaterialWindowSharpW100Filled';

export default IconMaterialWindowSharpW100Filled;
