import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddAdW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAdW100Filled'

      short_name='AddAd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M730-312H624q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h106v-106q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v106h106q5.95 0 9.975 4.035 4.025 4.035 4.025 10T873.975-316q-4.025 4-9.975 4H758v106q0 5.95-4.035 9.975-4.035 4.025-10 4.025T734-196.025q-4-4.025-4-9.975v-106ZM142-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v154q0 5.95-4.035 9.975-4.035 4.025-10 4.025T674-564.025q-4-4.025-4-9.975v-98H110v440q0 14 9 23t23 9h474q5.95 0 9.975 4.035 4.025 4.035 4.025 10T625.975-176q-4.025 4-9.975 4H142Z"/>
    </Icon>
  );
});

IconMaterialAddAdW100Filled.displayName = 'AmauiIconMaterialAddAdW100Filled';

export default IconMaterialAddAdW100Filled;
