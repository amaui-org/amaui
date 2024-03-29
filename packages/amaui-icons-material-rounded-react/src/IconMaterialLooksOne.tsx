import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooksOne = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LooksOne'

      short_name='LooksOne'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 17q.425 0 .713-.288Q14 16.425 14 16V8q0-.425-.287-.713Q13.425 7 13 7h-2.025q-.425 0-.7.287Q10 7.575 10 8t.288.712Q10.575 9 11 9h1v7.025q0 .425.288.7.287.275.712.275Zm-8 4q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterialLooksOne.displayName = 'AmauiIconMaterialLooksOne';

export default IconMaterialLooksOne;
