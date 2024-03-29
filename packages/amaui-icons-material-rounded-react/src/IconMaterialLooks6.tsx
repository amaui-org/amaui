import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks6 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks6'

      short_name='Looks6'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 11V9h2.025q.425 0 .7-.288Q14 8.425 14 8t-.287-.713Q13.425 7 13 7h-2q-.825 0-1.412.587Q9 8.175 9 9v6q0 .825.588 1.413Q10.175 17 11 17h2q.825 0 1.413-.587Q15 15.825 15 15v-2q0-.825-.587-1.413Q13.825 11 13 11Zm0 2h2v2h-2Zm-6 8q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterialLooks6.displayName = 'AmauiIconMaterialLooks6';

export default IconMaterialLooks6;
