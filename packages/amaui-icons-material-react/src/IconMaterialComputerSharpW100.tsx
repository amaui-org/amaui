import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialComputerSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerSharpW100'
      short_name='Computer'

      {...props}
    >
      <path d="M3.3 17.3V4.9H20.7V17.3ZM4 16.6H20V5.6H4ZM2 19V18.3H22V19ZM4 16.6V5.6V16.6Z"/>
    </Icon>
  )
});

export default IconMaterialComputerSharpW100;
