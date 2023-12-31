import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrandAwarenessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandAwarenessW100Filled'

      short_name='BrandAwareness'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M728-466h-92q-6 0-10-4t-4-10q0-6 4-10t10-4h92q6 0 10 4t4 10q0 6-4 10t-10 4ZM577-297q4-5 9.5-6t10.5 3l73 55q5 4 6 9.5t-3 10.5q-4 5-9.5 6t-10.5-3l-73-55q-5-4-6-9.5t3-10.5Zm89-422-73 55q-5 4-10.5 3t-9.5-6q-4-5-3-10.5t6-9.5l73-55q5-4 10.5-3t9.5 6q4 5 3 10.5t-6 9.5ZM308-412H208q-13 0-21.5-8.5T178-442v-76q0-13 8.5-21.5T208-548h100l100-100q7-7 16.5-3.5T434-638v316q0 10-9.5 13.5T408-312L308-412Z"/>
    </Icon>
  );
});

IconMaterialBrandAwarenessW100Filled.displayName = 'AmauiIconMaterialBrandAwarenessW100Filled';

export default IconMaterialBrandAwarenessW100Filled;
