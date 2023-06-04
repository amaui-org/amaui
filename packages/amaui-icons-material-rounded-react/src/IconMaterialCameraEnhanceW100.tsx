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
      <path d="M12 16.8q1.575 0 2.688-1.112Q15.8 14.575 15.8 13q0-1.575-1.112-2.688Q13.575 9.2 12 9.2q-1.575 0-2.688 1.112Q8.2 11.425 8.2 13q0 1.575 1.112 2.688Q10.425 16.8 12 16.8Zm-.9-4.7.525-1.2q.1-.25.375-.25t.375.25l.525 1.2 1.2.525q.25.1.25.375t-.25.375l-1.2.525-.525 1.2q-.1.25-.375.25t-.375-.25l-.525-1.2-1.2-.525q-.25-.1-.25-.375t.25-.375Zm-6.3 7.6q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h2.9l1.4-1.525q.225-.225.513-.35Q9.9 4.3 10.2 4.3h3.6q.3 0 .588.125.287.125.512.35L16.3 6.3h2.9q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm14.4-.7q.35 0 .575-.225Q20 18.55 20 18.2V7.8q0-.35-.225-.575Q19.55 7 19.2 7H4.8q-.35 0-.575.225Q4 7.45 4 7.8v10.4q0 .35.225.575Q4.45 19 4.8 19ZM12 13Z"/>
    </Icon>
  );
});

IconMaterialCameraEnhanceW100.displayName = 'AmauiIconMaterialCameraEnhanceW100';

export default IconMaterialCameraEnhanceW100;
