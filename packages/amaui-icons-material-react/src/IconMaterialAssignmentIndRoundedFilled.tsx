import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssignmentIndRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentIndRoundedFilled'
      short_name='AssignmentInd'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H9.2Q9.55 2.1 10.3 1.55Q11.05 1 12 1Q12.95 1 13.7 1.55Q14.45 2.1 14.8 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM12 4.25Q12.325 4.25 12.538 4.037Q12.75 3.825 12.75 3.5Q12.75 3.175 12.538 2.962Q12.325 2.75 12 2.75Q11.675 2.75 11.463 2.962Q11.25 3.175 11.25 3.5Q11.25 3.825 11.463 4.037Q11.675 4.25 12 4.25ZM5 17.85Q6.35 16.525 8.138 15.762Q9.925 15 12 15Q14.075 15 15.863 15.762Q17.65 16.525 19 17.85V5Q19 5 19 5Q19 5 19 5H5Q5 5 5 5Q5 5 5 5ZM12 13Q10.55 13 9.525 11.975Q8.5 10.95 8.5 9.5Q8.5 8.05 9.525 7.025Q10.55 6 12 6Q13.45 6 14.475 7.025Q15.5 8.05 15.5 9.5Q15.5 10.95 14.475 11.975Q13.45 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialAssignmentIndRoundedFilled.displayName = 'AmauiIconMaterialAssignmentIndRoundedFilled';

export default IconMaterialAssignmentIndRoundedFilled;
