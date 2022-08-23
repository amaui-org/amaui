import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialContentCopySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopySharpW100'
      short_name='ContentCopy'

      {...props}
    >
      <path d="M8.15 17.5V4.1H18.55V17.5ZM8.85 16.8H17.85V4.8H8.85ZM5.45 20.2V8.1H6.15V19.5H14.55V20.2ZM8.85 16.8V4.8V16.8Z"/>
    </Icon>
  );
});

IconMaterialContentCopySharpW100.displayName = 'AmauiIconMaterialContentCopySharpW100';

export default IconMaterialContentCopySharpW100;
