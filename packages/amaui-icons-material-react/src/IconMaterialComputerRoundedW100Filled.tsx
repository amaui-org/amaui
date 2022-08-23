import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialComputerRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerRoundedW100Filled'
      short_name='Computer'

      {...props}
    >
      <path d="M4.8 17.3Q4.175 17.3 3.737 16.863Q3.3 16.425 3.3 15.8V6.4Q3.3 5.775 3.737 5.337Q4.175 4.9 4.8 4.9H19.2Q19.825 4.9 20.263 5.337Q20.7 5.775 20.7 6.4V15.8Q20.7 16.425 20.263 16.863Q19.825 17.3 19.2 17.3ZM2.35 19Q2.2 19 2.1 18.9Q2 18.8 2 18.65Q2 18.5 2.1 18.4Q2.2 18.3 2.35 18.3H21.65Q21.8 18.3 21.9 18.4Q22 18.5 22 18.65Q22 18.8 21.9 18.9Q21.8 19 21.65 19Z"/>
    </Icon>
  );
});

IconMaterialComputerRoundedW100Filled.displayName = 'AmauiIconMaterialComputerRoundedW100Filled';

export default IconMaterialComputerRoundedW100Filled;
