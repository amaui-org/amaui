import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoBackpackSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpackSharp'
      short_name='NoBackpack'

      {...props}
    >
      <path d="M20 17.175 18 15.175V8Q18 7.175 17.413 6.588Q16.825 6 16 6H8.825Q8.825 6 8.825 6Q8.825 6 8.825 6L6.975 4.15Q6.975 4.15 6.988 4.15Q7 4.15 7 4.15V2H10V4H14V2H17V4.15Q18.3 4.5 19.15 5.55Q20 6.6 20 8ZM16.5 13.675 14.825 12H16.5ZM19.775 22.6 19.175 22H4V8Q4 7.725 4.037 7.475Q4.075 7.225 4.15 6.975L1.4 4.225L2.8 2.8L21.175 21.2ZM6 20H17.175L11.175 14H7.5V12H9.175L6 8.825Q6 8.825 6 8.825Q6 8.825 6 8.825ZM13.55 10.725Q13.55 10.725 13.55 10.725Q13.55 10.725 13.55 10.725Q13.55 10.725 13.55 10.725Q13.55 10.725 13.55 10.725ZM11.55 14.375Q11.55 14.375 11.55 14.375Q11.55 14.375 11.55 14.375Z"/>
    </Icon>
  );
});

IconMaterialNoBackpackSharp.displayName = 'AmauiIconMaterialNoBackpackSharp';

export default IconMaterialNoBackpackSharp;
