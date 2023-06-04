import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUngroupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UngroupW100'

      short_name='Ungroup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M546 529 357 718q-4 4-9 3.5t-9-4.5q-4-4-4-9.667 0-5.666 4-9.333l188-188H360q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h184q12.75 0 21.375 8.625T574 512v184q0 5.95-4.035 9.975-4.035 4.025-10 4.025T550 705.975q-4-4.025-4-9.975V529Zm-52-233q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h234q24.75 0 42.375 17.625T788 328v234q0 5.95-4.035 9.975-4.035 4.025-10 4.025T764 571.975q-4-4.025-4-9.975V328q0-14-9-23t-23-9H494ZM232 884q-26 0-43-17t-17-43V282q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v542q0 12 10 22t22 10h542q5.95 0 9.975 4.035 4.025 4.035 4.025 10T783.975 880q-4.025 4-9.975 4H232Z"/>
    </Icon>
  );
});

IconMaterialUngroupW100.displayName = 'AmauiIconMaterialUngroupW100';

export default IconMaterialUngroupW100;
