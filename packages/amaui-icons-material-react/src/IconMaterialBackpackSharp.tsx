import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackpackSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackpackSharp'
      short_name='Backpack'

      {...props}
    >
      <path d="M4 22V8Q4 6.6 4.85 5.55Q5.7 4.5 7 4.15V2H10V4H14V2H17V4.15Q18.3 4.5 19.15 5.55Q20 6.6 20 8V22ZM6 20H18V8Q18 7.175 17.413 6.588Q16.825 6 16 6H8Q7.175 6 6.588 6.588Q6 7.175 6 8ZM14.5 16H16.5V12H7.5V14H14.5ZM12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Z"/>
    </Icon>
  );
});

IconMaterialBackpackSharp.displayName = 'AmauiIconMaterialBackpackSharp';

export default IconMaterialBackpackSharp;
