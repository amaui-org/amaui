import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSplitscreenSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenSharpW700'
      short_name='Splitscreen'

      {...props}
    >
      <path d="M6.3 8H17.7V4.3H6.3ZM3.15 11.15V1.15H20.85V11.15ZM6.3 19.7H17.7V16H6.3ZM3.15 22.85V12.85H20.85V22.85ZM6.3 8V4.3V8ZM6.3 19.7V16V19.7Z"/>
    </Icon>
  )
});

export default IconMaterialSplitscreenSharpW700;
