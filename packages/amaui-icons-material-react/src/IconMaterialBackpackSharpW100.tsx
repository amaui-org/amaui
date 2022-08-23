import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackpackSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackpackSharpW100'
      short_name='Backpack'

      {...props}
    >
      <path d="M5.3 20.85V8Q5.3 6.725 6.15 5.762Q7 4.8 8.3 4.65V2.65H10V4.65H14V2.65H15.7V4.65Q17 4.8 17.85 5.762Q18.7 6.725 18.7 8V20.85ZM6 20.15H18V8Q18 6.9 17.225 6.125Q16.45 5.35 15.35 5.35H8.65Q7.55 5.35 6.775 6.125Q6 6.9 6 8ZM15.3 15.35H16V12.65H8V13.35H15.3ZM12 12.75Q12 12.75 12 12.75Q12 12.75 12 12.75Q12 12.75 12 12.75Q12 12.75 12 12.75Z"/>
    </Icon>
  );
});

IconMaterialBackpackSharpW100.displayName = 'AmauiIconMaterialBackpackSharpW100';

export default IconMaterialBackpackSharpW100;
