import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnterpriseOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnterpriseOffW100Filled'

      short_name='EnterpriseOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M828-240 372-696v-20q0-26 17-43t43-17h96q26 0 43 17t17 43v48h180q26 0 43 17t17 43v368ZM400-668h160v-48q0-12-10-22t-22-10h-96q-12 0-22 10t-10 22v48ZM836-84l-88-88H192q-26 0-43-17t-17-43v-376q0-26 17-43t43-17h100v40L124-796l20-20 712 712-20 20Z"/>
    </Icon>
  );
});

IconMaterialEnterpriseOffW100Filled.displayName = 'AmauiIconMaterialEnterpriseOffW100Filled';

export default IconMaterialEnterpriseOffW100Filled;
