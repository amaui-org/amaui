import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIndeterminateCheckBoxSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IndeterminateCheckBoxSharpW100'
      short_name='IndeterminateCheckBox'

      {...props}
    >
      <path d="M7.65 12.35H16.35V11.65H7.65ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialIndeterminateCheckBoxSharpW100.displayName = 'AmauiIconMaterialIndeterminateCheckBoxSharpW100';

export default IconMaterialIndeterminateCheckBoxSharpW100;
