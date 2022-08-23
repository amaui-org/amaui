import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalDistributeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalDistributeSharpW100Filled'
      short_name='HorizontalDistribute'

      {...props}
    >
      <path d="M3.3 21.35V2.65H4V21.35ZM11.15 16.35V7.65H12.85V16.35ZM20 21.35V2.65H20.7V21.35Z"/>
    </Icon>
  );
});

IconMaterialHorizontalDistributeSharpW100Filled.displayName = 'AmauiIconMaterialHorizontalDistributeSharpW100Filled';

export default IconMaterialHorizontalDistributeSharpW100Filled;
