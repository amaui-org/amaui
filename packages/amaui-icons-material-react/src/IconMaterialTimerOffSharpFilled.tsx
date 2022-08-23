import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTimerOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimerOffSharpFilled'
      short_name='TimerOff'

      {...props}
    >
      <path d="M9 3V1H15V3ZM19.8 22.6 17.4 20.2Q16.2 21.075 14.812 21.538Q13.425 22 12 22Q10.15 22 8.512 21.288Q6.875 20.575 5.65 19.35Q4.425 18.125 3.712 16.488Q3 14.85 3 13Q3 11.5 3.463 10.113Q3.925 8.725 4.8 7.6L1.4 4.2L2.8 2.8L21.2 21.2ZM19.95 17.15 13 10.2V8H11V8.2L7.85 5.05Q8.8 4.55 9.85 4.275Q10.9 4 12 4Q13.5 4 14.938 4.5Q16.375 5 17.65 5.95L19.05 4.55L20.45 5.95L19.05 7.35Q20 8.625 20.5 10.062Q21 11.5 21 13Q21 14.05 20.738 15.087Q20.475 16.125 19.95 17.15Z"/>
    </Icon>
  );
});

IconMaterialTimerOffSharpFilled.displayName = 'AmauiIconMaterialTimerOffSharpFilled';

export default IconMaterialTimerOffSharpFilled;
