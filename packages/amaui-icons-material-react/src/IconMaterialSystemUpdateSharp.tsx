import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSystemUpdateSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateSharp'
      short_name='SystemUpdate'

      {...props}
    >
      <path d="M12 16 8 12 9.4 10.6 11 12.15V8H13V12.15L14.6 10.6L16 12ZM5 23V1H19V23ZM7 18H17V6H7ZM7 21H17V20H7ZM7 4H17V3H7ZM7 4V3V4ZM7 21V20V21Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdateSharp.displayName = 'AmauiIconMaterialSystemUpdateSharp';

export default IconMaterialSystemUpdateSharp;
