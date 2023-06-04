import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialReviewsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReviewsW100'

      short_name='Reviews'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.625 12.575q.125.25.375.25t.375-.25l.675-1.525 1.525-.675q.25-.125.25-.375t-.25-.375L13.05 8.95l-.675-1.525q-.125-.25-.375-.25t-.375.25L10.95 8.95l-1.525.675q-.25.125-.25.375t.25.375l1.525.675ZM3.3 17.7V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1l-1.525 1.525q-.35.35-.812.162Q3.3 18.2 3.3 17.7Zm.7.1L5.8 16h13.4q.35 0 .575-.225Q20 15.55 20 15.2V4.8q0-.35-.225-.575Q19.55 4 19.2 4H4.8q-.35 0-.575.225Q4 4.45 4 4.8Zm0-13V4v13.8Z"/>
    </Icon>
  );
});

IconMaterialReviewsW100.displayName = 'AmauiIconMaterialReviewsW100';

export default IconMaterialReviewsW100;
