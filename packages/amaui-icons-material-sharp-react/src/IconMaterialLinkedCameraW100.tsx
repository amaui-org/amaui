import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLinkedCameraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkedCameraW100'

      short_name='LinkedCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.825 19.7V6.3h4.4l1.85-2h5.8V7H3.525v12h16V7.65h.7V19.7Zm17.65-13.05q0-1.925-1.337-3.263Q17.8 2.05 15.875 2.05v-.7q2.2 0 3.75 1.55 1.55 1.55 1.55 3.75Zm-2.65 0q0-.8-.575-1.375T15.875 4.7V4q1.125 0 1.888.762.762.763.762 1.888Zm-6.3 6.35Zm0 3.5q1.475 0 2.487-1.012 1.013-1.013 1.013-2.488t-1.013-2.488Q13 9.5 11.525 9.5t-2.487 1.012Q8.025 11.525 8.025 13t1.013 2.488Q10.05 16.5 11.525 16.5Z"/>
    </Icon>
  );
});

IconMaterialLinkedCameraW100.displayName = 'AmauiIconMaterialLinkedCameraW100';

export default IconMaterialLinkedCameraW100;
