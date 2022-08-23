import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimerSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerSharpW100Filled'
      short_name='Timer'

      {...props}
    >
      <path d="M9.5 2.35V1.65H14.5V2.35ZM11.65 13.5H12.35V8.5H11.65ZM12 20.7Q10.4 20.7 9 20.1Q7.6 19.5 6.55 18.45Q5.5 17.4 4.9 16Q4.3 14.6 4.3 13Q4.3 11.4 4.9 10Q5.5 8.6 6.55 7.55Q7.6 6.5 9 5.9Q10.4 5.3 12 5.3Q13.425 5.3 14.763 5.825Q16.1 6.35 17.2 7.3L18.2 6.3L18.7 6.8L17.7 7.8Q18.65 8.9 19.175 10.237Q19.7 11.575 19.7 13Q19.7 14.6 19.1 16Q18.5 17.4 17.45 18.45Q16.4 19.5 15 20.1Q13.6 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialTimerSharpW100Filled.displayName = 'AmauiIconMaterialTimerSharpW100Filled';

export default IconMaterialTimerSharpW100Filled;
