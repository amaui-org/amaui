import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchCameraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchCameraW100'

      short_name='SwitchCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.9 16.15.5-.5-2.25-2.25h7.7l-2.25 2.25.5.5 3.1-3.1-3.1-3.1-.5.5 2.25 2.25h-7.7l2.25-2.25-.5-.5-3.1 3.1ZM3.3 19.7V6.3h4.4l1.85-2h4.9l1.85 2h4.4v13.4ZM4 19h16V7H4Zm8-6Z"/>
    </Icon>
  );
});

IconMaterialSwitchCameraW100.displayName = 'AmauiIconMaterialSwitchCameraW100';

export default IconMaterialSwitchCameraW100;
