import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiFind = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiFind'

      short_name='WifiFind'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21 0 8.975q2.325-2.325 5.388-3.65Q8.45 4 12 4q3.55 0 6.613 1.325Q21.675 6.65 24 8.975L22.6 10.4q-2.025-2.025-4.75-3.212Q15.125 6 12 6q-2.575 0-4.875.812-2.3.813-4.2 2.263l10.475 10.5Zm9.6-1-2.575-2.55q-.45.275-.95.413Q17.575 18 17 18q-1.7 0-2.85-1.15Q13 15.7 13 14q0-1.7 1.15-2.85Q15.3 10 17 10q1.7 0 2.85 1.15Q21 12.3 21 14q0 .575-.137 1.075-.138.5-.413.95L23 18.6ZM17 16q.85 0 1.425-.575Q19 14.85 19 14q0-.85-.575-1.425Q17.85 12 17 12q-.85 0-1.425.575Q15 13.15 15 14q0 .85.575 1.425Q16.15 16 17 16Zm-5 3.575Z"/>
    </Icon>
  );
});

IconMaterialWifiFind.displayName = 'AmauiIconMaterialWifiFind';

export default IconMaterialWifiFind;
