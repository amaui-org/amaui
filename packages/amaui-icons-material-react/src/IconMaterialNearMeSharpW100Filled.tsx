import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNearMeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearMeSharpW100Filled'
      short_name='NearMe'

      {...props}
    >
      <path d="M13.2 18.85 10.9 13.05 5.1 10.7 5.05 10.3 18.95 5 13.6 18.85Z"/>
    </Icon>
  );
});

IconMaterialNearMeSharpW100Filled.displayName = 'AmauiIconMaterialNearMeSharpW100Filled';

export default IconMaterialNearMeSharpW100Filled;
