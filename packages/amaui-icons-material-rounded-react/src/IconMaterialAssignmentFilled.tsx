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
      <path d="M8 17h5q.425 0 .713-.288Q14 16.425 14 16t-.287-.713Q13.425 15 13 15H8q-.425 0-.713.287Q7 15.575 7 16t.287.712Q7.575 17 8 17Zm0-4h8q.425 0 .712-.288Q17 12.425 17 12t-.288-.713Q16.425 11 16 11H8q-.425 0-.713.287Q7 11.575 7 12t.287.712Q7.575 13 8 13Zm0-4h8q.425 0 .712-.288Q17 8.425 17 8t-.288-.713Q16.425 7 16 7H8q-.425 0-.713.287Q7 7.575 7 8t.287.712Q7.575 9 8 9ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H19q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm7-16.75q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialAssignmentFilled.displayName = 'AmauiIconMaterialAssignmentFilled';

export default IconMaterialAssignmentFilled;
