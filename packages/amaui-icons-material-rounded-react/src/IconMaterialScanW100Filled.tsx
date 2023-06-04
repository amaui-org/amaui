import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScanW100Filled'

      short_name='Scan'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M876 670H84q-5.95 0-9.975-4.035-4.025-4.035-4.025-10T74.025 646q4.025-4 9.975-4h792q5.95 0 9.975 4.035 4.025 4.035 4.025 10T885.975 666q-4.025 4-9.975 4ZM720 404 572 256v118.4q0 12.58 8.51 21.09T601.6 404H720ZM272 924q-24.75 0-42.375-17.625T212 864V750h536v114q0 24.75-17.625 42.375T688 924H272Zm-60-362V288q0-24.75 17.625-42.375T272 228h289q12.444 0 23.722 5T604 246l126 126q8 8 13 19.278 5 11.278 5 23.722v147H212Z"/>
    </Icon>
  );
});

IconMaterialScanW100Filled.displayName = 'AmauiIconMaterialScanW100Filled';

export default IconMaterialScanW100Filled;
