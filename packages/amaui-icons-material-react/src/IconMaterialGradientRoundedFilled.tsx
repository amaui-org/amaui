import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradientRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradientRoundedFilled'
      short_name='Gradient'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM11 11V13H13V11ZM7 11V13H9V11ZM9 13V15H11V13ZM13 13V15H15V13ZM5 13V15H7V13ZM15 11V13H17V15H19V13H17V11ZM7 15V17H5V19Q5 19 5 19Q5 19 5 19H7V17H9V19H11V17H13V19H15V17H17V19H19Q19 19 19 19Q19 19 19 19V17H17V15H15V17H13V15H11V17H9V15Z"/>
    </Icon>
  );
});

IconMaterialGradientRoundedFilled.displayName = 'AmauiIconMaterialGradientRoundedFilled';

export default IconMaterialGradientRoundedFilled;
