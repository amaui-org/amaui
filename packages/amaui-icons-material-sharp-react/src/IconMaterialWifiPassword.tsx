import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiPassword = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiPassword'

      short_name='WifiPassword'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 24v-5h1v-1q0-.825.587-1.413Q20.175 16 21 16q.825 0 1.413.587Q23 17.175 23 18v1h1v5Zm2-5h2v-1q0-.425-.288-.712Q21.425 17 21 17t-.712.288Q20 17.575 20 18ZM6.35 15.35l-2.1-2.15q1.475-1.475 3.463-2.337Q9.7 10 12 10t4.288.875q1.987.875 3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725Q13.65 13 12 13q-1.65 0-3.1.625-1.45.625-2.55 1.725ZM2.1 11.1 0 9q2.3-2.35 5.375-3.675Q8.45 4 12 4t6.625 1.325Q21.7 6.65 24 9l-2.1 2.1q-1.925-1.925-4.462-3.013Q14.9 7 12 7T6.562 8.087Q4.025 9.175 2.1 11.1ZM12 21l3.525-3.55q-.675-.675-1.575-1.063Q13.05 16 12 16q-1.05 0-1.95.387-.9.388-1.575 1.063Z"/>
    </Icon>
  );
});

IconMaterialWifiPassword.displayName = 'AmauiIconMaterialWifiPassword';

export default IconMaterialWifiPassword;
