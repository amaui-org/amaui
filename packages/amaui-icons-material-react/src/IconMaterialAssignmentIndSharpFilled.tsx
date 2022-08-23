import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssignmentIndSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentIndSharpFilled'
      short_name='AssignmentInd'

      {...props}
    >
      <path d="M3 21V3H9.2Q9.55 2.1 10.3 1.55Q11.05 1 12 1Q12.95 1 13.7 1.55Q14.45 2.1 14.8 3H21V21ZM12 4.25Q12.325 4.25 12.538 4.037Q12.75 3.825 12.75 3.5Q12.75 3.175 12.538 2.962Q12.325 2.75 12 2.75Q11.675 2.75 11.463 2.962Q11.25 3.175 11.25 3.5Q11.25 3.825 11.463 4.037Q11.675 4.25 12 4.25ZM12 13Q13.45 13 14.475 11.975Q15.5 10.95 15.5 9.5Q15.5 8.05 14.475 7.025Q13.45 6 12 6Q10.55 6 9.525 7.025Q8.5 8.05 8.5 9.5Q8.5 10.95 9.525 11.975Q10.55 13 12 13ZM5 19H19V17.85Q17.65 16.525 15.863 15.762Q14.075 15 12 15Q9.925 15 8.138 15.762Q6.35 16.525 5 17.85Z"/>
    </Icon>
  );
});

IconMaterialAssignmentIndSharpFilled.displayName = 'AmauiIconMaterialAssignmentIndSharpFilled';

export default IconMaterialAssignmentIndSharpFilled;
