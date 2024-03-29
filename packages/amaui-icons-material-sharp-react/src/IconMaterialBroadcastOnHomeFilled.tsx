import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBroadcastOnHomeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BroadcastOnHomeFilled'

      short_name='BroadcastOnHome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M22 7.775q-.45-.35-.95-.65-.5-.3-1.05-.525V4H4V2h18ZM2 18V7h7v11Zm14.25 2v-5q-.225-.2-.362-.463-.138-.262-.138-.537 0-.525.375-.887.375-.363.875-.363.525 0 .888.363.362.362.362.887 0 .275-.112.55-.113.275-.388.45v5Zm-2.075-3.175q-.55-.575-.863-1.3Q13 14.8 13 14q0-1.675 1.175-2.838Q15.35 10 17 10q1.675 0 2.837 1.162Q21 12.325 21 14q0 .775-.288 1.5-.287.725-.862 1.3l-1.075-1.05q.35-.35.537-.8.188-.45.188-.95 0-1.05-.725-1.775Q18.05 11.5 17 11.5q-1.05 0-1.775.725Q14.5 12.95 14.5 14q0 .5.2.95.2.45.55.8ZM12.4 18.6q-.875-.95-1.388-2.138Q10.5 15.275 10.5 14q0-2.725 1.9-4.613Q14.3 7.5 17 7.5q2.725 0 4.613 1.887Q23.5 11.275 23.5 14q0 1.275-.475 2.462-.475 1.188-1.4 2.113L20.55 17.5q.725-.725 1.088-1.625Q22 14.975 22 14q0-2.1-1.45-3.55Q19.1 9 17 9q-2.075 0-3.537 1.45Q12 11.9 12 14q0 .975.387 1.887.388.913 1.088 1.638Z"/>
    </Icon>
  );
});

IconMaterialBroadcastOnHomeFilled.displayName = 'AmauiIconMaterialBroadcastOnHomeFilled';

export default IconMaterialBroadcastOnHomeFilled;
