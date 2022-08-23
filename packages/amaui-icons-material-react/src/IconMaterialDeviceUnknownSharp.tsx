import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDeviceUnknownSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceUnknownSharp'
      short_name='DeviceUnknown'

      {...props}
    >
      <path d="M12 17Q11.55 17 11.25 16.7Q10.95 16.4 10.95 15.95Q10.95 15.5 11.25 15.2Q11.55 14.9 12 14.9Q12.45 14.9 12.75 15.2Q13.05 15.5 13.05 15.95Q13.05 16.4 12.75 16.7Q12.45 17 12 17ZM11.25 13.8Q11.25 12.675 11.438 12.237Q11.625 11.8 12.5 11.05Q12.85 10.7 13.1 10.362Q13.35 10.025 13.35 9.6Q13.35 9.15 13.013 8.8Q12.675 8.45 12 8.45Q11.325 8.45 10.975 8.837Q10.625 9.225 10.5 9.65L9.15 9.1Q9.45 8.225 10.175 7.612Q10.9 7 12 7Q13.175 7 14.013 7.637Q14.85 8.275 14.85 9.55Q14.85 10.15 14.55 10.675Q14.25 11.2 13.8 11.65Q13.05 12.4 12.9 12.7Q12.75 13 12.75 13.8ZM5 23V1H19V23ZM7 18H17V6H7ZM7 21H17V20H7ZM7 4H17V3H7ZM7 4V3V4ZM7 21V20V21Z"/>
    </Icon>
  );
});

IconMaterialDeviceUnknownSharp.displayName = 'AmauiIconMaterialDeviceUnknownSharp';

export default IconMaterialDeviceUnknownSharp;
