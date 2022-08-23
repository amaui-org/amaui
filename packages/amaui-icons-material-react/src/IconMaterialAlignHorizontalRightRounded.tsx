import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalRightRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalRightRounded'
      short_name='AlignHorizontalRight'

      {...props}
    >
      <path d="M21 22Q20.575 22 20.288 21.712Q20 21.425 20 21V3Q20 2.575 20.288 2.287Q20.575 2 21 2Q21.425 2 21.712 2.287Q22 2.575 22 3V21Q22 21.425 21.712 21.712Q21.425 22 21 22ZM3.5 10Q2.875 10 2.438 9.562Q2 9.125 2 8.5Q2 7.875 2.438 7.438Q2.875 7 3.5 7H16.5Q17.125 7 17.562 7.438Q18 7.875 18 8.5Q18 9.125 17.562 9.562Q17.125 10 16.5 10ZM9.5 17Q8.875 17 8.438 16.562Q8 16.125 8 15.5Q8 14.875 8.438 14.438Q8.875 14 9.5 14H16.5Q17.125 14 17.562 14.438Q18 14.875 18 15.5Q18 16.125 17.562 16.562Q17.125 17 16.5 17Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalRightRounded.displayName = 'AmauiIconMaterialAlignHorizontalRightRounded';

export default IconMaterialAlignHorizontalRightRounded;
