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
      <path d="M3 20V4l14.3 6H17q-.875 0-1.65.2-.775.2-1.5.55L5 7v3.5l6 1.5-6 1.5V17l5.4-2.3q-.2.575-.3 1.137Q10 16.4 10 17v.05Zm14 2q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12t3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22Zm1.65-2.65.7-.7-1.85-1.85V14h-1v3.2ZM5 14.7V7v10Z"/>
    </Icon>
  );
});

IconMaterialScheduleSend.displayName = 'AmauiIconMaterialScheduleSend';

export default IconMaterialScheduleSend;
