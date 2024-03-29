import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPendingActionsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PendingActionsFilled'

      short_name='PendingActions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 22q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12t3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22Zm1.325-2.975q.15.15.35.15.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35L17.5 16.8v-2.3q0-.2-.15-.35Q17.2 14 17 14q-.2 0-.35.15-.15.15-.15.35v2.275q0 .2.075.388.075.187.225.337ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4.175q.275-.875 1.075-1.438Q11.05 1 12 1q1 0 1.788.562.787.563 1.062 1.438H19q.825 0 1.413.587Q21 4.175 21 5v6.25q-.45-.325-.95-.55-.5-.225-1.05-.4V5h-2v1q0 .825-.587 1.412Q15.825 8 15 8H9q-.825 0-1.412-.588Q7 6.825 7 6V5H5v14h5.3q.175.55.4 1.05.225.5.55.95Zm7-16q.425 0 .713-.288Q13 4.425 13 4t-.287-.713Q12.425 3 12 3t-.712.287Q11 3.575 11 4t.288.712Q11.575 5 12 5Z"/>
    </Icon>
  );
});

IconMaterialPendingActionsFilled.displayName = 'AmauiIconMaterialPendingActionsFilled';

export default IconMaterialPendingActionsFilled;
