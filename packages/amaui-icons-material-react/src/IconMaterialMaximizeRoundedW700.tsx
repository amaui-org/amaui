import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMaximizeRoundedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MaximizeRoundedW700'
      short_name='Maximize'

      {...props}
    >
      <path d="M3.975 5.575Q3.325 5.575 2.875 5.112Q2.425 4.65 2.425 4Q2.425 3.35 2.888 2.887Q3.35 2.425 4 2.425H20.025Q20.675 2.425 21.125 2.887Q21.575 3.35 21.575 4Q21.575 4.65 21.113 5.112Q20.65 5.575 20 5.575Z"/>
    </Icon>
  )
});

export default IconMaterialMaximizeRoundedW700;
