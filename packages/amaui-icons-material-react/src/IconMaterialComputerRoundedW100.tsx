import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialComputerRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerRoundedW100'
      short_name='Computer'

      {...props}
    >
      <path d="M4.8 17.3Q4.175 17.3 3.737 16.863Q3.3 16.425 3.3 15.8V6.4Q3.3 5.775 3.737 5.337Q4.175 4.9 4.8 4.9H19.2Q19.825 4.9 20.263 5.337Q20.7 5.775 20.7 6.4V15.8Q20.7 16.425 20.263 16.863Q19.825 17.3 19.2 17.3ZM4.8 16.6H19.2Q19.55 16.6 19.775 16.375Q20 16.15 20 15.8V6.4Q20 6.05 19.775 5.825Q19.55 5.6 19.2 5.6H4.8Q4.45 5.6 4.225 5.825Q4 6.05 4 6.4V15.8Q4 16.15 4.225 16.375Q4.45 16.6 4.8 16.6ZM2.35 19Q2.2 19 2.1 18.9Q2 18.8 2 18.65Q2 18.5 2.1 18.4Q2.2 18.3 2.35 18.3H21.65Q21.8 18.3 21.9 18.4Q22 18.5 22 18.65Q22 18.8 21.9 18.9Q21.8 19 21.65 19ZM4 16.6Q4 16.6 4 16.375Q4 16.15 4 15.8V6.4Q4 6.05 4 5.825Q4 5.6 4 5.6Q4 5.6 4 5.825Q4 6.05 4 6.4V15.8Q4 16.15 4 16.375Q4 16.6 4 16.6Z"/>
    </Icon>
  );
});

IconMaterialComputerRoundedW100.displayName = 'AmauiIconMaterialComputerRoundedW100';

export default IconMaterialComputerRoundedW100;
