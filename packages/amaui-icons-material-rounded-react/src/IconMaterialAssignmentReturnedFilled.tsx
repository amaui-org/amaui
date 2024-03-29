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
      <path d="M11.3 15.3q.275.275.7.275.425 0 .7-.275l2.6-2.6q.275-.275.275-.7 0-.425-.275-.7-.275-.275-.687-.288-.413-.012-.713.263l-.9.875V9q0-.425-.287-.713Q12.425 8 12 8t-.712.287Q11 8.575 11 9v3.15l-.9-.875q-.3-.275-.713-.263-.412.013-.687.288-.275.275-.275.7 0 .425.275.7ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H19q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm7-16.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialAssignmentReturnedFilled.displayName = 'AmauiIconMaterialAssignmentReturnedFilled';

export default IconMaterialAssignmentReturnedFilled;
