import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialComputerSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerSharp'
      short_name='Computer'

      {...props}
    >
      <path d="M2 18V3H22V18ZM4 16H20V5H4ZM1 21V19H23V21ZM4 16V5V16Z"/>
    </Icon>
  );
});

export default IconMaterialComputerSharp;
