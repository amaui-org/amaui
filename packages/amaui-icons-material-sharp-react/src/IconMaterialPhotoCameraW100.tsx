import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoCameraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraW100'

      short_name='PhotoCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.5q1.475 0 2.488-1.012Q15.5 14.475 15.5 13t-1.012-2.488Q13.475 9.5 12 9.5t-2.488 1.012Q8.5 11.525 8.5 13t1.012 2.488Q10.525 16.5 12 16.5Zm-8.7 3.2V6.3h4.4l1.85-2h4.9l1.85 2h4.4v13.4ZM4 19h16V7H4Zm8-6Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraW100.displayName = 'AmauiIconMaterialPhotoCameraW100';

export default IconMaterialPhotoCameraW100;
