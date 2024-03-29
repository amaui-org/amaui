import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks5 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks5'

      short_name='Looks5'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 17h3q.825 0 1.413-.587Q15 15.825 15 15v-2q0-.825-.587-1.413Q13.825 11 13 11h-2V9h3.025q.425 0 .7-.288Q15 8.425 15 8t-.287-.713Q14.425 7 14 7h-4q-.425 0-.712.287Q9 7.575 9 8v4q0 .425.288.712Q9.575 13 10 13h3v2H9.975q-.425 0-.7.287Q9 15.575 9 16t.288.712Q9.575 17 10 17Zm-5 4q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterialLooks5.displayName = 'AmauiIconMaterialLooks5';

export default IconMaterialLooks5;
