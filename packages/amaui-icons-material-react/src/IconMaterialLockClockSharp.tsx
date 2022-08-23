import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLockClockSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockClockSharp'
      short_name='LockClock'

      {...props}
    >
      <path d="M9 8H15V6Q15 4.75 14.125 3.875Q13.25 3 12 3Q10.75 3 9.875 3.875Q9 4.75 9 6ZM4 22V8H7V6Q7 3.925 8.463 2.462Q9.925 1 12 1Q14.075 1 15.538 2.462Q17 3.925 17 6V8H20V11.3Q19.55 11.15 19.062 11.075Q18.575 11 18 11V10H6V20H11.3Q11.5 20.6 11.7 21.038Q11.9 21.475 12.25 22ZM18 23Q15.925 23 14.463 21.538Q13 20.075 13 18Q13 15.925 14.463 14.462Q15.925 13 18 13Q20.075 13 21.538 14.462Q23 15.925 23 18Q23 20.075 21.538 21.538Q20.075 23 18 23ZM19.65 20.35 20.35 19.65 18.5 17.8V15H17.5V18.2ZM6 10Q6 10 6 11.475Q6 12.95 6 14.762Q6 16.575 6 18.175Q6 19.775 6 20V10Q6 10 6 10Q6 10 6 10Z"/>
    </Icon>
  );
});

IconMaterialLockClockSharp.displayName = 'AmauiIconMaterialLockClockSharp';

export default IconMaterialLockClockSharp;
