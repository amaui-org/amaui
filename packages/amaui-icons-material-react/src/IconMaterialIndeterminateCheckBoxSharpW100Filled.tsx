import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIndeterminateCheckBoxSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IndeterminateCheckBoxSharpW100Filled'
      short_name='IndeterminateCheckBox'

      {...props}
    >
      <path d="M7.65 12.35H16.35V11.65H7.65ZM4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialIndeterminateCheckBoxSharpW100Filled.displayName = 'AmauiIconMaterialIndeterminateCheckBoxSharpW100Filled';

export default IconMaterialIndeterminateCheckBoxSharpW100Filled;
