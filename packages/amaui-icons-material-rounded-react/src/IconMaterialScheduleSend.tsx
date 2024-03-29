import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScheduleSend = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleSend'

      short_name='ScheduleSend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 18.5v-13q0-.55.438-.838.437-.287.937-.087L17.3 10H17q-.875 0-1.65.2-.775.2-1.5.55L5 7v3.5l6 1.5-6 1.5V17l5.4-2.3q-.2.575-.3 1.137Q10 16.4 10 17v.05l-5.6 2.375q-.5.2-.95-.088Q3 19.05 3 18.5ZM17 22q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12t3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22Zm2-3q.15-.15.15-.35 0-.2-.15-.35l-1.5-1.5v-2.3q0-.2-.15-.35Q17.2 14 17 14q-.2 0-.35.15-.15.15-.15.35v2.4q0 .15.05.275.05.125.175.25L18.3 19q.15.15.35.15.2 0 .35-.15ZM5 14.7V7v10Z"/>
    </Icon>
  );
});

IconMaterialScheduleSend.displayName = 'AmauiIconMaterialScheduleSend';

export default IconMaterialScheduleSend;
