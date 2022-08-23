import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalDistributeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalDistributeSharpW100Filled'
      short_name='VerticalDistribute'

      {...props}
    >
      <path d="M2.65 4V3.3H21.35V4ZM7.65 12.85V11.15H16.35V12.85ZM2.65 20.7V20H21.35V20.7Z"/>
    </Icon>
  );
});

IconMaterialVerticalDistributeSharpW100Filled.displayName = 'AmauiIconMaterialVerticalDistributeSharpW100Filled';

export default IconMaterialVerticalDistributeSharpW100Filled;
