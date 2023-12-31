import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrandAwarenessW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandAwarenessW100'

      short_name='BrandAwareness'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M728-466h-92q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h92q5.95 0 9.975 4.035 4.025 4.035 4.025 10T737.975-470q-4.025 4-9.975 4ZM577-297q4-5 9.5-6t10.5 3l73 55q5 4 6 9.5t-3 10.5q-4 5-9.5 6t-10.5-3l-73-55q-5-4-6-9.5t3-10.5Zm89-422-73 55q-5 4-10.5 3t-9.5-6q-4-5-3-10.5t6-9.5l73-55q5-4 10.5-3t9.5 6q4 5 3 10.5t-6 9.5ZM308-412H208q-12.75 0-21.375-8.625T178-442v-76q0-12.75 8.625-21.375T208-548h100l100-100q7-7 16.5-3.281T434-638v316q0 9.562-9.5 13.281Q415-305 408-312L308-412Zm98-194-86 86H206v80h114l86 86v-252ZM306-480Z"/>
    </Icon>
  );
});

IconMaterialBrandAwarenessW100.displayName = 'AmauiIconMaterialBrandAwarenessW100';

export default IconMaterialBrandAwarenessW100;
