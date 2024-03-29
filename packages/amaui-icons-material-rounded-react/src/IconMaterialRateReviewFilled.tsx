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
      <path d="M10.5 14H17q.425 0 .712-.288Q18 13.425 18 13t-.288-.713Q17.425 12 17 12h-4.5Zm-4 0h1.55q.2 0 .375-.075t.325-.225l5.6-5.55q.15-.15.15-.375t-.15-.375L12.6 5.65q-.15-.15-.375-.15t-.375.15l-5.55 5.6q-.15.15-.225.325Q6 11.75 6 11.95v1.55q0 .2.15.35.15.15.35.15ZM2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575Z"/>
    </Icon>
  );
});

IconMaterialRateReviewFilled.displayName = 'AmauiIconMaterialRateReviewFilled';

export default IconMaterialRateReviewFilled;
