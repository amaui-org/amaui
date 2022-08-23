import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOtherHousesSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OtherHousesSharpFilled'
      short_name='OtherHouses'

      {...props}
    >
      <path d="M4 21V11.625L2.2 13L1 11.4L12 3L23 11.4L21.8 12.975L20 11.625V21ZM8 15Q8.425 15 8.713 14.712Q9 14.425 9 14Q9 13.575 8.713 13.287Q8.425 13 8 13Q7.575 13 7.287 13.287Q7 13.575 7 14Q7 14.425 7.287 14.712Q7.575 15 8 15ZM12 15Q12.425 15 12.713 14.712Q13 14.425 13 14Q13 13.575 12.713 13.287Q12.425 13 12 13Q11.575 13 11.288 13.287Q11 13.575 11 14Q11 14.425 11.288 14.712Q11.575 15 12 15ZM16 15Q16.425 15 16.712 14.712Q17 14.425 17 14Q17 13.575 16.712 13.287Q16.425 13 16 13Q15.575 13 15.288 13.287Q15 13.575 15 14Q15 14.425 15.288 14.712Q15.575 15 16 15Z"/>
    </Icon>
  );
});

IconMaterialOtherHousesSharpFilled.displayName = 'AmauiIconMaterialOtherHousesSharpFilled';

export default IconMaterialOtherHousesSharpFilled;
