import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkunreadMailboxRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailboxRoundedFilled'
      short_name='MarkunreadMailbox'

      {...props}
    >
      <path d="M4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V10Q2 9.175 2.588 8.587Q3.175 8 4 8H6V3Q6 2.575 6.287 2.287Q6.575 2 7 2H13Q13.425 2 13.713 2.287Q14 2.575 14 3V5Q14 5.425 13.713 5.713Q13.425 6 13 6H8V13Q8 13.425 8.288 13.712Q8.575 14 9 14Q9.425 14 9.713 13.712Q10 13.425 10 13V8H20Q20.825 8 21.413 8.587Q22 9.175 22 10V20Q22 20.825 21.413 21.413Q20.825 22 20 22Z"/>
    </Icon>
  );
});

IconMaterialMarkunreadMailboxRoundedFilled.displayName = 'AmauiIconMaterialMarkunreadMailboxRoundedFilled';

export default IconMaterialMarkunreadMailboxRoundedFilled;
