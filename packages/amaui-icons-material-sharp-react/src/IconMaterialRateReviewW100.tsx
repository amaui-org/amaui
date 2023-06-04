import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRateReviewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RateReviewW100'

      short_name='RateReview'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.55 13.35h5.8v-.7h-5.1Zm-4.4 0H8.2l5.85-5.8-1.1-1.1-5.8 5.85ZM3.3 19.5V3.3h17.4v13.4H6.1Zm.7-1.7L5.8 16H20V4H4Zm0 0V4v12Z"/>
    </Icon>
  );
});

IconMaterialRateReviewW100.displayName = 'AmauiIconMaterialRateReviewW100';

export default IconMaterialRateReviewW100;
