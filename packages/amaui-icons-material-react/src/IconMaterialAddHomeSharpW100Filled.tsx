import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddHomeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeSharpW100Filled'
      short_name='AddHome'

      {...props}
    >
      <path d="M18 19.7q-1.55 0-2.625-1.075T14.3 16q0-1.55 1.075-2.625T18 12.3q1.55 0 2.625 1.075T21.7 16q0 1.55-1.075 2.625T18 19.7Zm-.35-.85h.7v-2.5h2.5v-.7h-2.5v-2.5h-.7v2.5h-2.5v.7h2.5ZM5.3 17.7V7.65L12 2.575l6.7 5.075v1.675q-.175-.025-.35-.025H18q-2.8 0-4.75 1.95Q11.3 13.2 11.3 16q0 .425.05.85t.175.85Z"/>
    </Icon>
  );
});

IconMaterialAddHomeSharpW100Filled.displayName = 'AmauiIconMaterialAddHomeSharpW100Filled';

export default IconMaterialAddHomeSharpW100Filled;
