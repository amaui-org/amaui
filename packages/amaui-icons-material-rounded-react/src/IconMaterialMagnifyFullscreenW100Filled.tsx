import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMagnifyFullscreenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MagnifyFullscreenW100Filled'

      short_name='MagnifyFullscreen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M192 844q-26 0-43-17t-17-43V368q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm394-294v76q0 5.95 4.035 9.975 4.035 4.025 10 4.025t9.965-4.025q4-4.025 4-9.975v-76h76q5.95 0 9.975-4.035 4.025-4.035 4.025-10T699.975 526q-4.025-4-9.975-4h-76v-76q0-5.95-4.035-9.975-4.035-4.025-10-4.025T590 436.025q-4 4.025-4 9.975v76h-76q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4h76Z"/>
    </Icon>
  );
});

IconMaterialMagnifyFullscreenW100Filled.displayName = 'AmauiIconMaterialMagnifyFullscreenW100Filled';

export default IconMaterialMagnifyFullscreenW100Filled;
