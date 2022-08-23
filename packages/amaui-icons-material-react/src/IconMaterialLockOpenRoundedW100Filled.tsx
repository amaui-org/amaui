import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLockOpenRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockOpenRoundedW100Filled'
      short_name='LockOpen'

      {...props}
    >
      <path d="M6.8 20.7Q6.15 20.7 5.725 20.275Q5.3 19.85 5.3 19.2V10.8Q5.3 10.15 5.725 9.725Q6.15 9.3 6.8 9.3H15V7.3Q15 6.05 14.125 5.175Q13.25 4.3 12 4.3Q10.85 4.3 10 5.062Q9.15 5.825 9.025 6.95Q9 7.1 8.9 7.2Q8.8 7.3 8.65 7.3Q8.5 7.3 8.4 7.188Q8.3 7.075 8.325 6.95Q8.45 5.525 9.5 4.562Q10.55 3.6 12 3.6Q13.55 3.6 14.625 4.675Q15.7 5.75 15.7 7.3V9.3H17.2Q17.85 9.3 18.275 9.725Q18.7 10.15 18.7 10.8V19.2Q18.7 19.85 18.275 20.275Q17.85 20.7 17.2 20.7ZM12 16.35Q12.575 16.35 12.963 15.963Q13.35 15.575 13.35 15Q13.35 14.425 12.963 14.037Q12.575 13.65 12 13.65Q11.425 13.65 11.038 14.037Q10.65 14.425 10.65 15Q10.65 15.575 11.038 15.963Q11.425 16.35 12 16.35Z"/>
    </Icon>
  );
});

IconMaterialLockOpenRoundedW100Filled.displayName = 'AmauiIconMaterialLockOpenRoundedW100Filled';

export default IconMaterialLockOpenRoundedW100Filled;
