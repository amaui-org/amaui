import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRobotW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RobotW100Filled'

      short_name='Robot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 11.35q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q9.575 8.65 9 8.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm6 0q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q15.575 8.65 15 8.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388ZM8.35 19.7v-2.55q0-.35.225-.575.225-.225.575-.225h2.5v3.35Zm4 0v-3.35h2.5q.35 0 .575.225.225.225.225.575v2.55Zm-6.55 0q-.625 0-1.062-.438Q4.3 18.825 4.3 18.2V9q0-1.95 1.375-3.325Q7.05 4.3 9 4.3h6q1.95 0 3.325 1.375Q19.7 7.05 19.7 9v9.2q0 .625-.437 1.062-.438.438-1.063.438h-1.85v-2.55q0-.625-.437-1.063-.438-.437-1.063-.437h-5.7q-.625 0-1.062.437-.438.438-.438 1.063v2.55Z"/>
    </Icon>
  );
});

IconMaterialRobotW100Filled.displayName = 'AmauiIconMaterialRobotW100Filled';

export default IconMaterialRobotW100Filled;
