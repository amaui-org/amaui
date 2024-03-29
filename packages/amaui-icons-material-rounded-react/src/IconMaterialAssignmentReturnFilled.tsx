import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAssignmentReturnFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AssignmentReturnFilled'

      short_name='AssignmentReturn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.825 13H15q.425 0 .713-.288Q16 12.425 16 12t-.287-.713Q15.425 11 15 11h-3.175l.9-.9q.3-.275.287-.688Q13 9 12.7 8.7q-.275-.275-.7-.275-.425 0-.7.275l-2.6 2.6q-.275.275-.275.7 0 .425.275.7l2.6 2.6q.275.275.7.275.425 0 .7-.275.275-.275.275-.687 0-.413-.275-.713ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H19q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm7-16.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialAssignmentReturnFilled.displayName = 'AmauiIconMaterialAssignmentReturnFilled';

export default IconMaterialAssignmentReturnFilled;
