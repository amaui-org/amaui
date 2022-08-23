import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackpackSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackpackSharpW100Filled'
      short_name='Backpack'

      {...props}
    >
      <path d="M5.3 20.85V8Q5.3 6.725 6.15 5.762Q7 4.8 8.3 4.65V2.65H10V4.65H14V2.65H15.7V4.65Q17 4.8 17.85 5.762Q18.7 6.725 18.7 8V20.85ZM15.3 15.35H16V12.65H8V13.35H15.3Z"/>
    </Icon>
  );
});

IconMaterialBackpackSharpW100Filled.displayName = 'AmauiIconMaterialBackpackSharpW100Filled';

export default IconMaterialBackpackSharpW100Filled;
