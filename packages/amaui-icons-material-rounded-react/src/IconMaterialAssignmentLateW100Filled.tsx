import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentLateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentLateW100Filled'

      short_name='AssignmentLate'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.35q.225 0 .363-.15.137-.15.137-.35 0-.225-.137-.362-.138-.138-.363-.138-.2 0-.35.138-.15.137-.15.362 0 .2.15.35.15.15.35.15Zm0-2.65q.15 0 .25-.1t.1-.25v-5.4q0-.15-.1-.25T12 7.6q-.15 0-.25.1t-.1.25v5.4q0 .15.1.25t.25.1Zm-6.2 6q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V5.8q0-.625.438-1.063Q5.175 4.3 5.8 4.3h4.85q-.275-.725.15-1.363.425-.637 1.225-.637.775 0 1.2.637.425.638.125 1.363h4.85q.625 0 1.063.437.437.438.437 1.063v12.4q0 .625-.437 1.062-.438.438-1.063.438ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialAssignmentLateW100Filled.displayName = 'AmauiIconMaterialAssignmentLateW100Filled';

export default IconMaterialAssignmentLateW100Filled;
