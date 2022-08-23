import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHouseSidingRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseSidingRoundedFilled'
      short_name='HouseSiding'

      {...props}
    >
      <path d="M6 20Q5.575 20 5.287 19.712Q5 19.425 5 19V12H3.3Q2.95 12 2.825 11.675Q2.7 11.35 2.975 11.125L11.325 3.6Q11.6 3.325 12 3.325Q12.4 3.325 12.675 3.6L21.025 11.125Q21.3 11.35 21.175 11.675Q21.05 12 20.7 12H19V19Q19 19.425 18.712 19.712Q18.425 20 18 20Q17.575 20 17.288 19.712Q17 19.425 17 19V18H7V19Q7 19.425 6.713 19.712Q6.425 20 6 20ZM9.45 8H14.55L12 5.7ZM7 12H17V10.2L16.775 10H7.225L7 10.2ZM7 16H17V14H7Z"/>
    </Icon>
  );
});

IconMaterialHouseSidingRoundedFilled.displayName = 'AmauiIconMaterialHouseSidingRoundedFilled';

export default IconMaterialHouseSidingRoundedFilled;
