import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCircleNotificationsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CircleNotificationsFilled'

      short_name='CircleNotifications'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.5q.625 0 1.062-.438.438-.437.438-1.062h-3q0 .625.438 1.062.437.438 1.062.438ZM7 16h10v-2h-1v-2.6q0-1.525-.787-2.788Q14.425 7.35 13 7V5.5h-2V7q-1.425.35-2.212 1.612Q8 9.875 8 11.4V14H7Zm5 6q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10.5Z"/>
    </Icon>
  );
});

IconMaterialCircleNotificationsFilled.displayName = 'AmauiIconMaterialCircleNotificationsFilled';

export default IconMaterialCircleNotificationsFilled;
