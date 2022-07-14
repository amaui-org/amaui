import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFullscreenSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenSharp'
      short_name='Fullscreen'

      {...props}
    >
      <path d="M5 19V14H7V17H10V19ZM5 10V5H10V7H7V10ZM14 19V17H17V14H19V19ZM17 10V7H14V5H19V10Z"/>
    </Icon>
  );
});

export default IconMaterialFullscreenSharp;
