import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraW100Filled'

      short_name='PhotoCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.5q1.475 0 2.488-1.012Q15.5 14.475 15.5 13t-1.012-2.488Q13.475 9.5 12 9.5t-2.488 1.012Q8.5 11.525 8.5 13t1.012 2.488Q10.525 16.5 12 16.5Zm-7.2 3.2q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h2.9l1.4-1.525q.225-.225.513-.35Q9.9 4.3 10.2 4.3h3.6q.3 0 .588.125.287.125.512.35L16.3 6.3h2.9q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraW100Filled.displayName = 'AmauiIconMaterialPhotoCameraW100Filled';

export default IconMaterialPhotoCameraW100Filled;
