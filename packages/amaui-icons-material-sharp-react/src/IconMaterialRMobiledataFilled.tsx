import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RMobiledataFilled'

      short_name='RMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 10V2h7v5.2H7.8L9 10H7L5.85 7.35H4V10Zm2-4.65h3V4H4Z"/>
    </Icon>
  );
});

IconMaterialRMobiledataFilled.displayName = 'AmauiIconMaterialRMobiledataFilled';

export default IconMaterialRMobiledataFilled;
