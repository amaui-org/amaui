import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationMultiple = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationMultiple'

      short_name='NotificationMultiple'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120q-33 0-56.5-23.5T40-200v-480q0-17 11.5-28.5T80-720q17 0 28.5 11.5T120-680v480h560q17 0 28.5 11.5T720-160q0 17-11.5 28.5T680-120H120Zm420-346L280-618v258h560v-258L580-466q-9 5-20 5t-20-5ZM280-280q-33 0-56.5-23.5T200-360v-340q0-21 9.5-40t28.5-30l322-190 98 58-60 58-38-22-272 160 272 160 272-160-54-32 58-58 46 26q19 11 28.5 30t9.5 40v340q0 33-23.5 56.5T840-280H280Zm274-432 158-158q11-11 28-11t28 11q11 11 11 28t-11 28L582-628q-12 12-28 12t-28-12l-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l28 28Zm6 352h280-560 280Z"/>
    </Icon>
  );
});

IconMaterialNotificationMultiple.displayName = 'AmauiIconMaterialNotificationMultiple';

export default IconMaterialNotificationMultiple;
