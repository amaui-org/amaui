import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFoundationSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FoundationSharp'
      short_name='Foundation'

      {...props}
    >
      <path d="M5 20V17H3V15H5V12H2L12 3L22 12H19V15H21V17H19V20H17V17H13V20H11V17H7V20ZM7 15H11V6.6L7 10.2ZM13 15H17V10.2L13 6.6Z"/>
    </Icon>
  );
});

IconMaterialFoundationSharp.displayName = 'AmauiIconMaterialFoundationSharp';

export default IconMaterialFoundationSharp;
