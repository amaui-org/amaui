import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEntW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EntW100Filled'

      short_name='Ent'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M306 924q-5.95 0-9.975-4.025Q292 915.95 292 910V780q-57-52-88.5-115.5T172 535.277q0-128.032 89.833-217.655Q351.667 228 480 228q103 0 187.5 63.5T777 455l38.316 151.92Q819 621 810 632.5q-9 11.5-24 11.5h-78v140q0 24.75-17.625 42.375T648 844H548v66q0 5.95-4.025 9.975Q539.95 924 534 924H423l22-214h115q5.95 0 9.975-4.035 4.025-4.035 4.025-10T569.975 686q-4.025-4-9.975-4H448l12-112q2-26 20.73-43 18.729-17 44.27-17h119q5.95 0 9.975-4.035 4.025-4.035 4.025-10T653.975 486q-4.025-4-9.975-4H526q-36.817 0-63.45 24.398Q435.917 530.796 432 567l-37 357h-89Z"/>
    </Icon>
  );
});

IconMaterialEntW100Filled.displayName = 'AmauiIconMaterialEntW100Filled';

export default IconMaterialEntW100Filled;
