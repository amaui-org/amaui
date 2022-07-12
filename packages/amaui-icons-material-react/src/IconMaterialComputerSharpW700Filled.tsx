import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialComputerSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerSharpW700Filled'
      short_name='Computer'

      {...props}
    >
      <path d="M1.15 18.85V2.15H22.85V18.85ZM0.225 22.225V19.85H23.775V22.225Z"/>
    </Icon>
  )
});

export default IconMaterialComputerSharpW700Filled;
