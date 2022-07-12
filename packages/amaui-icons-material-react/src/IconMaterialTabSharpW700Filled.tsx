import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTabSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabSharpW700Filled'
      short_name='Tab'

      {...props}
    >
      <path d="M1.15 20.85V3.15H22.85V20.85ZM13 10H19.7V6.3H13Z"/>
    </Icon>
  )
});

export default IconMaterialTabSharpW700Filled;
