import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldW100Filled'

      short_name='Shield'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.65q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.2q0 3.35-1.912 6-1.913 2.65-4.788 3.55Z"/>
    </Icon>
  );
});

IconMaterialShieldW100Filled.displayName = 'AmauiIconMaterialShieldW100Filled';

export default IconMaterialShieldW100Filled;
