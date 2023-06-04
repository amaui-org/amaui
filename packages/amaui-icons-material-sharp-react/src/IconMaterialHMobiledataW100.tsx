import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHMobiledataW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataW100'

      short_name='HMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.65 17V7h.7v4.65h7.3V7h.7v10h-.7v-4.65h-7.3V17Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataW100.displayName = 'AmauiIconMaterialHMobiledataW100';

export default IconMaterialHMobiledataW100;
