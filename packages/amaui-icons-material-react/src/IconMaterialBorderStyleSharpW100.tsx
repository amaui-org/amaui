import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderStyleSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderStyleSharpW100'
      short_name='BorderStyle'

      {...props}
    >
      <path d="M15.5 20.5V19.5H16.5V20.5ZM19.5 20.5V19.5H20.5V20.5ZM7.5 20.5V19.5H8.5V20.5ZM11.5 20.5V19.5H12.5V20.5ZM19.5 16.5V15.5H20.5V16.5ZM19.5 12.5V11.5H20.5V12.5ZM3.5 20.5V3.5H20.5V4.5H4.5V20.5ZM19.5 8.5V7.5H20.5V8.5Z"/>
    </Icon>
  );
});

IconMaterialBorderStyleSharpW100.displayName = 'AmauiIconMaterialBorderStyleSharpW100';

export default IconMaterialBorderStyleSharpW100;
