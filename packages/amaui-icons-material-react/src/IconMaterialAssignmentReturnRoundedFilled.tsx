import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssignmentReturnRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentReturnRoundedFilled'
      short_name='AssignmentReturn'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H9.2Q9.525 2.1 10.288 1.55Q11.05 1 12 1Q12.95 1 13.713 1.55Q14.475 2.1 14.8 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM12 4.25Q12.325 4.25 12.538 4.037Q12.75 3.825 12.75 3.5Q12.75 3.175 12.538 2.962Q12.325 2.75 12 2.75Q11.675 2.75 11.463 2.962Q11.25 3.175 11.25 3.5Q11.25 3.825 11.463 4.037Q11.675 4.25 12 4.25ZM11.825 13H15Q15.425 13 15.713 12.712Q16 12.425 16 12Q16 11.575 15.713 11.287Q15.425 11 15 11H11.825L12.725 10.1Q13.025 9.825 13.012 9.412Q13 9 12.7 8.7Q12.425 8.425 12 8.425Q11.575 8.425 11.3 8.7L8.7 11.3Q8.425 11.575 8.425 12Q8.425 12.425 8.7 12.7L11.3 15.3Q11.575 15.575 12 15.575Q12.425 15.575 12.7 15.3Q12.975 15.025 12.975 14.613Q12.975 14.2 12.7 13.9Z"/>
    </Icon>
  );
});

IconMaterialAssignmentReturnRoundedFilled.displayName = 'AmauiIconMaterialAssignmentReturnRoundedFilled';

export default IconMaterialAssignmentReturnRoundedFilled;
