import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRateReviewSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RateReviewSharp'
      short_name='RateReview'

      {...props}
    >
      <path d="M10.5 14H18V12H12.5ZM6 14H8.45L14.725 7.775L12.225 5.275L6 11.55ZM2 22V2H22V18H6ZM4 17.175 5.175 16H20V4H4ZM4 17.175V4V16Z"/>
    </Icon>
  );
});

export default IconMaterialRateReviewSharp;
