import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRateReviewSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RateReviewSharpW100'
      short_name='RateReview'

      {...props}
    >
      <path d="M11.55 13.35H17.35V12.65H12.25ZM7.15 13.35H8.2L14.05 7.55L12.95 6.45L7.15 12.3ZM3.3 19.5V3.3H20.7V16.7H6.1ZM4 17.8 5.8 16H20V4H4ZM4 17.8V4V16Z"/>
    </Icon>
  );
});

IconMaterialRateReviewSharpW100.displayName = 'AmauiIconMaterialRateReviewSharpW100';

export default IconMaterialRateReviewSharpW100;
