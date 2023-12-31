import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationMultipleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationMultipleW100Filled'

      short_name='NotificationMultiple'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M118-166v-488h28v460h522v28H118Zm108-108v-384l308-180 65 38-20 20-45-26-272 160 272 160 272-160-59-36 20-20 75 44v384H226Zm298-298-76-76 20-20 56 56 186-186 20 20-206 206Z"/>
    </Icon>
  );
});

IconMaterialNotificationMultipleW100Filled.displayName = 'AmauiIconMaterialNotificationMultipleW100Filled';

export default IconMaterialNotificationMultipleW100Filled;
