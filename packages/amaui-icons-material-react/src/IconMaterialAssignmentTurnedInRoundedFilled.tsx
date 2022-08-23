import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssignmentTurnedInRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentTurnedInRoundedFilled'
      short_name='AssignmentTurnedIn'

      {...props}
    >
      <path d="M10.6 13.25 8.45 11.1Q8.175 10.825 7.75 10.825Q7.325 10.825 7.05 11.1Q6.775 11.375 6.775 11.8Q6.775 12.225 7.05 12.5L9.9 15.35Q10.175 15.625 10.6 15.625Q11.025 15.625 11.3 15.35L16.95 9.7Q17.225 9.425 17.225 9Q17.225 8.575 16.95 8.3Q16.675 8.025 16.25 8.025Q15.825 8.025 15.55 8.3ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H9.2Q9.525 2.1 10.288 1.55Q11.05 1 12 1Q12.95 1 13.713 1.55Q14.475 2.1 14.8 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM12 4.25Q12.325 4.25 12.538 4.037Q12.75 3.825 12.75 3.5Q12.75 3.175 12.538 2.962Q12.325 2.75 12 2.75Q11.675 2.75 11.463 2.962Q11.25 3.175 11.25 3.5Q11.25 3.825 11.463 4.037Q11.675 4.25 12 4.25Z"/>
    </Icon>
  );
});

IconMaterialAssignmentTurnedInRoundedFilled.displayName = 'AmauiIconMaterialAssignmentTurnedInRoundedFilled';

export default IconMaterialAssignmentTurnedInRoundedFilled;
