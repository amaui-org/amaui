import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradientRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradientRounded'
      short_name='Gradient'

      {...props}
    >
      <path d="M11 13V11H13V13ZM9 15V13H11V15ZM13 15V13H15V15ZM15 13V11H17V13ZM7 13V11H9V13ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM7 19H9V17H7ZM11 19H13V17H11ZM15 19H17V17H15ZM5 17H7V15H9V17H11V15H13V17H15V15H17V17H19V15H17V13H19V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5V13H7V15H5ZM5 19Q5 19 5 19Q5 19 5 19V5Q5 5 5 5Q5 5 5 5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19Z"/>
    </Icon>
  );
});

IconMaterialGradientRounded.displayName = 'AmauiIconMaterialGradientRounded';

export default IconMaterialGradientRounded;
