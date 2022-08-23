import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationsActiveRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsActiveRoundedFilled'
      short_name='NotificationsActive'

      {...props}
    >
      <path d="M3 10Q2.575 10 2.288 9.7Q2 9.4 2.05 9Q2.225 7.35 2.913 5.837Q3.6 4.325 4.725 3.125Q5 2.85 5.425 2.85Q5.85 2.85 6.15 3.15Q6.425 3.425 6.425 3.825Q6.425 4.225 6.15 4.55Q5.275 5.5 4.738 6.612Q4.2 7.725 4.05 9Q4 9.425 3.713 9.712Q3.425 10 3 10ZM21 10Q20.6 10 20.3 9.712Q20 9.425 19.95 9Q19.8 7.725 19.263 6.612Q18.725 5.5 17.85 4.55Q17.575 4.225 17.575 3.825Q17.575 3.425 17.875 3.15Q18.175 2.85 18.587 2.85Q19 2.85 19.275 3.125Q20.4 4.325 21.088 5.837Q21.775 7.35 21.95 9Q22 9.4 21.712 9.7Q21.425 10 21 10ZM5 19Q4.575 19 4.287 18.712Q4 18.425 4 18Q4 17.575 4.287 17.288Q4.575 17 5 17H6V10Q6 7.925 7.25 6.312Q8.5 4.7 10.5 4.2V3.5Q10.5 2.875 10.938 2.438Q11.375 2 12 2Q12.625 2 13.062 2.438Q13.5 2.875 13.5 3.5V4.2Q15.5 4.7 16.75 6.312Q18 7.925 18 10V17H19Q19.425 17 19.712 17.288Q20 17.575 20 18Q20 18.425 19.712 18.712Q19.425 19 19 19ZM12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNotificationsActiveRoundedFilled.displayName = 'AmauiIconMaterialNotificationsActiveRoundedFilled';

export default IconMaterialNotificationsActiveRoundedFilled;
