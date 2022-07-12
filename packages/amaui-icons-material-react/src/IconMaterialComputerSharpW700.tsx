import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialComputerSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerSharpW700'
      short_name='Computer'

      {...props}
    >
      <path d="M1.15 18.85V2.15H22.85V18.85ZM4.3 15.7H19.7V5.3H4.3ZM0.225 22.225V19.85H23.775V22.225ZM4.3 15.7V5.3V15.7Z"/>
    </Icon>
  )
});

export default IconMaterialComputerSharpW700;
