import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalLeftRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalLeftRoundedFilled'
      short_name='AlignHorizontalLeft'

      {...props}
    >
      <path d="M3 22Q2.575 22 2.288 21.712Q2 21.425 2 21V3Q2 2.575 2.288 2.287Q2.575 2 3 2Q3.425 2 3.713 2.287Q4 2.575 4 3V21Q4 21.425 3.713 21.712Q3.425 22 3 22ZM7.5 10Q6.875 10 6.438 9.562Q6 9.125 6 8.5Q6 7.875 6.438 7.438Q6.875 7 7.5 7H20.5Q21.125 7 21.562 7.438Q22 7.875 22 8.5Q22 9.125 21.562 9.562Q21.125 10 20.5 10ZM7.5 17Q6.875 17 6.438 16.562Q6 16.125 6 15.5Q6 14.875 6.438 14.438Q6.875 14 7.5 14H14.5Q15.125 14 15.562 14.438Q16 14.875 16 15.5Q16 16.125 15.562 16.562Q15.125 17 14.5 17Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalLeftRoundedFilled.displayName = 'AmauiIconMaterialAlignHorizontalLeftRoundedFilled';

export default IconMaterialAlignHorizontalLeftRoundedFilled;
