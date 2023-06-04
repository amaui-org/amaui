import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewWindowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewWindowW100Filled'

      short_name='NewWindow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M232 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h174q5.95 0 9.975 4.035 4.025 4.035 4.025 10T415.975 292q-4.025 4-9.975 4H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10h496q12 0 22-10t10-22V650q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v174q0 26-17 43t-43 17H232Zm408-468H534q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h106V282q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v106h106q5.95 0 9.975 4.035 4.025 4.035 4.025 10T783.975 412q-4.025 4-9.975 4H668v106q0 5.95-4.035 9.975-4.035 4.025-10 4.025T644 531.975q-4-4.025-4-9.975V416Z"/>
    </Icon>
  );
});

IconMaterialNewWindowW100Filled.displayName = 'AmauiIconMaterialNewWindowW100Filled';

export default IconMaterialNewWindowW100Filled;
