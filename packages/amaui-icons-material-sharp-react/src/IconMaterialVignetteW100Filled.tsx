import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVignetteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VignetteW100Filled'

      short_name='Vignette'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.35q2.2 0 3.775-1 1.575-1 1.575-2.35t-1.575-2.35q-1.575-1-3.775-1t-3.775 1Q6.65 10.65 6.65 12t1.575 2.35q1.575 1 3.775 1ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialVignetteW100Filled.displayName = 'AmauiIconMaterialVignetteW100Filled';

export default IconMaterialVignetteW100Filled;
