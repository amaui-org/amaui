import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentIndW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentIndW100Filled'

      short_name='AssignmentInd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h6.35q-.25-.75.175-1.375T12 2.3q.75 0 1.175.625.425.625.175 1.375h6.35v15.4ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Zm0 8.6q1.2 0 2.025-.825t.825-2.025q0-1.2-.825-2.025T12 7.4q-1.2 0-2.025.825T9.15 10.25q0 1.2.825 2.025T12 13.1ZM5 19h14v-.65q-1.35-1.325-3.137-2.088Q14.075 15.5 12 15.5t-3.862.762Q6.35 17.025 5 18.35Z"/>
    </Icon>
  );
});

IconMaterialAssignmentIndW100Filled.displayName = 'AmauiIconMaterialAssignmentIndW100Filled';

export default IconMaterialAssignmentIndW100Filled;
