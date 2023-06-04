import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestWifiPointW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiPointW100Filled'

      short_name='NestWifiPoint'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.65 19.7q-1.8 0-3.075-1.275Q4.3 17.15 4.3 15.35v-6.7q0-1.825 1.275-3.088Q6.85 4.3 8.65 4.3h6.7q1.825 0 3.088 1.262Q19.7 6.825 19.7 8.65v6.7q0 1.8-1.262 3.075Q17.175 19.7 15.35 19.7Zm.45-.7q0-.35.225-.575.225-.225.575-.225t.575.225q.225.225.225.575h2.6q0-.35.225-.575.225-.225.575-.225t.575.225q.225.225.225.575 1.425 0 2.175-.4.75-.4 1.275-1.2H17q0 .35-.225.575-.225.225-.575.225t-.575-.225q-.225-.225-.225-.575h-2.6q0 .35-.225.575-.225.225-.575.225t-.575-.225q-.225-.225-.225-.575H8.6q0 .35-.225.575-.225.225-.575.225t-.575-.225Q7 17.75 7 17.4H5.65q.525.8 1.275 1.2.75.4 2.175.4Z"/>
    </Icon>
  );
});

IconMaterialNestWifiPointW100Filled.displayName = 'AmauiIconMaterialNestWifiPointW100Filled';

export default IconMaterialNestWifiPointW100Filled;
