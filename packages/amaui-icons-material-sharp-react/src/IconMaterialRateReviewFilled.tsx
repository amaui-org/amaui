import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRateReviewFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RateReviewFilled'

      short_name='RateReview'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.5 14H18v-2h-5.5ZM6 14h2.45l6.275-6.225-2.5-2.5L6 11.55Zm-4 8V2h20v16H6Z"/>
    </Icon>
  );
});

IconMaterialRateReviewFilled.displayName = 'AmauiIconMaterialRateReviewFilled';

export default IconMaterialRateReviewFilled;
