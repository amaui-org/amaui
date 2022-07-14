import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialComputerSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerSharpW100Filled'
      short_name='Computer'

      {...props}
    >
      <path d="M3.3 17.3V4.9H20.7V17.3ZM2 19V18.3H22V19Z"/>
    </Icon>
  );
});

export default IconMaterialComputerSharpW100Filled;
