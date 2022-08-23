import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial30fpsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='30fpsSharpW100Filled'
      short_name='30fps'

      {...props}
    >
      <path d="M3.15 17.85V17.15H9.15V12.35H3.15V11.65H9.15V6.85H3.15V6.15H9.85V17.85ZM13.85 17.15H20.15V6.85H13.85ZM13.15 17.85V6.15H20.85V17.85Z"/>
    </Icon>
  );
});

IconMaterial30fpsSharpW100Filled.displayName = 'AmauiIconMaterial30fpsSharpW100Filled';

export default IconMaterial30fpsSharpW100Filled;
