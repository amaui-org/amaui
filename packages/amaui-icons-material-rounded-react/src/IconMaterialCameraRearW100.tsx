import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraRearW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRearW100'

      short_name='CameraRear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 9.95q.6 0 1.025-.425.425-.425.425-1.025 0-.6-.425-1.025Q12.6 7.05 12 7.05q-.6 0-1.025.425-.425.425-.425 1.025 0 .6.425 1.025.425.425 1.025.425Zm-5.35 9.4q-.15 0-.25-.1T6.3 19q0-.15.1-.25t.25-.1h5.1l-1.5-1.5q-.1-.1-.113-.237-.012-.138.113-.263t.25-.125q.125 0 .25.125l1.825 1.825q.225.225.225.525 0 .3-.225.525L10.75 21.35q-.1.1-.238.112-.137.013-.262-.112t-.125-.25q0-.125.125-.25l1.5-1.5ZM6.3 4.8q0-.65.425-1.075Q7.15 3.3 7.8 3.3h8.4q.65 0 1.075.425.425.425.425 1.075V17H17V4.8q0-.35-.225-.575Q16.55 4 16.2 4H7.8q-.35 0-.575.225Q7 4.45 7 4.8V17h-.7Zm8.05 14.55q-.15 0-.25-.1T14 19q0-.15.1-.25t.25-.1h3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM12.525 4H7h10Z"/>
    </Icon>
  );
});

IconMaterialCameraRearW100.displayName = 'AmauiIconMaterialCameraRearW100';

export default IconMaterialCameraRearW100;
