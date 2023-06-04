import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialQuickReferenceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickReferenceW100Filled'

      short_name='QuickReference'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M644 844q5.6 0 9.8-4.2 4.2-4.2 4.2-9.8v-80q0-5.6-4.2-9.8-4.2-4.2-9.8-4.2-5.6 0-9.8 4.2-4.2 4.2-4.2 9.8v80q0 5.6 4.2 9.8 4.2 4.2 9.8 4.2Zm0-139q6 1 10-3.5t4-10.5q0-6-4.286-10-4.285-4-10-4-5.714 0-9.714 4.071-4 4.072-4 9.5 0 5.429 4.2 9.929t9.8 4.5Zm0 203q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-82.4-504H680L532 256l148 148-148-148v118.4q0 12.58 8.51 21.09T561.6 404ZM232 924q-24.75 0-42.375-17.625T172 864V288q0-24.75 17.625-42.375T232 228h289q12.444 0 23.722 5T564 246l126 126q8 8 13 19.278 5 11.278 5 23.722v105q-16-5-31.5-6.5T644 512q-58 0-107.5 24T453 602H320q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4h113q-17 29-27 62.5T396 762h-76q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4h78q5 36.914 20 70.957Q433 895 458 924H232Z"/>
    </Icon>
  );
});

IconMaterialQuickReferenceW100Filled.displayName = 'AmauiIconMaterialQuickReferenceW100Filled';

export default IconMaterialQuickReferenceW100Filled;
