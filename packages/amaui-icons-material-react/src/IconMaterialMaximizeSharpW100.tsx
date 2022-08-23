import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMaximizeSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaximizeSharpW100'
      short_name='Maximize'

      {...props}
    >
      <path d="M3.65 4.35V3.65H20.35V4.35Z"/>
    </Icon>
  );
});

IconMaterialMaximizeSharpW100.displayName = 'AmauiIconMaterialMaximizeSharpW100';

export default IconMaterialMaximizeSharpW100;
