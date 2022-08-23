import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlarmOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlarmOffSharpFilled'
      short_name='AlarmOff'

      {...props}
    >
      <path d="M19.95 17.25 7.85 5Q8.8 4.5 9.838 4.25Q10.875 4 12 4Q13.85 4 15.488 4.7Q17.125 5.4 18.35 6.637Q19.575 7.875 20.288 9.525Q21 11.175 21 13.1Q21 14.225 20.725 15.262Q20.45 16.3 19.95 17.25ZM21.25 8 17 3.75 18.4 2.35 22.65 6.6ZM20.5 23.4 17.35 20.25Q16.225 21.075 14.863 21.538Q13.5 22 12 22Q10.15 22 8.512 21.3Q6.875 20.6 5.65 19.4Q4.425 18.2 3.712 16.575Q3 14.95 3 13.1Q3 11.55 3.463 10.188Q3.925 8.825 4.8 7.7L3.95 6.85L2.75 8.05L1.35 6.65L2.55 5.45L0.7 3.6L2.1 2.2L21.9 22Z"/>
    </Icon>
  );
});

IconMaterialAlarmOffSharpFilled.displayName = 'AmauiIconMaterialAlarmOffSharpFilled';

export default IconMaterialAlarmOffSharpFilled;
