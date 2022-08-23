import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCircleNotificationsSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CircleNotificationsSharpFilled'
      short_name='CircleNotifications'

      {...props}
    >
      <path d="M12 18.5Q12.625 18.5 13.062 18.062Q13.5 17.625 13.5 17H10.5Q10.5 17.625 10.938 18.062Q11.375 18.5 12 18.5ZM7 16H17V14H16V11.4Q16 9.875 15.213 8.612Q14.425 7.35 13 7V5.5H11V7Q9.575 7.35 8.788 8.612Q8 9.875 8 11.4V14H7ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 11.5Z"/>
    </Icon>
  );
});

IconMaterialCircleNotificationsSharpFilled.displayName = 'AmauiIconMaterialCircleNotificationsSharpFilled';

export default IconMaterialCircleNotificationsSharpFilled;
