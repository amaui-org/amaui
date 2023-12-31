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
      <path d="M479.823-112Q455-112 437.5-129.625T420-172h120q0 25-17.677 42.5t-42.5 17.5ZM480-494ZM226-212q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h46v-328q0-77 49.5-135T446-774v-20q0-14.167 9.882-24.083 9.883-9.917 24-9.917Q494-828 504-818.083q10 9.916 10 24.083-8 11-15 22t-12 24h-7q-75 0-127.5 52.5T300-568v328h360v-239h14q7 0 14-1v240h46q5.95 0 9.975 4.035 4.025 4.035 4.025 10T743.975-216q-4.025 4-9.975 4H226Zm440.118-367Q627-579 599.5-606.382q-27.5-27.383-27.5-66.5Q572-712 599.382-739.5q27.383-27.5 66.5-27.5Q705-767 732.5-739.618q27.5 27.383 27.5 66.5Q760-634 732.618-606.5q-27.383 27.5-66.5 27.5Z"/>
    </Icon>
  );
});

IconMaterialNotificationsUnreadW100.displayName = 'AmauiIconMaterialNotificationsUnreadW100';

export default IconMaterialNotificationsUnreadW100;
