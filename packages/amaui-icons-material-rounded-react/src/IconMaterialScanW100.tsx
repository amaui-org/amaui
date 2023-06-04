import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScanW100'

      short_name='Scan'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M272 924q-24.75 0-42.375-17.625T212 864V750h28v114q0 14 9 23t23 9h416q14 0 23-9t9-23V750h28v114q0 24.75-17.625 42.375T688 924H272Zm-60-636q0-24.75 17.625-42.375T272 228h289q12.444 0 23.722 5T604 246l126 126q8 8 13 19.278 5 11.278 5 23.722v147h-28V404H601.582Q589 404 580.5 395.49T572 374.4V256H272q-14 0-23 9t-9 23v274h-28V288Zm664 382H84q-5.95 0-9.975-4.035-4.025-4.035-4.025-10T74.025 646q4.025-4 9.975-4h792q5.95 0 9.975 4.035 4.025 4.035 4.025 10T885.975 666q-4.025 4-9.975 4ZM480 562Zm0 188Z"/>
    </Icon>
  );
});

IconMaterialScanW100.displayName = 'AmauiIconMaterialScanW100';

export default IconMaterialScanW100;
