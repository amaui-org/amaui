import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeviceUnknownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceUnknownFilled'

      short_name='DeviceUnknown'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17q-.45 0-.75-.3t-.3-.75q0-.45.3-.75t.75-.3q.45 0 .75.3t.3.75q0 .45-.3.75T12 17Zm-.75-3.2q0-1.125.188-1.563.187-.437 1.062-1.187.35-.35.6-.688.25-.337.25-.762 0-.45-.337-.8-.338-.35-1.013-.35-.675 0-1.025.387-.35.388-.475.813L9.15 9.1q.3-.875 1.025-1.488Q10.9 7 12 7q1.175 0 2.013.637.837.638.837 1.913 0 .6-.3 1.125t-.75.975q-.75.75-.9 1.05-.15.3-.15 1.1ZM5 23V1h14v22Zm2-5h10V6H7Z"/>
    </Icon>
  );
});

IconMaterialDeviceUnknownFilled.displayName = 'AmauiIconMaterialDeviceUnknownFilled';

export default IconMaterialDeviceUnknownFilled;
