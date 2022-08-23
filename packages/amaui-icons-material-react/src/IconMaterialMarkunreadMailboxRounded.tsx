import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkunreadMailboxRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkunreadMailboxRounded'
      short_name='MarkunreadMailbox'

      {...props}
    >
      <path d="M4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V10Q2 9.175 2.588 8.587Q3.175 8 4 8H6V3Q6 2.575 6.287 2.287Q6.575 2 7 2H13Q13.425 2 13.713 2.287Q14 2.575 14 3V5Q14 5.425 13.713 5.713Q13.425 6 13 6H8V13Q8 13.425 7.713 13.712Q7.425 14 7 14Q6.575 14 6.287 13.712Q6 13.425 6 13V10H4Q4 10 4 10Q4 10 4 10V20Q4 20 4 20Q4 20 4 20H20Q20 20 20 20Q20 20 20 20V10Q20 10 20 10Q20 10 20 10H10V8H20Q20.825 8 21.413 8.587Q22 9.175 22 10V20Q22 20.825 21.413 21.413Q20.825 22 20 22ZM4 10V13Q4 13.425 4 13.712Q4 14 4 14Q4 14 4 13.712Q4 13.425 4 13V10Q4 10 4 10Q4 10 4 10V20Q4 20 4 20Q4 20 4 20Q4 20 4 20Q4 20 4 20V10Q4 10 4 10Q4 10 4 10Z"/>
    </Icon>
  );
});

IconMaterialMarkunreadMailboxRounded.displayName = 'AmauiIconMaterialMarkunreadMailboxRounded';

export default IconMaterialMarkunreadMailboxRounded;
