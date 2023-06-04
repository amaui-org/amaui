import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentTurnedInW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentTurnedInW100Filled'

      short_name='AssignmentTurnedIn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.55 15.2 6.2-6.2-.5-.5-5.7 5.7-2.85-2.85-.5.5ZM4.3 19.7V4.3h6.35q-.275-.725.15-1.363.425-.637 1.225-.637.775 0 1.2.637.425.638.125 1.363h6.35v15.4ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialAssignmentTurnedInW100Filled.displayName = 'AmauiIconMaterialAssignmentTurnedInW100Filled';

export default IconMaterialAssignmentTurnedInW100Filled;
