import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRateReviewRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RateReviewRounded'
      short_name='RateReview'

      {...props}
    >
      <path d="M10.5 14H17Q17.425 14 17.712 13.712Q18 13.425 18 13Q18 12.575 17.712 12.287Q17.425 12 17 12H12.5ZM6.5 14H8.05Q8.25 14 8.425 13.912Q8.6 13.825 8.75 13.7L14.35 8.15Q14.5 8 14.5 7.775Q14.5 7.55 14.35 7.4L12.6 5.65Q12.45 5.5 12.225 5.5Q12 5.5 11.85 5.65L6.3 11.25Q6.175 11.4 6.088 11.575Q6 11.75 6 11.95V13.5Q6 13.7 6.15 13.85Q6.3 14 6.5 14ZM2 19.575V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6L3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575ZM4 17.175 5.175 16H20Q20 16 20 16Q20 16 20 16V4Q20 4 20 4Q20 4 20 4H4Q4 4 4 4Q4 4 4 4ZM4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4V16Q4 16 4 16Q4 16 4 16V17.175Z"/>
    </Icon>
  );
});

IconMaterialRateReviewRounded.displayName = 'AmauiIconMaterialRateReviewRounded';

export default IconMaterialRateReviewRounded;
