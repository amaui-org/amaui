import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignVerticalBottomRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalBottomRounded'
      short_name='AlignVerticalBottom'

      {...props}
    >
      <path d="M3 22Q2.575 22 2.288 21.712Q2 21.425 2 21Q2 20.575 2.288 20.288Q2.575 20 3 20H21Q21.425 20 21.712 20.288Q22 20.575 22 21Q22 21.425 21.712 21.712Q21.425 22 21 22ZM8.5 18Q7.875 18 7.438 17.562Q7 17.125 7 16.5V3.5Q7 2.875 7.438 2.438Q7.875 2 8.5 2Q9.125 2 9.562 2.438Q10 2.875 10 3.5V16.5Q10 17.125 9.562 17.562Q9.125 18 8.5 18ZM15.5 18Q14.875 18 14.438 17.562Q14 17.125 14 16.5V9.5Q14 8.875 14.438 8.438Q14.875 8 15.5 8Q16.125 8 16.562 8.438Q17 8.875 17 9.5V16.5Q17 17.125 16.562 17.562Q16.125 18 15.5 18Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalBottomRounded.displayName = 'AmauiIconMaterialAlignVerticalBottomRounded';

export default IconMaterialAlignVerticalBottomRounded;
