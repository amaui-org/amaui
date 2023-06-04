import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks4Filled'

      short_name='Looks4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 17q.425 0 .713-.288Q15 16.425 15 16V7.975q0-.425-.287-.7Q14.425 7 14 7t-.712.287Q13 7.575 13 8v3h-2V7.975q0-.425-.287-.7Q10.425 7 10 7t-.712.287Q9 7.575 9 8v4q0 .425.288.712Q9.575 13 10 13h3v3.025q0 .425.288.7.287.275.712.275Zm-9 4q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialLooks4Filled.displayName = 'AmauiIconMaterialLooks4Filled';

export default IconMaterialLooks4Filled;
