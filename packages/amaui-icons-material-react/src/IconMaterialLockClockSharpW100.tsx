import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLockClockSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockClockSharpW100'
      short_name='LockClock'

      {...props}
    >
      <path d="M9 9.3H15V7.3Q15 6.05 14.125 5.175Q13.25 4.3 12 4.3Q10.75 4.3 9.875 5.175Q9 6.05 9 7.3ZM5.3 20.7V9.3H8.3V7.3Q8.3 5.75 9.375 4.675Q10.45 3.6 12 3.6Q13.55 3.6 14.625 4.675Q15.7 5.75 15.7 7.3V9.3H18.7V11.95Q18.575 11.9 18.387 11.875Q18.2 11.85 18 11.85V10H6V20H12.4Q12.45 20.2 12.55 20.375Q12.65 20.55 12.8 20.7ZM17.5 21.2Q15.95 21.2 14.875 20.125Q13.8 19.05 13.8 17.5Q13.8 15.95 14.875 14.875Q15.95 13.8 17.5 13.8Q19.05 13.8 20.125 14.875Q21.2 15.95 21.2 17.5Q21.2 19.05 20.125 20.125Q19.05 21.2 17.5 21.2ZM19.15 19.65 19.65 19.15 17.85 17.35V14.65H17.15V17.65ZM6 17.5Q6 17.825 6 18.163Q6 18.5 6 18.812Q6 19.125 6 19.425Q6 19.725 6 20V10V11.85Q6 11.625 6 13.375Q6 15.125 6 17.5Z"/>
    </Icon>
  );
});

IconMaterialLockClockSharpW100.displayName = 'AmauiIconMaterialLockClockSharpW100';

export default IconMaterialLockClockSharpW100;
