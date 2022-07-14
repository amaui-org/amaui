import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSdCardSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardSharp'
      short_name='SdCard'

      {...props}
    >
      <path d="M9 11H11V7H9ZM12 11H14V7H12ZM15 11H17V7H15ZM4 22V8L10 2H20V22ZM6 20H18V4H10.85L6 8.85ZM6 20H10.85H18Z"/>
    </Icon>
  );
});

export default IconMaterialSdCardSharp;
