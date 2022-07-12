import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFullscreenSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenSharpW100Filled'
      short_name='Fullscreen'

      {...props}
    >
      <path d="M5 19V14H5.7V18.3H10V19ZM5 10V5H10V5.7H5.7V10ZM14 19V18.3H18.3V14H19V19ZM18.3 10V5.7H14V5H19V10Z"/>
    </Icon>
  )
});

export default IconMaterialFullscreenSharpW100Filled;
