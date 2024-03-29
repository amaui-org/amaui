import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraRearFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRearFilled'

      short_name='CameraRear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.15 16.2q.275-.275.7-.275.425 0 .7.275l2.1 2.1q.3.3.3.7 0 .4-.3.7l-2.1 2.1q-.275.275-.687.275-.413 0-.713-.275-.275-.275-.275-.7 0-.425.275-.7l.4-.4H6q-.425 0-.713-.288Q5 19.425 5 19t.287-.712Q5.575 18 6 18h3.55l-.4-.4q-.275-.275-.275-.7 0-.425.275-.7ZM15 18h3q.425 0 .712.288.288.287.288.712t-.288.712Q18.425 20 18 20h-3q-.425 0-.712-.288Q14 19.425 14 19t.288-.712Q14.575 18 15 18ZM7 2h10q.825 0 1.413.587Q19 3.175 19 4v11q0 .825-.587 1.413Q17.825 17 17 17h-4.225l-1.5-1.5q-.575-.6-1.425-.588-.85.013-1.425.613L7 17q-.825 0-1.412-.587Q5 15.825 5 15V4q0-.825.588-1.413Q6.175 2 7 2Zm5 4q-.825 0-1.412.588Q10 7.175 10 8t.588 1.412Q11.175 10 12 10t1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6Z"/>
    </Icon>
  );
});

IconMaterialCameraRearFilled.displayName = 'AmauiIconMaterialCameraRearFilled';

export default IconMaterialCameraRearFilled;
