import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssignmentLateSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentLateSharp'
      short_name='AssignmentLate'

      {...props}
    >
      <path d="M12 17Q12.425 17 12.713 16.712Q13 16.425 13 16Q13 15.575 12.713 15.287Q12.425 15 12 15Q11.575 15 11.288 15.287Q11 15.575 11 16Q11 16.425 11.288 16.712Q11.575 17 12 17ZM11 13H13V7H11ZM3 21V3H9.2Q9.525 2.1 10.288 1.55Q11.05 1 12 1Q12.95 1 13.713 1.55Q14.475 2.1 14.8 3H21V21ZM12 4.25Q12.325 4.25 12.538 4.037Q12.75 3.825 12.75 3.5Q12.75 3.175 12.538 2.962Q12.325 2.75 12 2.75Q11.675 2.75 11.463 2.962Q11.25 3.175 11.25 3.5Q11.25 3.825 11.463 4.037Q11.675 4.25 12 4.25ZM19 19V5H5V19ZM5 5V19Z"/>
    </Icon>
  );
});

IconMaterialAssignmentLateSharp.displayName = 'AmauiIconMaterialAssignmentLateSharp';

export default IconMaterialAssignmentLateSharp;
