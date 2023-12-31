import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlannerReviewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlannerReviewW100Filled'

      short_name='PlannerReview'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m228-294 109-505q2-7 6.5-11t11.5-4h8q7 0 11.5 4t6.5 11l141 649 93-409q2-7 7.5-11t12.5-4h10q7 0 12 4t7 11l68 265h108q6 0 10 4t4 10q0 6-4 10t-10 4H733q-11 0-19-6.5T704-289l-64-251-96 420q-2 6-6.5 10t-11.5 4h-8q-7 0-11.5-4t-6.5-11L359-770 256-290q-2 11-10 17.5t-19 6.5H120q-6 0-10-4t-4-10q0-6 4-10t10-4h108Z"/>
    </Icon>
  );
});

IconMaterialPlannerReviewW100Filled.displayName = 'AmauiIconMaterialPlannerReviewW100Filled';

export default IconMaterialPlannerReviewW100Filled;
