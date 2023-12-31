import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlannerReviewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlannerReviewW100'

      short_name='PlannerReview'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M503-106 359-770 251-266H106v-28h122l112-520h38l144 664 97-424h41l72 280h122v28H710l-70-274-99 434h-38Z"/>
    </Icon>
  );
});

IconMaterialPlannerReviewW100.displayName = 'AmauiIconMaterialPlannerReviewW100';

export default IconMaterialPlannerReviewW100;
