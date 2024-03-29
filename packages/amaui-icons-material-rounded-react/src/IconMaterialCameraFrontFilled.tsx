import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraFrontFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraFrontFilled'

      short_name='CameraFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.55 21.8q-.275.275-.687.275-.413 0-.713-.275-.275-.275-.275-.7 0-.425.275-.7l.4-.4H6q-.425 0-.713-.288Q5 19.425 5 19t.287-.712Q5.575 18 6 18h3.55l-.4-.4q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l2.1 2.1q.3.3.3.7 0 .4-.3.7ZM15 20q-.425 0-.712-.288Q14 19.425 14 19t.288-.712Q14.575 18 15 18h3q.425 0 .712.288.288.287.288.712t-.288.712Q18.425 20 18 20Zm-2.225-3-1.5-1.5q-.6-.6-1.437-.588-.838.013-1.413.613L7 17q-.825 0-1.412-.587Q5 15.825 5 15V4q0-.825.588-1.413Q6.175 2 7 2h10q.825 0 1.413.587Q19 3.175 19 4v11q0 .825-.587 1.413Q17.825 17 17 17ZM7 13.15q1.2-.575 2.463-.863Q10.725 12 12 12t2.538.287q1.262.288 2.462.863V4H7ZM12 11q-1.25 0-2.125-.875T9 8q0-1.25.875-2.125T12 5q1.25 0 2.125.875T15 8q0 1.25-.875 2.125T12 11Z"/>
    </Icon>
  );
});

IconMaterialCameraFrontFilled.displayName = 'AmauiIconMaterialCameraFrontFilled';

export default IconMaterialCameraFrontFilled;
