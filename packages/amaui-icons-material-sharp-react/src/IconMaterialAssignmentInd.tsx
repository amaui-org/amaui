import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentInd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentInd'

      short_name='AssignmentInd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h6.2q.35-.9 1.1-1.45Q11.05 1 12 1t1.7.55q.75.55 1.1 1.45H21v18Zm9-16.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Zm-7 13.6q1.35-1.325 3.138-2.088Q9.925 15 12 15t3.863.762q1.787.763 3.137 2.088V5H5ZM12 13q1.45 0 2.475-1.025Q15.5 10.95 15.5 9.5q0-1.45-1.025-2.475Q13.45 6 12 6q-1.45 0-2.475 1.025Q8.5 8.05 8.5 9.5q0 1.45 1.025 2.475Q10.55 13 12 13Zm-5 6h10v-.25q-1.05-.875-2.325-1.312Q13.4 17 12 17t-2.675.438Q8.05 17.875 7 18.75Zm5-8q-.625 0-1.062-.438-.438-.437-.438-1.062t.438-1.062Q11.375 8 12 8t1.062.438q.438.437.438 1.062t-.438 1.062Q12.625 11 12 11Zm0-1.5Z"/>
    </Icon>
  );
});

IconMaterialAssignmentInd.displayName = 'AmauiIconMaterialAssignmentInd';

export default IconMaterialAssignmentInd;
