import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEdgesensorLowRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorLowRounded'
      short_name='EdgesensorLow'

      {...props}
    >
      <path d="M8 22Q7.175 22 6.588 21.413Q6 20.825 6 20V4Q6 3.175 6.588 2.587Q7.175 2 8 2H16Q16.825 2 17.413 2.587Q18 3.175 18 4V20Q18 20.825 17.413 21.413Q16.825 22 16 22ZM16 7H8V17H16ZM8 5H16V4Q16 4 16 4Q16 4 16 4H8Q8 4 8 4Q8 4 8 4ZM16 19H8V20Q8 20 8 20Q8 20 8 20H16Q16 20 16 20Q16 20 16 20ZM3 14Q2.575 14 2.288 13.712Q2 13.425 2 13V8Q2 7.575 2.288 7.287Q2.575 7 3 7Q3.425 7 3.713 7.287Q4 7.575 4 8V13Q4 13.425 3.713 13.712Q3.425 14 3 14ZM21 17Q20.575 17 20.288 16.712Q20 16.425 20 16V11Q20 10.575 20.288 10.287Q20.575 10 21 10Q21.425 10 21.712 10.287Q22 10.575 22 11V16Q22 16.425 21.712 16.712Q21.425 17 21 17ZM8 4Q8 4 8 4Q8 4 8 4V5V4Q8 4 8 4Q8 4 8 4ZM8 20Q8 20 8 20Q8 20 8 20V19V20Q8 20 8 20Q8 20 8 20Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorLowRounded.displayName = 'AmauiIconMaterialEdgesensorLowRounded';

export default IconMaterialEdgesensorLowRounded;
