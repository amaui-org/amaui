import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSchedule = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Schedule'

      short_name='Schedule'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14.625 16.025q.275.275.675.275t.7-.3q.275-.275.275-.7 0-.425-.275-.7l-3-3V7.975q0-.425-.287-.7Q12.425 7 12 7t-.712.287Q11 7.575 11 8v3.975q0 .2.075.387.075.188.225.338ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialSchedule.displayName = 'AmauiIconMaterialSchedule';

export default IconMaterialSchedule;
