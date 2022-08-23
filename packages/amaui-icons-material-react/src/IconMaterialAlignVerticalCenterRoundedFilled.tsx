import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignVerticalCenterRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalCenterRoundedFilled'
      short_name='AlignVerticalCenter'

      {...props}
    >
      <path d="M8.5 21Q7.875 21 7.438 20.562Q7 20.125 7 19.5V13H3Q2.575 13 2.288 12.712Q2 12.425 2 12Q2 11.575 2.288 11.287Q2.575 11 3 11H7V4.5Q7 3.875 7.438 3.438Q7.875 3 8.5 3Q9.125 3 9.562 3.438Q10 3.875 10 4.5V11H14V7.5Q14 6.875 14.438 6.438Q14.875 6 15.5 6Q16.125 6 16.562 6.438Q17 6.875 17 7.5V11H21Q21.425 11 21.712 11.287Q22 11.575 22 12Q22 12.425 21.712 12.712Q21.425 13 21 13H17V16.5Q17 17.125 16.562 17.562Q16.125 18 15.5 18Q14.875 18 14.438 17.562Q14 17.125 14 16.5V13H10V19.5Q10 20.125 9.562 20.562Q9.125 21 8.5 21Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalCenterRoundedFilled.displayName = 'AmauiIconMaterialAlignVerticalCenterRoundedFilled';

export default IconMaterialAlignVerticalCenterRoundedFilled;
