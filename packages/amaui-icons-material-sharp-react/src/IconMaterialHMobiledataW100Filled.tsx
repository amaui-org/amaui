import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHMobiledataW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataW100Filled'

      short_name='HMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 17V7h.7v4.65h7.3V7h.7v10h-.7v-4.65h-7.3V17Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataW100Filled.displayName = 'AmauiIconMaterialHMobiledataW100Filled';

export default IconMaterialHMobiledataW100Filled;
