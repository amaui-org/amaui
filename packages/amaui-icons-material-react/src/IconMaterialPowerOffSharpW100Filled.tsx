import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffSharpW100Filled'
      short_name='PowerOff'

      {...props}
    >
      <path d="M20.35 22 14.5 16.15 13.5 17.15V19.7H10.5V17.15L7.3 13.95V8.95L1.95 3.6L2.45 3.1L20.85 21.5ZM16.4 14.25 9.75 7.6V4.3H10.45V8.3H13.55V4.3H14.25V8.3H16.7V13.95Z"/>
    </Icon>
  );
});

IconMaterialPowerOffSharpW100Filled.displayName = 'AmauiIconMaterialPowerOffSharpW100Filled';

export default IconMaterialPowerOffSharpW100Filled;
