import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryUnknownSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryUnknownSharpW100'
      short_name='BatteryUnknown'

      {...props}
    >
      <path d="M7.65 21.35V4.65H10.4V3.15H13.6V4.65H16.35V21.35ZM12 17.35Q12.225 17.35 12.388 17.188Q12.55 17.025 12.55 16.8Q12.55 16.575 12.388 16.413Q12.225 16.25 12 16.25Q11.775 16.25 11.613 16.413Q11.45 16.575 11.45 16.8Q11.45 17.025 11.613 17.188Q11.775 17.35 12 17.35ZM11.65 14.7H12.35Q12.35 14.05 12.675 13.612Q13 13.175 13.4 12.787Q13.8 12.4 14.125 11.987Q14.45 11.575 14.45 10.95Q14.45 9.85 13.775 9.225Q13.1 8.6 12 8.6Q11.1 8.6 10.525 9.05Q9.95 9.5 9.65 10.15L10.3 10.4Q10.5 9.95 10.913 9.625Q11.325 9.3 12 9.3Q12.95 9.3 13.35 9.8Q13.75 10.3 13.75 10.9Q13.75 11.45 13.425 11.812Q13.1 12.175 12.7 12.55Q12.3 12.925 11.975 13.412Q11.65 13.9 11.65 14.7Z"/>
    </Icon>
  );
});

IconMaterialBatteryUnknownSharpW100.displayName = 'AmauiIconMaterialBatteryUnknownSharpW100';

export default IconMaterialBatteryUnknownSharpW100;
