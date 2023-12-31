import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckbookW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckbookW100'

      short_name='Checkbook'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-386h333l28-28H280q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Zm0-160h160q5.95 0 9.975-4.035 4.025-4.035 4.025-10T449.975-570q-4.025-4-9.975-4H280q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Zm199 294H192q-24.75 0-42.375-17.625T132-312v-336q0-24.75 17.625-42.375T192-708h576q24.75 0 42.375 17.625T828-648v75h-28v-75q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v336q0 14 9 23t23 9h315l-28 28Zm367-234q4 4.118 4 9.059 0 4.941-4.146 9.087L816-438l-20-20 29.887-29.854q4.151-4.146 9.132-4.146t8.981 4l2 2Zm-52 72L560-180q-2.069 2-4.655 3-2.586 1-5.345 1h-6q-3.2 0-5.6-2.4-2.4-2.4-2.4-5.6v-6q0-2.759 1-5.345t3-4.655l234-234 20 20ZM160-680v400-400Z"/>
    </Icon>
  );
});

IconMaterialCheckbookW100.displayName = 'AmauiIconMaterialCheckbookW100';

export default IconMaterialCheckbookW100;
