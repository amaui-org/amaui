import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlipToFrontRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlipToFrontRoundedW100Filled'
      short_name='FlipToFront'

      {...props}
    >
      <path d="M4.3 13V11H5V13ZM4.3 17V15H5V17ZM5 19.7Q4.7 19.7 4.5 19.5Q4.3 19.3 4.3 19H5ZM4.3 9V7H5V9ZM15 19.7V19H17V19.7ZM9.8 15.7Q9.15 15.7 8.725 15.275Q8.3 14.85 8.3 14.2V5.8Q8.3 5.15 8.725 4.725Q9.15 4.3 9.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V14.2Q19.7 14.85 19.275 15.275Q18.85 15.7 18.2 15.7ZM9.8 15H18.2Q18.5 15 18.75 14.75Q19 14.5 19 14.2V5.8Q19 5.5 18.75 5.25Q18.5 5 18.2 5H9.8Q9.5 5 9.25 5.25Q9 5.5 9 5.8V14.2Q9 14.5 9.25 14.75Q9.5 15 9.8 15ZM11 19.7V19H13V19.7ZM7 19.7V19H9V19.7Z"/>
    </Icon>
  );
});

IconMaterialFlipToFrontRoundedW100Filled.displayName = 'AmauiIconMaterialFlipToFrontRoundedW100Filled';

export default IconMaterialFlipToFrontRoundedW100Filled;
