import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSplitscreenAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitscreenAddW100Filled'

      short_name='SplitscreenAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-172h-78q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h78v-78q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v78h78q5.95 0 9.975 4.035 4.025 4.035 4.025 10T875.975-176q-4.025 4-9.975 4h-78v78q0 5.95-4.035 9.975-4.035 4.025-10 4.025T764-84.025q-4-4.025-4-9.975v-78ZM232-539q-26 0-43-17t-17-43.429v-128.142Q172-754 189-771q17-17 43-17h496q26 0 43 17t17 43.429v128.142Q788-573 771-556q-17 17-43 17H232Zm0 367q-26 0-43-17t-17-43.283v-127.434Q172-386 189-403t43-17h496q17 0 30 7.5t21 20.5v1q-3-1-5.5-1H768q-81 0-139 56t-61 136v28H232Z"/>
    </Icon>
  );
});

IconMaterialSplitscreenAddW100Filled.displayName = 'AmauiIconMaterialSplitscreenAddW100Filled';

export default IconMaterialSplitscreenAddW100Filled;
