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
      <path d="M11.625 12.575q.125.25.375.25t.375-.25l.675-1.525 1.525-.675q.25-.125.25-.375t-.25-.375L13.05 8.95l-.675-1.525q-.125-.25-.375-.25t-.375.25L10.95 8.95l-1.525.675q-.25.125-.25.375t.25.375l1.525.675ZM3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1l-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7Z"/>
    </Icon>
  );
});

IconMaterialReviewsW100Filled.displayName = 'AmauiIconMaterialReviewsW100Filled';

export default IconMaterialReviewsW100Filled;
