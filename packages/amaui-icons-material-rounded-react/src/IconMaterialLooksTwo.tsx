import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooksTwo = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksTwo'

      short_name='LooksTwo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 17h4.025q.425 0 .7-.288Q15 16.425 15 16t-.287-.713Q14.425 15 14 15h-3v-2h2q.825 0 1.413-.588Q15 11.825 15 11V9q0-.825-.587-1.413Q13.825 7 13 7H9.975q-.425 0-.7.287Q9 7.575 9 8t.288.712Q9.575 9 10 9h3v2h-2q-.825 0-1.412.587Q9 12.175 9 13v3q0 .425.288.712Q9.575 17 10 17Zm-5 4q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterialLooksTwo.displayName = 'AmauiIconMaterialLooksTwo';

export default IconMaterialLooksTwo;
