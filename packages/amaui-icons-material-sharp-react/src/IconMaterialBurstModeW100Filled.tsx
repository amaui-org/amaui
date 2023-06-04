import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBurstModeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BurstModeW100Filled'

      short_name='BurstMode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.3 17.7V6.3H7v11.4Zm-4.3 0V6.3h.7v11.4Zm8.6 0V6.3H22v11.4Zm2.3-3h6.8l-2-2.7-1.9 2.5-1.4-1.85Z"/>
    </Icon>
  );
});

IconMaterialBurstModeW100Filled.displayName = 'AmauiIconMaterialBurstModeW100Filled';

export default IconMaterialBurstModeW100Filled;
