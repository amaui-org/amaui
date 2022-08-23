import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckIndeterminateSmallSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckIndeterminateSmallSharpW100Filled'
      short_name='CheckIndeterminateSmall'

      {...props}
    >
      <path d="M7.65 12.35v-.7h8.7v.7Z"/>
    </Icon>
  );
});

IconMaterialCheckIndeterminateSmallSharpW100Filled.displayName = 'AmauiIconMaterialCheckIndeterminateSmallSharpW100Filled';

export default IconMaterialCheckIndeterminateSmallSharpW100Filled;
