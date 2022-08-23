import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReviewsSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReviewsSharpW100Filled'
      short_name='Reviews'

      {...props}
    >
      <path d="M12 13.4 13.05 11.05 15.4 10 13.05 8.95 12 6.6 10.95 8.95 8.6 10 10.95 11.05ZM3.3 19.5V3.3H20.7V16.7H6.1Z"/>
    </Icon>
  );
});

IconMaterialReviewsSharpW100Filled.displayName = 'AmauiIconMaterialReviewsSharpW100Filled';

export default IconMaterialReviewsSharpW100Filled;
