import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedRoundedFilled'
      short_name='Bed'

      {...props}
    >
      <path d="M3 19Q2.575 19 2.288 18.712Q2 18.425 2 18V13Q2 12.325 2.275 11.775Q2.55 11.225 3 10.8V8Q3 6.75 3.875 5.875Q4.75 5 6 5H10Q10.575 5 11.075 5.213Q11.575 5.425 12 5.8Q12.425 5.425 12.925 5.213Q13.425 5 14 5H18Q19.25 5 20.125 5.875Q21 6.75 21 8V10.8Q21.45 11.225 21.725 11.775Q22 12.325 22 13V18Q22 18.425 21.712 18.712Q21.425 19 21 19Q20.575 19 20.288 18.712Q20 18.425 20 18V17H4V18Q4 18.425 3.713 18.712Q3.425 19 3 19ZM13 10H19V8Q19 7.575 18.712 7.287Q18.425 7 18 7H14Q13.575 7 13.288 7.287Q13 7.575 13 8ZM5 10H11V8Q11 7.575 10.713 7.287Q10.425 7 10 7H6Q5.575 7 5.287 7.287Q5 7.575 5 8Z"/>
    </Icon>
  );
});

IconMaterialBedRoundedFilled.displayName = 'AmauiIconMaterialBedRoundedFilled';

export default IconMaterialBedRoundedFilled;
