import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloseFullscreenSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseFullscreenSharpW700'
      short_name='CloseFullscreen'

      {...props}
    >
      <path d="M12 12V2.85H15.15V6.65L20.6 1.2L22.8 3.4L17.35 8.85H21.15V12ZM3.4 22.8 1.2 20.6 6.65 15.15H2.85V12H12V21.15H8.85V17.35Z"/>
    </Icon>
  )
});

export default IconMaterialCloseFullscreenSharpW700;
