import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMindfulnessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MindfulnessW100Filled'

      short_name='Mindfulness'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M292 924V780q-57-52-88.5-115.5T172 535.277q0-128.032 89.833-217.655Q351.667 228 480 228q103 0 187.5 63.5T777 455l38.316 151.92Q819 621 810 632.5q-9 11.5-24 11.5h-78v140q0 24.75-17.625 42.375T648 844H548v80H292Zm187.965-522Q474 402 470 406.025T466 416v200q0 5.95 4.035 9.975 4.035 4.025 10 4.025t9.965-4.025q4-4.025 4-9.975V416q0-5.95-4.035-9.975-4.035-4.025-10-4.025Zm120 40Q594 442 590 446.025T586 456v100q0 5.95 4.035 9.975 4.035 4.025 10 4.025t9.965-4.025q4-4.025 4-9.975V456q0-5.95-4.035-9.975-4.035-4.025-10-4.025Zm-240 0Q354 442 350 446.025T346 456v80q0 5.95 4.035 9.975 4.035 4.025 10 4.025t9.965-4.025q4-4.025 4-9.975v-80q0-5.95-4.035-9.975-4.035-4.025-10-4.025Z"/>
    </Icon>
  );
});

IconMaterialMindfulnessW100Filled.displayName = 'AmauiIconMaterialMindfulnessW100Filled';

export default IconMaterialMindfulnessW100Filled;
