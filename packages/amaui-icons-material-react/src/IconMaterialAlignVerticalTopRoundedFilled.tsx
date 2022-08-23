import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignVerticalTopRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalTopRoundedFilled'
      short_name='AlignVerticalTop'

      {...props}
    >
      <path d="M3 4Q2.575 4 2.288 3.712Q2 3.425 2 3Q2 2.575 2.288 2.287Q2.575 2 3 2H21Q21.425 2 21.712 2.287Q22 2.575 22 3Q22 3.425 21.712 3.712Q21.425 4 21 4ZM8.5 22Q7.875 22 7.438 21.562Q7 21.125 7 20.5V7.5Q7 6.875 7.438 6.438Q7.875 6 8.5 6Q9.125 6 9.562 6.438Q10 6.875 10 7.5V20.5Q10 21.125 9.562 21.562Q9.125 22 8.5 22ZM15.5 16Q14.875 16 14.438 15.562Q14 15.125 14 14.5V7.5Q14 6.875 14.438 6.438Q14.875 6 15.5 6Q16.125 6 16.562 6.438Q17 6.875 17 7.5V14.5Q17 15.125 16.562 15.562Q16.125 16 15.5 16Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalTopRoundedFilled.displayName = 'AmauiIconMaterialAlignVerticalTopRoundedFilled';

export default IconMaterialAlignVerticalTopRoundedFilled;
