import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterial60fpsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='60fpsSharpW100Filled'
      short_name='60fps'

      {...props}
    >
      <path d="M3.15 17.85V6.15H8.85V6.85H3.85V11.15H9.85V17.85ZM3.85 17.15H9.15V11.85H3.85ZM13.85 17.15H20.15V6.85H13.85ZM13.15 17.85V6.15H20.85V17.85Z"/>
    </Icon>
  );
});

IconMaterial60fpsSharpW100Filled.displayName = 'AmauiIconMaterial60fpsSharpW100Filled';

export default IconMaterial60fpsSharpW100Filled;
