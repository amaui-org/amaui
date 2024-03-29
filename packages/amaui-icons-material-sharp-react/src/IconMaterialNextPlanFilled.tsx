import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNextPlanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextPlanFilled'

      short_name='NextPlan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 14h2q0-1.475 1.075-2.488Q10.15 10.5 11.65 10.5q.9 0 1.675.412.775.413 1.275 1.088H13v2h5V9h-2v1.55q-.8-.95-1.912-1.5-1.113-.55-2.438-.55-2.375 0-4.012 1.6Q6 11.7 6 14Zm6 8q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNextPlanFilled.displayName = 'AmauiIconMaterialNextPlanFilled';

export default IconMaterialNextPlanFilled;
