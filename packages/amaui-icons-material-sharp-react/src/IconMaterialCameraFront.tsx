import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraFront = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraFront'

      short_name='CameraFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.85 22.5-1.4-1.4 1.1-1.1H5v-2h4.55l-1.1-1.1 1.4-1.4 3.5 3.5ZM5 17V2h14v15h-2v-2.05q-1-.725-2.262-1.087Q13.475 13.5 12 13.5t-2.738.363Q8 14.225 7 14.95v1.975L6.925 17Zm2-3.85q1.2-.575 2.463-.863Q10.725 12 12 12t2.538.287q1.262.288 2.462.863V4H7ZM14 20v-2h5v2Zm-2-9q-1.25 0-2.125-.875T9 8q0-1.25.875-2.125T12 5q1.25 0 2.125.875T15 8q0 1.25-.875 2.125T12 11Zm0-2q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm0 4.5ZM12 8Z"/>
    </Icon>
  );
});

IconMaterialCameraFront.displayName = 'AmauiIconMaterialCameraFront';

export default IconMaterialCameraFront;
