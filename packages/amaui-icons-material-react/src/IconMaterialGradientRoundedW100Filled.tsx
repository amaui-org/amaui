import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradientRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradientRoundedW100Filled'
      short_name='Gradient'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM11 11V13H13V11ZM7 11V13H9V11ZM9 13V15H11V13ZM13 13V15H15V13ZM5 13V15H7V13ZM15 11V13H17V15H19V13H17V11ZM7 15V17H5V18.2Q5 18.525 5.238 18.762Q5.475 19 5.8 19H7V17H9V19H11V17H13V19H15V17H17V19H18.2Q18.525 19 18.763 18.762Q19 18.525 19 18.2V17H17V15H15V17H13V15H11V17H9V15Z"/>
    </Icon>
  );
});

IconMaterialGradientRoundedW100Filled.displayName = 'AmauiIconMaterialGradientRoundedW100Filled';

export default IconMaterialGradientRoundedW100Filled;
