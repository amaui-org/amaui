import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSharpW100Filled'
      short_name='Power'

      {...props}
    >
      <path d="M10.5 19.7V17.15L7.3 13.95V8.3H9.75V4.3H10.45V8.3H13.55V4.3H14.25V8.3H16.7V13.95L13.5 17.15V19.7Z"/>
    </Icon>
  );
});

IconMaterialPowerSharpW100Filled.displayName = 'AmauiIconMaterialPowerSharpW100Filled';

export default IconMaterialPowerSharpW100Filled;
