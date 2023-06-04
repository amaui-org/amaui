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
      <path d="m10.55 14.2-2.6-2.6q-.125-.125-.25-.125t-.25.125q-.125.125-.125.25t.125.25l2.575 2.575q.225.225.525.225.3 0 .525-.225L16.5 9.25q.125-.125.125-.25t-.125-.25q-.125-.125-.25-.125T16 8.75ZM5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h4.85q-.275-.725.15-1.363.425-.637 1.225-.637.775 0 1.2.637.425.638.125 1.363h4.85q.625 0 1.063.437.437.438.437 1.063v12.4q0 .625-.437 1.062-.438.438-1.063.438ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialAssignmentTurnedInW100Filled.displayName = 'AmauiIconMaterialAssignmentTurnedInW100Filled';

export default IconMaterialAssignmentTurnedInW100Filled;
