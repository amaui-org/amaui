import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraRollFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRollFilled'

      short_name='CameraRoll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 20h-6q0 .825-.587 1.413Q12.825 22 12 22H4q-.825 0-1.412-.587Q2 20.825 2 20V5q0-.825.588-1.413Q3.175 3 4 3h1V2q0-.425.287-.713Q5.575 1 6 1h4q.425 0 .713.287Q11 1.575 11 2v1h1q.825 0 1.413.587Q14 4.175 14 5h6q.825 0 1.413.588Q22 6.175 22 7v11q0 .825-.587 1.413Q20.825 20 20 20ZM9 17h2v-2H9Zm0-7h2V8H9Zm4 7h2v-2h-2Zm0-7h2V8h-2Zm4 7h2v-2h-2Zm0-7h2V8h-2Z"/>
    </Icon>
  );
});

IconMaterialCameraRollFilled.displayName = 'AmauiIconMaterialCameraRollFilled';

export default IconMaterialCameraRollFilled;
