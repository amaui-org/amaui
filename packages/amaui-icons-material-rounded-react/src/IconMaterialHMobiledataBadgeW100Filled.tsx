import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HMobiledataBadgeW100Filled'

      short_name='HMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M232 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm152-294h192v146q0 5.95 4.035 9.975 4.035 4.025 10 4.025t9.965-4.025q4-4.025 4-9.975V416q0-5.95-4.035-9.975-4.035-4.025-10-4.025T580 406.025q-4 4.025-4 9.975v146H384V416q0-5.95-4.035-9.975-4.035-4.025-10-4.025T360 406.025q-4 4.025-4 9.975v320q0 5.95 4.035 9.975 4.035 4.025 10 4.025t9.965-4.025q4-4.025 4-9.975V590Z"/>
    </Icon>
  );
});

IconMaterialHMobiledataBadgeW100Filled.displayName = 'AmauiIconMaterialHMobiledataBadgeW100Filled';

export default IconMaterialHMobiledataBadgeW100Filled;
