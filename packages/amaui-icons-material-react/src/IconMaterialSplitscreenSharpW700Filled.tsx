import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSplitscreenSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenSharpW700Filled'
      short_name='Splitscreen'

      {...props}
    >
      <path d="M3.15 11.15V1.15H20.85V11.15ZM3.15 22.85V12.85H20.85V22.85Z"/>
    </Icon>
  )
});

export default IconMaterialSplitscreenSharpW700Filled;
