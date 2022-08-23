import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStayCurrentLandscapeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentLandscapeSharpW100Filled'
      short_name='StayCurrentLandscape'

      {...props}
    >
      <path d="M2.3 17.7V6.3H21.7V17.7ZM5.35 17H18.65V7H5.35Z"/>
    </Icon>
  );
});

IconMaterialStayCurrentLandscapeSharpW100Filled.displayName = 'AmauiIconMaterialStayCurrentLandscapeSharpW100Filled';

export default IconMaterialStayCurrentLandscapeSharpW100Filled;
