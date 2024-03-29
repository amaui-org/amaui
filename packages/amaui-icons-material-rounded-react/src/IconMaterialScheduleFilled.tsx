import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScheduleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleFilled'

      short_name='Schedule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.625 16.025q.275.275.675.275t.7-.3q.275-.275.275-.7 0-.425-.275-.7l-3-3V7.975q0-.425-.287-.7Q12.425 7 12 7t-.712.287Q11 7.575 11 8v3.975q0 .2.075.387.075.188.225.338ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialScheduleFilled.displayName = 'AmauiIconMaterialScheduleFilled';

export default IconMaterialScheduleFilled;
