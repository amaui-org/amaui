import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorHeartRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorHeartRoundedFilled'
      short_name='MonitorHeart'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V13H7.375L9.1 16.45Q9.225 16.725 9.475 16.863Q9.725 17 10 17Q10.275 17 10.525 16.863Q10.775 16.725 10.9 16.45L14 10.25L15.1 12.45Q15.225 12.725 15.475 12.863Q15.725 13 16 13H22V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM10 13.75 8.9 11.55Q8.775 11.275 8.525 11.137Q8.275 11 8 11H2V6Q2 5.175 2.588 4.588Q3.175 4 4 4H20Q20.825 4 21.413 4.588Q22 5.175 22 6V11H16.625L14.9 7.55Q14.775 7.275 14.525 7.162Q14.275 7.05 14 7.05Q13.725 7.05 13.475 7.162Q13.225 7.275 13.1 7.55Z"/>
    </Icon>
  );
});

IconMaterialMonitorHeartRoundedFilled.displayName = 'AmauiIconMaterialMonitorHeartRoundedFilled';

export default IconMaterialMonitorHeartRoundedFilled;
