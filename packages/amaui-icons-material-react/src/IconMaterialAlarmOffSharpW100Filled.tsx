import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlarmOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOffSharpW100Filled'
      short_name='AlarmOff'

      {...props}
    >
      <path d="M18.675 16.15 8.5 5.975Q9.175 5.7 9.95 5.5Q10.725 5.3 11.675 5.3Q13.275 5.3 14.675 5.9Q16.075 6.5 17.125 7.55Q18.175 8.6 18.775 10Q19.375 11.4 19.375 13Q19.375 13.8 19.212 14.6Q19.05 15.4 18.675 16.15ZM20.425 7.5 17.175 4.25 17.675 3.75 20.925 7ZM20.325 21.65 17.125 18.45Q16.125 19.45 14.725 20.075Q13.325 20.7 11.675 20.7Q10.075 20.7 8.675 20.1Q7.275 19.5 6.225 18.45Q5.175 17.4 4.575 16Q3.975 14.6 3.975 13Q3.975 11.45 4.575 10.025Q5.175 8.6 6.225 7.55L4.55 5.875L2.925 7.5L2.425 7L4.05 5.375L2.425 3.75L2.925 3.25L20.825 21.15Z"/>
    </Icon>
  );
});

IconMaterialAlarmOffSharpW100Filled.displayName = 'AmauiIconMaterialAlarmOffSharpW100Filled';

export default IconMaterialAlarmOffSharpW100Filled;
