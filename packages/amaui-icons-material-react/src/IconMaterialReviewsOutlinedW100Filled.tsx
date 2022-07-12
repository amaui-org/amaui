import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReviewsOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReviewsOutlinedW100Filled'
      short_name='Reviews'

      {...props}
    >
      <path d="M12 13.4 13.05 11.05 15.4 10 13.05 8.95 12 6.6 10.95 8.95 8.6 10 10.95 11.05ZM3.3 19.5V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7H6.1Z"/>
    </Icon>
  )
});

export default IconMaterialReviewsOutlinedW100Filled;
