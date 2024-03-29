import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBroadcastOnPersonalFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BroadcastOnPersonalFilled'

      short_name='BroadcastOnPersonal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V8l8-6 6.75 5.025q-3.225.1-5.475 2.4-2.25 2.3-2.25 5.575 0 1.375.45 2.65T10.8 20Zm10.4-.4q-.875-.95-1.388-2.138Q10.5 16.275 10.5 15q0-2.725 1.9-4.613Q14.3 8.5 17 8.5q2.725 0 4.613 1.887Q23.5 12.275 23.5 15q0 1.275-.475 2.462-.475 1.188-1.4 2.113L20.55 18.5q.725-.725 1.088-1.625Q22 15.975 22 15q0-2.1-1.45-3.55Q19.1 10 17 10q-2.075 0-3.537 1.45Q12 12.9 12 15q0 .975.387 1.887.388.913 1.088 1.638Zm1.775-1.775q-.55-.575-.863-1.3Q13 15.8 13 15q0-1.675 1.175-2.838Q15.35 11 17 11q1.675 0 2.837 1.162Q21 13.325 21 15q0 .775-.288 1.5-.287.725-.862 1.3l-1.075-1.05q.35-.35.537-.8.188-.45.188-.95 0-1.05-.725-1.775Q18.05 12.5 17 12.5q-1.05 0-1.775.725Q14.5 13.95 14.5 15q0 .5.2.95.2.45.55.8ZM16.25 21v-5q-.225-.2-.362-.463-.138-.262-.138-.537 0-.525.375-.887.375-.363.875-.363.525 0 .888.363.362.362.362.887 0 .275-.112.55-.113.275-.388.45v5Z"/>
    </Icon>
  );
});

IconMaterialBroadcastOnPersonalFilled.displayName = 'AmauiIconMaterialBroadcastOnPersonalFilled';

export default IconMaterialBroadcastOnPersonalFilled;
