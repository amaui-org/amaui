import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRateReviewRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RateReviewRoundedW100Filled'
      short_name='RateReview'

      {...props}
    >
      <path d="M11.55 13.35H17Q17.15 13.35 17.25 13.25Q17.35 13.15 17.35 13Q17.35 12.85 17.25 12.75Q17.15 12.65 17 12.65H12.25ZM7.55 13.35H7.9Q8.025 13.35 8.163 13.287Q8.3 13.225 8.425 13.125L13.8 7.8Q13.925 7.675 13.925 7.55Q13.925 7.425 13.8 7.3L13.2 6.7Q13.075 6.575 12.95 6.575Q12.825 6.575 12.7 6.7L7.375 12.075Q7.275 12.2 7.213 12.337Q7.15 12.475 7.15 12.6V12.95Q7.15 13.125 7.263 13.238Q7.375 13.35 7.55 13.35ZM3.3 17.7V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7H6.1L4.575 18.225Q4.225 18.575 3.763 18.387Q3.3 18.2 3.3 17.7Z"/>
    </Icon>
  );
});

IconMaterialRateReviewRoundedW100Filled.displayName = 'AmauiIconMaterialRateReviewRoundedW100Filled';

export default IconMaterialRateReviewRoundedW100Filled;
