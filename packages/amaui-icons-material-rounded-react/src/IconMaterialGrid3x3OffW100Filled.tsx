import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGrid3x3OffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid3x3OffW100Filled'

      short_name='Grid3x3Off'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m702-372-28-28h60q5.95 0 9.975 4.035 4.025 4.035 4.025 10T743.975-376q-4.025 4-9.975 4h-32ZM588-486 486-588h74v-146q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v146h146q5.95 0 9.975 4.035 4.025 4.035 4.025 10T743.975-564q-4.025 4-9.975 4H588v74ZM400-674l-28-28v-32q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v60Zm160 314-12-12H400v146q0 5.95-4.035 9.975-4.035 4.025-10 4.025T376-216.025q-4-4.025-4-9.975v-146H226q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h146v-148l-12-12H226q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h106L140-780q-4-4-4.5-9.5T140-800q5-5 10-5t10 5l658 658q4 4 4.5 9.5T818-122q-5 5-10 5t-10-5L588-332v106q0 5.95-4.035 9.975-4.035 4.025-10 4.025T564-216.025q-4-4.025-4-9.975v-134Z"/>
    </Icon>
  );
});

IconMaterialGrid3x3OffW100Filled.displayName = 'AmauiIconMaterialGrid3x3OffW100Filled';

export default IconMaterialGrid3x3OffW100Filled;
