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
      <path d="M12 18.5q.625 0 1.062-.438.438-.437.438-1.062h-3q0 .625.438 1.062.437.438 1.062.438ZM8.025 16h8q.425 0 .7-.288Q17 15.425 17 15t-.288-.713Q16.425 14 16 14v-2.6q0-1.525-.787-2.788Q14.425 7.35 13 7v-.5q0-.425-.287-.713Q12.425 5.5 12 5.5t-.712.287Q11 6.075 11 6.5V7q-1.425.35-2.212 1.612Q8 9.875 8 11.4V14q-.425 0-.7.287-.275.288-.275.713t.287.712Q7.6 16 8.025 16ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10.5Z"/>
    </Icon>
  );
});

IconMaterialCircleNotificationsFilled.displayName = 'AmauiIconMaterialCircleNotificationsFilled';

export default IconMaterialCircleNotificationsFilled;
