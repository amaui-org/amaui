import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraOutdoor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraOutdoor'

      short_name='CameraOutdoor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 18q-.425 0-.712-.288Q12 17.425 12 17v-4q0-.425.288-.713Q12.575 12 13 12h4q.425 0 .712.287.288.288.288.713v1l1.275-.675q.25-.125.488.025.237.15.237.425v2.45q0 .275-.237.425-.238.15-.488.025L18 16v1q0 .425-.288.712Q17.425 18 17 18Zm-9 1v-9q0-.475.213-.9.212-.425.587-.7l6-4.5q.525-.4 1.2-.4.675 0 1.2.4l6 4.5q.375.275.588.7.212.425.212.9v1h-2v-1l-6-4.5L6 10v9h13q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 21 19 21H6q-.825 0-1.412-.587Q4 19.825 4 19Zm8-6.75Z"/>
    </Icon>
  );
});

IconMaterialCameraOutdoor.displayName = 'AmauiIconMaterialCameraOutdoor';

export default IconMaterialCameraOutdoor;
