import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReviewsRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReviewsRoundedW100Filled'
      short_name='Reviews'

      {...props}
    >
      <path d="M11.625 12.575Q11.75 12.825 12 12.825Q12.25 12.825 12.375 12.575L13.05 11.05L14.575 10.375Q14.825 10.25 14.825 10Q14.825 9.75 14.575 9.625L13.05 8.95L12.375 7.425Q12.25 7.175 12 7.175Q11.75 7.175 11.625 7.425L10.95 8.95L9.425 9.625Q9.175 9.75 9.175 10Q9.175 10.25 9.425 10.375L10.95 11.05ZM3.3 17.7V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7H6.1L4.575 18.225Q4.225 18.575 3.763 18.387Q3.3 18.2 3.3 17.7Z"/>
    </Icon>
  );
});

IconMaterialReviewsRoundedW100Filled.displayName = 'AmauiIconMaterialReviewsRoundedW100Filled';

export default IconMaterialReviewsRoundedW100Filled;
