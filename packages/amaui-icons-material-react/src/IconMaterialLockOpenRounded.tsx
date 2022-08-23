import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLockOpenRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockOpenRounded'
      short_name='LockOpen'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V10Q4 9.175 4.588 8.587Q5.175 8 6 8H15V6Q15 4.75 14.125 3.875Q13.25 3 12 3Q10.975 3 10.188 3.612Q9.4 4.225 9.125 5.15Q9 5.525 8.738 5.762Q8.475 6 8.125 6Q7.625 6 7.325 5.662Q7.025 5.325 7.125 4.9Q7.5 3.225 8.85 2.112Q10.2 1 12 1Q14.075 1 15.538 2.462Q17 3.925 17 6V8H18Q18.825 8 19.413 8.587Q20 9.175 20 10V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM6 20H18Q18 20 18 20Q18 20 18 20V10Q18 10 18 10Q18 10 18 10H6Q6 10 6 10Q6 10 6 10V20Q6 20 6 20Q6 20 6 20ZM12 17Q12.825 17 13.413 16.413Q14 15.825 14 15Q14 14.175 13.413 13.587Q12.825 13 12 13Q11.175 13 10.588 13.587Q10 14.175 10 15Q10 15.825 10.588 16.413Q11.175 17 12 17ZM6 10Q6 10 6 10Q6 10 6 10V20Q6 20 6 20Q6 20 6 20Q6 20 6 20Q6 20 6 20V10Q6 10 6 10Q6 10 6 10Z"/>
    </Icon>
  );
});

IconMaterialLockOpenRounded.displayName = 'AmauiIconMaterialLockOpenRounded';

export default IconMaterialLockOpenRounded;
