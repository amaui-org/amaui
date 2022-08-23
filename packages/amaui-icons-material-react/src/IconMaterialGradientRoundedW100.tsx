import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGradientRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GradientRoundedW100'
      short_name='Gradient'

      {...props}
    >
      <path d="M11 13V11H13V13ZM9 15V13H11V15ZM13 15V13H15V15ZM15 13V11H17V13ZM7 13V11H9V13ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM7 19H9V17H7ZM11 19H13V17H11ZM15 19H17V17H15ZM5 17H7V15H9V17H11V15H13V17H15V15H17V17H19V15H17V13H19V5.8Q19 5.5 18.75 5.25Q18.5 5 18.2 5H5.8Q5.5 5 5.25 5.25Q5 5.5 5 5.8V13H7V15H5ZM5.8 19H5Q5 19 5 18.762Q5 18.525 5 18.2V5.8Q5 5.5 5 5.25Q5 5 5 5H5.8Q5.5 5 5.25 5.25Q5 5.5 5 5.8V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19Z"/>
    </Icon>
  );
});

IconMaterialGradientRoundedW100.displayName = 'AmauiIconMaterialGradientRoundedW100';

export default IconMaterialGradientRoundedW100;
