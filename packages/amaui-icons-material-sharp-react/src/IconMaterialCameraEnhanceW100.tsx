import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraEnhanceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraEnhanceW100'

      short_name='CameraEnhance'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16.8q1.575 0 2.688-1.112Q15.8 14.575 15.8 13q0-1.575-1.112-2.688Q13.575 9.2 12 9.2q-1.575 0-2.688 1.112Q8.2 11.425 8.2 13q0 1.575 1.112 2.688Q10.425 16.8 12 16.8Zm0-.9-.9-2-2-.9 2-.9.9-2 .9 2 2 .9-2 .9Zm-8.7 3.8V6.3h4.4l1.85-2h4.9l1.85 2h4.4v13.4ZM4 19h16V7H4Zm8-6Z"/>
    </Icon>
  );
});

IconMaterialCameraEnhanceW100.displayName = 'AmauiIconMaterialCameraEnhanceW100';

export default IconMaterialCameraEnhanceW100;
