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
      <path d="M12 15.35q2.2 0 3.775-1 1.575-1 1.575-2.35t-1.575-2.35q-1.575-1-3.775-1t-3.775 1Q6.65 10.65 6.65 12t1.575 2.35q1.575 1 3.775 1ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialVignetteW100Filled.displayName = 'AmauiIconMaterialVignetteW100Filled';

export default IconMaterialVignetteW100Filled;
