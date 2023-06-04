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
      <path d="M11.55 13.35H17q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-4.75Zm-4 0h.35q.15 0 .275-.063.125-.062.25-.162L13.8 7.8q.125-.125.125-.25T13.8 7.3l-.6-.6q-.125-.125-.25-.125t-.25.125l-5.325 5.375q-.1.125-.162.25-.063.125-.063.275v.35q0 .175.113.288.112.112.287.112ZM3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1l-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7Zm.7.1L5.8 16h13.4q.35 0 .575-.225Q20 15.55 20 15.2V4.8q0-.35-.225-.575Q19.55 4 19.2 4H4.8q-.35 0-.575.225Q4 4.45 4 4.8Zm0-13V4v13.8Z"/>
    </Icon>
  );
});

IconMaterialRateReviewW100.displayName = 'AmauiIconMaterialRateReviewW100';

export default IconMaterialRateReviewW100;
