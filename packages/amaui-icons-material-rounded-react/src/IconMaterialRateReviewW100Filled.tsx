import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRateReviewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RateReviewW100Filled'

      short_name='RateReview'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.55 13.35H17q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.75Zm-4 0h.35q.125 0 .263-.063.137-.062.262-.162L13.8 7.8q.125-.125.125-.25T13.8 7.3l-.6-.6q-.125-.125-.25-.125t-.25.125l-5.325 5.375q-.1.125-.162.262-.063.138-.063.263v.35q0 .175.113.288.112.112.287.112ZM3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1l-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7Z"/>
    </Icon>
  );
});

IconMaterialRateReviewW100Filled.displayName = 'AmauiIconMaterialRateReviewW100Filled';

export default IconMaterialRateReviewW100Filled;
