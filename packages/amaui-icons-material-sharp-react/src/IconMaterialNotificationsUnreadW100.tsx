import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationsUnreadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsUnreadW100'

      short_name='NotificationsUnread'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.823-112Q455-112 437.5-129.625T420-172h120q0 25-17.677 42.5t-42.5 17.5ZM480-494ZM212-212v-28h60v-328q0-77 49.5-135T446-774v-54h68v34q-8 11-15 22t-12 24h-7q-75 0-127.5 52.5T300-568v328h360v-239h14q7 0 14-1v240h60v28H212Zm454.118-367Q627-579 599.5-606.382q-27.5-27.383-27.5-66.5Q572-712 599.382-739.5q27.383-27.5 66.5-27.5Q705-767 732.5-739.618q27.5 27.383 27.5 66.5Q760-634 732.618-606.5q-27.383 27.5-66.5 27.5Z"/>
    </Icon>
  );
});

IconMaterialNotificationsUnreadW100.displayName = 'AmauiIconMaterialNotificationsUnreadW100';

export default IconMaterialNotificationsUnreadW100;
