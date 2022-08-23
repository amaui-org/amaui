import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSnoozeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnoozeSharpFilled'
      short_name='Snooze'

      {...props}
    >
      <path d="M9.5 15.65H14.5V14.15H11.7L14.5 11V9.65H9.5V11.15H12.35L9.5 14.35ZM12 22Q10.125 22 8.488 21.288Q6.85 20.575 5.638 19.362Q4.425 18.15 3.712 16.512Q3 14.875 3 13Q3 11.125 3.712 9.487Q4.425 7.85 5.638 6.637Q6.85 5.425 8.488 4.713Q10.125 4 12 4Q13.875 4 15.513 4.713Q17.15 5.425 18.363 6.637Q19.575 7.85 20.288 9.487Q21 11.125 21 13Q21 14.875 20.288 16.512Q19.575 18.15 18.363 19.362Q17.15 20.575 15.513 21.288Q13.875 22 12 22ZM5.6 2.35 7 3.75 2.75 8 1.35 6.6ZM18.4 2.35 22.65 6.6 21.25 8 17 3.75Z"/>
    </Icon>
  );
});

IconMaterialSnoozeSharpFilled.displayName = 'AmauiIconMaterialSnoozeSharpFilled';

export default IconMaterialSnoozeSharpFilled;
