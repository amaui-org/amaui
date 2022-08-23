import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLockOpenSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockOpenSharpW100'
      short_name='LockOpen'

      {...props}
    >
      <path d="M5.3 20.7V9.3H15V7.3Q15 6.05 14.125 5.175Q13.25 4.3 12 4.3Q10.75 4.3 9.875 5.175Q9 6.05 9 7.3H8.3Q8.3 5.75 9.375 4.675Q10.45 3.6 12 3.6Q13.55 3.6 14.625 4.675Q15.7 5.75 15.7 7.3V9.3H18.7V20.7ZM6 20H18V10H6ZM12 16.35Q12.575 16.35 12.963 15.963Q13.35 15.575 13.35 15Q13.35 14.425 12.963 14.037Q12.575 13.65 12 13.65Q11.425 13.65 11.038 14.037Q10.65 14.425 10.65 15Q10.65 15.575 11.038 15.963Q11.425 16.35 12 16.35ZM6 20V10V20Z"/>
    </Icon>
  );
});

IconMaterialLockOpenSharpW100.displayName = 'AmauiIconMaterialLockOpenSharpW100';

export default IconMaterialLockOpenSharpW100;
