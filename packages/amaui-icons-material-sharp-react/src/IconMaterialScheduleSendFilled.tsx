import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScheduleSendFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleSendFilled'

      short_name='ScheduleSend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 20v-6l8-2-8-2V4l14.3 6H17q-2.925 0-4.962 2.062Q10 14.125 10 17.05Zm14 2q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12t3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22Zm1.65-2.65.7-.7-1.85-1.85V14h-1v3.2Z"/>
    </Icon>
  );
});

IconMaterialScheduleSendFilled.displayName = 'AmauiIconMaterialScheduleSendFilled';

export default IconMaterialScheduleSendFilled;
