import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLteMobiledataBadgeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LteMobiledataBadgeW100Filled'

      short_name='LteMobiledataBadge'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M152 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h656q26 0 43 17t17 43v496q0 26-17 43t-43 17H152Zm202-174q5.95 0 9.975-4.035 4.025-4.035 4.025-10T363.975 686q-4.025-4-9.975-4H248V456q0-5.95-4.035-9.975-4.035-4.025-10-4.025T224 446.025q-4 4.025-4 9.975v224q0 12.75 8.625 21.375T250 710h104Zm84-240v226q0 5.95 4.035 9.975 4.035 4.025 10 4.025t9.965-4.025q4-4.025 4-9.975V470h66q5.95 0 9.975-4.035 4.025-4.035 4.025-10T541.975 446q-4.025-4-9.975-4H372q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4h66Zm218 240h104q5.95 0 9.975-4.035 4.025-4.035 4.025-10T769.975 686q-4.025-4-9.975-4H654v-92h66q5.95 0 9.975-4.035 4.025-4.035 4.025-10T729.975 566q-4.025-4-9.975-4h-66v-92h106q5.95 0 9.975-4.035 4.025-4.035 4.025-10T769.975 446q-4.025-4-9.975-4H656q-12.75 0-21.375 8.625T626 472v208q0 12.75 8.625 21.375T656 710Z"/>
    </Icon>
  );
});

IconMaterialLteMobiledataBadgeW100Filled.displayName = 'AmauiIconMaterialLteMobiledataBadgeW100Filled';

export default IconMaterialLteMobiledataBadgeW100Filled;
