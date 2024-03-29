import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPendingActions = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PendingActions'

      short_name='PendingActions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 22q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12t3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22Zm1.675-2.625.7-.7L17.5 16.8V14h-1v3.2ZM3 21V3h6.175q.275-.875 1.075-1.438Q11.05 1 12 1q1 0 1.788.562.787.563 1.062 1.438H21v8.25q-.45-.325-.95-.55-.5-.225-1.05-.4V5h-2v3H7V5H5v14h5.3q.175.55.4 1.05.225.5.55.95Zm9-16q.425 0 .713-.288Q13 4.425 13 4t-.287-.713Q12.425 3 12 3t-.712.287Q11 3.575 11 4t.288.712Q11.575 5 12 5Z"/>
    </Icon>
  );
});

IconMaterialPendingActions.displayName = 'AmauiIconMaterialPendingActions';

export default IconMaterialPendingActions;
