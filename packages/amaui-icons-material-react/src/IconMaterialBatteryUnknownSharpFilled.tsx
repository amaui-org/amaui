import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBatteryUnknownSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryUnknownSharpFilled'
      short_name='BatteryUnknown'

      {...props}
    >
      <path d="M7 22V4H10V2H14V4H17V22ZM12 18Q12.425 18 12.738 17.688Q13.05 17.375 13.05 16.95Q13.05 16.525 12.738 16.212Q12.425 15.9 12 15.9Q11.575 15.9 11.263 16.212Q10.95 16.525 10.95 16.95Q10.95 17.375 11.263 17.688Q11.575 18 12 18ZM11.25 14.8H12.75Q12.75 13.975 13.075 13.5Q13.4 13.025 13.8 12.637Q14.2 12.25 14.525 11.825Q14.85 11.4 14.85 10.7Q14.85 9.425 14.062 8.712Q13.275 8 12 8Q10.875 8 10.15 8.613Q9.425 9.225 9.15 10.1L10.5 10.65Q10.65 10.225 10.988 9.837Q11.325 9.45 12 9.45Q12.725 9.45 13.038 9.825Q13.35 10.2 13.35 10.65Q13.35 11.225 13.025 11.537Q12.7 11.85 12.3 12.212Q11.9 12.575 11.575 13.137Q11.25 13.7 11.25 14.8Z"/>
    </Icon>
  );
});

IconMaterialBatteryUnknownSharpFilled.displayName = 'AmauiIconMaterialBatteryUnknownSharpFilled';

export default IconMaterialBatteryUnknownSharpFilled;
