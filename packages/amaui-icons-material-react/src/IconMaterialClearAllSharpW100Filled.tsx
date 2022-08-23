import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialClearAllSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ClearAllSharpW100Filled'
      short_name='ClearAll'

      {...props}
    >
      <path d="M5.65 12.35V11.65H18.35V12.35ZM3.65 16.35V15.65H16.35V16.35ZM7.65 8.35V7.65H20.35V8.35Z"/>
    </Icon>
  );
});

IconMaterialClearAllSharpW100Filled.displayName = 'AmauiIconMaterialClearAllSharpW100Filled';

export default IconMaterialClearAllSharpW100Filled;
