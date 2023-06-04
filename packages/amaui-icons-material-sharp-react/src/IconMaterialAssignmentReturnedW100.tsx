import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentReturnedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentReturnedW100'

      short_name='AssignmentReturned'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 15.1 3.1-3.1-.5-.5-2.25 2.2V8.9h-.7v4.8L9.4 11.5l-.5.5ZM5 19h14V5H5Zm-.7.7V4.3h6.35q-.275-.725.15-1.363.425-.637 1.225-.637.775 0 1.2.637.425.638.125 1.363h6.35v15.4ZM12 4.5q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538Q12.325 3 12 3q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterialAssignmentReturnedW100.displayName = 'AmauiIconMaterialAssignmentReturnedW100';

export default IconMaterialAssignmentReturnedW100;
