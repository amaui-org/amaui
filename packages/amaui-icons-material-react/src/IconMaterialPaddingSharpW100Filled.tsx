import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPaddingSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaddingSharpW100Filled'
      short_name='Padding'

      {...props}
    >
      <path d="M7.45 8.85H8.85V7.45H7.45ZM11.3 8.85H12.7V7.45H11.3ZM15.15 8.85H16.55V7.45H15.15ZM4.3 19.7V4.3H19.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialPaddingSharpW100Filled.displayName = 'AmauiIconMaterialPaddingSharpW100Filled';

export default IconMaterialPaddingSharpW100Filled;
