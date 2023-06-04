import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHealthAndSafetyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthAndSafetyW100Filled'

      short_name='HealthAndSafety'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.15 14.85h1.7v-2.5h2.5v-1.7h-2.5v-2.5h-1.7v2.5h-2.5v1.7h2.5Zm.85 5.8q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.2q0 3.35-1.912 6-1.913 2.65-4.788 3.55Z"/>
    </Icon>
  );
});

IconMaterialHealthAndSafetyW100Filled.displayName = 'AmauiIconMaterialHealthAndSafetyW100Filled';

export default IconMaterialHealthAndSafetyW100Filled;
