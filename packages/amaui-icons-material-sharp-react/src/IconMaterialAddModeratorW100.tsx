import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddModeratorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddModeratorW100'

      short_name='AddModerator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.65q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.65q-.15-.05-.35-.088-.2-.037-.35-.087v-5L12 4.15 6 6.375V11.1q0 1.575.475 2.987.475 1.413 1.288 2.576.812 1.162 1.912 2 1.1.837 2.325 1.237l.075-.025q.075.15.175.3.1.15.225.3-.125.05-.237.087-.113.038-.238.088Zm5 .05q-1.55 0-2.625-1.075T13.3 17q0-1.55 1.075-2.625T17 13.3q1.55 0 2.625 1.075T20.7 17q0 1.55-1.075 2.625T17 20.7Zm-.35-.85h.7v-2.5h2.5v-.7h-2.5v-2.5h-.7v2.5h-2.5v.7h2.5ZM12 12.025Z"/>
    </Icon>
  );
});

IconMaterialAddModeratorW100.displayName = 'AmauiIconMaterialAddModeratorW100';

export default IconMaterialAddModeratorW100;
