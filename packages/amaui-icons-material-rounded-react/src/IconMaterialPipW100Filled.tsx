import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PipW100Filled'

      short_name='Pip'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-540q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h147L66-794q-5-4-5-9.5t5-10.5q5-5 10-5t10 5l226 226v-146q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v164q0 12.75-8.625 21.375T310-540H146Zm46 328q-26 0-43-17t-17-43v-154q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v154q0 14 9 23t23 9h262q5.95 0 9.975 4.035 4.025 4.035 4.025 10T463.975-216q-4.025 4-9.975 4H192Zm621.965-240Q808-452 804-456.025T800-466v-222q0-14-9-23t-23-9H454q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h314q26 0 43 17t17 43v222q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM598-212q-12.75 0-21.375-8.625T568-242v-80q0-12.75 8.625-21.375T598-352h200q12.75 0 21.375 8.625T828-322v80q0 12.75-8.625 21.375T798-212H598Z"/>
    </Icon>
  );
});

IconMaterialPipW100Filled.displayName = 'AmauiIconMaterialPipW100Filled';

export default IconMaterialPipW100Filled;
