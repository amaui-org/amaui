import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSwitchCameraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchCameraFilled'

      short_name='SwitchCamera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9 17 1.4-1.4-1.55-1.55h6.3L13.6 15.6 15 17l4-4-4-4-1.4 1.4 1.6 1.65H8.8l1.6-1.65L9 9l-4 4Zm-7 4V5h5.15L9 3h6l1.85 2H22v16Z"/>
    </Icon>
  );
});

IconMaterialSwitchCameraFilled.displayName = 'AmauiIconMaterialSwitchCameraFilled';

export default IconMaterialSwitchCameraFilled;
