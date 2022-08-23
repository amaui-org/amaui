import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeleteSweepRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteSweepRoundedFilled'
      short_name='DeleteSweep'

      {...props}
    >
      <path d="M16 18Q15.575 18 15.288 17.712Q15 17.425 15 17Q15 16.575 15.288 16.288Q15.575 16 16 16H18Q18.425 16 18.712 16.288Q19 16.575 19 17Q19 17.425 18.712 17.712Q18.425 18 18 18ZM16 10Q15.575 10 15.288 9.712Q15 9.425 15 9Q15 8.575 15.288 8.287Q15.575 8 16 8H21Q21.425 8 21.712 8.287Q22 8.575 22 9Q22 9.425 21.712 9.712Q21.425 10 21 10ZM16 14Q15.575 14 15.288 13.712Q15 13.425 15 13Q15 12.575 15.288 12.287Q15.575 12 16 12H20Q20.425 12 20.712 12.287Q21 12.575 21 13Q21 13.425 20.712 13.712Q20.425 14 20 14ZM5 19Q4.175 19 3.587 18.413Q3 17.825 3 17V8Q2.575 8 2.288 7.713Q2 7.425 2 7Q2 6.575 2.288 6.287Q2.575 6 3 6H6V5.5Q6 5.075 6.287 4.787Q6.575 4.5 7 4.5H9Q9.425 4.5 9.713 4.787Q10 5.075 10 5.5V6H13Q13.425 6 13.713 6.287Q14 6.575 14 7Q14 7.425 13.713 7.713Q13.425 8 13 8V17Q13 17.825 12.413 18.413Q11.825 19 11 19Z"/>
    </Icon>
  );
});

IconMaterialDeleteSweepRoundedFilled.displayName = 'AmauiIconMaterialDeleteSweepRoundedFilled';

export default IconMaterialDeleteSweepRoundedFilled;
