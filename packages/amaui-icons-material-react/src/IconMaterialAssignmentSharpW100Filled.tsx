import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAssignmentSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentSharpW100Filled'
      short_name='Assignment'

      {...props}
    >
      <path d="M7.65 16.05H13.35V15.35H7.65ZM7.65 12.35H16.35V11.65H7.65ZM7.65 8.65H16.35V7.95H7.65ZM4.3 19.7V4.3H10.65Q10.375 3.575 10.8 2.937Q11.225 2.3 12.025 2.3Q12.8 2.3 13.225 2.937Q13.65 3.575 13.35 4.3H19.7V19.7ZM12 4.5Q12.325 4.5 12.538 4.287Q12.75 4.075 12.75 3.75Q12.75 3.425 12.538 3.212Q12.325 3 12 3Q11.675 3 11.463 3.212Q11.25 3.425 11.25 3.75Q11.25 4.075 11.463 4.287Q11.675 4.5 12 4.5Z"/>
    </Icon>
  );
});

IconMaterialAssignmentSharpW100Filled.displayName = 'AmauiIconMaterialAssignmentSharpW100Filled';

export default IconMaterialAssignmentSharpW100Filled;
