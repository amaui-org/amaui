import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFinanceModeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FinanceModeW100Filled'

      short_name='FinanceMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-486v-168q0-12.75 8.625-21.375T386-684q7.65 0 12.825 5.175Q404-673.65 404-666v180q-10.046-11-24.023-11T356-486Zm166 98v-426q0-12.75 8.625-21.375T552-844q7.65 0 12.825 5.175Q570-833.65 570-826v390l-48 48Zm-334 70v-176q0-12.75 8.625-21.375T218-524q7.65 0 12.825 5.175Q236-513.65 236-506v140l-48 48Zm27.63 174q-9.63 0-13.13-8.5T206-168l154-154q8-8 19.895-9 11.896-1 21.105 7l121 104 284-284h-86q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h104q12.75 0 21.375 8.625T854-502v104q0 5.95-4.035 9.975-4.035 4.025-10 4.025T830-388.025q-4-4.025-4-9.975v-86L542-200q-8 8-19.895 9-11.896 1-21.105-7L380-302 226-148q-1.852 1.667-4.63 2.833-2.777 1.167-5.74 1.167Z"/>
    </Icon>
  );
});

IconMaterialFinanceModeW100Filled.displayName = 'AmauiIconMaterialFinanceModeW100Filled';

export default IconMaterialFinanceModeW100Filled;
