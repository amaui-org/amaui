import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentW100Filled'

      short_name='Assignment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 16.05h5.7v-.7h-5.7Zm0-3.7h8.7v-.7h-8.7Zm0-3.7h8.7v-.7h-8.7ZM4.3 19.7V4.3h6.35q-.275-.725.15-1.363.425-.637 1.225-.637.775 0 1.2.637.425.638.125 1.363h6.35v15.4ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialAssignmentW100Filled.displayName = 'AmauiIconMaterialAssignmentW100Filled';

export default IconMaterialAssignmentW100Filled;
