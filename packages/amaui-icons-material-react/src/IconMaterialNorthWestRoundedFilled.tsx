import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNorthWestRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthWestRoundedFilled'
      short_name='NorthWest'

      {...props}
    >
      <path d="M17.9 19.3 7 8.4V14Q7 14.425 6.713 14.712Q6.425 15 6 15Q5.575 15 5.287 14.712Q5 14.425 5 14V6Q5 5.575 5.287 5.287Q5.575 5 6 5H14Q14.425 5 14.713 5.287Q15 5.575 15 6Q15 6.425 14.713 6.713Q14.425 7 14 7H8.4L19.3 17.9Q19.575 18.175 19.575 18.6Q19.575 19.025 19.3 19.3Q19.025 19.575 18.6 19.575Q18.175 19.575 17.9 19.3Z"/>
    </Icon>
  );
});

IconMaterialNorthWestRoundedFilled.displayName = 'AmauiIconMaterialNorthWestRoundedFilled';

export default IconMaterialNorthWestRoundedFilled;
