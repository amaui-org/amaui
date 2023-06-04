import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNotificationAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAddW100Filled'

      short_name='NotificationAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 21.5q-.65 0-1.075-.425Q10.5 20.65 10.5 20h3q0 .65-.425 1.075-.425.425-1.075.425Zm7.65-9.15v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3Zm-15 6.3v-.7h2V10.3q0-1.875 1.25-3.413Q9.15 5.35 11.15 5V3.45h1.7V5q.625.125 1.15.338.525.212.925.487-.475.65-.7 1.525Q14 8.225 14 9q0 1.725.913 3.188.912 1.462 2.437 2.212v3.55h2v.7Z"/>
    </Icon>
  );
});

IconMaterialNotificationAddW100Filled.displayName = 'AmauiIconMaterialNotificationAddW100Filled';

export default IconMaterialNotificationAddW100Filled;
