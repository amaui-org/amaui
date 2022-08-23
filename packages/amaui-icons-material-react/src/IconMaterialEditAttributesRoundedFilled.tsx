import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditAttributesRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditAttributesRoundedFilled'
      short_name='EditAttributes'

      {...props}
    >
      <path d="M7 17Q4.925 17 3.463 15.537Q2 14.075 2 12Q2 9.925 3.463 8.462Q4.925 7 7 7H17Q19.075 7 20.538 8.462Q22 9.925 22 12Q22 14.075 20.538 15.537Q19.075 17 17 17ZM8.05 13.875Q8.25 13.875 8.425 13.812Q8.6 13.75 8.75 13.6L11.075 11.275Q11.3 11.05 11.3 10.75Q11.3 10.45 11.075 10.225Q10.85 10 10.55 10Q10.25 10 10.025 10.225L8.05 12.2L7.575 11.725Q7.35 11.5 7.05 11.5Q6.75 11.5 6.525 11.725Q6.3 11.95 6.3 12.25Q6.3 12.55 6.525 12.775L7.35 13.6Q7.5 13.75 7.675 13.812Q7.85 13.875 8.05 13.875Z"/>
    </Icon>
  );
});

IconMaterialEditAttributesRoundedFilled.displayName = 'AmauiIconMaterialEditAttributesRoundedFilled';

export default IconMaterialEditAttributesRoundedFilled;
