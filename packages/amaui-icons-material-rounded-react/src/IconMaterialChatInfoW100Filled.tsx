import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatInfoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatInfoW100Filled'

      short_name='ChatInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-700q8.5 0 14.25-5.75T500-720q0-8.5-5.75-14.25T480-740q-8.5 0-14.25 5.75T460-720q0 8.5 5.75 14.25T480-700Zm.035 310q5.965 0 9.965-4.025t4-9.975v-216q0-5.95-4.035-9.975-4.035-4.025-10-4.025T470-629.975q-4 4.025-4 9.975v216q0 5.95 4.035 9.975 4.035 4.025 10 4.025ZM244-292l-61 61q-14 14-32.5 6.344T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Z"/>
    </Icon>
  );
});

IconMaterialChatInfoW100Filled.displayName = 'AmauiIconMaterialChatInfoW100Filled';

export default IconMaterialChatInfoW100Filled;
