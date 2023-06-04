import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRamenDiningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RamenDiningW100Filled'

      short_name='RamenDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.575 20.7v-1.35q-2.3-.9-3.862-2.5-1.563-1.6-1.988-3.55v-.05l1.35.05v-8l17.05-1.85v.7l-11.95 1.3V7.6h12.1v.7h-12.1v5h10.7q-.375 1.95-1.987 3.55-1.613 1.6-3.913 2.5v1.35Zm-1.6-13.1h1.5V5.55l-1.5.15Zm-2.2 0h1.5V5.75l-1.5.15Zm2.2 5.7h1.5v-5h-1.5Zm-2.2 0h1.5v-5h-1.5Z"/>
    </Icon>
  );
});

IconMaterialRamenDiningW100Filled.displayName = 'AmauiIconMaterialRamenDiningW100Filled';

export default IconMaterialRamenDiningW100Filled;
