import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddModeratorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddModeratorW100Filled'

      short_name='AddModerator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 20.7q-1.55 0-2.625-1.075T13.3 17q0-1.55 1.075-2.625T17 13.3q1.55 0 2.625 1.075T20.7 17q0 1.55-1.075 2.625T17 20.7Zm-.35-.85h.7v-2.5h2.5v-.7h-2.5v-2.5h-.7v2.5h-2.5v.7h2.5Zm-4.65.8q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.65q-.35-.125-.812-.188-.463-.062-.888-.062-2.375 0-4.037 1.662Q11.3 14.625 11.3 17q0 .875.275 1.775.275.9.9 1.7-.125.05-.237.087-.113.038-.238.088Z"/>
    </Icon>
  );
});

IconMaterialAddModeratorW100Filled.displayName = 'AmauiIconMaterialAddModeratorW100Filled';

export default IconMaterialAddModeratorW100Filled;
