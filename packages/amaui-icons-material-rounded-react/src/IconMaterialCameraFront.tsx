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
      <path d="M9.55 20H6q-.425 0-.713-.288Q5 19.425 5 19t.287-.712Q5.575 18 6 18h3.55l-.4-.4q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l2.1 2.1q.3.3.3.7 0 .4-.3.7l-2.1 2.1q-.275.275-.7.275-.425 0-.7-.275-.275-.275-.275-.7 0-.425.275-.7ZM5 4q0-.825.588-1.413Q6.175 2 7 2h10q.825 0 1.413.587Q19 3.175 19 4v13h-2v-2.05q-1-.725-2.262-1.087Q13.475 13.5 12 13.5t-2.738.363Q8 14.225 7 14.95v1.975L6.925 17H5Zm2 9.15q1.2-.575 2.463-.863Q10.725 12 12 12t2.538.287q1.262.288 2.462.863V4H7ZM18 20h-3q-.425 0-.712-.288Q14 19.425 14 19t.288-.712Q14.575 18 15 18h3q.425 0 .712.288.288.287.288.712t-.288.712Q18.425 20 18 20Zm-6-9q-1.25 0-2.125-.875T9 8q0-1.25.875-2.125T12 5q1.25 0 2.125.875T15 8q0 1.25-.875 2.125T12 11Zm0-2q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm0 4.5ZM12 8Z"/>
    </Icon>
  );
});

IconMaterialCameraFront.displayName = 'AmauiIconMaterialCameraFront';

export default IconMaterialCameraFront;
