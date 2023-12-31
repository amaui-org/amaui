import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMintmarkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MintmarkW100Filled'

      short_name='Mintmark'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-174 544-390q-3.667-3.75-3.833-9.375Q540-405 544-410t9.5-5q5.5 0 10.5 5l216 216v-206q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v224q0 12.75-8.625 21.375T778-146H554q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h206ZM272-346H166q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h194q14 0 23-9t9-23v-108q0-14-9-23t-23-9H212q-24.75 0-42.375-17.625T152-606v-108q0-24.75 17.625-42.375T212-774h60v-26q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v26h106q5.95 0 9.975 4.035 4.025 4.035 4.025 10T415.975-750q-4.025 4-9.975 4H212q-14 0-23 9t-9 23v108q0 14 9 23t23 9h148q24.75 0 42.375 17.625T420-514v108q0 24.75-17.625 42.375T360-346h-60v26q0 5.95-4.035 9.975-4.035 4.025-10 4.025T276-310.025q-4-4.025-4-9.975v-26Z"/>
    </Icon>
  );
});

IconMaterialMintmarkW100Filled.displayName = 'AmauiIconMaterialMintmarkW100Filled';

export default IconMaterialMintmarkW100Filled;
