import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMpSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MpSharp'
      short_name='Mp'

      {...props}
    >
      <path d="M13.5 15H15V13.5H18V9H13.5ZM15 12V10.5H16.5V12ZM6 15H7.5V10.5H8.5V13.5H10V10.5H11V15H12.5V9H6ZM3 21V3H21V21ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialMpSharp.displayName = 'AmauiIconMaterialMpSharp';

export default IconMaterialMpSharp;
