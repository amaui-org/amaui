import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentFilled'

      short_name='Assignment'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17h7v-2H7Zm0-4h10v-2H7Zm0-4h10V7H7ZM3 21V3h6.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H21v18Zm9-16.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialAssignmentFilled.displayName = 'AmauiIconMaterialAssignmentFilled';

export default IconMaterialAssignmentFilled;
