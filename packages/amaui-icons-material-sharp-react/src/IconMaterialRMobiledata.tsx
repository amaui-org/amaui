import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRMobiledata = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RMobiledata'

      short_name='RMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 10V2h7v5.2H7.8L9 10H7L5.85 7.35H4V10Zm2-4.65h3V4H4Z"/>
    </Icon>
  );
});

IconMaterialRMobiledata.displayName = 'AmauiIconMaterialRMobiledata';

export default IconMaterialRMobiledata;
