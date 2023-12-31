import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlannerReviewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlannerReviewFilled'

      short_name='PlannerReview'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 360-642l-88 402H80v-80h128l113-520h79l122 572 78-332h80l72 280h128v80H690l-48-188-82 348h-80Z"/>
    </Icon>
  );
});

IconMaterialPlannerReviewFilled.displayName = 'AmauiIconMaterialPlannerReviewFilled';

export default IconMaterialPlannerReviewFilled;
