import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpaceBarSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpaceBarSharpW700Filled'
      short_name='SpaceBar'

      {...props}
    >
      <path d="M3.15 15.85V9H6.3V12.7H17.7V9H20.85V15.85Z"/>
    </Icon>
  )
});

export default IconMaterialSpaceBarSharpW700Filled;
