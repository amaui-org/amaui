import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNotificationImportantSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationImportantSharpFilled'
      short_name='NotificationImportant'

      {...props}
    >
      <path d="M11 13H13V8H11ZM12 16Q12.425 16 12.713 15.712Q13 15.425 13 15Q13 14.575 12.713 14.287Q12.425 14 12 14Q11.575 14 11.288 14.287Q11 14.575 11 15Q11 15.425 11.288 15.712Q11.575 16 12 16ZM4 19V17H6V10Q6 7.925 7.25 6.312Q8.5 4.7 10.5 4.2V2H13.5V4.2Q15.5 4.7 16.75 6.312Q18 7.925 18 10V17H20V19ZM12 22Q11.175 22 10.588 21.413Q10 20.825 10 20H14Q14 20.825 13.413 21.413Q12.825 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialNotificationImportantSharpFilled.displayName = 'AmauiIconMaterialNotificationImportantSharpFilled';

export default IconMaterialNotificationImportantSharpFilled;
