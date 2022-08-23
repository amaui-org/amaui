import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorHeartSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorHeartSharpFilled'
      short_name='MonitorHeart'

      {...props}
    >
      <path d="M2 20V13H7.375L9.1 16.45Q9.225 16.725 9.475 16.863Q9.725 17 10 17Q10.275 17 10.525 16.863Q10.775 16.725 10.9 16.45L14 10.25L15.1 12.45Q15.225 12.725 15.475 12.863Q15.725 13 16 13H22V20ZM10 13.75 8.9 11.55Q8.775 11.275 8.525 11.137Q8.275 11 8 11H2V4H22V11H16.625L14.9 7.55Q14.775 7.275 14.525 7.162Q14.275 7.05 14 7.05Q13.725 7.05 13.475 7.162Q13.225 7.275 13.1 7.55Z"/>
    </Icon>
  );
});

IconMaterialMonitorHeartSharpFilled.displayName = 'AmauiIconMaterialMonitorHeartSharpFilled';

export default IconMaterialMonitorHeartSharpFilled;
