import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationMultipleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationMultipleW100'

      short_name='NotificationMultiple'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M118-166v-488h28v460h522v28H118Zm416-288L254-618v316h560v-316L534-454ZM226-274v-384l308-180 65 38-20 20-45-26-272 160 272 160 272-160-59-36 20-20 75 44v384H226Zm298-298-76-76 20-20 56 56 186-186 20 20-206 206Zm10 270h280-560 280Z"/>
    </Icon>
  );
});

IconMaterialNotificationMultipleW100.displayName = 'AmauiIconMaterialNotificationMultipleW100';

export default IconMaterialNotificationMultipleW100;
