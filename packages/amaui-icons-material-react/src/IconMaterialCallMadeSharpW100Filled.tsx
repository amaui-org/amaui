import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMadeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMadeSharpW100Filled'
      short_name='CallMade'

      {...props}
    >
      <path d="M5.4 19.1 4.9 18.6 17.15 6.35H9.65V5.65H18.35V14.35H17.65V6.85Z"/>
    </Icon>
  );
});

IconMaterialCallMadeSharpW100Filled.displayName = 'AmauiIconMaterialCallMadeSharpW100Filled';

export default IconMaterialCallMadeSharpW100Filled;
