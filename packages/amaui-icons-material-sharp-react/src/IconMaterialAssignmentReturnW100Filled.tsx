import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentReturnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentReturnW100Filled'

      short_name='AssignmentReturn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15.1.5-.5-2.25-2.25h4.85v-.7h-4.85L12.5 9.4l-.5-.5L8.9 12Zm-7.7 4.6V4.3h6.35q-.275-.725.15-1.363.425-.637 1.225-.637.775 0 1.2.637.425.638.125 1.363h6.35v15.4ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialAssignmentReturnW100Filled.displayName = 'AmauiIconMaterialAssignmentReturnW100Filled';

export default IconMaterialAssignmentReturnW100Filled;
