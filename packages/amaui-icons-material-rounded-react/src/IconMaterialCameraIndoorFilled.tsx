import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraIndoorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraIndoorFilled'

      short_name='CameraIndoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 17h4q.425 0 .713-.288Q14 16.425 14 16v-1l1.275.675q.25.125.487-.025.238-.15.238-.425v-2.45q0-.275-.238-.425-.237-.15-.487-.025L14 13v-1q0-.425-.287-.713Q13.425 11 13 11H9q-.425 0-.712.287Q8 11.575 8 12v4q0 .425.288.712Q8.575 17 9 17Zm-3 4q-.825 0-1.412-.587Q4 19.825 4 19v-9q0-.475.213-.9.212-.425.587-.7l6-4.5q.525-.4 1.2-.4.675 0 1.2.4l6 4.5q.375.275.588.7.212.425.212.9v9q0 .825-.587 1.413Q18.825 21 18 21Z"/>
    </Icon>
  );
});

IconMaterialCameraIndoorFilled.displayName = 'AmauiIconMaterialCameraIndoorFilled';

export default IconMaterialCameraIndoorFilled;
