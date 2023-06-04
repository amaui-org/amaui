import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeW100Filled'

      short_name='AddHome'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 19.7q-1.55 0-2.625-1.075T14.3 16q0-1.55 1.075-2.625T18 12.3q1.55 0 2.625 1.075T21.7 16q0 1.55-1.075 2.625T18 19.7Zm-.35-.85h.7v-2.5h2.5v-.7h-2.5v-2.5h-.7v2.5h-2.5v.7h2.5ZM5.3 17.7V7.65L12 2.575l6.7 5.075v1.675q-.175-.025-.35-.025H18q-2.8 0-4.75 1.95Q11.3 13.2 11.3 16q0 .425.05.85t.175.85Z"/>
    </Icon>
  );
});

IconMaterialAddHomeW100Filled.displayName = 'AmauiIconMaterialAddHomeW100Filled';

export default IconMaterialAddHomeW100Filled;
