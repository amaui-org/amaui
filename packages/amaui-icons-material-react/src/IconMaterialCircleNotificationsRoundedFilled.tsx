import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCircleNotificationsRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CircleNotificationsRoundedFilled'
      short_name='CircleNotifications'

      {...props}
    >
      <path d="M12 18.5Q12.625 18.5 13.062 18.062Q13.5 17.625 13.5 17H10.5Q10.5 17.625 10.938 18.062Q11.375 18.5 12 18.5ZM8.025 16H16.025Q16.45 16 16.725 15.712Q17 15.425 17 15Q17 14.575 16.712 14.287Q16.425 14 16 14V11.4Q16 9.875 15.213 8.612Q14.425 7.35 13 7V6.5Q13 6.075 12.713 5.787Q12.425 5.5 12 5.5Q11.575 5.5 11.288 5.787Q11 6.075 11 6.5V7Q9.575 7.35 8.788 8.612Q8 9.875 8 11.4V14Q7.575 14 7.3 14.287Q7.025 14.575 7.025 15Q7.025 15.425 7.312 15.712Q7.6 16 8.025 16ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM12 11.5Z"/>
    </Icon>
  );
});

IconMaterialCircleNotificationsRoundedFilled.displayName = 'AmauiIconMaterialCircleNotificationsRoundedFilled';

export default IconMaterialCircleNotificationsRoundedFilled;
