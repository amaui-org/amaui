import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentTurnedIn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentTurnedIn'

      short_name='AssignmentTurnedIn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.6 13.25 8.45 11.1q-.275-.275-.7-.275-.425 0-.7.275-.275.275-.275.7 0 .425.275.7l2.85 2.85q.3.3.7.3.4 0 .7-.3l5.65-5.65q.275-.275.275-.7 0-.425-.275-.7-.275-.275-.7-.275-.425 0-.7.275ZM5 19h14V5H5v14ZM5 5v14V5Zm0 16q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H19q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm7-16.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialAssignmentTurnedIn.displayName = 'AmauiIconMaterialAssignmentTurnedIn';

export default IconMaterialAssignmentTurnedIn;
