import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalDistributeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalDistributeRounded'
      short_name='VerticalDistribute'

      {...props}
    >
      <path d="M3 4Q2.575 4 2.288 3.712Q2 3.425 2 3Q2 2.575 2.288 2.287Q2.575 2 3 2H21Q21.425 2 21.712 2.287Q22 2.575 22 3Q22 3.425 21.712 3.712Q21.425 4 21 4ZM8.5 13.5Q7.875 13.5 7.438 13.062Q7 12.625 7 12Q7 11.375 7.438 10.938Q7.875 10.5 8.5 10.5H15.5Q16.125 10.5 16.562 10.938Q17 11.375 17 12Q17 12.625 16.562 13.062Q16.125 13.5 15.5 13.5ZM3 22Q2.575 22 2.288 21.712Q2 21.425 2 21Q2 20.575 2.288 20.288Q2.575 20 3 20H21Q21.425 20 21.712 20.288Q22 20.575 22 21Q22 21.425 21.712 21.712Q21.425 22 21 22Z"/>
    </Icon>
  );
});

IconMaterialVerticalDistributeRounded.displayName = 'AmauiIconMaterialVerticalDistributeRounded';

export default IconMaterialVerticalDistributeRounded;
