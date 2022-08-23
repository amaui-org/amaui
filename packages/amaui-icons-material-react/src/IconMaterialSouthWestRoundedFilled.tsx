import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSouthWestRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SouthWestRoundedFilled'
      short_name='SouthWest'

      {...props}
    >
      <path d="M6 19Q5.575 19 5.287 18.712Q5 18.425 5 18V10Q5 9.575 5.287 9.287Q5.575 9 6 9Q6.425 9 6.713 9.287Q7 9.575 7 10V15.6L17.9 4.7Q18.175 4.425 18.6 4.425Q19.025 4.425 19.3 4.7Q19.575 4.975 19.575 5.4Q19.575 5.825 19.3 6.1L8.4 17H14Q14.425 17 14.713 17.288Q15 17.575 15 18Q15 18.425 14.713 18.712Q14.425 19 14 19Z"/>
    </Icon>
  );
});

IconMaterialSouthWestRoundedFilled.displayName = 'AmauiIconMaterialSouthWestRoundedFilled';

export default IconMaterialSouthWestRoundedFilled;
