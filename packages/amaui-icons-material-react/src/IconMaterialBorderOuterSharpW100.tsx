import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderOuterSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderOuterSharpW100'
      short_name='BorderOuter'

      {...props}
    >
      <path d="M11.5 8.5V7.5H12.5V8.5ZM11.5 12.5V11.5H12.5V12.5ZM15.5 12.5V11.5H16.5V12.5ZM3.5 20.5V3.5H20.5V20.5ZM4.5 19.5H19.5V4.5H4.5ZM11.5 16.5V15.5H12.5V16.5ZM7.5 12.5V11.5H8.5V12.5Z"/>
    </Icon>
  );
});

IconMaterialBorderOuterSharpW100.displayName = 'AmauiIconMaterialBorderOuterSharpW100';

export default IconMaterialBorderOuterSharpW100;
