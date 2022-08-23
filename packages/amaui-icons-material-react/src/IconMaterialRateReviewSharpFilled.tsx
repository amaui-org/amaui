import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRateReviewSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RateReviewSharpFilled'
      short_name='RateReview'

      {...props}
    >
      <path d="M10.5 14H18V12H12.5ZM6 14H8.45L14.725 7.775L12.225 5.275L6 11.55ZM2 22V2H22V18H6Z"/>
    </Icon>
  );
});

IconMaterialRateReviewSharpFilled.displayName = 'AmauiIconMaterialRateReviewSharpFilled';

export default IconMaterialRateReviewSharpFilled;
