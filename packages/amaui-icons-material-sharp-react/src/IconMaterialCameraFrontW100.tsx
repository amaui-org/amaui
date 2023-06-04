import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraFrontW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraFrontW100'

      short_name='CameraFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.5 21.6-.5-.5 1.75-1.75H6.3v-.7h5.45L10 16.9l.5-.5 2.6 2.6ZM6.3 17V3.3h11.4V17H17v-2.35q-.925-.525-2.363-.888Q13.2 13.4 12 13.4t-2.637.362q-1.438.363-2.363.888V17Zm.7-3.15q1.1-.5 2.475-.825Q10.85 12.7 12 12.7t2.525.325q1.375.325 2.475.825V4H7Zm7 5.5v-.7h3.7v.7Zm-2-8.4q-.975 0-1.662-.688Q9.65 9.575 9.65 8.6q0-.975.688-1.662.687-.688 1.662-.688.975 0 1.663.688.687.687.687 1.662 0 .975-.687 1.662-.688.688-1.663.688Zm0-.7q.675 0 1.163-.488.487-.487.487-1.162 0-.675-.487-1.162Q12.675 6.95 12 6.95t-1.162.488q-.488.487-.488 1.162 0 .675.488 1.162.487.488 1.162.488Zm0 3.15Zm0-4.8Z"/>
    </Icon>
  );
});

IconMaterialCameraFrontW100.displayName = 'AmauiIconMaterialCameraFrontW100';

export default IconMaterialCameraFrontW100;
