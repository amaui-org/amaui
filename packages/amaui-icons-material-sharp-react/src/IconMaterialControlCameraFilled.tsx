import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialControlCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControlCameraFilled'

      short_name='ControlCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q-1.25 0-2.125-.875T9 12q0-1.25.875-2.125T12 9q1.25 0 2.125.875T15 12q0 1.25-.875 2.125T12 15Zm0 7-4.25-4.25 1.4-1.4 2.85 2.8 2.85-2.8 1.4 1.4Zm-5.75-5.75L2 12l4.25-4.25 1.4 1.4L4.85 12l2.8 2.85Zm2.9-8.6-1.4-1.4L12 2l4.25 4.25-1.4 1.4L12 4.85Zm8.6 8.6-1.4-1.4 2.8-2.85-2.8-2.85 1.4-1.4L22 12Z"/>
    </Icon>
  );
});

IconMaterialControlCameraFilled.displayName = 'AmauiIconMaterialControlCameraFilled';

export default IconMaterialControlCameraFilled;
