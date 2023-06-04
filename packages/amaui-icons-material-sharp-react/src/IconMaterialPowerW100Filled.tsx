import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPowerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerW100Filled'

      short_name='Power'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 19.7v-2.55l-3.2-3.2V8.3h2.45v-4h.7v4h3.1v-4h.7v4h2.45v5.65l-3.2 3.2v2.55Z"/>
    </Icon>
  );
});

IconMaterialPowerW100Filled.displayName = 'AmauiIconMaterialPowerW100Filled';

export default IconMaterialPowerW100Filled;
