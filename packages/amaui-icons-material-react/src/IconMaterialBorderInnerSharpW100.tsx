import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderInnerSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderInnerSharpW100'
      short_name='BorderInner'

      {...props}
    >
      <path d="M3.5 20.5V19.5H4.5V20.5ZM11.5 20.5V12.5H3.5V11.5H11.5V3.5H12.5V11.5H20.5V12.5H12.5V20.5ZM3.5 16.5V15.5H4.5V16.5ZM3.5 8.5V7.5H4.5V8.5ZM3.5 4.5V3.5H4.5V4.5ZM7.5 20.5V19.5H8.5V20.5ZM7.5 4.5V3.5H8.5V4.5ZM15.5 20.5V19.5H16.5V20.5ZM15.5 4.5V3.5H16.5V4.5ZM19.5 20.5V19.5H20.5V20.5ZM19.5 16.5V15.5H20.5V16.5ZM19.5 8.5V7.5H20.5V8.5ZM19.5 4.5V3.5H20.5V4.5Z"/>
    </Icon>
  );
});

IconMaterialBorderInnerSharpW100.displayName = 'AmauiIconMaterialBorderInnerSharpW100';

export default IconMaterialBorderInnerSharpW100;
