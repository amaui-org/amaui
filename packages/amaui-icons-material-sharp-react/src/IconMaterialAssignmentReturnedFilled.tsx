import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentReturnedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentReturnedFilled'

      short_name='AssignmentReturned'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 16 4-4-1.4-1.4-1.6 1.55V8h-2v4.15L9.4 10.6 8 12Zm-9 5V3h6.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H21v18Zm9-16.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialAssignmentReturnedFilled.displayName = 'AmauiIconMaterialAssignmentReturnedFilled';

export default IconMaterialAssignmentReturnedFilled;
