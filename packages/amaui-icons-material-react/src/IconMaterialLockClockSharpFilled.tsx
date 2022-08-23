import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLockClockSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockClockSharpFilled'
      short_name='LockClock'

      {...props}
    >
      <path d="M9 8H15V6Q15 4.75 14.125 3.875Q13.25 3 12 3Q10.75 3 9.875 3.875Q9 4.75 9 6ZM18 23Q15.925 23 14.463 21.538Q13 20.075 13 18Q13 15.925 14.463 14.462Q15.925 13 18 13Q20.075 13 21.538 14.462Q23 15.925 23 18Q23 20.075 21.538 21.538Q20.075 23 18 23ZM19.65 20.35 20.35 19.65 18.5 17.8V15H17.5V18.2ZM4 22V8H7V6Q7 3.925 8.463 2.462Q9.925 1 12 1Q14.075 1 15.538 2.462Q17 3.925 17 6V8H20V11.3Q19.5 11.125 19 11.062Q18.5 11 18 11Q15.075 11 13.038 13.037Q11 15.075 11 18Q11 19.075 11.338 20.087Q11.675 21.1 12.25 22Z"/>
    </Icon>
  );
});

IconMaterialLockClockSharpFilled.displayName = 'AmauiIconMaterialLockClockSharpFilled';

export default IconMaterialLockClockSharpFilled;
