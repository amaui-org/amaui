import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompareRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompareRounded'
      short_name='Compare'

      {...props}
    >
      <path d="M11 23Q10.575 23 10.288 22.712Q10 22.425 10 22V21H5Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H10V2Q10 1.575 10.288 1.287Q10.575 1 11 1Q11.425 1 11.713 1.287Q12 1.575 12 2V22Q12 22.425 11.713 22.712Q11.425 23 11 23ZM5 18H10V12ZM14 21V12L19 18V5Q19 5 19 5Q19 5 19 5H14V3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialCompareRounded.displayName = 'AmauiIconMaterialCompareRounded';

export default IconMaterialCompareRounded;
