import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReviewsRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReviewsRounded'
      short_name='Reviews'

      {...props}
    >
      <path d="M11.55 13.975Q11.675 14.275 12 14.275Q12.325 14.275 12.45 13.975L13.55 11.55L15.975 10.45Q16.275 10.325 16.275 10Q16.275 9.675 15.975 9.55L13.55 8.45L12.45 6.025Q12.325 5.725 12 5.725Q11.675 5.725 11.55 6.025L10.45 8.45L8.025 9.55Q7.725 9.675 7.725 10Q7.725 10.325 8.025 10.45L10.45 11.55ZM2 19.575V4Q2 3.175 2.588 2.587Q3.175 2 4 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18H6L3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575ZM4 17.175 5.175 16H20Q20 16 20 16Q20 16 20 16V4Q20 4 20 4Q20 4 20 4H4Q4 4 4 4Q4 4 4 4ZM4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4V16Q4 16 4 16Q4 16 4 16V17.175Z"/>
    </Icon>
  );
});

IconMaterialReviewsRounded.displayName = 'AmauiIconMaterialReviewsRounded';

export default IconMaterialReviewsRounded;
