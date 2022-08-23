import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddHomeWorkSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeWorkSharpW100Filled'
      short_name='AddHomeWork'

      {...props}
    >
      <path d="M21.7 2.3v8.1q-.825-.55-1.775-.825Q18.975 9.3 18 9.3q-.6 0-1.175.1-.575.1-1.125.3V8.65l-5.2-3.725V2.3Zm-4.4 4.4h1.4V5.3h-1.4Zm.7 13q-1.55 0-2.625-1.075T14.3 16q0-1.55 1.075-2.625T18 12.3q1.55 0 2.625 1.075T21.7 16q0 1.55-1.075 2.625T18 19.7Zm-.35-.85h.7v-2.5h2.5v-.7h-2.5v-2.5h-.7v2.5h-2.5v.7h2.5ZM2.3 17.7V9.65L8 5.6l5.7 4.05v1.2q-1.15.95-1.775 2.3Q11.3 14.5 11.3 16q0 .425.05.85t.175.85H9.8v-4.8H6.2v4.8Z"/>
    </Icon>
  );
});

IconMaterialAddHomeWorkSharpW100Filled.displayName = 'AmauiIconMaterialAddHomeWorkSharpW100Filled';

export default IconMaterialAddHomeWorkSharpW100Filled;
