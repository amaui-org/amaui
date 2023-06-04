import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialContactEmergencyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContactEmergencyW100'

      short_name='ContactEmergency'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.65 11.6h.7v-2l1.725 1 .35-.6L18.7 9l1.725-1-.35-.6-1.725 1v-2h-.7v2l-1.725-1-.35.6L17.3 9l-1.725 1 .35.6 1.725-1ZM1.3 19.2V4.8h21.4v14.4Zm.7-.7h1.55Q4.6 17.3 6 16.55q1.4-.75 3-.75t3 .75q1.4.75 2.45 1.95H22v-13H2Zm7-4.2q.975 0 1.663-.688.687-.687.687-1.662 0-.975-.687-1.663Q9.975 9.6 9 9.6q-.975 0-1.662.687-.688.688-.688 1.663 0 .975.688 1.662.687.688 1.662.688Zm-4.45 4.2h8.9q-.875-.95-2.025-1.475Q10.275 16.5 9 16.5t-2.425.525q-1.15.525-2.025 1.475ZM9 13.6q-.675 0-1.162-.487-.488-.488-.488-1.163t.488-1.163Q8.325 10.3 9 10.3q.675 0 1.163.487.487.488.487 1.163t-.487 1.163Q9.675 13.6 9 13.6Zm3-1.6Z"/>
    </Icon>
  );
});

IconMaterialContactEmergencyW100.displayName = 'AmauiIconMaterialContactEmergencyW100';

export default IconMaterialContactEmergencyW100;
