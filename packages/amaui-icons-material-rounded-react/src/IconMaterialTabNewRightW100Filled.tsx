import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabNewRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabNewRightW100Filled'

      short_name='TabNewRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M829 870H640q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h189l-79-81q-4-4-3.5-9.5t4.5-9.674q3.667-3.826 9.333-3.826 5.667 0 9.667 4l92 93q9 9 9 21t-9 21l-93 93q-4 4-9.5 3.5t-9.674-4.674Q746 965 746 960t4-9l79-81ZM466 590v146q0 5.95 4.035 9.975 4.035 4.025 10 4.025t9.965-4.025q4-4.025 4-9.975V590h146q5.95 0 9.975-4.035 4.025-4.035 4.025-10T649.975 566q-4.025-4-9.975-4H494V416q0-5.95-4.035-9.975-4.035-4.025-10-4.025T470 406.025q-4 4.025-4 9.975v146H320q-5.95 0-9.975 4.035-4.025 4.035-4.025 10t4.025 9.965q4.025 4 9.975 4h146ZM232 884q-26 0-43-17t-17-43V328q0-26 17-43t43-17h496q26 0 43 17t17 43v306q-6.568-1-13.654-1.5-7.087-.5-14.346-.5-93 0-158.5 65.333Q536 762.667 536 856q0 7.35.5 14.35T538 884H232Z"/>
    </Icon>
  );
});

IconMaterialTabNewRightW100Filled.displayName = 'AmauiIconMaterialTabNewRightW100Filled';

export default IconMaterialTabNewRightW100Filled;
