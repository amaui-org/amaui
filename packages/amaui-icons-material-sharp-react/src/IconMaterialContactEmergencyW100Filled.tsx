import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactEmergencyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactEmergencyW100Filled'

      short_name='ContactEmergency'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.65 11.6h.7v-2l1.725 1 .35-.6L18.7 9l1.725-1-.35-.6-1.725 1v-2h-.7v2l-1.725-1-.35.6L17.3 9l-1.725 1 .35.6 1.725-1ZM1.3 19.2V4.8h21.4v14.4ZM9 14.3q.975 0 1.663-.688.687-.687.687-1.662 0-.975-.687-1.663Q9.975 9.6 9 9.6q-.975 0-1.662.687-.688.688-.688 1.663 0 .975.688 1.662.687.688 1.662.688Zm-5.45 4.2h10.9Q13.4 17.3 12 16.55q-1.4-.75-3-.75t-3 .75q-1.4.75-2.45 1.95Z"/>
    </Icon>
  );
});

IconMaterialContactEmergencyW100Filled.displayName = 'AmauiIconMaterialContactEmergencyW100Filled';

export default IconMaterialContactEmergencyW100Filled;
