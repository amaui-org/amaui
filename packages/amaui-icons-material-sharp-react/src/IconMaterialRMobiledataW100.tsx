import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRMobiledataW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RMobiledataW100'

      short_name='RMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 9.35v-6.7h5.7v4h-1.3l1.15 2.7h-.75L6.3 6.7H3.35v2.65ZM3.35 6h4.3V3.35h-4.3Z"/>
    </Icon>
  );
});

IconMaterialRMobiledataW100.displayName = 'AmauiIconMaterialRMobiledataW100';

export default IconMaterialRMobiledataW100;
