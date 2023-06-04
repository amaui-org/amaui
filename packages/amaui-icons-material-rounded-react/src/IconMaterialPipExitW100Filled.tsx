import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPipExitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PipExitW100Filled'

      short_name='PipExit'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M192 844q-26 0-43-17t-17-43V562q0-5.95 4.025-9.975Q140.05 548 146 548h246q24.75 0 42.375-17.625T452 488V322q0-5.95 4.025-9.975Q460.05 308 466 308h302q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm317-348q-12.75 0-21.375 8.625T479 526v144q0 5.95 4.035 9.975 4.035 4.025 10 4.025t9.965-4.025q4-4.025 4-9.975V544l176 176q4 4 9.5 4.5T703 720q5-5 5-10t-5-10L526 524h127q5.95 0 9.975-4.035 4.025-4.035 4.025-10T662.975 500q-4.025-4-9.975-4H509Zm-347-48q-12.75 0-21.375-8.625T132 418v-80q0-12.75 8.625-21.375T162 308h160q12.75 0 21.375 8.625T352 338v80q0 12.75-8.625 21.375T322 448H162Z"/>
    </Icon>
  );
});

IconMaterialPipExitW100Filled.displayName = 'AmauiIconMaterialPipExitW100Filled';

export default IconMaterialPipExitW100Filled;
