import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTamperDetectionOnW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TamperDetectionOnW100Filled'

      short_name='TamperDetectionOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.675 15.7V7.55h-7.75V2.3h13.4v6.2l2.75-2.75v6.5l-2.75-2.75v6.2ZM4.9 17.3l-2.125-2.125.525-.525.975.975v-4.95h.7V13.3h.7V9.55h.7v3.75h.7v-3.25h.7v3.25h.7v-2.5h.7v6.5Z"/>
    </Icon>
  );
});

IconMaterialTamperDetectionOnW100Filled.displayName = 'AmauiIconMaterialTamperDetectionOnW100Filled';

export default IconMaterialTamperDetectionOnW100Filled;
