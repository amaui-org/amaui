import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalDistributeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalDistributeRounded'
      short_name='HorizontalDistribute'

      {...props}
    >
      <path d="M3 22Q2.575 22 2.288 21.712Q2 21.425 2 21V3Q2 2.575 2.288 2.287Q2.575 2 3 2Q3.425 2 3.713 2.287Q4 2.575 4 3V21Q4 21.425 3.713 21.712Q3.425 22 3 22ZM12 17Q11.375 17 10.938 16.562Q10.5 16.125 10.5 15.5V8.5Q10.5 7.875 10.938 7.438Q11.375 7 12 7Q12.625 7 13.062 7.438Q13.5 7.875 13.5 8.5V15.5Q13.5 16.125 13.062 16.562Q12.625 17 12 17ZM21 22Q20.575 22 20.288 21.712Q20 21.425 20 21V3Q20 2.575 20.288 2.287Q20.575 2 21 2Q21.425 2 21.712 2.287Q22 2.575 22 3V21Q22 21.425 21.712 21.712Q21.425 22 21 22Z"/>
    </Icon>
  );
});

IconMaterialHorizontalDistributeRounded.displayName = 'AmauiIconMaterialHorizontalDistributeRounded';

export default IconMaterialHorizontalDistributeRounded;
