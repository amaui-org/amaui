import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSplitscreenSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenSharpW100Filled'
      short_name='Splitscreen'

      {...props}
    >
      <path d="M5.3 11V3.3H18.7V11ZM5.3 20.7V13H18.7V20.7Z"/>
    </Icon>
  )
});

export default IconMaterialSplitscreenSharpW100Filled;
