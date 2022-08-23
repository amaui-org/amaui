import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOtherHousesSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OtherHousesSharp'
      short_name='OtherHouses'

      {...props}
    >
      <path d="M4 21V11.625L2.2 13L1 11.4L12 3L23 11.4L21.8 12.975L20 11.625V21ZM6 19H18V10.1L12 5.525L6 10.1ZM6 19H18H12H6ZM8 15Q7.575 15 7.287 14.712Q7 14.425 7 14Q7 13.575 7.287 13.287Q7.575 13 8 13Q8.425 13 8.713 13.287Q9 13.575 9 14Q9 14.425 8.713 14.712Q8.425 15 8 15ZM12 15Q11.575 15 11.288 14.712Q11 14.425 11 14Q11 13.575 11.288 13.287Q11.575 13 12 13Q12.425 13 12.713 13.287Q13 13.575 13 14Q13 14.425 12.713 14.712Q12.425 15 12 15ZM16 15Q15.575 15 15.288 14.712Q15 14.425 15 14Q15 13.575 15.288 13.287Q15.575 13 16 13Q16.425 13 16.712 13.287Q17 13.575 17 14Q17 14.425 16.712 14.712Q16.425 15 16 15Z"/>
    </Icon>
  );
});

IconMaterialOtherHousesSharp.displayName = 'AmauiIconMaterialOtherHousesSharp';

export default IconMaterialOtherHousesSharp;
