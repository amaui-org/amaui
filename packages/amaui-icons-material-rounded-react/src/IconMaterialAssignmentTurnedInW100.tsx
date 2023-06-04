import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentTurnedInW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentTurnedInW100'

      short_name='AssignmentTurnedIn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.55 14.2-2.6-2.6q-.1-.1-.237-.112-.138-.013-.263.112t-.125.25q0 .125.125.25l2.575 2.575q.225.225.525.225.3 0 .525-.225L16.5 9.25q.1-.1.113-.238.012-.137-.113-.262t-.25-.125q-.125 0-.25.125ZM5.8 19h12.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q18.5 5 18.2 5H5.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25ZM5 5V19 5Zm.8 14.7q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h4.85q-.275-.725.15-1.363.425-.637 1.2-.637.8 0 1.225.637.425.638.125 1.363h4.85q.625 0 1.063.437.437.438.437 1.063v12.4q0 .625-.437 1.062-.438.438-1.063.438ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialAssignmentTurnedInW100.displayName = 'AmauiIconMaterialAssignmentTurnedInW100';

export default IconMaterialAssignmentTurnedInW100;
