import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCastleRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastleRoundedFilled'
      short_name='Castle'

      {...props}
    >
      <path d="M3 21Q2.175 21 1.588 20.413Q1 19.825 1 19V10Q1 9.575 1.288 9.287Q1.575 9 2 9Q2.425 9 2.713 9.287Q3 9.575 3 10V11H5V4Q5 3.575 5.287 3.287Q5.575 3 6 3Q6.425 3 6.713 3.287Q7 3.575 7 4V5H9V4Q9 3.575 9.288 3.287Q9.575 3 10 3Q10.425 3 10.713 3.287Q11 3.575 11 4V5H13V4Q13 3.575 13.288 3.287Q13.575 3 14 3Q14.425 3 14.713 3.287Q15 3.575 15 4V5H17V4Q17 3.575 17.288 3.287Q17.575 3 18 3Q18.425 3 18.712 3.287Q19 3.575 19 4V11H21V10Q21 9.575 21.288 9.287Q21.575 9 22 9Q22.425 9 22.712 9.287Q23 9.575 23 10V19Q23 19.825 22.413 20.413Q21.825 21 21 21H14V18Q14 17.175 13.413 16.587Q12.825 16 12 16Q11.175 16 10.588 16.587Q10 17.175 10 18V21ZM9 12H11V9H9ZM13 12H15V9H13Z"/>
    </Icon>
  );
});

IconMaterialCastleRoundedFilled.displayName = 'AmauiIconMaterialCastleRoundedFilled';

export default IconMaterialCastleRoundedFilled;
