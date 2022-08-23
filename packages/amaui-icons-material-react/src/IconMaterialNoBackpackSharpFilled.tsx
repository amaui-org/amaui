import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoBackpackSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpackSharpFilled'
      short_name='NoBackpack'

      {...props}
    >
      <path d="M16.5 13.675 20 17.175V8Q20 6.6 19.15 5.55Q18.3 4.5 17 4.15V2H14V4H10V2H7V4.15Q7 4.15 6.988 4.15Q6.975 4.15 6.975 4.15L14.825 12H16.5ZM19.775 22.6 19.175 22H4V8Q4 7.725 4.037 7.475Q4.075 7.225 4.15 6.975L1.4 4.225L2.8 2.8L21.175 21.2ZM7.5 14H11.175L9.175 12H7.5Z"/>
    </Icon>
  );
});

IconMaterialNoBackpackSharpFilled.displayName = 'AmauiIconMaterialNoBackpackSharpFilled';

export default IconMaterialNoBackpackSharpFilled;
