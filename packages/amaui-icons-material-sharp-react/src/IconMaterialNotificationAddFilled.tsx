import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAddFilled'

      short_name='NotificationAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-.825 0-1.412-.587Q10 20.825 10 20h4q0 .825-.587 1.413Q12.825 22 12 22Zm7-9v-3h-3V8h3V5h2v3h3v2h-3v3ZM4 19v-2h2v-7q0-2.125 1.275-3.713Q8.55 4.7 10.5 4.2V2h3v2.2q.475.1.913.287.437.188.787.438-.725.875-1.087 1.9Q13.75 7.85 13.75 9q0 2.125 1.162 3.738Q16.075 14.35 18 15.1V17h2v2Z"/>
    </Icon>
  );
});

IconMaterialNotificationAddFilled.displayName = 'AmauiIconMaterialNotificationAddFilled';

export default IconMaterialNotificationAddFilled;
