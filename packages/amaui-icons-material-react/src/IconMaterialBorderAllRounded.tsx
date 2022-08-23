import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderAllRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllRounded'
      short_name='BorderAll'

      {...props}
    >
      <path d="M3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21H5Q4.175 21 3.587 20.413Q3 19.825 3 19ZM13 13V19Q13 19 13 19Q13 19 13 19H19Q19 19 19 19Q19 19 19 19V13Q19 13 19 13Q19 13 19 13H13Q13 13 13 13Q13 13 13 13ZM13 11H19Q19 11 19 11Q19 11 19 11V5Q19 5 19 5Q19 5 19 5H13Q13 5 13 5Q13 5 13 5V11Q13 11 13 11Q13 11 13 11ZM11 11V5Q11 5 11 5Q11 5 11 5H5Q5 5 5 5Q5 5 5 5V11Q5 11 5 11Q5 11 5 11H11Q11 11 11 11Q11 11 11 11ZM11 13H5Q5 13 5 13Q5 13 5 13V19Q5 19 5 19Q5 19 5 19H11Q11 19 11 19Q11 19 11 19V13Q11 13 11 13Q11 13 11 13Z"/>
    </Icon>
  );
});

IconMaterialBorderAllRounded.displayName = 'AmauiIconMaterialBorderAllRounded';

export default IconMaterialBorderAllRounded;
