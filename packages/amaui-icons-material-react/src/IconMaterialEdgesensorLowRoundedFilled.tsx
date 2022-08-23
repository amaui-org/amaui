import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEdgesensorLowRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorLowRoundedFilled'
      short_name='EdgesensorLow'

      {...props}
    >
      <path d="M8 22Q7.175 22 6.588 21.413Q6 20.825 6 20V4Q6 3.175 6.588 2.587Q7.175 2 8 2H16Q16.825 2 17.413 2.587Q18 3.175 18 4V20Q18 20.825 17.413 21.413Q16.825 22 16 22ZM8 17H16V7H8ZM3 14Q2.575 14 2.288 13.712Q2 13.425 2 13V8Q2 7.575 2.288 7.287Q2.575 7 3 7Q3.425 7 3.713 7.287Q4 7.575 4 8V13Q4 13.425 3.713 13.712Q3.425 14 3 14ZM21 17Q20.575 17 20.288 16.712Q20 16.425 20 16V11Q20 10.575 20.288 10.287Q20.575 10 21 10Q21.425 10 21.712 10.287Q22 10.575 22 11V16Q22 16.425 21.712 16.712Q21.425 17 21 17Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorLowRoundedFilled.displayName = 'AmauiIconMaterialEdgesensorLowRoundedFilled';

export default IconMaterialEdgesensorLowRoundedFilled;
