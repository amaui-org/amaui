import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFullscreenExitSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenExitSharpFilled'
      short_name='FullscreenExit'

      {...props}
    >
      <path d="M8 19V16H5V14H10V19ZM5 10V8H8V5H10V10ZM14 19V14H19V16H16V19ZM14 10V5H16V8H19V10Z"/>
    </Icon>
  )
});

export default IconMaterialFullscreenExitSharpFilled;
