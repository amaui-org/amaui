import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFullscreenExitSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenExitSharpW100'
      short_name='FullscreenExit'

      {...props}
    >
      <path d="M9.3 19V14.7H5V14H10V19ZM5 10V9.3H9.3V5H10V10ZM14 19V14H19V14.7H14.7V19ZM14 10V5H14.7V9.3H19V10Z"/>
    </Icon>
  )
});

export default IconMaterialFullscreenExitSharpW100;
