import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloseFullscreenSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseFullscreenSharpFilled'
      short_name='CloseFullscreen'

      {...props}
    >
      <path d="M12 12V4H14V8.6L20.6 2L22 3.4L15.4 10H20V12ZM3.4 22 2 20.6 8.6 14H4V12H12V20H10V15.4Z"/>
    </Icon>
  );
});

IconMaterialCloseFullscreenSharpFilled.displayName = 'AmauiIconMaterialCloseFullscreenSharpFilled';

export default IconMaterialCloseFullscreenSharpFilled;
