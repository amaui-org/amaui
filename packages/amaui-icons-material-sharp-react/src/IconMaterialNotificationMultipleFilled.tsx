import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationMultipleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationMultipleFilled'

      short_name='NotificationMultiple'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-120v-600h80v520h600v80H40Zm160-160v-468l360-212 98 58-60 58-38-22-272 160 272 160 272-160-54-32 58-58 84 47v469H200Zm354-320L442-712l56-56 56 56 186-186 56 56-242 242Z"/>
    </Icon>
  );
});

IconMaterialNotificationMultipleFilled.displayName = 'AmauiIconMaterialNotificationMultipleFilled';

export default IconMaterialNotificationMultipleFilled;
