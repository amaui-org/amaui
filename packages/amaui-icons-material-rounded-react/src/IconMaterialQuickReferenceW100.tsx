import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickReferenceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReferenceW100'

      short_name='QuickReference'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M644 844q5.6 0 9.8-4.2 4.2-4.2 4.2-9.8v-80q0-5.6-4.2-9.8-4.2-4.2-9.8-4.2-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8v80q0 5.6 4.2 9.8 4.2 4.2 9.8 4.2Zm0-139q6 1 10-3.5t4-10.5q0-6-4.286-10-4.285-4-10-4-5.714 0-9.714 4.071-4 4.072-4 9.5 0 5.429 4.2 9.929t9.8 4.5ZM200 256v259-3 384-640 148-148Zm120 374h113q5-8 10-14.5t10-13.5H320q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Zm0 160h78q-1-7-1.5-14t-.5-14h-76q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4Zm-87.849 134Q206 924 189 907q-17-17-17-43V288q0-26 17-43t43-17h289q12.444 0 23.722 5T564 246l126 126q8 8 13 19.278 5 11.278 5 23.722v105q-7-2-13.5-3t-14.5-2V404H561.582Q549 404 540.5 395.49T532 374.4V256H232q-12 0-22 10t-10 22v576q0 12 10 22t22 10h204q5 8 10.5 14.5T458 924H232.151ZM644 612q62 0 105 43t43 105q0 62-43 105t-105 43q-62 0-105-43t-43-105q0-62 43-105t105-43Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceW100.displayName = 'AmauiIconMaterialQuickReferenceW100';

export default IconMaterialQuickReferenceW100;
