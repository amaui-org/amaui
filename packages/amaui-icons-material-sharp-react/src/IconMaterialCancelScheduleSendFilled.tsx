import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCancelScheduleSendFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelScheduleSendFilled'

      short_name='CancelScheduleSend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.225 19.475 1.75-1.75 1.75 1.75.75-.75L17.75 17l1.75-1.75-.75-.75L17 16.25l-1.75-1.75-.75.75L16.25 17l-1.75 1.75ZM3 20v-6l8-2-8-2V4l14.3 6H17q-2.925 0-4.962 2.062Q10 14.125 10 17.05Zm14 2q-2.075 0-3.537-1.462Q12 19.075 12 17q0-2.075 1.463-3.538Q14.925 12 17 12t3.538 1.462Q22 14.925 22 17q0 2.075-1.462 3.538Q19.075 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialCancelScheduleSendFilled.displayName = 'AmauiIconMaterialCancelScheduleSendFilled';

export default IconMaterialCancelScheduleSendFilled;
