import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentIndFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentIndFilled'

      short_name='AssignmentInd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h6.2q.35-.9 1.1-1.45Q11.05 1 12 1t1.7.55q.75.55 1.1 1.45H21v18Zm9-16.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM12 13q1.45 0 2.475-1.025Q15.5 10.95 15.5 9.5q0-1.45-1.025-2.475Q13.45 6 12 6q-1.45 0-2.475 1.025Q8.5 8.05 8.5 9.5q0 1.45 1.025 2.475Q10.55 13 12 13Zm-7 6h14v-1.15q-1.35-1.325-3.137-2.088Q14.075 15 12 15t-3.862.762Q6.35 16.525 5 17.85Z"/>
    </Icon>
  );
});

IconMaterialAssignmentIndFilled.displayName = 'AmauiIconMaterialAssignmentIndFilled';

export default IconMaterialAssignmentIndFilled;
