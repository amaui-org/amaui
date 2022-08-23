import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPaddingRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PaddingRoundedW100Filled'
      short_name='Padding'

      {...props}
    >
      <path d="M8.15 8.85Q8.425 8.85 8.637 8.637Q8.85 8.425 8.85 8.15Q8.85 7.875 8.637 7.662Q8.425 7.45 8.15 7.45Q7.875 7.45 7.662 7.662Q7.45 7.875 7.45 8.15Q7.45 8.425 7.662 8.637Q7.875 8.85 8.15 8.85ZM12 8.85Q12.275 8.85 12.488 8.637Q12.7 8.425 12.7 8.15Q12.7 7.875 12.488 7.662Q12.275 7.45 12 7.45Q11.725 7.45 11.513 7.662Q11.3 7.875 11.3 8.15Q11.3 8.425 11.513 8.637Q11.725 8.85 12 8.85ZM15.85 8.85Q16.125 8.85 16.337 8.637Q16.55 8.425 16.55 8.15Q16.55 7.875 16.337 7.662Q16.125 7.45 15.85 7.45Q15.575 7.45 15.363 7.662Q15.15 7.875 15.15 8.15Q15.15 8.425 15.363 8.637Q15.575 8.85 15.85 8.85ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialPaddingRoundedW100Filled.displayName = 'AmauiIconMaterialPaddingRoundedW100Filled';

export default IconMaterialPaddingRoundedW100Filled;
