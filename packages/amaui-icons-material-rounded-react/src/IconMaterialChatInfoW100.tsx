import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChatInfoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatInfoW100'

      short_name='ChatInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-700q9 0 14.5-5.5T500-720q0-9-5.5-14.5T480-740q-9 0-14.5 5.5T460-720q0 9 5.5 14.5T480-700Zm0 310q6 0 10-4t4-10v-216q0-6-4-10t-10-4q-6 0-10 4t-4 10v216q0 6 4 10t10 4Zm-236 98-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Zm-12-28h536q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v520l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialChatInfoW100.displayName = 'AmauiIconMaterialChatInfoW100';

export default IconMaterialChatInfoW100;
