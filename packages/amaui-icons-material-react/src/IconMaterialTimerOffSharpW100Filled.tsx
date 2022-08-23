import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimerOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerOffSharpW100Filled'
      short_name='TimerOff'

      {...props}
    >
      <path d="M9.5 2.35V1.65H14.5V2.35ZM20 21 17.45 18.45Q16.425 19.5 14.988 20.1Q13.55 20.7 12 20.7Q10.4 20.7 9 20.1Q7.6 19.5 6.55 18.45Q5.5 17.4 4.9 16Q4.3 14.6 4.3 13Q4.3 11.45 4.875 10.05Q5.45 8.65 6.55 7.55L3 4L3.5 3.5L20.5 20.5ZM19 16.175 12.35 9.525V8.5H11.65V8.825L8.825 6Q9.55 5.65 10.375 5.475Q11.2 5.3 12 5.3Q13.4 5.3 14.725 5.812Q16.05 6.325 17.175 7.3L18.175 6.3L18.675 6.8L17.675 7.8Q18.65 8.925 19.175 10.262Q19.7 11.6 19.7 13Q19.7 13.8 19.525 14.625Q19.35 15.45 19 16.175Z"/>
    </Icon>
  );
});

IconMaterialTimerOffSharpW100Filled.displayName = 'AmauiIconMaterialTimerOffSharpW100Filled';

export default IconMaterialTimerOffSharpW100Filled;
