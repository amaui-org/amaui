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
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4.2q.35-.9 1.1-1.45Q11.05 1 12 1t1.7.55q.75.55 1.1 1.45H19q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm7-16.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Zm-7 13.6q1.35-1.325 3.138-2.088Q9.925 15 12 15t3.863.762q1.787.763 3.137 2.088V5H5ZM12 13q-1.45 0-2.475-1.025Q8.5 10.95 8.5 9.5q0-1.45 1.025-2.475Q10.55 6 12 6q1.45 0 2.475 1.025Q15.5 8.05 15.5 9.5q0 1.45-1.025 2.475Q13.45 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialAssignmentIndFilled.displayName = 'AmauiIconMaterialAssignmentIndFilled';

export default IconMaterialAssignmentIndFilled;
