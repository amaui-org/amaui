import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderOuterRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderOuterRounded'
      short_name='BorderOuter'

      {...props}
    >
      <path d="M11 9V7H13V9ZM11 13V11H13V13ZM15 13V11H17V13ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM11 17V15H13V17ZM7 13V11H9V13Z"/>
    </Icon>
  )
});

export default IconMaterialBorderOuterRounded;
