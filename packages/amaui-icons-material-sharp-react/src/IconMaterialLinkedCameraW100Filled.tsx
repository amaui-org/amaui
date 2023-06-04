import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLinkedCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkedCameraW100Filled'

      short_name='LinkedCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.475 6.65q0-1.925-1.337-3.263Q17.8 2.05 15.875 2.05v-.7q2.2 0 3.75 1.55 1.55 1.55 1.55 3.75ZM2.825 19.7V6.3h4.4l1.85-2h5.8v1.4q.8 0 1.375.575t.575 1.375h3.4V19.7Zm15-13.05q0-.8-.575-1.375T15.875 4.7V4q1.125 0 1.888.762.762.763.762 1.888Zm-6.3 9.85q1.475 0 2.487-1.012 1.013-1.013 1.013-2.488t-1.013-2.488Q13 9.5 11.525 9.5t-2.487 1.012Q8.025 11.525 8.025 13t1.013 2.488Q10.05 16.5 11.525 16.5Z"/>
    </Icon>
  );
});

IconMaterialLinkedCameraW100Filled.displayName = 'AmauiIconMaterialLinkedCameraW100Filled';

export default IconMaterialLinkedCameraW100Filled;
