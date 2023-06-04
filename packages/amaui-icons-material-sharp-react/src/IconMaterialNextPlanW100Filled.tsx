import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNextPlanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextPlanW100Filled'

      short_name='NextPlan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.7 13.35h.7q.225-1.475 1.425-2.487 1.2-1.013 2.825-1.013 1.05 0 2.313.725 1.262.725 2.087 2.075h-2.5v.7h3.7v-3.7h-.7v2.5q-.95-1.55-2.337-2.275-1.388-.725-2.563-.725-1.925 0-3.3 1.212-1.375 1.213-1.65 2.988ZM12 20.7q-1.8 0-3.387-.688-1.588-.687-2.763-1.862-1.175-1.175-1.863-2.763Q3.3 13.8 3.3 12t.687-3.388Q4.675 7.025 5.85 5.85t2.763-1.863Q10.2 3.3 12 3.3t3.388.687q1.587.688 2.762 1.863t1.863 2.762Q20.7 10.2 20.7 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialNextPlanW100Filled.displayName = 'AmauiIconMaterialNextPlanW100Filled';

export default IconMaterialNextPlanW100Filled;
