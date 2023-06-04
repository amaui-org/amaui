import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchAccountW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccountW100'

      short_name='SwitchAccount'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 11.6q.975 0 1.663-.688.687-.687.687-1.662 0-.975-.687-1.663Q14.975 6.9 14 6.9q-.975 0-1.662.687-.688.688-.688 1.663 0 .975.688 1.662.687.688 1.662.688ZM8 16h.75q1.15-1.225 2.488-1.762Q12.575 13.7 14 13.7t2.763.538Q18.1 14.775 19.25 16H20V4H8Zm-.7.7V3.3h13.4v13.4Zm-4 4V7.3H4V20h12.7v.7ZM14 10.9q-.675 0-1.162-.488-.488-.487-.488-1.162 0-.675.488-1.163Q13.325 7.6 14 7.6q.675 0 1.163.487.487.488.487 1.163t-.487 1.162q-.488.488-1.163.488ZM9.75 16h8.5q-.825-.75-1.913-1.175Q15.25 14.4 14 14.4q-1.25 0-2.337.425Q10.575 15.25 9.75 16ZM14 10Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccountW100.displayName = 'AmauiIconMaterialSwitchAccountW100';

export default IconMaterialSwitchAccountW100;
