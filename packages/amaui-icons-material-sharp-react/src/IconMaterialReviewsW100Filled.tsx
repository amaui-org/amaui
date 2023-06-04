import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReviewsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReviewsW100Filled'

      short_name='Reviews'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 13.4 1.05-2.35L15.4 10l-2.35-1.05L12 6.6l-1.05 2.35L8.6 10l2.35 1.05Zm-8.7 6.1V3.3h17.4v13.4H6.1Z"/>
    </Icon>
  );
});

IconMaterialReviewsW100Filled.displayName = 'AmauiIconMaterialReviewsW100Filled';

export default IconMaterialReviewsW100Filled;
