import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreencastW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreencastW100Filled'

      short_name='Screencast'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M192 844q-26 0-43-17t-17-43V368q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm494-134H574q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h112q5.95 0 9.975 4.035 4.025 4.035 4.025 10T695.975 706q-4.025 4-9.975 4Zm0-120H574q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h112q5.95 0 9.975 4.035 4.025 4.035 4.025 10T695.975 586q-4.025 4-9.975 4Zm-526-70v264q0 12 10 22t22 10h576q12 0 22-10t10-22V470H574q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h226v-74q0-12-10-22t-22-10H460v154q0 12.75-8.625 21.375T430 520H160Z"/>
    </Icon>
  );
});

IconMaterialScreencastW100Filled.displayName = 'AmauiIconMaterialScreencastW100Filled';

export default IconMaterialScreencastW100Filled;
