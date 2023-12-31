import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationsUnreadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsUnreadW100Filled'

      short_name='NotificationsUnread'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.823-112Q455-112 437.5-129.625T420-172h120q0 25-17.677 42.5t-42.5 17.5ZM212-212v-28h60v-328q0-77 49.5-135T446-774v-54h68v34q-20 26-31 57.194-11 31.194-11 63.806 0 79 55 135.5T660-479h14q7 0 14-1v240h60v28H212Zm454.118-367Q627-579 599.5-606.382q-27.5-27.383-27.5-66.5Q572-712 599.382-739.5q27.383-27.5 66.5-27.5Q705-767 732.5-739.618q27.5 27.383 27.5 66.5Q760-634 732.618-606.5q-27.383 27.5-66.5 27.5Z"/>
    </Icon>
  );
});

IconMaterialNotificationsUnreadW100Filled.displayName = 'AmauiIconMaterialNotificationsUnreadW100Filled';

export default IconMaterialNotificationsUnreadW100Filled;
