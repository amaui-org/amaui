import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlipToFrontRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToFrontRounded'
      short_name='FlipToFront'

      {...props}
    >
      <path d="M3 13V11H5V13ZM3 17V15H5V17ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19H5ZM3 9V7H5V9ZM15 21V19H17V21ZM9 17Q8.175 17 7.588 16.413Q7 15.825 7 15V5Q7 4.175 7.588 3.587Q8.175 3 9 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V15Q21 15.825 20.413 16.413Q19.825 17 19 17ZM9 15H19Q19 15 19 15Q19 15 19 15V5Q19 5 19 5Q19 5 19 5H9Q9 5 9 5Q9 5 9 5V15Q9 15 9 15Q9 15 9 15ZM11 21V19H13V21ZM7 21V19H9V21Z"/>
    </Icon>
  );
});

IconMaterialFlipToFrontRounded.displayName = 'AmauiIconMaterialFlipToFrontRounded';

export default IconMaterialFlipToFrontRounded;
