import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentReturned = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentReturned'

      short_name='AssignmentReturned'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 16 4-4-1.4-1.4-1.6 1.55V8h-2v4.15L9.4 10.6 8 12Zm-7 3h14V5H5Zm-2 2V3h6.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H21v18Zm9-16.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM5 5v14Z"/>
    </Icon>
  );
});

IconMaterialAssignmentReturned.displayName = 'AmauiIconMaterialAssignmentReturned';

export default IconMaterialAssignmentReturned;
