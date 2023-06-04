import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentReturnedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentReturnedW100Filled'

      short_name='AssignmentReturned'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.475 14.575q.225.225.525.225.3 0 .525-.225l2.325-2.325q.125-.125.125-.25t-.125-.25q-.1-.1-.237-.1-.138 0-.263.1l-2 1.95V9.25q0-.15-.1-.25T12 8.9q-.15 0-.25.1t-.1.25v4.45l-2-1.95q-.125-.1-.263-.1-.137 0-.237.1-.125.125-.125.25t.125.25ZM5.8 19.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h4.85q-.275-.725.15-1.363.425-.637 1.225-.637.775 0 1.2.637.425.638.125 1.363h4.85q.625 0 1.063.437.437.438.437 1.063v12.4q0 .625-.437 1.062-.438.438-1.063.438ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialAssignmentReturnedW100Filled.displayName = 'AmauiIconMaterialAssignmentReturnedW100Filled';

export default IconMaterialAssignmentReturnedW100Filled;
